class CustomerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :email, :orders, :line_items
end
