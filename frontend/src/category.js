class Category{

    static allCategories = []

    constructor(category) {
        this.id = category.id;
        this.name = category.name;
        this.description = category.description;
        this.image = category.image;
        this.restaurants = category.restaurants
        this.dishes = category.dishes
        Category.allCategories.push(this)
    }

    static fetchCategories(){
        let categories = api.get("categories")
        .then(categories => {
            let cats = categories.data.map( data => data.attributes)
            for (let cat of cats){
                let category = new Category(cat)
            }
        })
    }

    static renderCategories() {
        let cats = this.allCategories;
        for (let cat of cats){
            cat.renderCategory();
        }
    }

    renderCategory() {
        let u = document.createElement("ul")
        let name = document.createElement("h4")
            name.className= "list-name"
            name.innerText = `${this.name}`
        let image = document.createElement("img")
            image.src = `${this.image}`;
            image.style.width = "60%";
            image.addEventListener("click", () => { getRestaurants(this.id); });
        let description = document.createElement("li")
            description.innerText = `${this.description}`
        u.append(image, name, description)
        elements.categoriesContainerDiv.append(u)
    }

    static categoriesNavBar() {
        elements.categoriesContainerDiv.innerHTML = "";
        elements.restaurantsContainerDiv.innerHTML = "";
        elements.dishesContainerDiv.innerHTML = ""
        elements.headerCategoriesButton.style.display= "none"
        if (elements.headerRestaurantsButton.style.display= "inline") {
            elements.headerRestaurantsButton.style.display= "none"
        }
        this.renderCategories()
    }
}

