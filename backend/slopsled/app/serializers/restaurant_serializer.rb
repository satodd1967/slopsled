class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :category_id, :dishes
end
