import axios from 'axios'
import ResponseData from '../../model/ResponseData';
import { BreadCrumb } from '../BreadCrumb';
import { ItemCard } from '../ItemCard/index';
import Item from '../../model/Item';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Error } from './../Error/index'
import { Log } from '../../Helper/Log';


export const ItemList = () => {

    const location = useLocation();
    const [categories, setCategories] = useState<string[]>([])
    const [items, setItems] = useState<Item[]>([])
    const [loading, setLoading] = useState(true);


    const searchText = location.search;



    useEffect(() => {
        axios.get<ResponseData>(`api/items${searchText}`).then((response) => {

            if (response && response.data) {
                if (categories !== response.data.categories)
                    setCategories(response.data.categories);
                if (items !== response.data.items)
                    setItems(response.data.items);
            }
        }).catch(error => {
            return (<Error error={error.message} />)
        }).finally(() => {
            setLoading(false);
        });

        //Suprimo advertencia, xq si lo configuro como me lo pide loopea infinito
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText])

    if (loading)
        return (<>Cargando...</>)

    if (!searchText)
        return (<Error error={'Sin Texto'} />)

    if (!items)
        return (<Error error={' No se encontraron Items acorde a la descripcion'} />);

    return (
        <div className='item-list-container'>
            < BreadCrumb steps={categories} />
            {
                //Solo muestra los primeros 4 elementos
                items.slice(0, 4).map(item => {
                    return <ItemCard key={item.id} item={item} />
                })
            }
        </div>
    )
}

