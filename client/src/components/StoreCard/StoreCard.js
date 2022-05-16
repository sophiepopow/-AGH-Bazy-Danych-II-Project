import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";


const StoreCard = ({storeName}) => (
    <Card >
        <CardMedia
            component="img"
            image="https://www.mobilny-warzywniak.pl/assets/slider/30-6d42b60daf731ed0a78b5076533f4a37ba00c020bcf75a23e5ce3722587504e4.jpg"
            alt="vegetables"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{height:'50px'}}>
                {storeName}
            </Typography>
        </CardContent>
        <CardActions style={{flex: '1',
            justifyContent: 'flex-start',
            marginBottom: '0'
        }}>
            <Button size="small">Buy Products</Button>
            {/*    take me to the products list with filtered list (only products from this supplier)*/}
        </CardActions>
    </Card>
);


StoreCard.propTypes = {};

StoreCard.defaultProps = {};

export default StoreCard;
