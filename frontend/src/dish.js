class Dish{

    static allDishes = []

    constructor(dish) {
        this.id = dish.id;
        this.name = dish.name;
        this.description = dish.description;
        this.price = dish.price;
        this.image = dish.image;
        this.restaurant_id = dish.restaurant_id;
        this.restaurant = dish.restaurant;
        Dish.allDishes.push(this)
    }

    static fetchDishes() {
        let dishes = api.get("dishes")
        .then(dishes => {
            let plates = dishes.data.map( data => data.attributes)
            for (let plate of plates){
                let dish = new Dish(plate)
            }
        })
    }

    static renderRestaurantDishes(restaurantId, categoryId) {
        let dishes = Dish.allDishes.filter( find_dish => {
            return (find_dish.restaurant_id === restaurantId)
        })
        for (let dish of dishes){
            dish.renderDish();
        }
        elements.headerRestaurantsButton.data= categoryId
        elements.headerRestaurantsButton.style.display= "inline"
    }

    renderDish() {
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.innerText = `${this.name}`
            name.className= "list-name"
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let price = document.createElement("li")
            price.innerText =  `${this.price}`
        let image = document.createElement("img")
            image.src = `${this.image}`;
            image.alt = "Click Here";
            image.style.width = "50%";
            image.addEventListener("click", () => { addLineItem(this.id); });
        let addButton = document.createElement("button")
            addButton.textContent = "Add"
            addButton.addEventListener("click", () => { addLineItem(this.id); });
        u.append(image, name, description, price, addButton)
        elements.dishesContainerDiv.append(u)
    }

}