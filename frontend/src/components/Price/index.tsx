import React from 'react'
import ItemPrice from '../../model/ItemPrice';
import { PriceFormat } from '../PriceFormat';
import './index.scss'

export const Price = (itemPrice: ItemPrice) => {

    const { left, right } = PriceFormat({ price: itemPrice.amount, decimals: 2 })!;

    return (
        <>
            $ <div className="price-lef-part">{left}</div><div className="price-right-part">{right} </div> <div className='price-currency'> {itemPrice.currency ? ' ' + itemPrice.currency : ''}</div>
        </>
    )
}
