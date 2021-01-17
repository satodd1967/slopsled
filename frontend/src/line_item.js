class LineItem{
    constructor(id, order_id, dish_id) {
        this.id = id;
        this.order_id = order_id;
        this.dish_id = dish_id;
    }

    renderLineItem() {
        let dishesDiv = document.getElementById("dishes-container")
        console.log(this)
        dishesDiv.innerHTML +=
        `
        <ul>
        <h3>Line Items</h3>
        <li>Order Id: ${this.order_id}</li>
        <li>Dish Id: ${this.dish_id}</li>
        </ul>
        <button class="choose-dish-btn" onclick="openRestaurantMenu()">Choose</button>
        `
    }

}