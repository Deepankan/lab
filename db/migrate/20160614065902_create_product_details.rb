class CreateProductDetails < ActiveRecord::Migration
  def change
    create_table :product_details do |t|
      t.integer :user_id
      t.string :product_name, limit: 500
      t.string :product_code, limit: 500
      t.string :grade, limit: 200
      t.string :formula, limit: 200
      t.string :molar_mass
      t.string :image_url
      t.json :product_images
      t.boolean :status, null: false, default: true
      t.datetime :deleted_at 
      t.timestamps null: false
    end
    add_index :product_details, :user_id 
    add_index :product_details, :deleted_at 
  end
end
