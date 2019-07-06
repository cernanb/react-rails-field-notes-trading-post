class AddPhotoUrlToNotebooks < ActiveRecord::Migration[5.2]
  def change
    add_column :notebooks, :photo_url, :string
  end
end
