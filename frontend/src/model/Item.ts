

export default interface Item {
    id: string,
    title: string,
    price: ItemPrice,
    picture: string,
    condition: string,
    free_shipping: boolean,
    location: string,
    sold_quantity: number,
    description: string
}

interface ItemPrice {
    currency: string,
    amount: number,
    decimals: number
}