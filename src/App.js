import React, { Component } from 'react'
import { ProductsContextProvider } from './global/ProductsContext'
import { Home } from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { auth, db } from './config/Config'
import { AddProducts } from './components/AddProducts'
import { CartContextProvider } from './global/CartContext'
import { Cart } from './components/Cart'
import { useAuthContext } from "@asgardeo/auth-react";
import { UserInfo } from './components/UserInfo'

function App() {

  const { state } = useAuthContext();

        return (
            <ProductsContextProvider>
              <CartContextProvider>
                    <BrowserRouter>
                        <Switch>
                            {/* home */}
                            <Route exact path='/' component={() => <Home user={state.username}/>} />
                            {/* signup */}
                            <Route path="/signup" component={Signup} />
                            {/* login */}
                            <Route path="/login" component={Login} />
                            {/* add products */}
                            <Route path="/addproducts" component={AddProducts} />
                            <Route path="/cartproducts" component={() => <Cart user={state.username} />} />
                            <Route path="/userinfo" component={UserInfo} />
                        </Switch>
                    </BrowserRouter>
              </CartContextProvider>
            </ProductsContextProvider>
        )
}

export default App
