class AddBrandIdToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :notebooks, :brand_id, :integer
  end
end
