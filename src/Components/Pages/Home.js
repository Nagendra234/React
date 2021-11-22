/* eslint-disable arrow-spacing */
import {
  Card, Box, CardContent, Typography, CardMedia, Button, Grid,
 } from '@material-ui/core'
 import Rating from '@mui/material/Rating'
import React, { Component } from 'react'
import { AddCircle, RemoveCircle, DeleteOutline } from '@material-ui/icons'
import I18n from 'i18n-js'
import axiosInstance from '../axois/AxoisIns'
import { CartContext } from '../context/cardContext'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      errors: [],
    }
  }

  async componentDidMount() {
    try {
    const res = await axiosInstance.get('660/products')
    this.setState({
      products: res,
    })
  } catch (error) {
    this.setState({
      error,
    })
    console.log(error)
  }
  }

  render() {
    const { products } = this.state
    const { error } = this.state
    if (error) {
      return <h3>{error}</h3>
    }
    return (
      <CartContext.Consumer>
        {({
 cart, addToCart, deleteCart, updatedCart,
})=> (
  <Grid container spacing={{ xs: 2, md: 3, lg: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {products.map((item)=>{
          const cartItem = cart.find((x) => x.id === item.id);

          return (
            <Grid
              item
              xs={2}
              sm={12}
              md={6}
              lg={6}
              key={item.id}
              spacing={3}
              style={{ padding: 10 }}
            >
              <Card
                style={{
 display: 'flex', margin: 2, minHeight: 220, padding: 25, width: '600px', height: '300px',
}}
                key={item.id}
              >
                <CardMedia
                  component="img"
                  style={{ width: 151 }}
                  image={item.image}
                  alt="Live from space album cover"
                />
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent style={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {item.title}
                    </Typography>
                    {/* <Typography variant="subtitle1" color="secondary" component="div">
                    {item.description}
                  </Typography> */}
                    <Typography variant="subtitle1" color="primary" component="div" style={{ display: 'flex', flexDirection: 'column', paddingTop: 20 }}>
                      Price:
                      {I18n.toCurrency(item.price)}
                      <Rating name="size-medium" defaultValue={3} />
                    </Typography>
                  </CardContent>

                  <div style={{ display: 'flex', padding: 10, alignItems: 'center' }}>

                    {/* Cart Item  Code Add Minus */}
                    {cartItem ? (
                      <>
                        {cartItem.quantity <= 1 ? (
                          <DeleteOutline
                            color="primary"
                            onClick={()=>deleteCart(cartItem)}
                          />
)
                      : (
                        <RemoveCircle
                          color="primary"
                          onClick={()=>updatedCart({
                          ...cartItem,
                          quantity: cartItem.quantity - 1,
                        })}
                        />
)}
                        <Typography>{cartItem.quantity}</Typography>
                        <AddCircle
                          color="primary"
                          onClick={()=>updatedCart({
                          ...cartItem,
                          quantity: cartItem.quantity + 1,
                        })}
                        />

                      </>
                    ) : <Button color="primary" variant="contained" onClick={()=> addToCart(item)}>AddtoCart</Button> }
                  </div>
                </Box>
              </Card>
            </Grid>
          )
})}
  </Grid>
    )}
      </CartContext.Consumer>
    )
  }
}

export default Home
