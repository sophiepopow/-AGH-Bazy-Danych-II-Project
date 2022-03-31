import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertCustomer = payload => api.post(`/customer`, payload)
export const getAllCustomers = () => api.get(`/customers`)
export const updateCustomerById = (id, payload) => api.put(`/customer/${id}`, payload)
export const deleteCustomerById = id => api.delete(`/customer/${id}`)
export const getCustomerById = id => api.get(`/customer/${id}`)

const apis = {
    insertCustomer,
    getAllCustomers,
    updateCustomerById,
    deleteCustomerById,
    getCustomerById,
}

export default apis