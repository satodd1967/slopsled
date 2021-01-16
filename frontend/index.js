document.addEventListener("DOMContentLoaded", () => {
    startOrder()
})

const BASE_URL = "http://127.0.0.1:3000"

function startOrder(){
    let startOrderDiv = document.getElementById("start-order")

    startOrderDiv.innerHTML +=
    `
    <button class="start-btn" onclick="getCategories()">Start Order</button>
    `
}

function getCategories() {
    let startButtonDiv = document.getElementById("start-order");
    startButtonDiv.innerHTML = "";
    let o = new Order(0, 0, 0)
    o.renderNewOrder()
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
    fetchDishesByRestaurant(restId) 
}

function fetchCategories(){
    fetch(`${BASE_URL}/categories`)
    .then(resp => resp.json())
    .then(categories => {
        let cats = categories.data.map( data => data.attributes)
        for (let cat of cats){
            let c = new Category(cat.id, cat.name, cat.description)
            c.renderCategory();
        }
    })
}

function fetchRestaurantsByCat(category){
    fetch(`${BASE_URL}/restaurants`)
    .then(resp => resp.json())
    .then(restaurants => {
        // console.log(restaurants.data.map( data => data.attributes.category_id))
        let filter = restaurants.data.filter( find_rest => {
            return (find_rest.attributes.category_id === category)
        })
        // console.log(filter)
        let rests = filter.map( data => data.attributes)
        for (let rest of rests){
            let r = new Restaurant(rest.id, rest.name, rest.description)
            r.renderRestaurant();
        }
    })
}

function fetchDishesByRestaurant(restaurant){
    fetch(`${BASE_URL}/dishes`)
    .then(resp => resp.json())
    .then(dishes => {
        // console.log(dishes.data)
        // console.log(dishes.data.map( data => data.attributes.restaurant_id))
        let filter = dishes.data.filter( find_dishes => {
            return (find_dishes.attributes.restaurant_id === restaurant)
        })
        // console.log(filter)
        let plates = filter.map( data => data.attributes)
        for (let plate of plates){
            let r = new Dish(plate.id, plate.name, plate.description, plate.price, plate.image, plate.restaurant_id)
            r.renderDish();
        }
    })
}

function createOrder(){

    let order = {
        subtotal: 0,
        tax: 0,
        total: 0,
        customer_id: null
    }

    fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order: {
                subtotal: order.subtotal,
                tax: order.tax,
                total: order.total,
                customer_id: order.customer_id
            }
        })
    })
    .then(resp => resp.json())
    .then(order => {
        let o = new Order(order.subtotal, order.tax, order.total, order.customer_id)
        o.renderNewOrder();
    })
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
