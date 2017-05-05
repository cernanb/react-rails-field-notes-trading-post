class AddReleaseYearToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :notebooks, :release_year, :integer
  end
end
