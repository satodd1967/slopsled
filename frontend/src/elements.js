class Element {
    constructor (){
        this.categoriesContainerDiv = document.getElementById("categories-container");
        this.restaurantsContainerDiv = document.getElementById("restaurants-container");
        this.dishesContainerDiv = document.getElementById("dishes-container");
        this.headerDiv = document.getElementById("header");
        this.placeYourOrderDiv = document.getElementById("place-your-order");
        this.newOrderDiv = document.getElementById("new-order-div");
        this.lineItemContainerDiv = document.getElementById("line-item-container")
        this.headerCategoriesButton = document.getElementById("header-categories-button")
        this.headerRestaurantsButton = document.getElementById("header-restaurants-button")
        this.headerStartOverButton = document.getElementById("header-start-over-button")
    }

    createEventListeners() {
        this.headerCategoriesButton.addEventListener("click", () => { Category.categoriesNavBar(); });
        this.headerRestaurantsButton.addEventListener("click", () => { Restaurant.restaurantsNavBar(); });
        this.headerStartOverButton.addEventListener("click", () => { location.reload(); });
    }
}