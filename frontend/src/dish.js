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
        <h4>${this.name}</h4>
        <li>description: ${this.description}</li>
        <li>price: ${this.price}</li>
        <li><button class="add-dish-btn" data-id=${this.id} onclick="addLineItem()">Add</button></li>
        </ul>
        `
    }

}