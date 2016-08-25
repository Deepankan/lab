class ChangeColumnPrice < ActiveRecord::Migration
  def change
  	change_column :order_product_details, :price, :decimal
  	change_column :orders, :total_amount, :decimal
  end
end
