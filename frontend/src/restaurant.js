class Restaurant{
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    renderRestaurant() {
        let restaurantsDiv = document.getElementById("restaurants-container")

        restaurantsDiv.innerHTML +=
        `
        <ul>
        <h3>Name: ${this.name}</h3>
        <li>description: ${this.description}</li>
        </ul>
        <button class="choose-restaurant-btn" data-id=${this.id} onclick="getDishes()">Choose</button>
        `
    }

}