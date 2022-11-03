import Author from "./Author";
import Item from "./Item";

export default interface ResponseData {
    author: Author,
    categories: string[],
    items: Item[]
}