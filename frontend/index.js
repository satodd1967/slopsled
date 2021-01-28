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
    startOver()
}

function startOver() {
    if (elements.headerStartOverButton.style.display= "none") {
        elements.headerStartOverButton.style.display= "inline"
    }
}

function createCustomerFormDivs() {
    wrapper = document.getElementById("wrapper")
    customerFormBox = document.createElement("div")
    customerFormBox.id= "customer-form-box"
    customerForm = document.createElement("div")
    customerForm.id= "customer-form"
    wrapper.prepend(customerFormBox)
    customerFormBox.append(customerForm)
    createCustomerForm()
}

function createCustomerForm() {
    customerFormDiv = document.getElementById("customer-form")
    let customerFormHeader = document.createElement("h4")
    customerFormHeader.id= "customer-form-header"
    customerFormHeader.innerHTML = 
    `
    Please enter your information!
    `
    let customerForm = document.createElement('form')
    customerForm.innerHTML += 
    `
    <label for="username">Username:</label>
    <input type="text" id="username"><br>
    <label for="email">Email:</lable></label>
    <input type="email" id="email"><br>
    <input type="submit">
    `
    customerFormDiv.append(customerFormHeader)
    customerFormDiv.append(customerForm)
    customerForm.addEventListener("submit", submitCustomer)
}

function createThankYouMessage() {
    customerFormDiv = document.getElementById("customer-form")
    customerFormDiv.innerHTML = ""
    customerThankYou = document.createElement("h4")
    customerThankYou.innerHTML = "Thank you for your Order!"
    customerFormDiv.append(customerThankYou)
    window.setTimeout(orderReset, 1000)
}

function orderReset() {
    location.reload()
}

function submitCustomer(e) {
    e.preventDefault()
    let userName = e.target.children.username.value
    let email = e.target.children.email.value
    let customerObject = {
        username: userName,
        email: email
    }
    updateCustomerPlaceOrder(Customer.workingCustomer[0].id, customerObject)
}

function updateCustomerPlaceOrder(workingCustomerId, customerObject) {
    let customer = api.update(`customers/${workingCustomerId}`, customerObject)
    .then(customer => {
        Customer.workingCustomer = []
        let c = new Customer(customer.id, customer.username, customer.email)
    })
    createThankYouMessage()
}