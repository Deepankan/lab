class CreateAccessTokens < ActiveRecord::Migration
  def change
    create_table :access_tokens do |t|
      t.string :token
      t.integer :user_id 
      t.timestamps null: false
    end
    add_index :access_tokens, :user_id                
  end
end
