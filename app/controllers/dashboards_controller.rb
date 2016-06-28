class DashboardsController < ApplicationController
	
	def index
		if params[:comapny_id].present?
			  @prod_adv = User.get_count(params[:comapny_id])
		else
			  @prod_adv = current_user.get_count(@role)
		end
      
	end

	def list_company
		@list_company = User.get_company_name.includes(:products,:advertisements)
	end

	def change_status_company
		if @role == ADMIN
			user = User.find_by_id(params[:id])
			user.update(status: params[:status])
			return render partial: "change_status_company", :locals => {:user => user}
	   else
           flash[:error] = "You are not authorized to view this page"
           redirect_to :back
	    end
	end


end