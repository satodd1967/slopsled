class Customer < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_many :line_items, through: :orders
end
