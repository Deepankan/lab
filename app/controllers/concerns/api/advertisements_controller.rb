class Api::AdvertisementsController < Api::ApiController
	before_action :restrict_access
    before_action :get_role, except: [:edit_advertisement, :update_advertisement]
    before_action :get_advertisement, only: [:edit_advertisement, :update_advertisement]
	def new_advertisement
        begin
            params['advertisement']['status'] = INACTIVE
        	if @role == COMPANY
	       current_user.advertisements.create(params['advertisement'].permit!)
		   @msg = {status: STATUS_SUCCESS, message: "Advertisement created successfully"}
		   else
		   	@msg = {status: STATUS_ERROR, message: "Sorry wrong request"}
		   end
	       
        rescue Exception => e
         		@msg = {status: STATUS_ERROR, message: "Something went wrong"}
        end 
		
		render json: @msg

	end

	def edit_advertisement
		begin
			
			advertisement = { id: @adv.id, tilte: @adv.title, description: @adv.description, web_url: @adv.web_url, start_date: @adv.start_date, end_date: @adv.end_date}
			@msg = {status: STATUS_SUCCESS,advertisement: advertisement, message: "Advertisement fetch successfully"}
		rescue Exception => e
			@msg = {status: STATUS_ERROR, message: "Something went wrong"}
		end
		render json: @msg
	end

	def update_advertisement
		params['advertisement']['status'] = INACTIVE
		begin
			@adv.update_attributes(params['advertisement'].permit!)
			@msg = {status: STATUS_ERROR, message: "Advertisement updated successfully"}
		rescue Exception => e
			@msg = {status: STATUS_ERROR, message: "Something went wrong"}
		end
		render json: @msg
	end

	def get_advertisement
		@adv = current_user.advertisements.find_by_id(params[:id])
	end
end