document.addEventListener("DOMContentLoaded", () => {
    api = new ApiCall
    service = new Service
    createCustomer()
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
    createOrder()
    Category.fetchCategories();
}

function getRestaurants(categoryId) {
    let categoriesContainerDiv = document.getElementById("categories-container");
    categoriesContainerDiv.innerHTML = "";
    fetchRestaurantsByCat(categoryId)
}

function getDishes(restaurantId) {
    let dishesDiv = document.getElementById("restaurants-container");
    dishesDiv.innerHTML = "";
    fetchDishesForObject(restaurantId, "restaurant") 
}

function addLineItem(dishId) {
    fetchDishesForObject(dishId, "lineItem")
}

// function fetchCategories(){
//     let categories = api.get("categories")
//     .then(categories => {
//         let cats = categories.data.map( data => data.attributes)
//         for (let cat of cats){
//             let c = new Category(cat.id, cat.name, cat.description, cat.image)
//             c.renderCategory();
//         }
//     })
// }


function fetchRestaurantsByCat(category){
    let restaurants = api.get("restaurants")
    .then(restaurants => {
        let filter = restaurants.data.filter( find_rest => {
            return (find_rest.attributes.category_id === category)
        })
        let rests = filter.map( data => data.attributes)
        for (let rest of rests){
            let r = new Restaurant(rest.id, rest.name, rest.description, rest.image)
            r.renderRestaurant();
        }
    })
}

function fetchDishesForObject(id, object){
    if (object === "restaurant") {
    let dishes = api.get("dishes")
    .then(dishes => {
        let filter = dishes.data.filter( find_dishes => {
            return (find_dishes.attributes.restaurant_id === id)
        })
        let plates = filter.map( data => data.attributes)
        for (let plate of plates){
            let p = new Dish(plate.id, plate.name, plate.description, plate.price, plate.image, plate.restaurant_id)
            p.renderDish();
        }
    })
    } else {
        let dishes = api.get(`dishes/${id}`)
        .then(dish => {
        let dishAdd = dish.data.attributes
        let jsLineItem = {
            order_id: currentOrder[0].id,
            dish_id: dishAdd.id
        }
        createLineItem(jsLineItem);
        })
    }
}

function fetchOrderDishes(currentOrderId, lineItemId) {
    let Order = api.get(`orders/${currentOrderId}`)
    .then(order => {
        let dish = order.data.attributes.dishes.find( find_dish => {
            return find_dish.id === (order.data.attributes.line_items.find( find_li => {
                return find_li.id === lineItemId
            })).dish_id
        })
        let hash = {
            id: lineItemId,
            order_id: currentOrderId,
            dish_id: dish.id,
            dish_name: dish.name,
            dish_price: dish.price
        }
        let l = new LineItemRender(hash.id, hash.order_id, hash.dish_id, hash.dish_name, hash.dish_price)
        l.renderDishLineItem()
    })
    fetchOrderForCalc(currentOrderId)
}

function fetchOrderForCalc(id) {
    let Order = api.get(`orders/${id}`)
    .then(order => {
        let dishes = order.data.attributes.dishes
        let orderSubTotal = (dishes.reduce ( (total, dish) => dish.price + total, 0)).toFixed(2)
        let orderTax = ((orderSubTotal * 1.08) - orderSubTotal).toFixed(2)
        let orderTotal = ((parseFloat(orderSubTotal) + parseFloat(orderTax))).toFixed(2)
        let orderUpdate = {
            subtotal: orderSubTotal,
            tax: orderTax,
            total: orderTotal,
        }
    updateOrder(id, orderUpdate)
    })
}

function updateOrder(id, object) {
    let updateOrderDiv = document.getElementById("new-order-div")
    updateOrderDiv.innerHTML = ""
    let order = api.update(`orders/${id}`, object)
    .then(orders => {
        currentOrder = []
        let o = new Order(orders.id, orders.subtotal, orders.tax, orders.total, orders.customer_id)
        o.renderNewOrder()
    })
}

function getLineItemForDelete(lineItemId) {
    let lineItem = api.delete(`line_items/${lineItemId}`)
    .then(lineItem => {
        fetchOrderForCalc(currentOrder[0].id)
    })
    let delItem = document.getElementById(`${lineItemId}`)
    delItem.remove();
    let placeYourOrderDiv = document.getElementById("place-your-order")
    if (!document.querySelector(".checkOrder")) {
        placeYourOrderDiv.innerHTML = ""
    }
}

function createCustomer(){
    let jsCustomer = {
        username: "",
        email: ""
    }

    let customer = api.post("customers", jsCustomer)
    .then(customer => {
      let c = new Customer(customer.id, customer.username, customer.email)
    })
}

function createOrder(){
    let jsOrder = {
        subtotal: 0,
        tax: 0,
        total: 0,
        customer_id: currentCustomer[0].id
    }

    let order = api.post("orders", jsOrder)
    .then(order => {
        let o = new Order(order.id, order.subtotal, order.tax, order.total, order.customer_id)
        o.renderNewOrder();
    })
}

function createLineItem(object) {
    let lineItem = api.post("line_items", object)
    .then(lineItem => {
        fetchOrderDishes(currentOrder[0].id, lineItem.id)
    })
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
    updateCustomerPlaceOrder(currentCustomer[0].id, customerObject)
}

function updateCustomerPlaceOrder(customerId, customerObject) {
    let customer = api.update(`customers/${customerId}`, customerObject)
    .then(customer => {
        currentCustomer = []
        let c = new Customer(customer.id, customer.username, customer.email)
    })
    createThankYouMessage()
}