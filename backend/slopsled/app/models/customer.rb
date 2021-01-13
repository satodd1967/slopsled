class Customer < ApplicationRecord
    has_many :orders
    has_many :line_items, through: :orders
end
