# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


jojo = Customer.create(username: "jojo", email: "jojo@gmail.com")
jimmy = Customer.create(username: "jimmy", email: "jimmy@gmail.com")
karen = Customer.create(username: "karen", email: "karen@gmail.com")

japanese = Category.create(name: "Japanese", description: "sushi n stuff", image: "images/categories/japanese.png")
mexican = Category.create(name: "Mexican", description: "tacos n stuff", image: "images/categories/mexican.png")
thai = Category.create(name: "Thai", description: "hot n spicy", image: "images/categories/thai.png")

shogun = Restaurant.create(name: "Shogun", description: "the way of the tuna", image: "images/restaurants/shogun.png", category: japanese)
sapparo = Restaurant.create(name: "Saparo", description: "the way of the salmon", image: "images/restaurants/sapparo.png", category: japanese)

eltiempo = Restaurant.create(name: "El Tiempo", description: "pricey tacos", image: "images/restaurants/eltiempo.png", category: mexican)
chipoltapec = Restaurant.create(name: "Chipoltapec", description: "hole in the wall tacos", image: "images/restaurants/chipoltapec.png", category: mexican)

thaicottage = Restaurant.create(name: "Thai Cottage", description: "L4 equals Heaven", image: "images/restaurants/thaicottage.png", category: thai)
spicythai = Restaurant.create(name: "Spicy Thai", description: "Is Hot!", image: "images/restaurants/spicythai.png", category: thai)

dish1 = Dish.create(name: "2002 Roll", description: "Sooo Tasty", price: "12.99", image: "images/food/2002roll.png", restaurant: shogun)
dish2 = Dish.create(name: "Volcano Roll", description: "Volcano", price: "13.99", image: "images/food/volcanoroll.png", restaurant: shogun)
dish3 = Dish.create(name: "Philadelphia Roll", description: "Cream Cheese", price: "10.99", image: "images/food/philadelphiaroll.png", restaurant: shogun)
dish4 = Dish.create(name: "Dragon Roll", description: "The Mother Of", price: "25.99", image: "images/food/dragonroll.png", restaurant: shogun)

dish5 = Dish.create(name: "Hibachi Chicken", description: "Tastes Like Chicken", price: "31.99", image: "images/food/hibachichicken.png", restaurant: sapparo)
dish6 = Dish.create(name: "Hibachi Steak", description: "Moo Cow", price: "35.99", image: "images/food/hibachisteak.png", restaurant: sapparo)
dish7 = Dish.create(name: "Hibachi Shrimp", description: "They are little", price: "30.99", image: "images/food/hibachishrimp.png", restaurant: sapparo)
dish8 = Dish.create(name: "Hibachi Filet", description: "Fancy Moo Cow", price: "45.99", image: "images/food/hibachifilet.png", restaurant: sapparo)

dish6 = Dish.create(name: "Chicken Fajitas", description: "Tastes Like Mexican Chicken", price: "31.99", image: "images/food/chickenfajitas.png", restaurant: eltiempo)
dish7 = Dish.create(name: "Steak Fajitas", description: "Tastes Like Mexican Moo Cow", price: "35.99", image: "images/food/steakfajitas.png", restaurant: eltiempo)
dish8 = Dish.create(name: "Fish Fajitas", description: "Fishy Fishy", price: "36.99", image: "images/food/fishfajitas.png", restaurant: eltiempo)
dish9 = Dish.create(name: "Mixed Fajitas", description: "Anything you want", price: "37.99", image: "images/food/mixedfajitas.png", restaurant: eltiempo)

dish10 = Dish.create(name: "Chicken Enchiladas", description: "Cheesy Chicken", price: "31.99", image: "images/food/chickenenchilada.png", restaurant: chipoltapec)
dish11 = Dish.create(name: "Steak Enchiladas", description: "Cheesy Steak", price: "35.99", image: "images/food/steakenchilada.png", restaurant: chipoltapec)
dish12 = Dish.create(name: "Quesadillas", description: "Cheesy Cheesy", price: "36.99", image: "images/food/quesadillas.png", restaurant: chipoltapec)
dish13 = Dish.create(name: "Parillada", description: "All the stuff", price: "60.99", image: "images/food/parillada.png", restaurant: chipoltapec)

dish14 = Dish.create(name: "N1", description: "Noodles 1", price: "31.99", image: "images/food/n1noodles.png", restaurant: thaicottage)
dish15 = Dish.create(name: "N2", description: "Noodles 2", price: "34.99", image: "images/food/n2noodles.png", restaurant: thaicottage)
dish16 = Dish.create(name: "N3", description: "Noodles 3", price: "35.99", image: "images/food/n3noodles.png", restaurant: thaicottage)
dish17 = Dish.create(name: "N4", description: "Noodles 4", price: "36.99", image: "images/food/n3noodles.png", restaurant: thaicottage)

dish18 = Dish.create(name: "Spicy N1", description: "Spicy Noodles 1", price: "31.99", image: "images/food/n1spicynoodles.png", restaurant: spicythai)
dish19 = Dish.create(name: "Spicy N2", description: "Spicy Noodles 2", price: "32.99", image: "images/food/n2spicynoodles.png", restaurant: spicythai)
dish20 = Dish.create(name: "Spicy N3", description: "Spicy Noodles 3", price: "33.99", image: "images/food/n3spicynoodles.png", restaurant: spicythai)
dish21 = Dish.create(name: "Spicy N4", description: "Spicy Noodles 4", price: "34.99", image: "images/food/n4spicynoodles.png", restaurant: spicythai)


o1 = Order.create(subtotal: "0", tax: "0", total: "0", customer: jojo)
    li1 = LineItem.create(order: o1, dish: dish1)
    li2 = LineItem.create(order: o1, dish: dish2)
    li3 = LineItem.create(order: o1, dish: dish3)

o2 = Order.create(subtotal: "0", tax: "0", total: "0", customer: jojo)
    li4 = LineItem.create(order: o2, dish: dish5)
    li5 = LineItem.create(order: o2, dish: dish6)
    li6 = LineItem.create(order: o2, dish: dish7)

o3 = Order.create(subtotal: "0", tax: "0", total: "0", customer: karen)
    li7 = LineItem.create(order: o3, dish: dish9)
    li8 = LineItem.create(order: o3, dish: dish10)
    li9 = LineItem.create(order: o3, dish: dish11)

Order.all.each do |order|
    order.subtotal = ((order.line_items.map {|li| li.dish.price}).reduce {|price, n| n + price}).round(2)
    order.save
    order.tax = ((order.subtotal * 1.08) - order.subtotal).round(2)
    order.save
    order.total = (order.subtotal + order.tax).round(2)
    order.save
end
