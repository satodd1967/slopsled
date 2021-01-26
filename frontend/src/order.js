class Order{

    static workingOrder = []

    constructor(order) {
        this.id = order.id;
        this.subtotal = order.subtotal;
        this.tax = order.tax;
        this.total = order.total;
        this.customer_id = order.customer_id;
        this.dishes = order.dishes;
        this.line_items = order.line_items;
        Order.workingOrder.push(this)
    }

    static createOrder(){
        let jsOrder = {
            subtotal: 0,
            tax: 0,
            total: 0,
            customer_id: Customer.workingCustomer[0].id
        }
    
        let order = api.post("orders", jsOrder)
        .then(order => {
            let o = new Order(order)
            o.renderNewOrder();
        })
    }

    static fetchOrderForCalc(workingOrderId) {
        let Order = api.get(`orders/${workingOrderId}`)
        .then(order => {
            let dishes = order.data.attributes.dishes
            let orderSubTotal = (dishes.reduce ( (total, dish) => dish.price + total, 0)).toFixed(2)
            let orderTax = ((orderSubTotal * 1.08) - orderSubTotal).toFixed(2)
            let orderTotal = ((parseFloat(orderSubTotal) + parseFloat(orderTax))).toFixed(2)
            let orderUpdate = {
                subtotal: orderSubTotal,
                tax: orderTax,
                total: orderTotal,
            }
        updateOrder(workingOrderId, orderUpdate)
        })
    }

    // static workingOrderUpdate() {
    //     let order = api.get(`orders/${this.workingOrder[0].id}`)
    //     .then(order  => {
    //         this.workingOrder = []
    //         this.workingOrder.push(order)
    //         console.log(Order.workingOrder[0])
    //     })
    // }

    renderNewOrder(){
        let newOrderDiv = document.getElementById("new-order-div")
        newOrderDiv.innerHTML +=
        `
        <ul>
        <li>Subtotal: ${this.subtotal}</li>
        <li>Tax: ${this.tax}</li>
        <li>Total: ${this.total}</li>
        </ul>
        ` 
    }
}

