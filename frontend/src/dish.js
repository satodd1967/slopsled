class Dish{
    constructor(id, name, description, price, image, restaurant_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.restaurant_id = restaurant_id;
    }

    renderDish() {
        let dishesContainerDiv = document.getElementById("dishes-container")
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.innerText = `${this.name}`
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let price = document.createElement("li")
            price.innerText =  `${this.price}`
        let addButton = document.createElement("button")
            addButton.textContent = "Add"
            addButton.addEventListener("click", () => { addLineItem(this.id); });
        u.append(name, description, price, addButton)
        dishesContainerDiv.append(u)
    }

}