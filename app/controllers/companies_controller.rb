class CompaniesController < ApplicationController
	
	def index
		case @role
		when ADMIN
		
		when CUSTOMER
		  @product = current_user.product_details
		end
	end
end
