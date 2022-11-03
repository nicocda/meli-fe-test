import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ResponseOne from '../../model/ResponseOne';
import { ItemCard } from '../ItemCard';

export const ItemDetail = () => {
    const params = useParams();
    const [item, setItem] = useState<ResponseOne>({} as ResponseOne);


    const id = params.id;
    useEffect(() => {

        axios.get<ResponseOne>(`api/items/${id}`).then((response) => {

            if (response && response.data) {
                setItem(response.data);
            }
        });

        //Suprimo advertencia, xq si lo configuro como me lo pide loopea infinito
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    if (!item || !item.item)
        return (<>Item not found</>)

    return (
        <>
            {<ItemCard item={item.item} />}
        </>
    )
}
