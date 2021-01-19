let currentCustomer = []

class Customer{
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.save()
    }

    save() {
        currentCustomer.push(this)
    }
}