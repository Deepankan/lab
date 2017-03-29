class Api::VisitorsController < Api::ApiController
	before_action :restrict_access, except: [:product_detail, :city_list]
    before_action :get_role, except: [:product_detail, :city_list]
	

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
		product = Product.get_product_detail(current_user,params[:limit],params[:offset], params[:search], params[:company_id], params[:price_filter])
		@msg = {status: STATUS_SUCCESS, products: product, message: "Data Fetch Successfully"}
		rescue Exception => e
		@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
		render json: @msg
	end

	def get_dealer
		begin
		    dealer = User.get_dealer_info(current_user.user_profile.city_id, params)	
		    @msg = {status: STATUS_SUCCESS, dealers: dealer, message: "Data Fetch Successfully"}
		rescue Exception => e
			@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
		render json: @msg
		
	end

	def get_company
		begin
		@msg = {status: STATUS_SUCCESS, comapny_name: Role.find_by_role_type(COMPANY).get_company_name, message: "Data Fetch Successfully"}
		rescue Exception => e
		@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
		render json: @msg
	end

	def product_detail
		begin
		@msg = {status: STATUS_SUCCESS, product: Product.get_details(params), message: "Data Fetch Successfully"}
		rescue Exception => e
		@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
		render json: @msg
	end

	def city_list
		begin
		@msg = {status: STATUS_SUCCESS, city: City.get_auto_city_name(params), message: "Data Fetch Successfully"}
		rescue Exception => e
		@msg = {status: STATUS_ERROR, message: "Something went wrong Please try after sometime."}	
		end
		render json: @msg
	end
end