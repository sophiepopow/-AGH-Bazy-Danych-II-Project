import React, {useEffect, useState} from 'react';
import styles from './Stores.module.css';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import api from '../../api';
import {toast} from "react-toastify";
import StoreCard from "../../components/StoreCard/StoreCard";

const Stores = () => {
    const [storesList, setStoresList] = useState([]);

    useEffect(() => {
        api.getAllSellers()
            .then((sellers) => {
                setStoresList(sellers.data.data)
            })
            .catch((e) => {
                console.log(e)
                toast.error("Cannot load the products :c")
            })
    }, []);

    return <div className={styles.Stores}>
    <Typography variant="h2" padding={5}>
            Sklepy
        </Typography>

        <Grid container spacing={7} justifyContent={"center"} padding={5} sx={{display: 'flex'}}>
            {storesList.map((item) => {
                return <Grid item sx={{flexDirection: 'row'}} xs={6} sm={4} md={3} key={item} minWidth={300}>
                    <StoreCard storeName={item.name}/>
                </Grid>})}
        </Grid>
    </div>
};

Stores.propTypes = {};

Stores.defaultProps = {};

export default Stores;
