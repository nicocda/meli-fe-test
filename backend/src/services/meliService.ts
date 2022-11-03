
import axios from 'axios'
import ResponseData from '../model/response/ResponseData'
import { SearchDataResponse } from '../model/SearchDataResponse'
import configAuthor from '../config/config.author'
import { response } from 'express'
import ResponseOne from '../model/response/ResponseOne'
import { GetItemResponse } from '../model/GetItemResponse'
import GetItemResultBase from '../model/GetItemResultBase'
import Item from '../model/response/Item'


export const getItems = async (text: string): Promise<ResponseData> => {
    console.log('Api Service - getItems')

    console.log("axios base: " + axios.defaults.baseURL)
    const response = await axios.get<SearchDataResponse>('sites/MLA/search', { params: { q: text } });

    if (!response)
        throw { response: { statusText: 'External server return empty response', status: 500 } };

    if (!response.data)
        throw { response: { statusText: 'External server return empty data', status: 500 } };


    return dataTransform(response.data);

}


export const getOneItem = async (id: string): Promise<ResponseOne> => {
    console.log('Api Service - getOneItem')

    console.log("axios base: " + axios.defaults.baseURL)

    if (!id)
        throw { response: { statusText: 'Bad Request - id is empty', status: 400 } };

    const responseItem = await axios.get(`items/${id}`);

    Promise.all([
        axios.get(`items/${id}`),
        axios.get<{ plain_text: string }>(`items/${id}/description`),
    ]).then((responses) => {

    })

    if (!response)
        throw { response: { statusText: 'External server return empty response', status: 500 } };

    if (!responseItem.data)
        throw { response: { statusText: 'External server return empty data', status: 500 } };

    const item = responseItem.data as GetItemResponse;

    const responseDescription = await axios.get<{ plain_text: string }>(`items/${id}/description`);

    if (!responseDescription)
        throw { response: { statusText: 'External server return empty description response', status: 500 } };

    if (!responseDescription.data)
        throw { response: { statusText: 'External server return empty description data', status: 500 } };


    const responseCategories = await axios.get<{ path_from_root: { id: string, name: string }[] }>(`categories/${item.category_id}`);


    const categoriesLikeStringArray = responseCategories.data.path_from_root ? responseCategories.data.path_from_root.map(p => p.name) : null
    //if not throw error,  map the item  
    // and assign his description
    return itemTransform(item, responseDescription.data.plain_text, categoriesLikeStringArray);
}


const dataTransform = (data: SearchDataResponse): ResponseData => {

    if (!data.results)
        throw { response: { statusText: 'No content', status: 204 } };

    let categories = [] as string[];
    if (data.filters) {
        const filter = data.filters.find((f) => f.id === 'category');
        if (filter && filter.values && filter.values.length > 0)
            if (filter.values[0].path_from_root)
                categories = filter.values[0].path_from_root.map(path => {
                    return path.name;
                })
    }

    const author = configAuthor;
    const items = data.results.map((item) => {

        return {
            ...baseItemTransform(item),
            picture: item.thumbnail,
            location: item.address?.city_name
        }
    });
    return {
        author: author,
        categories: categories,
        items: items
    }
}

const itemTransform = (item: GetItemResponse, description: string, categories: string[] | null): ResponseOne => {

    const author = configAuthor;

    return {
        author: author,
        item: {
            ...baseItemTransform(item),
            sold_quantity: item.sold_quantity,
            description: description,
            picture: item.pictures ? item.pictures[0].url : ''
        },
        categories: categories
    }

}

const baseItemTransform = (item: GetItemResultBase): any => {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: item.price.toString().includes('.') ? item.price.toString().split('.')[1].length : 0
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping?.free_shipping,

        //defaults

        location: '',
        sold_quantity: -1,
        description: ''
    }
}
