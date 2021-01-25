class Customer{

    static workingCustomer = []

    constructor(customer) {
        this.id = customer.id;
        this.username = customer.username;
        this.email = customer.email;
        this.line_items = customer.line_items;
        this.orders = customer.orders;
        Customer.workingCustomer.push(this)
    }

    static createCustomer(){
        let jsCustomer = {
            username: "",
            email: ""
        }
    
        let customer = api.post("customers", jsCustomer)
        .then(customer => {
          let c = new Customer(customer)
        })
    }

}