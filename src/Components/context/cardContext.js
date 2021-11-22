import React, { createContext, Component } from 'react';
import axiosInstance from '../axois/AxoisIns';

export const CartContext = createContext();

export default class CartProvider extends Component {
  state = {
    cart: [],
  };

  async componentDidMount() {
    try {
      const res = await axiosInstance.get('660/cart'); // 1 sec
      this.setState({
        cart: res,
      });
    } catch (error) {
      //   this.setState({
      //     error,
      //   });
    }
  }

  addToCart = async (item) => {
    this.setState({
      check: true,
    })
    const res = await axiosInstance.post('660/cart', {
      ...item,
      quantity: 1,
    })
    this.setState(({ cart }) => ({
      cart: [...cart, res],
      }))
      this.setState({
        check: false,
      })
  }

  updatedCart = async (item) => {
    const res = await axiosInstance.put(`660/cart/${item.id}`, item)
    this.setState(({ cart }) => {
      const index = cart.findIndex((x) => x.id === item.id)
      return {
        cart: [...cart.slice(0, index), res, ...cart.slice(index + 1)],
      }
    })
  }

  deleteCart = async (item) => {
    console.log(item)
     await axiosInstance.delete(`660/cart/${item.id}`)
    this.setState(({ cart }) => {
      const index = cart.findIndex((x) => x.id === item.id)
      return {
        cart: [...cart.slice(0, index), ...cart.slice(index + 1)],
      }
    })
  }

  render() {
    const { cart } = this.state;
    const { children } = this.props
    return (
      <CartContext.Provider
        value={{
          addToCart: this.addToCart,
          updatedCart: this.updatedCart,
          deleteCart: this.deleteCart,
          cart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
}
