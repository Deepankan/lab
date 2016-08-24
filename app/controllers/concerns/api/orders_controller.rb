class Api::OrdersController < Api::ApiController
 

 def create_order
 	begin
 		order = current_user.create_user_order(params)
 		msg = {status: STATUS_SUCCESS, message: SUCCESS_MESSAGE}
 	rescue Exception => e
 		msg = {status: STATUS_ERROR, message: "Something went wrong"}
 	end

 	render json: msg
 end


 def get_order
 	begin
 		order = current_user.get_list_order
 		msg = {status: STATUS_SUCCESS, order: order, message: SUCCESS_MESSAGE}
 	rescue Exception => e
 		msg = {status: STATUS_ERROR, message: "Something went wrong"}
 	end
 	render json: msg
 end

end