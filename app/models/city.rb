class City < ActiveRecord::Base
		has_many :user_profiles
	
	def self.get_city
        
		City.all.collect {|u| [u.city, u.id]}
	end

	def self.get_list_city
		City.all.map{|h| {id: h.id, name: h.city}}
	end

	def self.get_auto_city_name(params)
		city = City.where('city LIKE ? or city LIKE ?',"%#{params[:city]}%", "%#{params[:city].titleize}%" )
		city.map{|h| {id: h.id, name: h.city}}
	end
end
