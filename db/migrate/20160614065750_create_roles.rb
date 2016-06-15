class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
      t.string :role_type, null: false, limit: 50
      t.timestamps null: false
    end
  end
end
