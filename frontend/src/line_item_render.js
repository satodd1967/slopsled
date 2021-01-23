class LineItemRender{
    constructor(id, order_id, dish_id, dish_name, dish_price) {
        this.id = id;
        this.order_id = order_id;
        this.dish_id = dish_id;
        this.dish_name = dish_name;
        this.dish_price = dish_price;
    }

    renderDishLineItem() {
        let lineItemContainerDiv = document.getElementById("line-item-container")
        let u = document.createElement("ul");
            u.id= `${this.id}`;
            u.setAttribute("class", "checkOrder");
        let details = document.createElement("li");
        let name = document.createElement("span");
            name.innerText = ` ${this.dish_name} - `;
        let price = document.createElement("span");
            price.innerText = `${this.dish_price}`
        let deleteButton = document.createElement("button");
            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", () => { getLineItemForDelete(this.id); });
        details.append(deleteButton, name, price);
        u.append(details);
        lineItemContainerDiv.append(u);
        let placeYourOrderDiv = document.getElementById("place-your-order");
        if (!document.getElementById("order-button")) {
            let orderButton  = document.createElement("button");
            orderButton.id= "order-button";
            orderButton.textContent = "Place Order";
            orderButton.addEventListener("click", createCustomerFormDivs);
            placeYourOrderDiv.append(orderButton);
        }
    }

}