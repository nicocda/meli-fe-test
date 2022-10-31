export interface SearchDataResponse {
    site_id: string,
    query: string,
    results: Array<Result>,
}

export interface Result {
    id: string,
    title: string,
    price: number,
    prices: Array<ResultPrice>
    condition: string,
    thumbnail: string,
    shipping: {
        free_shipping: boolean,
    },
    category_id: string
}

export interface ResultPrice {
    amount: number,
    currency_id: string,
}
