



   CREATE OR REPLACE FUNCTION remove_advertisement_duplicate() 
      RETURNS void AS $$
    BEGIN
      delete from advertisements where exists (select 1 from advertisements t2 where t2.user_id = advertisements.user_id and t2.title = advertisements.title and t2.ctid > advertisements.ctid);
    END;
    $$ LANGUAGE plpgsql;



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
    



	    CREATE OR REPLACE FUNCTION search_test41( count integer,
	       start integer,
	       search  varchar
	       )
			     RETURNS setof products
			       AS $$
			 
				    BEGIN
				  

		                RETURN QUERY select * from products  where ( lower(product_name) LIKE  '%'||$3||'%') 
		                 or (lower(product_code) LIKE  '%'||$3||'%') LIMIT $1 OFFSET $2;   


				    END;
				     $$ LANGUAGE plpgsql;


	    CREATE OR REPLACE FUNCTION search_test41( count integer,
	       start integer,
	       search  varchar
	       )
			     RETURNS setof products
			       AS $$
			 
				    BEGIN
				  

		                 RETURN QUERY  select p.id,up.name,p.product_name,p.product_code,p.grade,p.formula,p.molar_mass,p.chemical_images,p.image_url,p.pakaging,p.price from products as p inner join users as u on p.user_id = u.id inner join user_profiles as up on up.user_id = u.id

				      where ( lower(p.product_name) LIKE  '%'||$3||'%') 
		                 or (lower(p.product_code) LIKE  '%'||$3||'%') LIMIT $1 OFFSET $2;


				    END;
				     $$ LANGUAGE plpgsql;


select p.id,up.name,p.product_name,p.product_code,p.grade,p.formula,p.molar_mass,p.chemical_images,p.image_url,p.pakaging,p.price from products as p inner join users as u on p.user_id = u.id inner join user_profiles as up on up.user_id = u.id;







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