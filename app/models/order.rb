class Order < ActiveRecord::Base
	belongs_to :user
    has_many :order_product_details 
    accepts_nested_attributes_for :order_product_details, allow_destroy: true
    
     def dealer
      User.find_by_id(self.dealer_id)
    end

    def self.change_status(params, user)
    	order = Order.find_by_id(params[:order_id])
    	order.update(status:  params[:status])
    	notification = user.send_notification(order)
    end
end
