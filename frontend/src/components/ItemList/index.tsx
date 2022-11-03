import axios from 'axios'
import ResponseData from '../../model/ResponseData';
import { BreadCrumb } from '../BreadCrumb';
import { ItemCard } from '../ItemCard/index';
import Item from '../../model/Item';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const ItemList = () => {

    const location = useLocation();
    const [categories, setCategories] = useState<string[]>([])
    const [items, setItems] = useState<Item[]>([])


    const searchText = location.search;



    useEffect(() => {
        axios.get<ResponseData>(`api/items${searchText}`).then((response) => {

            if (response && response.data) {
                if (categories !== response.data.categories)
                    setCategories(response.data.categories);
                if (items !== response.data.items)
                    setItems(response.data.items);
            }
        });

        //Suprimo advertencia, xq si lo configuro como me lo pide loopea infinito
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText])


    if (!searchText)
        return (<>Sin texto</>);

    if (!items)
        return (
            < label > No se encontraron Items acorde a la descripcion</label >
        );

    return (
        <>
            < BreadCrumb steps={categories} />
            {
                items.slice(0, 4).map(item => {
                    return <ItemCard key={item.id} item={item} />
                })
            }
        </>
    )



}
