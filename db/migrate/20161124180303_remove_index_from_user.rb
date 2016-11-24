class RemoveIndexFromUser < ActiveRecord::Migration
  def change
  	remove_index :users, :user_name if index_exists?(:users, :user_name)
  end
end
