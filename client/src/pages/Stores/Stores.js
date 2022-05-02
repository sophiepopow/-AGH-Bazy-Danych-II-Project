import React from 'react';
import styles from './Stores.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";

// storesy beda obiektami wiec w Cards się "powyciąga" nazwę, opis etc.
let storesList = ['a', 'd', 'c', 's','f', 's','f']

const Stores = () => (
  <div className={styles.Stores}>


      <Typography variant="h2" padding={5}>
          Stores
      </Typography>

      <Grid container  spacing={7} justifyContent={"center"} padding={10} sx={{ display: 'flex' }}>

          {storesList.map((item)=>{
              return <Grid item sx={{ flexDirection: 'row' }}  xs={6} sm={4} md={3} key={item} minWidth={300}
                           ><Card >
                  <CardMedia
                      component="img"
                      image="https://www.mobilny-warzywniak.pl/assets/slider/30-6d42b60daf731ed0a78b5076533f4a37ba00c020bcf75a23e5ce3722587504e4.jpg"
                      alt="green iguana"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                          {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small">Learn More</Button>
                      <Button size="small">Buy Products</Button>
                  </CardActions>
              </Card></Grid>
          })}



      </Grid>

  </div>
);

Stores.propTypes = {};

Stores.defaultProps = {};

export default Stores;
