class CreateProductPricings < ActiveRecord::Migration
  def change
    create_table :product_pricings do |t|
      t.integer :product_detail_id
      t.string :pakaging, limit: 100
      t.float :price
    end
    add_index :product_pricings, :product_detail_id 
  end
end
