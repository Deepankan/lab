class CreateOrderProductDetails < ActiveRecord::Migration
  def change
    create_table :order_product_details do |t|
      t.integer :order_id
      t.integer :product_id
      t.integer :quantity
      t.decimal :price, precision: 5, scale: 2
      t.decimal :sub_total 
      t.timestamps null: false
    end
  end
end
