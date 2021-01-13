class Category < ApplicationRecord
    has_many :restaurants
    has_many :dishes, through: :restaurants
end
