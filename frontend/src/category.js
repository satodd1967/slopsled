class Category{
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    renderCategory() {
        let categoriesContainerDiv = document.getElementById("categories-container")
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.innerText = `${this.name}`
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let chooseButton = document.createElement("button")
            chooseButton.textContent = "Choose"
            chooseButton.addEventListener("click", () => { getRestaurants(this.id); });
        u.append(name, description, chooseButton)
        categoriesContainerDiv.append(u)
    }
}