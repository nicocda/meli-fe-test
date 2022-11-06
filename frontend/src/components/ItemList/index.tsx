import { BreadCrumb } from '../BreadCrumb';
import { ItemCard } from '../ItemCard/index';
import Item from '../../model/Item';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Error } from './../Error/index'
import { Log } from '../../Helper/Log';
import { Loading } from '../Loading/index'
import { getAll } from '../../Helper/apiService';
import './index.scss'

export const ItemList = () => {

    const [query] = useSearchParams();
    const [categories, setCategories] = useState<string[]>([])
    const [items, setItems] = useState<Item[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const ClearAll = () => {
        setCategories([]);
        setItems([]);
        setLoading(false);
        Log("Clear 'cause is empty")
    }

    const searchText = query.get('search');
    useEffect(() => {

        //Antes de que llegue la informacion, para que no renderize cosas a medias cargo un loading
        setLoading(true);

        //Si no hay texto para buscar limpio los campos
        if (!searchText) {
            ClearAll();
        }

        if (searchText)
            getAll(searchText).then((response) => {

                if (response && response.data) {
                    if (categories !== response.data.categories)
                        setCategories(response.data.categories);
                    if (items !== response.data.items)
                        setItems(response.data.items);
                    Log(response.data.items.length + ' items were set');
                }
                else {
                    ClearAll();
                }
            }).catch(err => {
                setError(err.message);
            }).finally(() => {
                setLoading(false);
            });

        //Suprimo advertencia, xq si lo configuro como me lo pide loopea infinito
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText, error])

    if (loading)
        return (<Loading />)

    if (!searchText)
        return (<Error error={'Ingrese un parametro de busqueda'} />)

    if (error)
        return (<Error error={error} />)

    if (items && items.length)
        return (
            <div className='item-list-container' data-testid='item-list-container'>
                {categories && < BreadCrumb steps={categories} />}
                <div className='cards-container'>
                    {
                        //Solo muestra los primeros 4 elementos
                        items.slice(0, 4).map(item => {
                            return <ItemCard key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        )


    return (<Error error={' No se encontraron Items acorde a la descripcion'} />);
}

