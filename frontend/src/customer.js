let currentCustomer = []

class Customer{
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.save()
    }

    renderCustomer() {
        let customerDiv = document.getElementById("customer-container")

        customerDiv.innerHTML +=
        `
        <ul>
        <h3>Id: ${this.id}</h3>
        <h3>Name: ${this.username}</h3>
        <li>Email: ${this.email}</li>
        </ul>
        `
    }
    save() {
        currentCustomer.push(this)
    }
}