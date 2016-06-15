class CreateAdvertisements < ActiveRecord::Migration
  def change
    create_table :advertisements do |t|
      t.integer :user_id
      t.string :title, limit: 500
      t.string :description, limit: 500
      t.string :image_url, limit: 200
      t.string :web_url, limit: 200
      t.json :images
      t.datetime :start_date
      t.datetime :end_date
      t.boolean :status, null: false,  default: true
      t.datetime :deleted_at 
      t.timestamps null: false
    end
    add_index :advertisements, :user_id                
    add_index :advertisements, :deleted_at                
  end
end
