import GetItemResultBase from "./GetItemResultBase";

export interface GetItemResponse extends GetItemResultBase {
    sold_quantity: number,
    pictures: { url: string }[]
}
