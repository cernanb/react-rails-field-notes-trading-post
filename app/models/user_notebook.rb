class UserNotebook < ApplicationRecord
    belongs_to :user
    belongs_to :notebook

    enum status: [:sealed, :unsealed, :single]
end
