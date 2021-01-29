document.addEventListener("DOMContentLoaded", () => {
    api = new ApiCall
    elements = new Element
    elements.createEventListeners()
    Customer.createCustomer()
    Restaurant.fetchRestaurants()
    Dish.fetchDishes()
})

function startOrder() {
    elements.startImageDiv.remove();
    elements.lineItemsHeaderDiv.innerHTML = "<h4>Your Dishes</h4>"
    elements.orderDiv.innerHTML = "<h4>Your Order</h4>"
    Order.createOrder()
    Category.fetchCategories();
}

function getRestaurants(categoryId) {
    elements.categoriesContainerDiv.innerHTML = "";
    Restaurant.getRestaurantsByCat(categoryId)
}

function getDishes(restaurantId) {
    elements.restaurantsContainerDiv.innerHTML = "";
    Dish.getRestaurantDishes(restaurantId) 
}

function addLineItem(dishId) {
    LineItem.createLineItem(dishId)
    if (elements.headerStartOverButton.style.display= "none") {
        elements.headerStartOverButton.style.display= "inline"
    }
}

function createCustomerFormDivs() {
    elements.customerFormBox.style.display= "block"
    elements.customerFormDiv.style.display= "block"
    Customer.createCustomerForm()
}

function orderReset() {
    location.reload()
}