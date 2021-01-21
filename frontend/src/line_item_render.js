class LineItemRender{
    constructor(id, order_id, dish_id, dish_name, dish_price) {
        this.id = id;
        this.order_id = order_id;
        this.dish_id = dish_id;
        this.dish_name = dish_name;
        this.dish_price = dish_price;
    }

    renderDishLineItem() {
        let dishItemDiv = document.getElementById("line-item-container")

        dishItemDiv.innerHTML +=
        `
        <ul id=${this.id}>
        <li>${this.dish_name} Price: ${this.dish_price}</li>
        <button class="dish-delete-btn" data-id=${this.id} onclick="getLineItemForDelete()">Delete</button>
        </ul>
        `
    }

}