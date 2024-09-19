import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Producto</span>
                </div>
                <div className='header-block'>
                    <span>Descripción</span>
                </div>
                <div className='header-block'>
                    <span>Cantidad</span>
                </div>
                <div className='header-block'>
                    <span>Precio</span>
                </div>
                <div className='header-block'>
                    <span>Remover</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                const {id, name, quantity} = cartItem;
                return(
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => removeItemToCart(cartItem)}>disminuir</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>aumentar</span>
                    </div>
                );
            })}
            <span className='Total'>Total: 0</span>
        </div>
    )
}

export default Checkout;