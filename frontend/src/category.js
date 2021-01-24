class Category{
    constructor(id, name, description, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    renderCategory() {
        let categoriesContainerDiv = document.getElementById("categories-container")
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.style.marginBottom = "3px"
            name.style.marginTop = "3px"
            name.style.textAlign = "justify"
            name.innerText = `${this.name}`
        let image = document.createElement("img")
            image.src = `${this.image}`;
            image.alt = "Click Here";
            image.style.width = "75%";
            image.addEventListener("click", () => { getRestaurants(this.id); });
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        // let chooseButton = document.createElement("button")
        //     chooseButton.textContent = "Choose"
        //     chooseButton.addEventListener("click", () => { getRestaurants(this.id); });
        u.append(image, name, description)
        categoriesContainerDiv.append(u)
    }
}