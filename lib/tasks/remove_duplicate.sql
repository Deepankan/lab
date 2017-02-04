

p ----------------------------- Remove Advertisement Duplicate -----------------------

   CREATE OR REPLACE FUNCTION remove_advertisement_duplicate() 
      RETURNS void AS $$
    BEGIN
      delete from advertisements where exists (select 1 from advertisements t2 where t2.user_id = advertisements.user_id and t2.title = advertisements.title and t2.ctid > advertisements.ctid);
    END;
    $$ LANGUAGE plpgsql;


p ----------------------------- Remove Product Duplicate -----------------------
       CREATE OR REPLACE FUNCTION remove_products_duplicate() 
	    RETURNS void AS $$
		    BEGIN
		      delete from products where exists 
		      	(select 1 from products t2 where 
		      		    t2.user_id = products.user_id 
		      		and t2.product_name = products.product_name 
		      		and t2.product_code = products.product_code 
		      		and t2.grade = products.grade 
		      		and t2.formula = products.formula 
		      		and t2.molar_mass = products.molar_mass 
		      		and t2.pakaging = products.pakaging
		      		and t2.price = products.price 
		      		and t2.ctid > products.ctid
		      	);
		    END;
	    $$ LANGUAGE plpgsql;
    





	p ------------------------------Search API for Product---------------------------------------------------
	    CREATE OR REPLACE FUNCTION  search_product( count integer,
	       start integer,
	       search  varchar
	       )
			     RETURNS  TABLE (id int, company_name varchar, product_name varchar ,product_code varchar,grade varchar,formula varchar,molar_mass varchar
                            ,image json,image_url varchar,pakaging varchar,price double precision)
			       AS $$
			 
				    BEGIN
				  

		                 RETURN QUERY  select p.id,up.name,p.product_name,p.product_code,p.grade,p.formula,p.molar_mass,p.chemical_images,p.image_url,p.pakaging,p.price from products as p inner join users as u on p.user_id = u.id inner join user_profiles as up on up.user_id = u.id

				      where ( lower(p.product_name) LIKE  '%'||$3||'%') 
		                 or (lower(p.product_code) LIKE  '%'||$3||'%') LIMIT $1 OFFSET $2;


				    END;
				     $$ LANGUAGE plpgsql;

    
p ------------------ Search Product with Exact search --------------------------------------


      CREATE OR REPLACE FUNCTION  search_product( count integer,
	       start integer,
	       search  varchar
	       )
			     RETURNS  TABLE (id int, company_name varchar, product_name varchar ,product_code varchar,grade varchar,formula varchar,molar_mass varchar
                            ,image json,image_url varchar,pakaging varchar,price double precision)
			       AS $$
			 
				    BEGIN
				  

		                 RETURN QUERY  select p.id,up.name,p.product_name,p.product_code,p.grade,p.formula,p.molar_mass,p.chemical_images,p.image_url,p.pakaging,p.price from products as p inner join users as u on p.user_id = u.id inner join user_profiles as up on up.user_id = u.id

				      where ( lower(p.product_name) LIKE  '%'||$3||'%') 
		                 or (lower(p.product_code) LIKE  '%'||$3||'%') 


		                 ORDER BY CASE WHEN lower(p.product_name) like $3||'%' THEN 1 ELSE 2 END LIMIT $1 OFFSET $2;


	 END;
				     $$ LANGUAGE plpgsql;


p -------------------Search Product with filters -----------------------------------------------------


CREATE OR REPLACE FUNCTION search_product (COUNT integer, START integer, SEARCH varchar, company_id varchar, price_filter int) RETURNS TABLE (id int, company_name varchar, product_name varchar , product_code varchar, grade varchar, formula varchar, molar_mass varchar , image json, image_url varchar, pakaging varchar, price double precision, company_email varchar) AS $$ 
BEGIN
   CASE
      $5 
      WHEN
         1 
      THEN
         RETURN QUERY 
         select
            p.id,
            up.name,
            p.product_name,
            p.product_code,
            p.grade,
            p.formula,
            p.molar_mass,
            p.chemical_images,
            p.image_url,
            p.pakaging,
            p.price,
            u.email 
         from
            products as p 
            inner join
               users as u 
               on ( (
               CASE
                  WHEN
                     $4 IS NULL 
                  THEN
                     p.user_id = u.id 
                  ELSE
					(p.user_id = u.id and p.user_id = any($4::int[])) 
               END
               ) ) 
            inner join
               user_profiles as up 
               on( (
               CASE
                  WHEN
                     $4 IS NULL 
                  THEN
					(up.user_id = u.id) 
                  ELSE
					(up.user_id = u.id and up.user_id = any($4::int[])) 
               END
               ) ) 
         where
            (
               lower(p.product_name) LIKE '%' || $3 || '%'
            )
            or 
            (
               lower(p.product_code) LIKE '%' || $3 || '%'
            )
         ORDER BY
            p.price ASC, 
            CASE
               WHEN
                  lower(p.product_name) like $3 || '%' 
               THEN
                  1 
               ELSE
                  2 
            END
            LIMIT $1 OFFSET $2;
	  WHEN
	     2 
	  THEN
		   RETURN QUERY 
		   select
		      p.id,
		      up.name,
		      p.product_name,
		      p.product_code,
		      p.grade,
		      p.formula,
		      p.molar_mass,
		      p.chemical_images,
		      p.image_url,
		      p.pakaging,
		      p.price,
		      u.email 
		   from
		      products as p 
		      inner join
		         users as u 
		         on ( (
		         CASE
		            WHEN
		               $4 IS NULL 
		            THEN
		               p.user_id = u.id 
		            ELSE
		               (p.user_id = u.id and p.user_id = any($4::int[])) 
		         END
		         ) ) 
		      inner join
		         user_profiles as up 
		         on( (
		         CASE
		            WHEN
		               $4 IS NULL 
		            THEN
					   (up.user_id = u.id) 
		            ELSE
		               (up.user_id = u.id 
		               and up.user_id = any($4::int[])) 
		         END
		          ) ) 
		   where
		      (
		         lower(p.product_name) LIKE '%' || $3 || '%'
		      )
		      or 
		      (
		         lower(p.product_code) LIKE '%' || $3 || '%'
		      )
		   ORDER BY
		      p.price DESC, 
		      CASE
		         WHEN
		            lower(p.product_name) like $3 || '%' 
		         THEN
		            1 
		         ELSE
		            2 
		      END
		      LIMIT $1 OFFSET $2;
		ELSE
		   RETURN QUERY 
		   select
		      p.id,
		      up.name,
		      p.product_name,
		      p.product_code,
		      p.grade,
		      p.formula,
		      p.molar_mass,
		      p.chemical_images,
		      p.image_url,
		      p.pakaging,
		      p.price,
		      u.email 
		   from
		      products as p 
		      inner join
		         users as u 
		         on ( (
		         CASE
		            WHEN
		               $4 IS NULL 
		            THEN
		               p.user_id = u.id 
		            ELSE
		(p.user_id = u.id 
		               and p.user_id = any($4::int[])) 
		         END
		) ) 
		      inner join
		         user_profiles as up 
		         on( (
		         CASE
		            WHEN
		               $4 IS NULL 
		            THEN
		(up.user_id = u.id) 
		            ELSE
		(up.user_id = u.id 
		               and up.user_id = any($4::int[])) 
		         END
		) ) 
		   where
		      (
		         lower(p.product_name) LIKE '%' || $3 || '%'
		      )
		      or 
		      (
		         lower(p.product_code) LIKE '%' || $3 || '%'
		      )
		   ORDER BY
		      CASE
		         WHEN
		            lower(p.product_name) like $3 || '%' 
		         THEN
		            1 
		         ELSE
		            2 
		      END
		      LIMIT $1 OFFSET $2;
		   END
		   CASE
		;
   END
;
$$ LANGUAGE plpgsql;
