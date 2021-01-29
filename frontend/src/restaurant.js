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

    static renderRestaurantsByCat(categoryId){
        let restaurants = Restaurant.allRestaurants.filter( find_restaurants => {
            return (find_restaurants.category_id === parseInt(categoryId))
        })
        for (let restaurant of restaurants){
            restaurant.renderRestaurant();
        }
        elements.headerCategoriesButton.style= "inline"
    }

    renderRestaurant() {
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.innerText = `${this.name}`
            name.className= "list-name"
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let image = document.createElement("img")
            image.src = `${this.image}`;
            image.style.width = "60%";
            image.addEventListener("click", () => { getDishes(this.id, this.category_id); });
        u.append(image,name, description)
        elements.restaurantsContainerDiv.append(u)
    }

    static restaurantsNavBar() {
        elements.restaurantsContainerDiv.innerHTML = "";
        elements.dishesContainerDiv.innerHTML = ""
        let categoryId = elements.headerRestaurantsButton.data
        elements.headerRestaurantsButton.style.display= "none"
        this.renderRestaurantsByCat(categoryId)
    }

}