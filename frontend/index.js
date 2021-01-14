document.addEventListener("DOMContentLoaded", () => {
    startOrder()
})

const BASE_URL = "http://127.0.0.1:3000"

function startOrder(){
    let startOrderDiv = document.getElementById("start-order")

    startOrderDiv.innerHTML +=
    `
    <button class="start-btn" onclick="openMenu()">Start Order</button>
    `
}

function openMenu() {
    let startButtonDiv = document.getElementById("start-order");
    startButtonDiv.innerHTML = "";
    fetchCategories();
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
