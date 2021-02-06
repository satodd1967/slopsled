Rails.application.routes.draw do

  namespace :api do
    resources :line_items
    resources :orders
    resources :dishes
    resources :restaurants
    resources :categories
    resources :customers
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
