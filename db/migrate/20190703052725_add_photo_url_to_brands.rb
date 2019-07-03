class AddPhotoUrlToBrands < ActiveRecord::Migration[5.0]
  def change
    add_column :brands, :photo_url, :string
  end
end
