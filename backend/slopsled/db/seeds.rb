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

japanese = Category.create(name: "Japanese", description: "sushi n shit")
mexican = Category.create(name: "Mexican", description: "tacos n stuff")
thai = Category.create(name: "Thai", description: "hot n spicy")

shogun = Restaurant.create(name: "Shogun", description: "the way of the tuna", category: japanese)
saparo = Restaurant.create(name: "Saparo", description: "the way of the samurai", category: japanese)

eltiempo = Restaurant.create(name: "El Tiempo", description: "pricey tacos", category: mexican)
chipoltapec = Restaurant.create(name: "Chipoltapec", description: "hole in the wall tacos", category: mexican)

thaicottage = Restaurant.create(name: "Thai Cottage", description: "L4 equals Heaven", category: thai)
spicythai = Restaurant.create(name: "Spicy Thai", description: "Never Been There", category: thai)

dish1 = Dish.create(name: "2002 Roll", description: "badassery", price: "12.99", image: "no image", restaurant: shogun)
dish2 = Dish.create(name: "Volcano Roll", description: "Volcano", price: "13.99", image: "no image", restaurant: shogun)
dish3 = Dish.create(name: "Philadelphia Roll", description: "Cream Cheese", price: "10.99", image: "no image", restaurant: shogun)
dish4 = Dish.create(name: "Dragon Roll", description: "The Mother Of", price: "25.99", image: "no image", restaurant: shogun)

dish5 = Dish.create(name: "Hibachi Chicken", description: "Tastes Like Chicken", price: "31.99", image: "no image", restaurant: saparo)
dish6 = Dish.create(name: "Hibachi Steak", description: "Moo Cow", price: "35.99", image: "no image", restaurant: saparo)
dish7 = Dish.create(name: "Hibachi Shrimp", description: "Little Bastards", price: "30.99", image: "no image", restaurant: saparo)
dish8 = Dish.create(name: "Hibachi Filet", description: "Fancy Moo Cow", price: "45.99", image: "no image", restaurant: saparo)

dish6 = Dish.create(name: "Chicken Fajitas", description: "Tastes Like Mexican Chicken", price: "31.99", image: "no image", restaurant: eltiempo)
dish7 = Dish.create(name: "Steak Fajitas", description: "Tastes Like Mexican Moo Cow", price: "35.99", image: "no image", restaurant: eltiempo)
dish8 = Dish.create(name: "Fish Fajitas", description: "Smells Kinda", price: "36.99", image: "no image", restaurant: eltiempo)
dish9 = Dish.create(name: "Mixed Fajitas", description: "Anything you want", price: "37.99", image: "no image", restaurant: eltiempo)

dish10 = Dish.create(name: "Chicken Enchiladas", description: "Cheesy Chicken", price: "31.99", image: "no image", restaurant: chipoltapec)
dish11 = Dish.create(name: "Steak Enchiladas", description: "Cheesy Steak", price: "35.99", image: "no image", restaurant: chipoltapec)
dish12 = Dish.create(name: "Quesadillas", description: "Cheesy Cheesy", price: "36.99", image: "no image", restaurant: chipoltapec)
dish13 = Dish.create(name: "Perillada", description: "All the stuff", price: "60.99", image: "no image", restaurant: chipoltapec)

dish14 = Dish.create(name: "N1", description: "Noodles 1", price: "31.99", image: "no image", restaurant: thaicottage)
dish15 = Dish.create(name: "N2", description: "Noodles 2", price: "34.99", image: "no image", restaurant: thaicottage)
dish16 = Dish.create(name: "N3", description: "Noodles 3", price: "35.99", image: "no image", restaurant: thaicottage)
dish17 = Dish.create(name: "N4", description: "Noodles 4", price: "36.99", image: "no image", restaurant: thaicottage)

dish18 = Dish.create(name: "Spicy N1", description: "Spicy Noodles 1", price: "31.99", image: "no image", restaurant: spicythai)
dish19 = Dish.create(name: "Spicy N2", description: "Spicy Noodles 2", price: "32.99", image: "no image", restaurant: spicythai)
dish20 = Dish.create(name: "Spicy N3", description: "Spicy Noodles 3", price: "33.99", image: "no image", restaurant: spicythai)
dish21 = Dish.create(name: "Spicy N4", description: "Spicy Noodles 4", price: "34.99", image: "no image", restaurant: spicythai)


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


# o.line_items.map {|li| li.price}