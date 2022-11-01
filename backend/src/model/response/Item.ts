import ItemPrice from './ItemPrice'

export default interface Item {
    id: string,
    title: string,
    price: ItemPrice,
    picture: string,
    condition: string,
    free_shipping: boolean
}