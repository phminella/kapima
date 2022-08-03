import { CartStyle } from './styles/CartStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setShowCart } from '../store/userSlice';
import useUser from '../components/User';
import CartProduct from './CartProduct';
import Checkout from './Checkout';
const Cart = () => {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.user.showCart);
    const { getCart, getCartTotal } = useUser();
    const cart = getCart();
    if (!cart) return null;
    return (
        <CartStyle className={!showCart ? "hidden" : null}>
            <button className="close-cart-button" onClick={() => dispatch(setShowCart(!showCart))}>&#10006;</button>
            <p className='cart-description'>You have {cart.length} product(s) in your cart!</p>
            {cart.length > 0 &&
                <>
                    <ul>
                        {cart.map((cartProduct) =>
                            (<CartProduct key={cartProduct.id} cartProduct={cartProduct}></CartProduct>))}
                    </ul>
                    <div className='total-amount'> Total amount to pay: <span>${getCartTotal()}</span> </div>
                    <Checkout></Checkout>
                </>}
            <p className='project-capybara'>Powered by <span>project:capybara</span> <img src='../img/projectcapybara-logo.png' /></p>
        </CartStyle>)
}
export default Cart;