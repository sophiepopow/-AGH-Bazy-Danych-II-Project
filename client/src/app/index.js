import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { CustomersList, CustomersInsert, CustomersUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/customers/list" exact element={<CustomersList/>} />
                <Route path="/customers/create" exact element={<CustomersInsert/>} />
                <Route
                    path="/customers/update/:id"
                    exact
                    element={<CustomersUpdate/>}
                />
            </Routes>
        </Router>
    )
}

export default App