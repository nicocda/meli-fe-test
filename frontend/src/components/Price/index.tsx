import ItemPrice from '../../model/ItemPrice';
import './index.scss'

export const Price = ({ itemPrice, showCurrency = true }: { itemPrice: ItemPrice, showCurrency?: boolean }) => {


    const { amount, decimals, currency } = itemPrice;
    return (
        <>
            $ <div className="price-left-part" data-testid='price-left-part'>{(amount + "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            {/* <div className="price-right-part">{String(decimals ? decimals : 0).padStart(2, '0')} </div> */}


            <div className="price-right-part" data-testid='price-right-part'>{decimals ? String(decimals).padStart(2, '0') : ''} </div>
            <div className='price-currency' data-testid='price-currency'> {showCurrency && currency && currency}</div>
        </>
    )
}
