class LineItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :order_id, :dish_id
end
