import React from 'react'
import { Grid,Box,Typography,Divider,FormControl,Select } from '@material-ui/core'
const Sidebar = ({productName,state,city}) => {
  return (
    <Grid item lg={2} md={3} sm={2}>
               <Box sx={{mb:2, ml:1}}>
                <Typography variant='h6'>
                  Filters
                </Typography>
                  <Divider style={{border:"1px solid"}} />
               </Box>
              <Box sx={{mt:2}}>
                <Typography>
                  <FormControl fullWidth style={{color:"#FFFFFF"}} >
                  <Select
                     variant='filled'
                      native={true}
                      label="Products"
                      style={{color:"#FFFFFF"}}>
                      <option value={10} disabled >Products</option>
                      {productName?.map(item =>(
                        <option value={item} key={item}  >{item}</option>
                    ))}                 
                  </Select>
                  </FormControl>
                </Typography>
                <Typography>
                <FormControl fullWidth>
                  <Select
                     variant='filled'
                      native={true}
                      label="State"
                      style={{color:"#FFFFFF"}}>  
                      <option value={10} disabled>State</option>
                     {state?.map(item =>(
                        <option value={item} key={item} >{item}</option>
                    ))}
                  </Select>
                  </FormControl>
                </Typography>

              <Typography>
              <FormControl fullWidth>
                  <Select
                     variant='filled'
                      native={true}
                      label="Products"
                      style={{color:"#FFFFFF"}}
                      >
                      <option value={10} disabled >City</option>
                      {city?.map(item =>(
                        <option value={item} key={item} >{item}</option>
                    ))}
                  </Select>
                  </FormControl>
              </Typography>
                </Box>
              </Grid>
  )
}
export default Sidebar