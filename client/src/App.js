import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import Stores from './pages/Stores/Stores'
import Products from './pages/Products/Products'
import CustomersList from './pages/CustomerList/CustomersList'
import CustomersInsert from './pages/RegisterPage/CustomersInsert'
import CustomersUpdate from './pages/CustomerUpdate/CustomersUpdate'
import LoginPage from './pages/LoginPage/Login'
import { AdminPanelPage } from './pages/AdminPanelPage/AdminPanelPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
        <Router>
            <NavBar />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<CustomersInsert />} />
                <Route path="/products" element={<Products />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminPanelPage />} />


                {/* TO-DO: obgadac ponizsze routy */}
                <Route exact path="/customers/list" element={<CustomersList/>} />
                <Route exact path="/customers/create" element={<CustomersInsert/>} />
                <Route exact path="/customers/update/:id" element={<CustomersUpdate/>} />
            </Routes>
        </Router>
    )
}
