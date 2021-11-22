import React from 'react'
import {
  Box,
   AppBar, Toolbar, IconButton, Typography,
  } from '@material-ui/core'
  import { Menu } from '@material-ui/icons'

// import { Link } from 'react-router-dom'
// import routers from '../../routers'

import Auth from './Auth'
import './header.css'
import { CartContext } from '../context/cardContext'

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          Nagendra
        </Typography>
        <Auth />
      </Toolbar>
    </AppBar>
  </Box>

    )

export default Header
