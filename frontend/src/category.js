class Category{
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    renderCategory() {
        let categoriesDiv = document.getElementById("categories-container")

        categoriesDiv.innerHTML +=
        `
        <ul>
        <h4>${this.name}</h4>
        <li>${this.description}</li>
        <li><button id="${this.id}" class="choose-category-btn" data-id=${this.id} onclick="getRestaurants()">Choose</button></li>
        </ul>
        `
        let renderedCategory = document.getElementById(`${this.id}`)
        renderedCategory.addEventListener("click", getRestaurants(this.id))
    }
}