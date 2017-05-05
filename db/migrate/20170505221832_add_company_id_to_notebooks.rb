class AddCompanyIdToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :notebooks, :company_id, :integer
  end
end
