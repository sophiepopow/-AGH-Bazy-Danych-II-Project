import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertCustomer = payload => api.post(`/customer`, payload)
export const getAllCustomers = () => api.get(`/customers`)
export const updateCustomerById = (id, payload) => api.put(`/customer/${id}`, payload)
export const deleteCustomerById = id => api.delete(`/customer/${id}`)
export const getCustomerById = id => api.get(`/customer/${id}`)


export const insertSeller = payload => api.post(`/seller`, payload)
export const getAllSellers = () => api.get(`/sellers`)
export const updateSellerById = (id, payload) => api.put(`/seller/${id}`, payload)
export const deleteSellerById = id => api.delete(`/seller/${id}`)
export const getSellerById = id => api.get(`/seller/${id}`)


export const insertProduct = payload => api.post(`/product`, payload)
export const getAllProducts = (params) => api.get(`/products/`, { params })
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
    getProductById,
    insertSeller,
    getAllSellers,
    updateSellerById,
    deleteSellerById,
    getSellerById
}

export default apis