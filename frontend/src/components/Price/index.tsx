import ItemPrice from '../../model/ItemPrice';
import './index.scss'

export const Price = ({ itemPrice, showCurrency = true }: { itemPrice: ItemPrice, showCurrency?: boolean }) => {


    const { amount, decimals, currency } = itemPrice;
    return (
        <>
            $ <div className="price-lef-part">{(amount + "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            <div className="price-right-part">{String(decimals ? decimals : 0).padStart(2, '0')} </div>
            <div className='price-currency' data-testid='price-currency'> {showCurrency && currency && currency}</div>
        </>
    )
}
