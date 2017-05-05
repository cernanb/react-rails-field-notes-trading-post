class RemoveUserIdFromNotebooks < ActiveRecord::Migration[5.0]
  def change
    remove_column :notebooks, :user_id
  end
end
