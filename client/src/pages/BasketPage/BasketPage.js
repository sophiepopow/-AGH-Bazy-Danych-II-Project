import React, { useEffect, useState } from 'react'
import api from "../../api";
import {toast} from "react-toastify";
import { makeStyles } from '@mui/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter,
    Button
 } from '@mui/material';
 import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(() => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: '80vw',
        padding: '3px'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: 'palette.primary.dark',
        color: 'palette.primary.light'
    },
    avatar: {
        backgroundColor: 'palette.primary.light',
        color: 'palette.primary.dark'
    },
    name: {
        fontWeight: 'bold',
        color: 'palette.secondary.dark'
    }
  }));
  


const BasketPage = () => {
    const [basket, setBasket] = useState([]);
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [price, setPrice] = React.useState(0);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleDelete = (props) =>{
        setBasket(basket.filter(data => data != props))
        setPrice(countPrice(basket))
    }

    function countPrice(products){
        return products.map(item => item.price * item.count).reduce(function(a, b){
            return a + b
        })
    }

    const handleBuy = async ()=>{
        const products = basket
        const payload = { products, price }
        await api.insertTransaction(payload).then(res => {
            window.alert("Kupiono produkty za " +  price)
            setBasket([])
            setPrice(0)
        })
    }
  

    useEffect(() => {
        api.getAllProducts()
        .then((products) => {
            setBasket(products.data.data)
            setPrice(countPrice(products.data.data))
        })
        .catch((e) => {
            console.log(e)
            toast.error("Cannot load the products :c")
        })}
    ,[])


return(
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>
        <Typography variant="h2">
        Basket
        </Typography>
        <TableContainer component={Paper} className={classes.tableContainer}>
         <Table className={classes.table} aria-label="simple table">
           <TableHead>
             <TableRow>
                <TableCell className={classes.tableHeaderCell}>Produkt</TableCell>
                <TableCell className={classes.tableHeaderCell}>Sprzedawca</TableCell>
                <TableCell className={classes.tableHeaderCell}>Ilość</TableCell>
                <TableCell className={classes.tableHeaderCell}>Cena</TableCell>
                <TableCell className={classes.tableHeaderCell}>Usuń</TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
             {basket.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.productName}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.productName} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10} padding={1}>
                          <Typography className={classes.name}>{row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.productName}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.shopName}</Typography>
                </TableCell>
              <TableCell>{1}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell><DeleteIcon onClick={() => handleDelete(row)}></DeleteIcon></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TablePagination 
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={basket.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </TableFooter>
      </Table>
      </TableContainer>
      <Button variant="contained" color="success" onClick={handleBuy}>
            Kup produkty za {price}
      </Button>
    </Grid>
  );
}

export default BasketPage