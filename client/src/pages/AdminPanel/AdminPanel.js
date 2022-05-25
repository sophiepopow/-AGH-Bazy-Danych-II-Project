import api from '../../api'
import Button from '@mui/material/Button';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './AdminPanel.module.css';

const AdminPanel = () => {
    const [customerId, setCustomerId] = useState("");
    const [customer, setCustomer] = useState("");
    const [customersList, setCustomerList] = useState([]);
    const [sellersList, setSellersList] = useState([]);
    const [seller, setSeller] = useState("");

    useEffect(() => {

        api.getAllCustomers()
        .then(customers => {
           setCustomerList(customers.data.data)
       }).catch((e) => {
           console.log(e)
           toast.error("Cannot load customers :c")
       })

       api.getAllSellers()
       .then(sellers => {
          setSellersList(sellers.data.data)
       }).catch((e) => {
        console.log(e)
        toast.error("Cannot load sellers :c")
    })
   }, []);

    const deleteCustomer = () => {
        
        api.deleteCustomerById(customer)
        .then(() => {
            toast("Succesfully deleted customer!");
        }).catch((e) => {
            toast.error("Cannot delete customer" + customer._id,{});
        })
        setCustomer("");
    }
    const deleteSeller = () => {
        
        api.deleteSellerById(seller)
        .then(() => {
            toast("Succesfully deleted customer!");
        }).catch((e) => {
            toast.error("Cannot delete customer " + seller,{});
        })
        setSeller("");
    }

    return (
        <Grid container spacing={7} justifyContent={"center"} padding={10} sx={{display: 'flex'}}>
        
        <FormControl>
        <div>
            Usuń Klienta
        </div>
        <Select
            value={customer}
            label="Klienci"
            onChange={(evt) => { setCustomer(evt.target.value) }}
        >
            {customersList.map(customer =>
            <MenuItem value={customer._id}>{customer.auth.login}</MenuItem>
                )
            }
        </Select>
            <Button variant="contained" color="success" onClick={deleteCustomer}>Usuń</Button>
        </FormControl>
        
        <FormControl className={styles.forms}>
        <div>
            Usuń Sprzedawcę
        </div>
        <Select
            value={seller}
            label="Sprzedawcygit "
            onChange={(evt) => { setSeller(evt.target.value) }}
        >
            {sellersList.map(seller =>
            <MenuItem value={seller._id}>{seller.name}</MenuItem>
                )
            }
        </Select>
            <Button variant="contained" color="success" onClick={deleteSeller}>Usuń</Button>
        </FormControl>
    </Grid>
    )
}
export default AdminPanel;