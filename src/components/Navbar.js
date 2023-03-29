import React, {useContext, useState} from 'react'
import logo from '../images/kfone.png'
import { Link } from 'react-router-dom'
import { auth } from '../config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { CartContext } from '../global/CartContext'
import { useAuthContext } from "@asgardeo/auth-react";
import jwt_decode from 'jwt-decode'


function signUpClick(){
  window.location.href='https://accounts.asgardeo.io/t/himeshdevinda/accountrecoveryendpoint/register.do?client_id=5IT1_bqbYco8iJ2UfXs2FpCbTnca&code_challenge=nknn6SerjgcvU36j015w863TSnC_b5uH45P7XXG6Z20&code_challenge_method=S256&commonAuthCallerPath=%2Ft%2Fhimeshdevinda%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_mode=query&response_type=code&scope=openid+profile+groups&state=request_0&sessionDataKey=60510a04-db57-41dd-92aa-39bd72a0ea50&relyingParty=5IT1_bqbYco8iJ2UfXs2FpCbTnca&type=oidc&sp=hackathon-app&isSaaSApp=false&authenticators=GoogleOIDCAuthenticator%3AGoogle%3BFacebookAuthenticator%3AFacebook%3BBasicAuthenticator%3ALOCAL%3BMagicLinkAuthenticator%3ALOCAL&reCaptcha=true&reCaptchaResend=true&callback=https%3A%2F%2Faccounts.asgardeo.io%3A443%2Ft%2Fhimeshdevinda%2Fauthenticationendpoint%2Flogin.do%3Fclient_id%3D5IT1_bqbYco8iJ2UfXs2FpCbTnca%26code_challenge%3Dnknn6SerjgcvU36j015w863TSnC_b5uH45P7XXG6Z20%26code_challenge_method%3DS256%26commonAuthCallerPath%3D%2Ft%2Fhimeshdevinda%2Foauth2%2Fauthorize%26forceAuth%3Dfalse%26passiveAuth%3Dfalse%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A3000%2F%26response_mode%3Dquery%26response_type%3Dcode%26scope%3Dopenid+profile+groups%26state%3Drequest_0%26sessionDataKey%3D60510a04-db57-41dd-92aa-39bd72a0ea50%26relyingParty%3D5IT1_bqbYco8iJ2UfXs2FpCbTnca%26type%3Doidc%26sp%3Dhackathon-app%26isSaaSApp%3Dfalse%26authenticators%3DGoogleOIDCAuthenticator%3AGoogle%3BFacebookAuthenticator%3AFacebook%3BBasicAuthenticator%3ALOCAL%3BMagicLinkAuthenticator%3ALOCAL%26reCaptcha%3Dtrue%26reCaptchaResend%3Dtrue'
}

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
                <span><button className='logout-btn' onClick = { signUpClick }>Signup</button></span>
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