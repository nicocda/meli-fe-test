import GetItemResultBase from "./GetItemResultBase";

export interface GetItemResponse extends GetItemResultBase {
    sold_quantity: number,
    category_id: string,
    pictures: { url: string }[]
}
