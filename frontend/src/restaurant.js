class Restaurant{

    static allRestaurants = []

    constructor(restaurant) {
        this.id = restaurant.id;
        this.name = restaurant.name;
        this.description = restaurant.description;
        this.image = restaurant.image;
        this.category_id = restaurant.category_id;
        this.dishes = restaurant.dishes;
        Restaurant.allRestaurants.push(this)
    }

    static fetchRestaurants(){
        let restaurants = api.get("restaurants")
        .then(restaurants => {
            let rests = restaurants.data.map( data => data.attributes)
            for (let rest of rests){
                let restaurant = new Restaurant(rest)
            }
        })
    }

    static getRestaurantsByCat(categoryId){
        let restaurants = Restaurant.allRestaurants.filter( find_restaurants => {
            return (find_restaurants.category_id === categoryId)
        })
        for (let restaurant of restaurants){
            restaurant.renderRestaurant();
        }
        let headerDiv = document.getElementById("header");
        let categories = document.createElement("button");
        categories.textContent = "Categories";
        categories.id= "headerCategoriesButton"
        categories.addEventListener("click", () => { Category.categoriesNavBar(); });
        headerDiv.append(categories);
    }

    static restaurantsNavBar() {
        let dishesDiv = document.getElementById("restaurants-container");
        dishesDiv.innerHTML = "";
        let dishesContainerDiv = document.getElementById("dishes-container")
        dishesContainerDiv.innerHTML = ""
        let headerRestaurantsButton  = document.getElementById("headerRestaurantsButton")
        let categoryId = headerRestaurantsButton.data
        headerRestaurantsButton.remove()
        this.renderRestaurantsByCat(categoryId)
    }

    static renderRestaurantsByCat(categoryId) {
        let rests = this.allRestaurants.filter( filter_restaurants => {
            return (filter_restaurants.category_id === parseInt(categoryId))
        });
        for (let rest of rests){
            rest.renderRestaurant();
        }
    }

    renderRestaurant() {
        let restaurantsContainerDiv = document.getElementById("restaurants-container")
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.innerText = `${this.name}`
            name.className= "list-name"
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let image = document.createElement("img")
            image.src = `${this.image}`;
            image.alt = "Click Here";
            image.style.width = "60%";
            image.addEventListener("click", () => { getDishes(this.id); });
        u.append(image,name, description)
        restaurantsContainerDiv.append(u)
    }

}