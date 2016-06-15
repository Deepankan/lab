class City < ActiveRecord::Base
	belongs_to :user_profile
	def self.get_city
        
		City.all.collect {|u| [u.city, u.id]}
	end
end
