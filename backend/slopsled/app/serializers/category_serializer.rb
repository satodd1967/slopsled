class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :image, :restaurants, :dishes
end
