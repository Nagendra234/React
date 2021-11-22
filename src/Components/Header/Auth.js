import { Badge } from '@material-ui/core'
import { AddShoppingCart, ExitToApp } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import routers from '../../routers'
import { CartContext } from '../context/cardContext'

export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: sessionStorage.getItem('token'),
            login: false,
        }
    }

  componentDidMount=() => {
    const { token } = this.state
    this.setState({
      login: !!token,
    })
  }

  clearData=() => {
    sessionStorage.clear()
    window.location.reload()
  }

    render() {
        const { login } = this.state
        return (
          <CartContext.Consumer>
            {({ cart }) => (
              <>
                {login ? routers
            .filter((x) => x.isAuth)
            .map((x) => (
              <li key={x.path}>
                <Link to={x.path}>{x.tittle}</Link>
              </li>
            )) : routers
            .filter((x) => !x.isAuth)
            .map((x) => (
              <li key={x.path}>
                <Link to={x.path}>{x.tittle}</Link>
              </li>
))}
                {login ? (
                  <>
                    <Link to="cart" style={{ display: 'flex', justifyContent: 'center' }}>
                      <Badge
                        badgeContent={cart.reduce((item, a) => item + a.quantity, 0)}
                        color="error"
                      >
                        <AddShoppingCart />
                      </Badge>
                    </Link>
                    <Link to="/login" style={{ display: 'flex', justifyContent: 'center', padding: 10 }} onClick={this.clearData}><ExitToApp /></Link>
                  </>
) : null}
              </>
          )}
          </CartContext.Consumer>

        )
    }
}
