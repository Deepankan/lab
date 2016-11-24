class Api::OrdersController < Api::ApiController
 

 def place_order
 	begin
 		order = current_user.create_user_order(params)
 		notification = current_user.send_notification(order)
 		msg = {status: STATUS_SUCCESS, message: SUCCESS_MESSAGE}
 	rescue Exception => e
 		p "------------------------Error------------------------------------------"

         p "------------------------------__#{e}------------------------------------"

         p "---------------------------End-------------------"
 		msg = {status: STATUS_ERROR, message: "Something went wrong"}
 	end

 	render json: msg
 end


 def get_order
 	begin
 		
 		order = current_user.get_list_order
 		msg = {status: STATUS_SUCCESS, order: order, message: SUCCESS_MESSAGE}
 	rescue Exception => e
 		p "------------------------Error------------------------------------------"

         p "------------------------------__#{e}------------------------------------"

         p "---------------------------End-------------------"
 		msg = {status: STATUS_ERROR, message: "Something went wrong"}
 	end
 	render json: msg
 end

 def change_order_status
 	begin
 	  order = Order.change_status(params)	
 	  msg = {status: STATUS_SUCCESS, message: "Order placed successfully.."}	
 	rescue Exception => e
 	  p "------------------------Error------------------------------------------"

      p "------------------------------__#{e}------------------------------------"

      p "---------------------------End-------------------"
 	  msg = {status: STATUS_ERROR, message: "Something went wrong"}
 	end
 	render json: msg
 end

 # def user_order
 # 	begin
 	  	
 # 	  msg = {status: STATUS_SUCCESS,order: current_user.get_user_order, message: "Order placed successfully.."}	
 # 	rescue Exception => e
 # 	  p "------------------------Error------------------------------------------"

 #      p "------------------------------__#{e}------------------------------------"

 #      p "---------------------------End-------------------"
 # 	  msg = {status: STATUS_ERROR, message: "Something went wrong"}
 # 	end
 # 	render json: msg
 # end

end