import Item from '../../model/Item'
import './index.scss'
import freeShipping from './../../assets/ic_shipping.png'
import { Link, useNavigate } from 'react-router-dom'
import { Price } from '../Price'

type ItemCardProps = {
    item: Item
}

export const ItemCard = ({ item }: ItemCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/items/${item.id}`);
    }
    return (
        <>
            <div className='card-container' data-testid='item'>
                <div className='card-item-picture'>
                    <Link to={`/items/${item.id}`}>
                        <img data-testid='item-picture' className='card-picture' alt='itempicture' src={item.picture} />
                    </Link>
                </div>
                <div className='item-detail'>
                    <div className='card-price-section'>
                        <div onClick={handleClick}>
                            <div data-testid='item-price' className='card-price'>
                                <Price itemPrice={item.price} />
                            </div>
                        </div>
                        <div onClick={handleClick}>
                            <div className='card-free-shiping-container'>{item.free_shipping ? <img data-testid='item-shipping' className='card-free-shipping-img' src={freeShipping} alt="free shipping" title="Envio Gratis"></img> : ''}</div>
                        </div>

                    </div>
                    <div onClick={handleClick} data-testid='item-title' className='card-description'>{item.title}</div>
                </div>
                <div data-testid='item-location' className='card-location'>{item.location}</div>

            </div>
        </>
    )
}

