class Product < ActiveRecord::Base
belongs_to :user
acts_as_paranoid
mount_uploaders :chemical_images, ChemicalImageUploader
has_many :order_product_details
def self.get_product_detail(user,count,  offset, search, company_id, price_filter)
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

    if price_filter.nil?
     price_filter = 0
    end
    if company_id.present?
      sql = "select * from search_product(#{count},#{offset},'#{value}', '#{company_id}', '#{price_filter}')"  
    else
      sql = "select * from search_product(#{count},#{offset},'#{value}', null, '#{price_filter}')"  
    end
    
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


def self.to_csv(options = {})
  CSV.generate(options) do |csv|
    csv << column_names
    all.each do |product|
      csv << product.attributes.values_at(*column_names)
    end
  end
end

 def to_param
    "#{id}-#{Product.find_by_id(id).product_code}"
  end

def self.get_details(params)
  product = Product.find(params[:product_id])
  return  {}.tap do |my_hash| 
         my_hash[:id] = product.id
         my_hash[:company_name] = product.user.user_name
         my_hash[:product_name] = product.product_name
         my_hash[:product_code] = product.product_code
         my_hash[:grade] = product.grade
         my_hash[:formula] = product.formula
         my_hash[:molar_mass] = product.molar_mass
         my_hash[:image] = product.chemical_images.first.thumb.url if product.chemical_images.present?
         my_hash[:package] = product.pakaging
         my_hash[:price] = product.price
  end       
end  

end
