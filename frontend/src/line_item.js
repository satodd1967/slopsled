class LineItem{
    constructor(id, order_id, dish_id) {
        this.id = id;
        this.order_id = order_id;
        this.dish_id = dish_id;
    }

    renderLineItem() {
        let dishesDiv = document.getElementById("dishes-container")

        dishesDiv.innerHTML +=
        `
        <ul>
        <h3>Line Items</h3>
        <li>Name: ${this.name}</li>
        <li>description: ${this.description}</li>
        <li>price: ${this.price}</li>
        <li>Restaurant: ${this.restaurant_id}</li>
        </ul>
        <button class="choose-dish-btn" onclick="openRestaurantMenu()">Choose</button>
        `
    }

}