class Pokemon < ApplicationRecord
    belongs_to :user
    has_many :moves
end
