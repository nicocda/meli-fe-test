import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../../model/Item';
import ResponseOne from '../../model/ResponseOne';
import { BreadCrumb } from '../BreadCrumb';
import { Loading } from '../Loading';
import { Price } from '../Price';
import './index.scss'
import { Error } from '../Error'

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
    const [item, setItem] = useState<Item | null>(null);
    const [categories, setCategories] = useState<string[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const id = params.id;
    useEffect(() => {

        axios.get<ResponseOne>(`api/items/${id}`)
            .then((response) => {

                if (response && response.data) {
                    setItem(response.data.item);
                    setCategories(response.data.categories);
                }
                else {
                    setItem(null);
                    setCategories([]);
                    setLoading(false);
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
            .finally(() =>
                setLoading(false)
            );

    }, [id])

    if (loading)
        return (<Loading />)

    if (errorMessage)
        return (<Error error={errorMessage} />)

    if (item)
        return (
            <>
                <div className='detail-container'>
                    < BreadCrumb steps={categories} />
                    <div className='detail-inside-container'>
                        <div className='first-row'>
                            <img className='item-picture' alt='itempicture' src={item.picture} />

                            <div className='title-price'>
                                <div className='condition-solds'>{TranslateCondition(item.condition)} - {item.sold_quantity > 0 ? item.sold_quantity : ''} vendidos</div>
                                <div className='item-title'>{item.title}</div>
                                <div className="item-price">
                                    <Price itemPrice={item.price} showCurrency={false} />
                                </div>
                                <button type='submit' className='btn-buy' onClick={() => alert('Not implemented yet')}>Comprar</button>
                            </div>
                        </div>
                        <div className='description'>
                            <h3 className='description-title'>Descripción del producto</h3>
                            <p className='item-description'>{item.description || 'not description'}</p>
                        </div>


                    </div>
                </div>
            </>
        )


    return (<Error error='Item not found' />)
}

