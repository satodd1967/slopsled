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
            name.className= "list-name"
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let price = document.createElement("li")
            price.innerText =  `${this.price}`
        let image = document.createElement("img")
            image.src = `${this.image}`;
            image.alt = "Click Here";
            image.style.width = "40%";
            image.addEventListener("click", () => { addLineItem(this.id); });
        let addButton = document.createElement("button")
            addButton.textContent = "Add"
            addButton.addEventListener("click", () => { addLineItem(this.id); });
        u.append(image, name, description, price, addButton)
        dishesContainerDiv.append(u)
    }

}