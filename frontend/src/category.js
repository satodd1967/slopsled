class Category{
    constructor(id, name, description, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    static fetchCategories(){
        let categories = api.get("categories")
        .then(categories => {
            let cats = categories.data.map( data => data.attributes)
            for (let cat of cats){
                let category = new Category(cat.id, cat.name, cat.description, cat.image)
                category.renderCategory();
            }
        })
    }

    renderCategory(category) {
        let categoriesContainerDiv = document.getElementById("categories-container")
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.className= "list-name"
            name.innerText = `${this.name}`
        let image = service.createImage(`${this.image}`, "75%", `${getRestaurants}`, `${this.id}`)
            // image.src = `${this.image}`;
            // image.alt = "Click Here";
            // image.style.width = "75%";
            // image.addEventListener("click", () => { getRestaurants(this.id); });
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        u.append(image, name, description)
        categoriesContainerDiv.append(u)
    }

}

