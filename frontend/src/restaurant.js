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
        <h4>${this.name}</h4>
        <li>${this.description}</li>
        <li><button class="choose-restaurant-btn" data-id=${this.id} onclick="getDishes()">Choose</button></li>
        </ul>
        `
    }

}