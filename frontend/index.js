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
    orderHeaderDiv.innerHTML = "<h3>Current Order</h3>"
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
    fetchOrderDishes(currentOrder[0].id)
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
        createLineItem(jsLineItem)
        })
    }
}

function fetchOrderDishes(id) {
    let Orders = api.get("orders")
    .then(orders => {
        let filter = orders.data.filter( find_items => {
            return (find_items.attributes.id === id)
        })
        let plates = filter.map( data => data.attributes.dishes[0])
        console.log(plates)
        for (let plate of plates){
            let p = new Dish(plate.id, plate.name, plate.description, plate.price, plate.image, plate.restaurant_id)
            p.renderDishLineItem();
            console.log(p)
        }
    })
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
        // let l = new LineItem(lineItem.id, lineItem.order_id, lineItem.dish_id)
        // l.renderLineItem()
        // console.log(l)
    })
}

function fetchDishesOrderView() {
    // This should use the current order_id and pull all dish_id's
    // and then render with prices and then it should also update the order and re-render the order
}


// function createUserForm(){
//     let usersForm = document.getElementById("users-form")

//     usersForm.innerHTML +=
//     `
//     <form>
//         Username: <input type="text" id="username"><br>
//         Email: <input type="text" id="email"><br>
//         Password: <input type="text" id="password"><br>
//         <input type="submit" value="Create User">
//     </form>
//     `
//     usersForm.addEventListener("submit", userFormSubmission)
// }

// function userFormSubmission(){
//     event.preventDefault();
//     let username = document.getElementById("username").value
//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value

//     // let user = new User(null, email, password, username)

//     let user = {
//         email: email,
//         password: password,
//         username: username,
//     }

//     console.log(JSON.stringify(user))

//     fetch(`${BASE_URL}/users`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             user: {
//                 email: user.email,
//                 password: user.password,
//                 username: user.username
//             }
//         })
//     })
//     .then(resp => resp.json())
//     .then(user => {
//         let u = new User(user.id, user.email, user.username)
//         u.renderUser();
//     })
// }



// function deleteUser(){
//     let userId = parseInt(event.target.dataset.id)
//     console.log(userId)
//     fetch(`${BASE_URL}/users/${userId}`, {
//         method: 'DELETE'
//     })

//     // this.location.reload()
// }
