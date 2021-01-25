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
            console.log(l)
            fetchOrderDishes(Order.workingOrder[0].id, lineItem.id)
            
        })
    }

}