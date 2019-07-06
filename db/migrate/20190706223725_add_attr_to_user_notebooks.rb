class AddAttrToUserNotebooks < ActiveRecord::Migration[5.2]
  def change
    add_column :user_notebooks, :quantity, :integer
    add_column :user_notebooks, :status, :integer, default: 0
  end
end
