class Order{
    constructor(id, subtotal, tax, total, customer_id) {
        this.id = id;
        this.subtotal = subtotal;
        this.tax = tax;
        this.total = total;
        this.customer_id = customer_id;
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

