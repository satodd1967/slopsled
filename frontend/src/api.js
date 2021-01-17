class ApiCall {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000"
    }

    get(url) {
        return fetch(this.baseUrl + url)
            .then(r => r.json())
    }
}