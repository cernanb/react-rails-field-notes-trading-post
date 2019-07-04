class Brand < ApplicationRecord
    has_many :notebooks
    has_one_attached :image
end
