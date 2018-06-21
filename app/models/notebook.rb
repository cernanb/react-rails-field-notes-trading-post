class Notebook < ApplicationRecord
  has_many :user_notebooks
  has_many :users, through: :user_notebooks
  belongs_to :company
end
