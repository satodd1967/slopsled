class LineItem{

    static workingOrderLineItems = []

    constructor(lineItem) {
        this.id = lineItem.id;
        this.order_id = lineItem.order_id;
        this.dish_id = lineItem.dish_id;
        LineItem.workingOrderLineItems.push(this)
    }

    
    static createLineItem(dishId) {
        let jsLineItem = {
            order_id: Order.workingOrder[0].id,
            dish_id: dishId
        }
        let lineItem = api.post("line_items", jsLineItem)
        .then(lineItem => {
            let l = new LineItem(lineItem)
            fetchOrderDishes(Order.workingOrder[0].id, lineItem.id)
        })
    }

    static getLineItemForDelete(lineItemId) {
        let lineItem = api.delete(`line_items/${lineItemId}`)
        .then(lineItem => {
            Order.fetchOrderForCalc(Order.workingOrder[0].id)
        })
        let delItem = document.getElementById(`${lineItemId}`)
        delItem.remove();
        let placeYourOrderDiv = document.getElementById("place-your-order")
        if (!document.querySelector(".checkOrder")) {
            placeYourOrderDiv.innerHTML = ""
        }
    }

}