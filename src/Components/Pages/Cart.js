import React from 'react'
import {
    Card, Box, CardContent, Typography, CardMedia, Grid,
   } from '@material-ui/core'
import I18n from 'i18n-js'
import { DeleteOutline } from '@material-ui/icons'
import { CartContext } from '../context/cardContext'

const Cart = () => (
  <CartContext.Consumer>
    {({
 cart, deleteCart,
}) => (
  <div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {cart.map((item) => (
        <Grid item xs={2} sm={12} md={6} lg={6} key={item.id}>
          <Card
            key={item.id}
            style={{
 display: 'flex', margin: 2, minHeight: 220, padding: 15,
}}
          >
            <CardMedia
              component="img"
              style={{ width: 100 }}
              image={item.image}
              alt="Live from space album cover"
            />
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent style={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {item.title}
                </Typography>
                {/* <Typography variant="subtitle1" color="inherit" component="div">
                  {item.description}
                </Typography> */}
                <div variant="subtitle1" component="div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3>
                    Ordered Number of quantity :
                    {' '}
                    {item.quantity}
                  </h3>

                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <DeleteOutline color="primary" onClick={() => deleteCart(item)} />
                  <h2>
                    Price :
                    {' '}
                    {I18n.toCurrency(item.price * item.quantity)}
                  </h2>
                </div>
              </CardContent>
            </Box>
          </Card>
        </Grid>
))}
    </Grid>
  </div>

)}
  </CartContext.Consumer>
    )

export default Cart
