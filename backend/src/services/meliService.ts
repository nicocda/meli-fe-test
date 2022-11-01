import axios from 'axios'
import ItemPrice from '../model/response/ItemPrice'
import ResponseData from '../model/response/ResponseData'
import { SearchDataResponse } from '../model/SearchDataResponse'
import configAuthor from '../config/config.author'


export const getItems = async (text: string): Promise<ResponseData> => {
    console.log('Api Service')

    console.log("base: " + axios.defaults.baseURL)
    try {

        const response = await axios.get<SearchDataResponse>('search', { params: { q: text } });
        return dataTransform(response.data);
    }
    catch (ex) {
        console.log("ex. " + ex)
        throw JSON.stringify(ex)
    }

}


export const getOneItem = async (id: string): Promise<ResponseData> => {
    console.log('Api Service')

    console.log("base: " + axios.defaults.baseURL)
    try {

        const response = await axios.get('/', { params: { id: id } });
        console.log("Response. " + response.data)
        return dataTransform(response.data as SearchDataResponse);
    }
    catch (ex) {
        console.log("ex. " + ex)
        throw JSON.stringify(ex)
    }

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
                price: {
                    currency: m.currency_id,
                    amount: m.price,
                    decimals: 0
                },
                picture: m.thumbnail,
                condition: m.condition,
                free_shipping: m.shipping?.free_shipping
            }
        })
    }
}


