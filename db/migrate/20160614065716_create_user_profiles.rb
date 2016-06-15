class CreateUserProfiles < ActiveRecord::Migration
  def change
    create_table :user_profiles do |t|
      t.integer :user_id
      t.integer :city_id
      t.string :name, limit: 250
      t.string :address, limit: 500
      t.string :company_code, limit: 250
      t.string :fax, limit: 250
      t.string :avatar
      t.timestamps null: false
    end
    add_index :user_profiles, :user_id                
    add_index :user_profiles, :city_id                
  end
end
