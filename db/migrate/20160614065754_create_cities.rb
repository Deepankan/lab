class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :city, null: false, limit: 200
      t.timestamps null: false
    end
  end
end
