import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import Stores from './pages/Stores/Stores'
import Products from './pages/Products/Products'
import CustomersList from './pages/CustomerList/CustomersList'
import UserInsert from './pages/RegisterPage/UserInsert'
import CustomersUpdate from './pages/CustomerUpdate/CustomersUpdate'
import BasketPage from './pages/BasketPage/BasketPage'
import LoginPage from './pages/LoginPage/Login'
import { AddProductPage } from './pages/AddProductPage/AddProductPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
        <Router>
            <NavBar />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<UserInsert />} />
                <Route path="/products" element={<Products />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/addproduct" element={<AddProductPage />} />
                <Route path="/basket" element={<BasketPage />} />
            </Routes>
        </Router>
    )
}
