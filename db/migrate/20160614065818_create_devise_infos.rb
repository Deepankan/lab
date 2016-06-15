class CreateDeviseInfos < ActiveRecord::Migration
  def change
    create_table :devise_infos do |t|
      t.string :devise_id, limit: 100
      t.string :gcm_key, limit: 500
      t.string :apn_key, limit: 500
      t.timestamps null: false
    end
  end
end
