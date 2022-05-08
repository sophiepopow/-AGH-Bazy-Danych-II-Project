import React from 'react';
import styles from './Products.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";

let productsList = ['Cebula', 'Pomidor', 'Cytryna', 'Szpinak','Marchewka', 'Brokół','Dynia']
// productList db get items
const Products = () => (
  <div className={styles.Products}>
      <Typography variant="h2" padding={5}>
          Produkty w naszym sklepie:
          
      </Typography>
      <Grid container  spacing={7} justifyContent={"center"} padding={10} sx={{ display: 'flex' }}>

          {productsList.map((item)=>{
              return <Grid item sx={{ flexDirection: 'row' }}  xs={6} sm={4} md={3} key={item} minWidth={300}
                           ><Card >
                  <CardMedia
                      component="img"
                      image="https://www.mobilny-warzywniak.pl/assets/slider/30-6d42b60daf731ed0a78b5076533f4a37ba00c020bcf75a23e5ce3722587504e4.jpg"
                      
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                          {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {item.price} PLN za kg
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <div className={styles.category}> {item.category}</div>
                      <Button size="small">Kupuję!</Button>
                  </CardActions>
              </Card></Grid>
          })}



      </Grid>

  </div>
);

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
