import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.js'


import { 
    CartDropDownContainer,
    EmptyMessage ,
    CartItems,
 } from './cart-dropdown.styles.js';
const CartDropdown =()=> {
    const {cartItems} = useContext(CartContext);
    const navigate  = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
        
    };
    return (
        <CartDropDownContainer >
             <CartItems>
                {
                    cartItems.length ?   (cartItems.map((item) =>( <CartItem key={item.id} cartItem={item} />
                    ))) : ( 
                        <EmptyMessage>Your cart is empty uwu</EmptyMessage>
                    )
                }
            
                
       </CartItems>
            <Button onClick={goToCheckOutHandler} >checkout</Button>
        </CartDropDownContainer>
    );
};
export default CartDropdown;