import React from 'react'
import {Card,CardContent,Typography,Grid,Avatar,Box} from '@material-ui/core';

const ProductCard = ({product}) => {
 
  return (
    <>
      <Card style={{background:"#232323",borderRadius:"9px",color:"#FFFFFF",width:'16vw', margin:'auto' , marginTop:'5px', marginBottom:'5px'}}>
        <Grid container   >
          <Grid item ls={5} md={4}  >
          <Box sx={{p:1}}>
          <Avatar variant='square' style={{width:70, height:70,backgroundColor: '#292929',borderRadius:'12px'}}  
            src={product?(product.image):null}
          />
          </Box>
          </Grid>
          <Grid item ls={7} md={7} >
          <CardContent>
        <Typography gutterBottom variant="body2" component="div" style={{  }}>
          {product?.product_name}
        </Typography>
        <Typography variant="body2" >
         {product?.brand_name}
        </Typography>
        <Typography variant="body1" >
         ${product?.price}
        </Typography>
      </CardContent>
          </Grid>
        </Grid>
      <CardContent>
      <Grid container >
        <Grid item lg={7} md={7}>
      <Typography variant='body2' style={{display:"inline"}} align='left' >
          {product?.address.city+","+product?.address.state}
        </Typography>
        </Grid>
        <Grid item lg={5} md={5}>

        <Typography variant='body2' style={{display:"inline"}} align="right" >
          {/* {product.date.getDate()+"/"+product?.date.getMonth()+"/"+product?.date.getFullYear()} */}
        </Typography>
        </Grid>
   
      </Grid>
        
        <Typography variant='body2' >
          {product?.discription}
        </Typography>
      </CardContent>
      </Card>
    </>
    )
}

export default ProductCard