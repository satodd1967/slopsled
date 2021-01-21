document.addEventListener("DOMContentLoaded", () => {
    start()
    api = new ApiCall
    createCustomer()
})

function start(){
    let startOrderDiv = document.getElementById("start-order")

    startOrderDiv.innerHTML +=
    `
    <button class="start-btn" onclick="getCategories()">Start Order</button>
    `
}

function getCategories() {
    let startButtonDiv = document.getElementById("start-order");
    startButtonDiv.innerHTML = "";
    let orderHeaderDiv = document.getElementById("line-items-header")
    orderHeaderDiv.innerHTML = "<h4>Your Dishes</h4>"
    createOrder();
    fetchCategories();
}

function getRestaurants() {
    let categoriesDiv = document.getElementById("categories-container");
    categoriesDiv.innerHTML = "";
    let catId = parseInt(event.target.dataset.id);
    fetchRestaurantsByCat(catId) 
}

function getDishes() {
    let dishesDiv = document.getElementById("restaurants-container");
    dishesDiv.innerHTML = "";
    let restId = parseInt(event.target.dataset.id);
    fetchDishesForObject(restId, "restaurant") 
}

function addLineItem() {
    let dishId = parseInt(event.target.dataset.id);
    fetchDishesForObject(dishId, "lineItem")
    // fetchOrderDishes(currentOrder[0].id)
    fetchOrderForCalc(currentOrder[0].id)
}

function fetchCategories(){
    let categories = api.get("categories")
    .then(categories => {
        let cats = categories.data.map( data => data.attributes)
        for (let cat of cats){
            let c = new Category(cat.id, cat.name, cat.description)
            c.renderCategory();
        }
    })
}

function fetchRestaurantsByCat(category){
    let restaurants = api.get("restaurants")
    .then(restaurants => {
        let filter = restaurants.data.filter( find_rest => {
            return (find_rest.attributes.category_id === category)
        })
        let rests = filter.map( data => data.attributes)
        for (let rest of rests){
            let r = new Restaurant(rest.id, rest.name, rest.description)
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

function fetchOrderDishes(id, lineItemId) {
    let Orders = api.get(`orders/${id}`)
    .then(orders => {
        let dish = orders.data.attributes.dishes.find( find_dish => {
            return find_dish.id === (orders.data.attributes.line_items.find( find_li => {
                return find_li.id === lineItemId
            })).dish_id
        })
        console.log("dish", dish)
        let hash = {
            id: lineItemId,
            order_id: id,
            dish_id: dish.id,
            dish_name: dish.name,
            dish_price: dish.price
        }
        console.log("hash", hash)
        let l = new LineItemRender(hash.id, hash.order_id, hash.dish_id, hash.dish_name, hash.dish_price)
        l.renderDishLineItem()
    })
}

function fetchOrderForCalc(id) {
    let Orders = api.get("orders")
    .then(orders => {
        let filter = orders.data.filter( find_item => {
            return (find_item.attributes.id === id)
        })
    let plates = (filter.map( data => data.attributes.dishes))[0]
    let orderSubTotal = (plates.reduce ( (total, dish) => dish.price + total, 0)).toFixed(2)
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
        let o = new Order(orders.id, orders.subtotal, orders.tax, orders.total, orders.customer_id)
        o.renderNewOrder()
    })
}

function getLineItemForDelete() {
    let lineItemId = parseInt(event.target.dataset.id);
    let lineItem = api.delete(`line_items/${lineItemId}`)
    fetchOrderForCalc(currentOrder[0].id)
    let delItem = document.getElementById(`${lineItemId}`)
    delItem.innerHTML = ""
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
    let orderDiv = document.getElementById("order")
    orderDiv.innerHTML = "<h4>Your Order</h4>"
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
