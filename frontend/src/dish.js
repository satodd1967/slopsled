class Dish{
    constructor(id, name, description, price, image, restaurant_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.restaurant_id = restaurant_id;
    }

    renderDish() {
        let dishesDiv = document.getElementById("dishes-container")

        dishesDiv.innerHTML +=
        `
        <ul>
        <h3>Name: ${this.name}</h3>
        <li>description: ${this.description}</li>
        <li>price: ${this.price}</li>
        <li>Restaurant: ${this.restaurant_id}</li>
        </ul>
        <button class="add-dish-btn" onclick="openRestaurantMenu()">Add</button>
        `
    }

}