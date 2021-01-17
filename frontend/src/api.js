class ApiObject {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000"
    }

    get(url) {
        fetch(this.baseUrl + url)
    }
}