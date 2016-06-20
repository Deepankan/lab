class Role < ActiveRecord::Base
	has_many :users

	def self.get_list_role
		 role = []
		 Role.all.each{|h| if h.role_type != ADMIN
		    role << {id: h.id, name: h.role_type}
		   end
		  }
		  role
	end
end
