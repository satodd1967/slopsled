document.addEventListener("DOMContentLoaded", () => {
    api = new ApiCall
    service = new Service
    Customer.createCustomer()
    Restaurant.fetchRestaurants()
    Dish.fetchDishes()
    start()
})

function start(){
    const startImageDiv = document.getElementById("start-image")
    const startImage = document.createElement('img')
    startImage.src = "images/StartOrder.png";
    startImage.alt = "Click Here";
    startImage.style.width = "40%";
    startImage.addEventListener("click", getCategories)
    startImageDiv.append(startImage);
}

function getCategories() {
    let startImageDiv = document.getElementById("start-image");
    startImageDiv.remove();
    let lineItemsHeaderDiv = document.getElementById("line-items-header")
    lineItemsHeaderDiv.innerHTML = "<h4>Your Dishes</h4>"
    let orderDiv = document.getElementById("order")
    orderDiv.innerHTML = "<h4>Your Order</h4>"
    Order.createOrder()
    Category.fetchCategories();
}

function getRestaurants(categoryId) {
    let categoriesContainerDiv = document.getElementById("categories-container");
    categoriesContainerDiv.innerHTML = "";
    Restaurant.getRestaurantsByCat(categoryId)
}

function getDishes(restaurantId) {
    let dishesDiv = document.getElementById("restaurants-container");
    dishesDiv.innerHTML = "";
    Dish.getRestaurantDishes(restaurantId) 
}

function addLineItem(dishId) {
    LineItem.createLineItem(dishId)
}

function fetchOrderDishes(workingOrderId, lineItemId) {
    let order = api.get(`orders/${workingOrderId}`)
    .then(order => {
        let dish = order.data.attributes.dishes.find( find_dish => {
            return find_dish.id === (order.data.attributes.line_items.find( find_li => {
                return find_li.id === lineItemId
            })).dish_id
        })
        let hash = {
            id: lineItemId,
            order_id: workingOrderId,
            dish_id: dish.id,
            dish_name: dish.name,
            dish_price: dish.price
        }
        let l = new LineItemRender(hash.id, hash.order_id, hash.dish_id, hash.dish_name, hash.dish_price)
        l.renderDishLineItem()
    })
    Order.fetchOrderForCalc(workingOrderId)
}

function updateOrder(workingOrderId, orderUpdate) {
    let updateOrderDiv = document.getElementById("new-order-div")
    updateOrderDiv.innerHTML = ""
    let order = api.update(`orders/${workingOrderId}`, orderUpdate)
    .then(order => {
        Order.workingOrder = []
        let o = new Order(order.data.attributes)
        o.renderNewOrder()
    })
}

function getLineItemForDelete(lineItemId) {
    let lineItem = api.delete(`line_items/${lineItemId}`)
    .then(lineItem => {
        fetchOrderForCalc(Order.workingOrder[0].id)
    })
    let delItem = document.getElementById(`${lineItemId}`)
    delItem.remove();
    let placeYourOrderDiv = document.getElementById("place-your-order")
    if (!document.querySelector(".checkOrder")) {
        placeYourOrderDiv.innerHTML = ""
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