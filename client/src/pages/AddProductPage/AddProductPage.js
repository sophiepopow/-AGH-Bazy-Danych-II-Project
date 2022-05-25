import api from '../../api'
import Button from '@mui/material/Button';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const AddProductPage = () => {
    const [category, setCategory] = useState("Warzywa");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [productId, setProductId] = useState("");

    const submitProduct = () => {
        api.insertProduct({
            category,
            productName,
            price,
            count
            
        }).then(() => {
            toast("Dodano produkt!");
        }).catch(() => {
            toast.error("Błąd, nie dodano produktu",{ });
        })
        setCategory("Warzywa");
        setProductName("");
        setPrice(0);
        setCount(0);
    }
    const deleteProduct = () => {
        
        api.deleteProductById(productId)
        .then(() => {
            toast("Usunięto produkt!");
        }).catch((e) => {
            toast.error("Błąd, nie można usunąć produktu" + e,{});
        })
        setProductId("");
    }
    return (
        <div>
            <div>
                Dodaj produkt
            </div>
            <div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        value={category}
                        label="Kategoria"
                        onChange={(evt) => { setCategory(evt.target.value) }}
                    >
                        <MenuItem value={"Warzywa"}>Warzywa</MenuItem>
                        <MenuItem value={"Owoce"}>Owoce</MenuItem>
                        <MenuItem value={"Bio"}>Bio</MenuItem>
                        <MenuItem value={"Mini"}>Mini</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-basic"
                        label="Nazwa produktu"
                        variant="outlined"
                        value={productName}
                        onChange={(evt) => { setProductName(evt.target.value) }}
                        />
                    <TextField 
                        id="outlined-basic"
                        label="Cena"
                        variant="outlined"
                        type="number"
                        value={price}
                        onChange={(evt) => { setPrice(evt.target.value) }}
                        />
                    <TextField 
                        id="outlined-basic"
                        label="Ilość"
                        variant="outlined"
                        type="number"
                        value={count}
                        onChange={(evt) => { setCount(evt.target.value) }}
                        />
                    <Button variant="contained" color="success" onClick={submitProduct}>Submit</Button>
                </FormControl>
            </div>

            <div>
                Usuń Produkt
            </div>
            <div>
                <FormControl>
                    <TextField
                        id="outlined-basic"
                        label="Produkt id"
                        variant="outlined"
                        value={productId}
                        onChange={(evt) => { setProductId(evt.target.value) }}
                        />
                    <Button variant="contained" color="success" onClick={deleteProduct}>Delete</Button>
                </FormControl>
            </div>
    </div>
    )
}
