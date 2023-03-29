import React, {useContext, useState} from 'react'
import logo from '../images/kfone.png'
import { Link } from 'react-router-dom'
import { auth } from '../config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { CartContext } from '../global/CartContext'
import { useAuthContext } from "@asgardeo/auth-react";
import jwt_decode from 'jwt-decode'


export const Navbar = ({ user }) => {

  const { state , getBasicUserInfo, signOut, signIn } = useAuthContext();

  const {totalQty} = useContext(CartContext);

  const [isAdmin, setIsAdmin] = useState(null);

  const Sample = () => {
    console.log("Sample component");
    let { state, getAccessToken } = useAuthContext();
  
    if (!state?.isAuthenticated) {
      console.log("User is not authenticated");
      return;
    }
  
    (async () => {
      const token = await getAccessToken();
      const decodedToken = jwt_decode(token);
      console.log(decodedToken.groups);
      setIsAdmin(false);
      if(decodedToken.groups.includes('admin')){
         setIsAdmin(true);
        console.log("After: " + isAdmin);
      }
    })();
}

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
            <Sample />
            <div className='leftside'>
                <img src={logo} alt="" />
            </div>
            {!state.isAuthenticated && !isAdmin && <div className='rightside'>
                {/* <span><Link to="signup" className='navlink'>SIGN UP</Link></span> */}
                <span><button className='logout-btn' onClick={ () => signIn() }>Login</button></span>
                
            </div>}
            {state.isAuthenticated && !isAdmin && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <div className='relative'>
                  <span className='no-of-products'>{totalQty}</span>
                </div>
                <span><button className='logout-btn' onClick={ () => signOut() }>Logout</button></span>
            </div>}

            {state.isAuthenticated && isAdmin && <div className='rightside'>
                <span><Link to="/addproducts" className='navlink'>Admin panel</Link></span>
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