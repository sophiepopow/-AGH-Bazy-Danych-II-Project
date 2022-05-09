import styles from './AdminPanelPage.module.css';
import api from '../../api'
import Button from '@mui/material/Button';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const AdminPanelPage = () => {
    const [category, setCategory] = useState("Vegetable");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);

    const submitProduct = () => {
        api.insertProduct({
            category,
            productName,
            price
        }).then(() => {
            toast("Succesfully added product!");
        }).catch(() => {
            toast.error("Cannot add product",{ });
        })
        setCategory("Vegetable");
        setProductName("");
        setPrice(0);
    }
    return (
        <div>
            <div>
                Add Product
            </div>
            <div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        value={category}
                        label="Category"
                        onChange={(evt) => { setCategory(evt.target.value) }}
                    >
                        <MenuItem value={"Vegetable"}>Veegtable</MenuItem>
                        <MenuItem value={"Fruit"}>Fruit</MenuItem>
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
                    <Button variant="contained" color="success" onClick={submitProduct}>Submit</Button>
                </FormControl>
            </div>
        </div>
    )
}
