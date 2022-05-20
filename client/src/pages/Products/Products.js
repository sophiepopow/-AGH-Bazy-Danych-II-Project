import React, {useEffect, useState} from 'react';
import styles from './Products.module.css';
import {Grid, Typography, FormControl, InputLabel, Select, MenuItem, TextField} from '@mui/material';
import {toast} from 'react-toastify';
import api from "../../api";
import ProductCard from "../../components/ProductCard/ProductCard";


const Products = () => {
    const [productsList, setProductList] = useState([]);
    const [sortType, setSortType] = useState();
    const [categoryType, setCategoryType] = useState();
    const [shopName, setShopName] = useState();

    useEffect(() => {
        let paramsToBe = [];
        if (sortType) {
            paramsToBe = [...paramsToBe, ["sortBy", sortType]]
        }
        if (categoryType) {
            paramsToBe = [...paramsToBe, ["category", categoryType]]
        }
        if (categoryType) {
            paramsToBe = [...paramsToBe, ["shopName", shopName]]
        }

        const params = new URLSearchParams(paramsToBe);

        api.getAllProducts(params)
            .then((products) => {
                setProductList(products.data.data)
            })
            .catch((e) => {
                console.log(e)
                toast.error("Cannot load the products :c")
            })
    });

    return (<div>
        <Typography variant="h2" padding={5}>
            Produkty w naszym sklepie:
        </Typography>

        <div className={styles.filtersContainer}>
            <FormControl className={styles.filters}>
                <InputLabel id="sort-label">Sortuj</InputLabel>
                <Select
                    labelId="sort-label"
                    id="sort-label-select"
                    value={sortType}
                    label="Sortuj"
                    onChange={(evt) => {
                        setSortType(evt.target.value)
                    }}>
                    <MenuItem value={"price.desc"}>Po cenie malejąco</MenuItem>
                    <MenuItem value={"price.asc"}>Po cenie Rosnąco</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={styles.filters}>
                <InputLabel id="sort-label">Kategoria</InputLabel>
                <Select
                    labelId="category-label"
                    id="category-label-select"
                    value={categoryType}
                    label="Kategoria"
                    onChange={(evt) => {
                        setCategoryType(evt.target.value)
                    }}>
                    <MenuItem value={""}>Wszystko</MenuItem>
                    <MenuItem value={"Vegetable"}>Warzywa</MenuItem>
                    <MenuItem value={"Fruit"}>Owoce</MenuItem>
                    <MenuItem value={"Bio"}>Bio</MenuItem>
                    <MenuItem value={"Mini"}>Mini</MenuItem>
                </Select>
            </FormControl >
            <FormControl className={styles.filters}>
            <InputLabel id="shopName-label">Nazwa Sklepu</InputLabel>
            <TextField
                labelId="shopName-label"
                id="shopName-label-text"
                value={shopName}
                label="Nazwa Sklepu"
                onChange={(evt) => {
                    setShopName(evt.target.value)
                }}>
                <MenuItem value={"price.desc"}>Po cenie malejąco</MenuItem>
                <MenuItem value={"price.asc"}>Po cenie Rosnąco</MenuItem>
            </TextField>
            </FormControl>
        </div>
        {!productsList.length?<Typography variant="h4" padding={5}>
            Brak pasujących produktów  😥
            </Typography> :
        <Grid container spacing={7} justifyContent={"center"} padding={10} sx={{display: 'flex'}}>

            {productsList.map((item) => {
                return <Grid item sx={{flexDirection: 'row'}} xs={6} sm={4} md={3} key={item._id} minWidth={300}>
                    <ProductCard item={item}/>
                </Grid>
            })}


        </Grid>}

    </div>)
};

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
