class UserNotebook < ApplicationRecord
    belongs_to :user
    belongs_to :notebook
    belongs_to :trade
end
