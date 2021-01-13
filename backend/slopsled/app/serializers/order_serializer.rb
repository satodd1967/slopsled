class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :subtotal, :tax, :total, :customer_id
end
