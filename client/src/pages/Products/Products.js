import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import api from '../../api';
import { toast } from 'react-toastify';

// productList db get items
const Products = () => {
    const [productsList, setProductList] = useState([]);
    useEffect(() => {
        // sortBy to moze być narazie tytlko price.desc lub price.asc bo product nie ma w schema ratingu
        // jesli chcemy price <= 10 lub inna wartość to zapsiujemy jak ponizej
        // analogicznie z >=, ostrych nierówności jeszcze nie zaczai bo jstm w trakcie ogarniania jak to lepiej zrobic
        // w product-ctrl.js w ifach mozecie zobaczyc jakie parametry "umie" zczytać jak narazie, nie wszystkie muszą mieć
        // podane wartości ponizej, dowolna kombinacja działą
        // paramsy trzeba będzie pobierać I guess handlerami gdy ktos zaznaczy jakis filtr etc etc

        const params = new URLSearchParams([['sortBy', 'price.asc'],['pricelte', 10]]);

        api.getAllProducts(params)
        .then((products) => {
            setProductList(products.data.data)
        })
        .catch((e) => {
            console.log(e)
            toast.error("Cannot load the products :c")
        })
    }, []);

  return <div className={styles.Products}>
      <Typography variant="h2" padding={5}>
          Produkty w naszym sklepie:
          
      </Typography>
      <Grid container  spacing={7} justifyContent={"center"} padding={10} sx={{ display: 'flex' }}>

          {productsList.map((item)=>{
              return <Grid item sx={{ flexDirection: 'row' }}  xs={6} sm={4} md={3} key={item._id} minWidth={300}
                           ><Card >
                  <CardMedia
                      component="img"
                      image="https://www.mobilny-warzywniak.pl/assets/slider/30-6d42b60daf731ed0a78b5076533f4a37ba00c020bcf75a23e5ce3722587504e4.jpg"
                      
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                          {item.productName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {item.price} PLN za kg
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                         Ilość produktu: {item.count}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                         Sprzedawca: {item.shopName}
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
};

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
