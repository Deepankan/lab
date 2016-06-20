class Product < ActiveRecord::Base
	belongs_to :user
acts_as_paranoid
mount_uploaders :chemical_images, ChemicalImageUploader

def self.get_product_detail(user, role, offset, search)
	offset  ||= 0
	all_products = []
	case role
			when ADMIN
				  all_products = search.present? ?  Product.where("product_name like ? and status: true", "%#{search}%") : Product.where("status: true")
 			when COMPANY
 				 all_products = search.present? ?  user.products.where("product_name like ? ", "%#{search}%") : user.products.all      
			when DEALER
			when CUSTOMER

	end

	product_detail = all_products.offset(offset).limit(LIMIT).map{|h| 
                  
       tmp_hash = {}.tap do |my_hash| 
         my_hash[:id] = h.id
         my_hash[:user_name] = h.user.user_profile.name if (role == ADMIN and user.user_profile)
         my_hash[:product_code] = h.product_code
         my_hash[:grade] = h.grade
         my_hash[:formula] = h.formula
         my_hash[:molar_mass] = h.molar_mass
         my_hash[:image] = h.chemical_images.present? ? h.chemical_images.map{|h| h.thumb.url}  : h.image_url
         my_hash[:pakaging] = h.pakaging
         my_hash[:price] = h.price
       end
       
     tmp_hash 

    }	 	
end
end
