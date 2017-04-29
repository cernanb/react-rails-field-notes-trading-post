class CreateUserNotebooks < ActiveRecord::Migration[5.0]
  def change
    create_table :user_notebooks do |t|
      t.integer :user_id
      t.integer :notebook_id
      t.timestamps
    end
  end
end
