import axios from 'axios'
import ItemPrice from '../model/response/ItemPrice'
import ResponseData from '../model/response/ResponseData'
import { ResultPrice, SearchDataResponse } from '../model/SearchDataResponse'
import configAuthor from '../config/config.author'

export const getItems = async (text: string | null): Promise<ResponseData> => {

    if (!text) throw 'Ingrese un parametro de búsqueda';

    const response = await axios.get<SearchDataResponse>('search?q=' + text);
    return dataTransform(response.data);
}

const dataTransform = (data: SearchDataResponse): ResponseData => {
    if (!data || !data.results)
        return {
            author: configAuthor.author,
            categories: [], items: []
        };
    return {
        author: configAuthor.author,
        categories: data.results.map(r => r.category_id),
        items: data.results.map((m) => {
            return {
                id: m.id,
                title: m.title,
                price: priceTransform(m.prices.find(p => p.amount === m.price) as ResultPrice),
                picture: m.thumbnail,
                condition: m.condition,
                free_shipping: m.shipping?.free_shipping
            }
        })
    }
}
const priceTransform = (c: ResultPrice): ItemPrice => (
    {
        currency: c.currency_id,
        amount: c.amount,
        decimals: 0
    }
)

