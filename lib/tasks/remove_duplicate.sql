



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