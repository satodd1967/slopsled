document.addEventListener("DOMContentLoaded", () => {
    api = new ApiCall
    service = new Service
    elements = new Element
    elements.createEventListeners()
    Customer.createCustomer()
    Restaurant.fetchRestaurants()
    Dish.fetchDishes()
})

function getCategories() {
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
    createCustomerForm()
}

function createCustomerForm() {
    elements.customerFormHeader.id= "customer-form-header"
    elements.customerFormHeader.innerHTML = 
    `
    Please enter your information!
    `
    elements.customerForm.innerHTML += 
    `
    <label for="username">Username:</label><br>
    <input type="text" id="username"><br>
    <label for="email">Email:</lable></label><br>
    <input type="email" id="email"><br><br>
    <input type="submit">
    `
    elements.customerForm.id= "customer-form"
    elements.customerFormDiv.append(elements.customerFormHeader)
    elements.customerFormDiv.append(elements.customerForm)
    elements.customerForm.addEventListener("submit", Customer.submitCustomer)
}

function createThankYouMessage() {
    elements.customerFormDiv.innerHTML = ""
    elements.customerThankYou.innerHTML = "Thank you for your Order!"
    elements.customerFormDiv.append(elements.customerThankYou)
    window.setTimeout(orderReset, 1000)
}

function orderReset() {
    location.reload()
}

function updateCustomerPlaceOrder(workingCustomerId, customerObject) {
    let customer = api.update(`customers/${workingCustomerId}`, customerObject)
    .then(customer => {
        Customer.workingCustomer = []
        let c = new Customer(customer.id, customer.username, customer.email)
    })
    createThankYouMessage()
}