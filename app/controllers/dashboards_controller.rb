class DashboardsController < ApplicationController
	
	def index
		
		
        @prod_adv = current_user.get_count(@role)
		
	end
end