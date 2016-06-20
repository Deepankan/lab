class Advertisement < ActiveRecord::Base
	belongs_to :user
	mount_uploaders :images, ImagesUploader

	def self.get_details(user, role, offset, search)
		offset  ||= 0
		all_advertisements = []
		case role
			when ADMIN
				 all_advertisements = search.present? ?  Advertisement.where("title like ? ", "%#{search}%") : Advertisement.all
 			when COMPANY
 				all_advertisements = search.present? ?  user.advertisements.where("title like ? ", "%#{search}%") : user.advertisements.all
			when DEALER
			when CUSTOMER
		end

		advertisement = all_advertisements.offset(offset).limit(LIMIT).map{|h| 
	       tmp_hash = {}.tap do |my_hash| 
	         my_hash[:id] = h.id
	         my_hash[:user_name] = h.user.user_profile.name if (role == ADMIN and user.user_profile)
	         my_hash[:title] = h.title
	         my_hash[:description] = h.description
	         my_hash[:web_url] = h.web_url
	         my_hash[:image] =  h.images.map{|h| h.thumb.url}  if h.images
	       end
	       
	     tmp_hash 

	    }	
	     	advertisement
	end
end
