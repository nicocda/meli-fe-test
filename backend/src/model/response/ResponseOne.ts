import Author from "./Author";
import Item from "./Item";

export default interface ResponseOne {
    author: Author,
    item: Item,
    categories: string[] | null
}