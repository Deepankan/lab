class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :user_id
      t.string :product_name, limit: 500
      t.string :product_code, limit: 500
      t.string :grade, limit: 200
      t.string :formula, limit: 200
      t.string :molar_mass
      t.string :image_url
      t.boolean :status, null: false, default: true
      t.string :pakaging, limit: 100
      t.float :price
      t.json :chemical_images
      t.datetime :deleted_at 
      t.timestamps null: false
    end
  end
   #add_index :products, :user_id 
   #add_index :products, :deleted_at 
end
