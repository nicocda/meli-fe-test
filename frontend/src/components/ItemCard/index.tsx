import Item from '../../model/Item'
import './index.scss'

type ItemCardProps = {
    item: Item
}
export const ItemCard = ({ item }: ItemCardProps) => {
    return (
        <>
            <div className='card-container'>
                <a href={`/api/items/${item.id}`}>
                    <div className='card-picture'>
                        <img data-testid='item-picture' className='card-picture' alt='itempicture' src={item.picture} />
                    </div>
                </a>
                <div className='item-detail'>
                    <div className='card-price-section'>
                        <a href={`/api/items/${item.id}`}>
                            <div data-testid='item-price' className='card-price'>$ {Intl.NumberFormat(item.price.currency).format(item.price.amount)} {item.price.currency}</div>
                        </a>
                        <a href={`/api/items/${item.id}`}>
                            <div data-testid='item-shipping' className='card-free-shiping-container'>{item.free_shipping ? <img className='card-free-shipping-img' src='https://cdn-icons-png.flaticon.com/512/6831/6831000.png' alt="free shipping"></img> : ''}</div>
                        </a>

                    </div>
                    <div data-testid='item-title' className='card-description'>{item.title}</div>
                </div>
                <div data-testid='item-location' className='card-location'>{item.location}</div>

            </div>
        </>
    )
}

