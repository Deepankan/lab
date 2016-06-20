class CreateAdvertisements < ActiveRecord::Migration
  def change
    create_table :advertisements do |t|
      t.integer :user_id
      t.string :title
      t.text :description
      t.string :web_url
      t.datetime :start_date
      t.datetime :end_date
      t.json :images

      t.timestamps null: false
    end
  end
end
