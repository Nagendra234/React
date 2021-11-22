import React, { Component } from 'react'
import './style.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Header from './Components/Header/Header'
import routers from './routers'
import CartProvider from './Components/context/cardContext'
import Cart from './Components/Pages/Cart'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthRequired: false,
    }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token');
    this.setState({
      isAuthRequired: !!token,
    });
  }

  render() {
    const { isAuthRequired } = this.state;
    return (
      <>
        <CssBaseline />
        <CartProvider>
          <BrowserRouter>
            <Header routes={routers} />
            <main>
              <Switch>
                {!isAuthRequired
                && routers
                  .filter((x) => !x.isAuth)
                  .map(({ ...rest }) => <Route key={rest.path} {...rest} />)}
                {isAuthRequired
                && routers
                  .filter((x) => x.isAuth)
                  .map(({ ...rest }) => <Route key={rest.path} {...rest} />)}
                <Route path="/cart" component={Cart} />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </main>
          </BrowserRouter>
        </CartProvider>
      </>
    )
}
}

export default App

