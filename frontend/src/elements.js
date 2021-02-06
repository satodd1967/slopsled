class Element {
    constructor (){
        this.categoriesContainerDiv = document.getElementById("categories-container");
        this.restaurantsContainerDiv = document.getElementById("restaurants-container");
        this.dishesContainerDiv = document.getElementById("dishes-container");
        this.headerDiv = document.getElementById("header");
        this.placeYourOrderDiv = document.getElementById("place-your-order");
        this.newOrderDiv = document.getElementById("new-order-div");
        this.lineItemContainerDiv = document.getElementById("line-item-container");
        this.headerCategoriesButton = document.getElementById("header-categories-button");
        this.headerRestaurantsButton = document.getElementById("header-restaurants-button");
        this.headerStartOverButton = document.getElementById("header-start-over-button");
        this.startImageDiv = document.getElementById("start-image");
        this.startImage = document.getElementById("start-image-pic")
        this.lineItemsHeaderDiv = document.getElementById("line-items-header")
        this.orderDiv = document.getElementById("order")
        this.wrapper = document.getElementById("wrapper")
        this.customerFormBox = document.getElementById("customer-form-box")
        this.customerFormDiv = document.getElementById("customer-form-div")
        this.customerForm = document.createElement("form")
        this.customerFormHeader = document.createElement("h4")
        this.customerThankYou = document.createElement("h4")
    }

    createEventListeners() {
        this.headerCategoriesButton.addEventListener("click", () => { Category.categoriesNavBar(); });
        this.headerRestaurantsButton.addEventListener("click", () => { Restaurant.restaurantsNavBar(); });
        this.headerStartOverButton.addEventListener("click", () => { location.reload(); });
        this.startImage.addEventListener("click", startOrder)
        window.addEventListener("beforeunload", Customer.checkDelete)
    }
}