
export default interface GetItemResultBase {
    id: string,
    title: string,
    price: number,
    currency_id: string,
    condition: string,
    thumbnail: string,
    shipping: {
        free_shipping: boolean,
    }
}