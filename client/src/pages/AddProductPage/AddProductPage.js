import api from '../../api'
import Button from '@mui/material/Button';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './AddProductPage.module.css';

export const AddProductPage = () => {
    const [category, setCategory] = useState("Warzywa");
    const [shopName, setShopName] = useState("Sklep Pani Basi");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [productId, setProductId] = useState("");

    const submitProduct = () => {
        api.insertProduct({
            category,
            productName,
            price,
            shopName,
            count
            
        }).then(() => {
            toast("Succesfully added product!");
        }).catch(() => {
            toast.error("Cannot add product",{ });
        })
        setCategory("Warzywa");
        setProductName("");
        setShopName("Skep Pani Basi");
        setPrice(0);
        setCount(0);
    }
    const deleteProduct = () => {
        
        api.deleteProductById(productId)
        .then(() => {
            toast("Succesfully deleted product!");
        }).catch((e) => {
            toast.error("Cannot delete product" + e,{});
        })
        setProductId("");
    }
    return (
        <Grid container spacing={7} justifyContent={"center"} padding={10} sx={{display: 'flex'}}>
            
            <div>
                <div>
                    Add Product
                </div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        value={category}
                        label="Category"
                        onChange={(evt) => { setCategory(evt.target.value) }}
                    >
                        <MenuItem value={"Warzywa"}>Warzywa</MenuItem>
                        <MenuItem value={"Owoce"}>Owoce</MenuItem>
                        <MenuItem value={"Bio"}>Bio</MenuItem>
                        <MenuItem value={"Mini"}>Mini</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-basic"
                        label="Product name"
                        variant="outlined"
                        value={productName}
                        onChange={(evt) => { setProductName(evt.target.value) }}
                        />
                    <TextField 
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        type="number"
                        value={price}
                        onChange={(evt) => { setPrice(evt.target.value) }}
                        />
                    <TextField
                        id="outlined-basic"
                        label="Shop name"
                        variant="outlined"
                        value={shopName}
                        onChange={(evt) => { setShopName(evt.target.value) }}
                        />
                    <TextField 
                        id="outlined-basic"
                        label="Count"
                        variant="outlined"
                        type="number"
                        value={count}
                        onChange={(evt) => { setCount(evt.target.value) }}
                        />
                    <Button variant="contained" color="success" onClick={submitProduct}>Submit</Button>
                </FormControl>
            </div>

            
            <div className={styles.forms}>
                <div>
                    Delete Product
                </div>
                <FormControl>
                    <TextField
                        id="outlined-basic"
                        label="Product id"
                        variant="outlined"
                        value={productId}
                        onChange={(evt) => { setProductId(evt.target.value) }}
                        />
                    <Button variant="contained" color="success" onClick={deleteProduct}>Delete</Button>
                </FormControl>
            </div>
    </Grid>
    )
}
