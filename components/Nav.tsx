import Link from '../node_modules/next/link.js';
import Search from './Search';
import './styles/NavStyle.js';
import { NavStyle } from './styles/NavStyle.js';
import useUser from './User';
import SignOut from './SignOut';
import { useDispatch, useSelector } from 'react-redux'
import { setShowCart } from '../store/userSlice';
import { useState } from 'react';
const Nav = () => {
    const { getUser, getCartCount } = useUser();
    const user = getUser();
    const showCart = useSelector((state: any) => state.user.showCart);
    const [showAccount, setShowAccount] = useState(false);
    const dispatch = useDispatch();

    return (
        <NavStyle>
            <Search></Search>
            <ul id="nav-right">
                {!user && <li className='account-sign'><Link href='/sign-in'>Sign In!</Link></li>}
                {!user && <li className='account-sign'><Link href='/sign-up'>Sign Up!</Link></li>}
                {user && <li className='account'>
                    <button className='account-button' onClick={() => setShowAccount(!showAccount)}>Account</button>
                    {showAccount && <ul className='account-details'>
                        <button className="close-account-button" onClick={() => setShowAccount(!showAccount)}>&#10006;</button>
                        <li className='account-welcome'>こんにちは、<b>{user.name}</b>! &#10024;</li>
                        <li onClick={() => setShowAccount(!showAccount)} className='account-order-history'>
                            &#128212; <Link href={`order-history?userId=${user.id}`}>Order history</Link>
                        </li>
                        <li className='signout'> <SignOut></SignOut></li>
                    </ul>}
                </li>}
                {user && <li><button className='cart-button' onClick={() => dispatch(setShowCart(!showCart))}><span>{getCartCount()}</span></button></li>}
            </ul>
        </NavStyle>
    )
};
export default Nav;