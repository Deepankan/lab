class AddColumnToDeviseInfos < ActiveRecord::Migration
  def change
    add_column :devise_infos, :user_id, :integer
  end
end
