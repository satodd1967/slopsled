class Service {

    createImage(objectImage, width, eventListenerFunction, id) {
        let image = document.createElement("img")
        image.src = `${objectImage}`;
            image.style.width = `${width}`;
            image.addEventListener("click", () => { eventListenerFunction(id); });
        return image
    }
}