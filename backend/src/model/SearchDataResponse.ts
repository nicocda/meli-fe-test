import GetItemResultBase from "./GetItemResultBase"

export interface SearchDataResponse {
    site_id: string,
    query: string,
    results: Result[],
    filters: ResultFilter[]
}

export interface Result extends GetItemResultBase {
    thumbnail: string,
    address: {
        city_name: string
    }
}

interface ResultFilter {
    id: string,
    name: string,
    type: string,
    values: {
        id: string,
        name: string,
        path_from_root: {
            id: string,
            name: string
        }[]
    }[]
}

// export interface ResultPrice {
//     amount: number,
//     currency_id: string,
// }
