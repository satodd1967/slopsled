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
        <h4>Name: ${this.name}</h4>
        <li>description: ${this.description}</li>
        </ul>
        <button class="choose-category-btn" data-id=${this.id} onclick="getRestaurants()">Choose</button>
        `
    }
}