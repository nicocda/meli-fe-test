import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../model/Item';
import ResponseOne from '../../model/ResponseOne';
import { BreadCrumb } from '../BreadCrumb';
import { Price } from '../Price';
import './index.scss'

const TranslateCondition = (condition: string): string => {
    //Condition has 2 posible valors in all test that i did, new and used

    if (condition === 'new')
        return 'Nuevo';
    if (condition === 'used')
        return 'Usado';
    //Si no es uno de esos devuelve vacio
    return '';
}

export const ItemDetail = () => {
    const params = useParams();
    const [item, setItem] = useState<Item>({} as Item);
    const [categories, setCategories] = useState<string[] | null>(null);
    const [loading, setLoading] = useState(true);

    const id = params.id;
    useEffect(() => {

        axios.get<ResponseOne>(`api/items/${id}`).then((response) => {

            if (response && response.data) {
                setItem(response.data.item);
                setCategories(response.data.categories);

            }
        })
            .catch(error => {

            })
            .finally(() => setLoading(false));

    }, [id])

    if (loading)
        return (<>Cargando...</>)

    if (!item)
        return (<>Item not found</>)

    return (
        <>
            < BreadCrumb steps={categories} />
            <div className='detail-container'>
                <div className='img-desc'>
                    <img className='item-picture' alt='itempicture' src={item.picture} />
                    <h3 className='description-title'>Descripción del producto</h3>
                    <p className='item-description'>{item.description}</p>

                </div>
                <div className='title-price'>
                    <div className='condition-solds'>{TranslateCondition(item.condition)} - {item.sold_quantity > 0 ? item.sold_quantity : ''} vendidos</div>
                    <div className='item-title'>{item.title}</div>
                    <div className="item-price">
                        <Price itemPrice={item.price} showCurrency={false} />
                    </div>
                    <button type='submit' className='btn-buy'>Comprar</button>
                </div>
            </div>
        </>
    )
}

