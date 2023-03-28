import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { AddProducts } from './components/AddProducts'
import { ProductscontextProvider } from './global/ProductsContext'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { auth, db } from './config/Config'

export class App extends Component {

  state =  {
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user){
        db.collection('SignedUpUsersData').doc(user.uid).then(snapshot => {
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user : null
        })
      }
    })
  }

  render() {
    return (
      <ProductscontextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => <Home user={this.state.user} />} />
            <Route path='/addproducts' component={AddProducts} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </ProductscontextProvider>

    )
  }
}

export default App