SlopSled is a Door Dash competitor.  Users can choose from multiple categories of food and participating restaurants will show up allowing the user to build a basket of food from multiple restaurants and purchase.  One of our SlopSled drivers will go out and pickup all of the food and deliver it to the user.  Proprietary SlopSled heat boxes allow us to keep all of your food warm while we pickup from multiple restaurants.


•	Start Page
o	Users are given a description of the site and what is available
o	Users can start an order by clicking start an order
	Starting an order shows the user the different food categories they can choose from and gives them a blank order with no line items to start to add to.  Categories include a name, an image and a brief description.
•	Choosing a category
o	Users can click on a category to choose it and then the categories will be replaced with the restaurants within that category.  Restaurants will have a name, an image and a brief description.
o	When the users choose a category the top navbar will add navigation that takes them back to the categories.
•	Choosing a restaurant
o	Users can click on a restaurant to choose it and then the restaurants list will be replaced with the list of available dishes from that restaurant.  Dishes will include a name, an image, a description and a price.
o	When the user chooses a restaurant the navigation bar will add navigation that takes them back to the restaurant’s selection.  This will be filtered by the current chosen category.
•	Choosing a dish
o	Users can click on the dish, or on an ad button to add the dish to their order.
	When added the dish will be added to their order as a line item and the order subtotal, tax and total will be updated
	Each line item will include a delete button that when clicked removes the line item from the order and updates the subtotal, tax and total.
o	At this point the user will also be provided with a complete my order button that will persist as long as there is a line item in the order.
o	After the user add the first line item to their order the navigation bar will add a start over button that will allow users to start over from the beginning.
•	Complete your order
o	Users can click on the complete your order button and this will open a add your personal information form where they will be prompted to enter a username and email address.
o	Once entered and the user clicks on submit the order is processed and the user is prompted with a thank you message which stays on the screen for a couple of seconds and then the page refreshes so the user can start a new order if they choose to.
•	Stretch will be to add an order summary to the checkout.  Possibly add actual user account setup and a login screen and potentially order history.


•	Backend classes
o	Customer 
	has many orders
	has many line items through orders
o	Order
	Belongs to a customer
	Has many line items
	Has many dishes through line items
o	Category
	Has many restaurants
	Has many dishes through restaurants
o	Restaurant
	Belongs to a category
	Has many dishes
o	Dish
	Belongs to a restaurant
o	Line Item
	Belongs to an order
	Belongs to a dish
•	JS Classes
o	Customer
o	Order
o	Category
o	Restaurant
o	Dish
o	Line Item
o	Api’s
o	Elements
