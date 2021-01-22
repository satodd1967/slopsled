class Restaurant{
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    renderRestaurant() {
        let restaurantsContainerDiv = document.getElementById("restaurants-container")
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.innerText = `${this.name}`
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let chooseButton = document.createElement("button")
            chooseButton.textContent = "Choose"
            chooseButton.addEventListener("click", () => { getDishes(this.id); });
        u.append(name, description, chooseButton)
        restaurantsContainerDiv.append(u)

        // restaurantsDiv.innerHTML +=
        // `
        // <ul>
        // <h4>${this.name}</h4>
        // <li>${this.description}</li>
        // <li><button id="${this.id}" class="choose-restaurant-btn" data-id=${this.id}>Choose</button></li>
        // </ul>
        // `
    }

}