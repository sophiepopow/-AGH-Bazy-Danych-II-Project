import React, {useState} from 'react';
import styles from './ProductCard.module.css';
import {Button, Card, CardActions, CardContent, CardMedia, Rating, Typography} from "@mui/material";
import api from '../../api';
import {toast} from 'react-toastify';
import jwt from 'jsonwebtoken'

const mapItemReviesToUser = (item) => {
    const user = jwt.decode(localStorage.getItem('token'));
    if(user) {
        let opinion = item.reviews.filter(p => p.user === user.id);
        if (opinion.length !== 0) return opinion[0].stars;
    }
    return 0;
}

const ProductCard = ({item}) => {
    const [review, setReview] = useState(mapItemReviesToUser(item));
    const [count, setCount] = useState(1);
    const avgRating = item.reviews.reduce((total, next) => total + next.stars, 0) / ((item.reviews.length > 0) ? item.reviews.length : 1);
    const updateReview = (rating) => {
        let prevRev = review;
        setReview(rating);
        api.updateProductById(
            item._id
            ,{ review: rating })
        .then(() => {
            toast("Succesfully added review!");
        }).catch(() => {
            setReview(prevRev)
            toast.error("Cannot add review",{ });
        })
    }

    const handleAddToBasket = async ()=>{
        const temp = item
        if (item.count < 1){
            toast.error("Cannot add to basket",{ })
            return
        }
        temp.count = 1
        item.count -= 1;
        await api.addToBasket(temp)
        .then(res => {
            console.log(res)
            toast("Succesfully added review!");
    }).catch(() => {
        toast.error("Cannot add to basket",{ });
    })
}


    return (
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
                Ilo???? produktu: {item.count}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Sprzedawca: {item.shopName}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary">
                ProductId: {item._id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Ocena: {avgRating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Ilo???? ocen: {item.reviews.length}
            </Typography>
        </CardContent>
        <CardActions className={styles.container}>
            <div className={styles.category}> {item.category}</div>
            <Button className={styles.buyButton} size="small" onClick={handleAddToBasket}>Kupuj??!</Button>
        </CardActions>


        <CardActions>
            <Typography gutterBottom variant="h8">
                Moja ocena:
            </Typography>
                <Rating
                className={styles.rating}
                name="simple-controlled"
                value={review}
                onChange={(evt) => {
                    updateReview(evt.target.value);
                }}
                />
        </CardActions>
    </Card>
    )
};

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
