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
        <h3>Name: ${this.name}</h3>
        <li>description: ${this.description}</li>
        </ul>
        `
    }
}