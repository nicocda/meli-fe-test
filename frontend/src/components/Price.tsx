import React from 'react'
import ItemPrice from '../model/ItemPrice'
import { PriceFormat } from './PriceFormat';

export const Price = (itemPrice: ItemPrice) => {

    const { left, right } = PriceFormat({ price: itemPrice.amount, decimals: itemPrice.decimals })!;

    return (
        <>
            $ <div className="price-lef-part">{left}</div><div className="price-right-part">{right} </div> {itemPrice.currency ? ' ' + itemPrice.currency : ''}
        </>
    )
}
