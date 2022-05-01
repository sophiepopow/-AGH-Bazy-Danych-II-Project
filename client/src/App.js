import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import Stores from './components/Stores/Stores'
import CustomersList from './pages/CustomerList/CustomersList'
import CustomersInsert from './pages/RegisterPage/CustomersInsert'
import CustomersUpdate from './pages/CustomerUpdate/CustomersUpdate'

export const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<CustomersInsert />} />
                <Route path="/stores" element={<Stores />} />


                {/* TO-DO: obgadac ponizsze routy */}
                <Route exact path="/customers/list" element={<CustomersList/>} />
                <Route exact path="/customers/create" element={<CustomersInsert/>} />
                <Route exact path="/customers/update/:id" element={<CustomersUpdate/>} />
            </Routes>
        </Router>
    )
}
