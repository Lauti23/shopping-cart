import { useCart } from '../../hooks/useCart'
import './Cart.css'
import { useId } from 'react'


const CartItem = ({ thumbnail, title, price, quantity, addToCart, description }) => {
    
    return (
        <li className='cartItem'>
            <img
                src={thumbnail}
                alt={description}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Cant: {quantity}
                </small>
                <button className='addQuantity' onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}


const Cart = () => {

    const cartBtnId = useId()
    
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className='cart-btn' htmlFor={cartBtnId}>
                Cart
            </label>
            <input id={cartBtnId} type='checkbox' hidden />

            <aside className='cartBody'>
                <ul>
                    {
                        cart.map(prod => (
                            <CartItem 
                                key={prod.id}
                                addToCart={() => addToCart(prod)}
                                {...prod}
                            />
                        ))
                    }
                </ul>
                <button className='clear-cart' onClick={clearCart}>
                    Limpiar Carrito
                </button>
            </aside>    
        </>
    )
}

export default Cart