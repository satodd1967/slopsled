class DishSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :price, :image, :restaurant_id
end
