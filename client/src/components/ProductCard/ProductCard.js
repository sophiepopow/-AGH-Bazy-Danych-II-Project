import React from 'react';
import styles from './ProductCard.module.css';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const ProductCard = ({item}) => (
    <Card>
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
        <CardActions className={styles.container}>
            <div className={styles.category}> {item.category}</div>
            <Button size="small">Kupuję!</Button>
        </CardActions>
        <CardActions>
            <Button className={styles.reviewButton}> Oceń produkt! </Button>

        </CardActions>
    </Card>
);

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
