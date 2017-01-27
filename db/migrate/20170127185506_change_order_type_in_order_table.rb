class ChangeOrderTypeInOrderTable < ActiveRecord::Migration
  def up
    change_column :orders, :order_no, :string
  end

  def down
    change_column :orders, :order_no, :integer
  end
end
