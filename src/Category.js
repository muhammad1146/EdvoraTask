import React, { useEffect, useState } from 'react'
import { Typography,Divider,Grid,Box } from '@material-ui/core';
import ProductCard from './ProductCard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Category = ({products,name}) => {
  const [productArray,setProductArray] = useState([]);
  const [live,setLive] = useState([]);
  const [page,setPage] = useState(0);

  useEffect(()=>{
    setProductArray(products.filter(item=> item.product_name===name ));
  },[]);
  useEffect(()=>{
    // setLive(productArray.filter((item,i,arr)=> (i>=page) && (i<page+4)))
    setLive(()=>{
      let array=[];
      let len = productArray.length;
      if(page+1>=len){
        setPage(0)
      }
      for(let i=page;i<page+4;i++){
       array.push(productArray[i]);
      }
      return array;
    })
  },[page])
  useEffect(()=>{
    
    // setLive(productArray.filter((item,i,arr)=>(i<page+4) && (i>=page)));
    setLive(()=>{
      let array=[];
      for(let i=page;i<page+4;i++){
       array.push(productArray[i]);
      }
      return array;
    })
  },[productArray])
  return (
    <>
    <Grid container spacing={2}  >
      <Grid item lg={10} md={10}  >
      <Box style={{background:"black"}}>

          <Typography variant='h6' style={{color:"#FFFFFF"}}  >
                      {productArray[0]?.product_name}
                    </Typography>
                    <Divider sx={{borderBottomWidth:15}} style={{border: '1px solid', margin:'1px'}} />
                    
            <Grid container  spacing={0}>
           
              {live.map(item =>(
                item?(
                <Grid item ls={3} md={3}>
                <ProductCard  product={item}/>
              </Grid> 
                ):false
              )
              )}
        </Grid>
        </Box>
      
      </Grid>
      <Grid item md={1} lg= {1} style={{display:"flex",alignItems:"center"}}>
     <div onClick={()=>{setPage(page+4)}}
     >
      <ArrowForwardIosIcon />
     </div>
      </Grid>
    </Grid>
    </>
  )
}

export default Category;