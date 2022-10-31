export interface SearchData {
    "site_id": String,
    "query": String,
    "results": Array<Result>,
}

export interface Result {
    id: String,
    title: String,
    price: String,
    condition: String,
    thumbnail: String,
    shipping: {
        free_shipping: Boolean,
    },
}