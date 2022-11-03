import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../model/Item';
import ResponseOne from '../../model/ResponseOne';
import './index.scss'

export const ItemDetail = () => {
    const params = useParams();
    const [item, setItem] = useState<Item>({} as Item);


    const id = params.id;
    useEffect(() => {

        axios.get<ResponseOne>(`api/items/${id}`).then((response) => {

            if (response && response.data) {
                setItem(response.data.item);
            }
        });

        //Suprimo advertencia, xq si lo configuro como me lo pide loopea infinito
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    if (!item)
        return (<>Item not found</>)

    return (
        <>
            <div className='detail-container'>
                <div className='img-desc'>
                    <div className='item-picture'>
                        <img className='item-picture' alt='itempicture' src={item.picture} />
                        <h3 className='description-title'>Descripción del producto</h3>
                        <p className='item-description'>{item.description}</p>
                    </div>
                </div>
                <div className='title-price'>
                    <div className='condition-solds'>{item.condition} {item.sold_quantity > 0 ? item.sold_quantity : ''}</div>
                    <div className='item-title'>{item.title}</div>
                    <div className="item-price"> <>${item.price?.amount}</></div>
                    <button type='submit' className='btn-buy'>Comprar</button>
                </div>
            </div>
        </>
    )
}

