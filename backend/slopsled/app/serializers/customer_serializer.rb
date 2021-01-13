class CustomerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id :username, email
end
