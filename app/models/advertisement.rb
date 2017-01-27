class Advertisement < ActiveRecord::Base
	belongs_to :user
	mount_uploaders :images, ImagesUploader

	def self.get_details(user,count= 50, offset, search)
		offset  ||= 0
		all_advertisements = []
		# case role
		# 	when ADMIN
		# 		 all_advertisements = search.present? ?  Advertisement.where("title like ? ", "%#{search}%") : Advertisement.all
 	# 		when COMPANY
 	# 			all_advertisements = search.present? ?  user.advertisements.where("title like ? ", "%#{search}%") : user.advertisements.all
		# 	when DEALER
		# 	when CUSTOMER
		# end
                                                
		all_advertisements = search.present? ?  Advertisement.where("lower(title) like ?","%#{search.downcase}%").offset(offset).limit(count) : Advertisement.offset(offset).limit(count)
		advertisement = all_advertisements.map{|h| 
	       tmp_hash = {}.tap do |my_hash| 
	         my_hash[:advertisement_id] = h.id
	         my_hash[:company_name] = h.user.user_name  
	         my_hash[:company_logo] = h.user.try(:user_profile).try(:avatar).try(:url)
	         my_hash[:title] = h.title
	         my_hash[:description] = h.description
	         my_hash[:web_url] = h.web_url
	         my_hash[:image] =  h.images.first.url  if h.images.present?
	       end
	       
	     tmp_hash 

	    }	
	     	advertisement
	end
end
