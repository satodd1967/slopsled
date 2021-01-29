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

    static submitCustomer(e) {
        e.preventDefault()
        let userName = e.target.children.username.value
        let email = e.target.children.email.value
        let customerObject = {
            username: userName,
            email: email
        }
        Customer.updateCustomerPlaceOrder(Customer.workingCustomer[0].id, customerObject)
    }

    static updateCustomerPlaceOrder(workingCustomerId, customerObject) {
        let customer = api.update(`customers/${workingCustomerId}`, customerObject)
        .then(customer => {
            Customer.workingCustomer = []
            let c = new Customer(customer.id, customer.username, customer.email)
        })
        createThankYouMessage()
    }

}