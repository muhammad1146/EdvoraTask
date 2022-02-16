import React, { useState } from 'react';
import './App.css';
import { CssBaseline, Grid,Box} from '@material-ui/core';
import axios from 'axios'
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductNames] = useState([]);
  const [state, setStates] = useState([]);
  const [city, setCities] = useState([]);
  useEffect(()=>{

    let fetchProducts = async()=>{
      try {
        let result = await axios.get("https://assessment-edvora.herokuapp.com/");
         setProducts(result.data)

      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();

  },[])
  useEffect(()=>{
    let getProducts = () =>{

      if(products.length>0)
      {
        
       var productNames = (products.map((item)=>item.product_name)).filter((item,i,arr)=>arr.indexOf(item)===i);
       var stateNames = (products.map(item=>item.address.state)).filter((item,i,arr)=>arr.indexOf(item)===i);
       var cityNames = (products.map(item=>item.address.city)).filter((item,i,arr)=>arr.indexOf(item)===i);
      }

      setProductNames(productNames)
      setStates(stateNames);
      setCities(cityNames);

  }
    getProducts();
  },[products])


  return (
    <>
  <CssBaseline />
    <Box style={{background: '#292929'}}>
    <main>
      <div style={{marginTop:"20px",color:"#FFFFFF"}}>
          <Grid container spacing={1} >
            <Sidebar productName={productName} state={state} city={city} />
            <MainContainer products={products} name={productName} />
          </Grid>
      </div>
    </main>
    </Box> 
    </>
  );
}
export default App;
