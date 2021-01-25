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

