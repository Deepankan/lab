class Api::VisitorsController < Api::ApiController
	before_action :restrict_access
    before_action :get_role
	

	def advertisements
		begin
			
		advertisement = Advertisement.get_details(current_user,params[:limit] , params[:offset],params[:search])
		@msg = {status: STATUS_SUCCESS, advertisement: advertisement, message: "Data Fetch Successfully"}
		rescue Exception => e
		@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
      render json: @msg
	end


	def products
		begin
		product = Product.get_product_detail(current_user,params[:limit],params[:offset], params[:search])
		@msg = {status: STATUS_SUCCESS, products: product, message: "Data Fetch Successfully"}
		rescue Exception => e
		@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
		render json: @msg
	end

	def get_dealer
		begin
		    dealer = User.get_info()	
		    @msg = {status: STATUS_SUCCESS, dealers: dealer, message: "Data Fetch Successfully"}
		rescue Exception => e
			@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
		render json: @msg
		
	end
end