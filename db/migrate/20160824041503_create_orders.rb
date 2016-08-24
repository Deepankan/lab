class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :dealer_id
      t.integer :order_no, unique: true
      t.decimal :total_amount, precision: 5, scale: 2
      t.datetime :date
      t.integer :status
      t.timestamps null: false
    end
  end
end
