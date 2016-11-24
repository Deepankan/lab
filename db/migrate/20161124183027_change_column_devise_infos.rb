class ChangeColumnDeviseInfos < ActiveRecord::Migration
  def change
  	remove_column :devise_infos, :devise_id
    add_column :devise_infos, :devise_id, :text, :limit => 16777215
     
  end
end
