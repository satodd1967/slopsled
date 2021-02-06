class ApiCall {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/api"
    }

    get(url) {
        return fetch(`${this.baseUrl}/${url}`)
            .then(r => r.json())
    }

    post(url, object) {
        return fetch(`${this.baseUrl}/${url}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(resp => resp.json()) 
    }

    update(url, object) {
        return fetch(`${this.baseUrl}/${url}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(object)
        })
        .then(resp => resp.json())
    }

    delete(url) {
        return fetch(`${this.baseUrl}/${url}`, {
        method: 'DELETE',
        })
    }

}