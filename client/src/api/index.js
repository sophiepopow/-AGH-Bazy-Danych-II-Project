import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertCustomer = payload => api.post(`/customer`, payload)
export const getAllCustomers = () => api.get(`/customers`)
export const updateCustomerById = (id, payload) => api.put(`/customer/${id}`, payload)
export const deleteCustomerById = id => api.delete(`/customer/${id}`)
export const getCustomerById = id => api.get(`/customer/${id}`)


export const insertProduct = payload => api.post(`/product`, payload)
export const getAllProducts = () => api.get(`/products`)
export const updateProductById = (id, payload) => api.put(`/product/${id}`, payload)
export const deleteProductById = id => api.delete(`/product/${id}`)
export const getProductById = id => api.get(`/product/${id}`)

const apis = {
    insertCustomer,
    getAllCustomers,
    updateCustomerById,
    deleteCustomerById,
    getCustomerById,
    insertProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
    getProductById
}

export default apis