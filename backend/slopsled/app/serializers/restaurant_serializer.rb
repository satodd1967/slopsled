class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :image, :category_id, :dishes, :category
end
