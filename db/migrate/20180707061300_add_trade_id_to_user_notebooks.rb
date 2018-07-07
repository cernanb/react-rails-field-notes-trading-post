class AddTradeIdToUserNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :user_notebooks, :trade_id, :integer
  end
end
