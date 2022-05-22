const express = require('express')
const CustomerCtrl = require('../controllers/customer-ctrl')
const router = express.Router()

router.post('/customer', CustomerCtrl.createCustomer)
router.post('/customerlogin', CustomerCtrl.loginCustomer)
router.put('/customer/:id', CustomerCtrl.updateCustomer)
router.delete('/customer/:id', CustomerCtrl.deleteCustomer)
router.get('/customer/:id', CustomerCtrl.getCustomerById)
router.get('/customers', CustomerCtrl.getCustomers)

module.exports = router