import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { AddProducts } from './components/AddProducts'
import { ProductscontextProvider } from './global/ProductsContext'

export class App extends Component {
  render() {
    return (
      <ProductscontextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/addproducts' component={AddProducts} />
          </Switch>
        </BrowserRouter>
      </ProductscontextProvider>

    )
  }
}

export default App