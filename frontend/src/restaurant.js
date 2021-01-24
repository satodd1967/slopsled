class Restaurant{
    constructor(id, name, description, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    renderRestaurant() {
        let restaurantsContainerDiv = document.getElementById("restaurants-container")
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.innerText = `${this.name}`
            name.className= "list-name"
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        let image = document.createElement("img")
            image.src = `${this.image}`;
            image.alt = "Click Here";
            image.style.width = "75%";
            image.addEventListener("click", () => { getDishes(this.id); });
        u.append(image,name, description)
        restaurantsContainerDiv.append(u)
    }

}