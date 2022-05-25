import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertCustomer = payload => api.post(`/customer`, payload)
export const getAllCustomers = () => api.get(`/customers`)
export const updateCustomerById = (id, payload) => api.put(`/customer/${id}`, payload)
export const deleteCustomerById = id => api.delete(`/customer/${id}`)
export const getCustomerById = id => api.get(`/customer/${id}`)
export const loginCustomer = payload => api.post(`/customerlogin`, payload)
export const getLoggedCustomer = () => api.get(`/customerlogin`)

export const insertSeller = payload => api.post(`/seller`, payload)
export const getAllSellers = () => api.get(`/sellers`)
export const updateSellerById = (id, payload) => api.put(`/seller/${id}`, payload)
export const deleteSellerById = id => api.delete(`/seller/${id}`)
export const getSellerById = id => api.get(`/seller/${id}`)
export const loginSeller = payload => api.post(`/sellerlogin`, payload)


export const insertProduct = payload => api.post(`/product`, {...payload,  token: localStorage.getItem('token')});
export const getAllProducts = (params) => api.get(`/products/`, { params })
export const updateProductById = (id, payload) => api.put(`/product/${id}`, {...payload, token: localStorage.getItem('token')})
export const deleteProductById = id => api.delete(`/product/${id}`)
export const getProductById = id => api.get(`/product/${id}`)

export const insertTransaction = payload => api.post(`/transaction`, {...payload,  token: localStorage.getItem('token')});

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
    getSellerById,
    loginCustomer,
    getLoggedCustomer,
    loginSeller,
    insertTransaction
}

export default apis