import ItemPrice from './ItemPrice'

export default interface Item {
    "id": String,
    "title": String,
    "price": ItemPrice,
    "picture": String,
    "condition": String,
    "free_shipping": Boolean
}