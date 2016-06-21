class AddColumnToAdvertisements < ActiveRecord::Migration
  def change
    add_column :advertisements, :status, :string, :default => "inactive"
  end
end
