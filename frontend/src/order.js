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

    static fetchOrderDishes(workingOrderId, lineItemId) {
        let order = api.get(`orders/${workingOrderId}`)
        .then(order => {
            this.renderOrderLineItem(order, lineItemId)
        })
        this.fetchOrderForCalc(workingOrderId)
    }

    static fetchOrderForCalc(workingOrderId) {
        let order = api.get(`orders/${workingOrderId}`)
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
        this.updateOrder(workingOrderId, orderUpdate)
        })
    }

    static updateOrder(workingOrderId, orderUpdate) {
        elements.newOrderDiv.innerHTML = ""
        let order = api.update(`orders/${workingOrderId}`, orderUpdate)
        .then(order => {
            Order.workingOrder = []
            let o = new Order(order.data.attributes)
            o.renderNewOrder()
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
        elements.newOrderDiv.innerHTML +=
        `
        <ul>
        <li>Subtotal: ${this.subtotal}</li>
        <li>Tax: ${this.tax}</li>
        <li>Total: ${this.total}</li>
        </ul>
        ` 
    }

    static renderOrderLineItem(order, lineItemId) {
        let lineItem = order.data.attributes.line_items.find( find_lineItem => {
            return (find_lineItem.id === lineItemId)
        })
        let dish = order.data.attributes.dishes.find( find_dish => {
            return (find_dish.id === lineItem.dish_id)
        })
        let u = document.createElement("ul");
            u.id= `${lineItem.id}`;
            u.setAttribute("class", "checkOrder");
        let details = document.createElement("li");
        let name = document.createElement("span");
            name.innerText = ` ${dish.name} - `;
        let price = document.createElement("span");
            price.innerText = `${dish.price}`
        let deleteButton = document.createElement("button");
            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", () => { LineItem.getLineItemForDelete(lineItem.id); });
        details.append(deleteButton, name, price);
        u.append(details);
        elements.lineItemContainerDiv.append(u);
        if (!document.getElementById("order-button")) {
            let orderButton  = document.createElement("button");
            orderButton.id= "order-button";
            orderButton.textContent = "Place Order";
            orderButton.addEventListener("click", createCustomerFormDivs);
            elements.placeYourOrderDiv.append(orderButton);
        }
    }
}
