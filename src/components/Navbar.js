import React, {useContext} from 'react'
import logo from '../images/ecommerce.svg'
import { Link } from 'react-router-dom'
import { auth } from '../config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../global/CartContext'
import { useAuthContext } from "@asgardeo/auth-react";


export const Navbar = ({ user }) => {

  const { state , getBasicUserInfo, signOut, signIn } = useAuthContext();


  const {totalQty} = useContext(CartContext);

    //  const history = useHistory();

    // // handle logout
    // const handleLogout = () => {
    //     auth.signOut().then(() => {
    //         history.push('/login');
    //     })
    // }

    console.log(getBasicUserInfo());

    return (
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt="" />
            </div>
            {!state.isAuthenticated && <div className='rightside'>
                {/* <span><Link to="signup" className='navlink'>SIGN UP</Link></span> */}
                <span><button className='logout-btn' onClick={ () => signIn() }>Login</button></span>
                
            </div>}
            {state.isAuthenticated && <div className='rightside'>
                <span><Link to="userinfo" className='navlink'>User info</Link></span>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <div className='relative'>
                  <span className='no-of-products'>{totalQty}</span>
                </div>
                <span><button className='logout-btn' onClick={ () => signOut() }>Logout</button></span>
            </div>}
        </div>
    )
}