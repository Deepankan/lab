class Product < ActiveRecord::Base
	belongs_to :user
acts_as_paranoid
mount_uploaders :chemical_images, ChemicalImageUploader

def self.get_product_detail(user,count,  offset, search)
	offset  ||= 0
    count ||= 50
	all_products = []
	# case role
	# 		when ADMIN
	# 			  all_products = search.present? ?  Product.where("product_name like ? and status: true", "%#{search}%") : Product.where("status: true")
 # 			when COMPANY
 # 				 all_products = search.present? ?  user.products.where("product_name like ? ", "%#{search}%") : user.products.all      
	# 		when DEALER
	# 		when CUSTOMER

	# end
    #all_products = search.present? ?  Product.where("lower(product_name) like ? or lower(product_code) like ?", "%#{search.downcase}%","%#{search.downcase}%").limit(count).offset(offset)  : Product.limit(count).offset(offset)
  
    #all_products = search.present? ?  "select * from search_product(100,0,'acid')" : "select * from search_product(100,0,'acid')"
    
    if search.present?
     value = search
    else
     value = ''
    end
    sql = "select * from search_product(#{count},#{offset},'#{value}')"
    products = ActiveRecord::Base.connection.execute(sql)
    # product_detail = all_products.map{|h|            
    #    tmp_hash = {}.tap do |my_hash| 
    #      my_hash[:id] = h.id
    #      my_hash[:company_name] = h.user.try(:user_profile).name 
    #      my_hash[:product_name] = h.product_name
    #      my_hash[:product_code] = h.product_code
    #      my_hash[:grade] = h.grade
    #      my_hash[:formula] = h.formula
    #      my_hash[:molar_mass] = h.molar_mass
    #      my_hash[:image] = h.chemical_images.first.thumb.url if h.chemical_images.present?
    #      my_hash[:package] = h.pakaging
    #      my_hash[:price] = h.price
    #      my_hash[:count] = all_products.count
    #    end
       
    #  tmp_hash 

    # }	 	

    product = products.map{|h| h}
end
end
