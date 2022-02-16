import React from 'react'
import { Grid,Typography, } from '@material-ui/core';
import Category from './Category';
const MainContainer = ({products,name}) => {
  return (
    <Grid item lg={10} md={8} >
              <Typography variant='h6' style={{color:"#FFFFFF"}} >
                Edvora
              </Typography>
              <Typography variant='h6' style={{color:"#FFFFFF"}}  >
                Products
              </Typography>
              {
                name? (name.map(item =>(
                  <Category products={products} name={item} />
                ))):null
              }
            </Grid>
  )
}

export default MainContainer