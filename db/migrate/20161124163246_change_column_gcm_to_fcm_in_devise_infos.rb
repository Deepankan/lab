class ChangeColumnGcmToFcmInDeviseInfos < ActiveRecord::Migration
  def change
  	rename_column :devise_infos, :gcm_key, :fcm_key
  end
end
