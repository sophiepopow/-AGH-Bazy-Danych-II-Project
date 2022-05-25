const express = require('express')
const CustomerCtrl = require('../controllers/customer-ctrl')
const router = express.Router()

router.post('/customer', CustomerCtrl.createCustomer)
router.post('/customerlogin', CustomerCtrl.loginCustomer)
router.put('/customer/:id', CustomerCtrl.updateCustomer)
router.delete('/customer/:id', CustomerCtrl.deleteCustomer)
router.get('/customer/:id', CustomerCtrl.getCustomerById)
router.get('/customers', CustomerCtrl.getCustomers)
router.put('/basket', CustomerCtrl.addToBasket)
router.get('/basket/:id', CustomerCtrl.getBasket)
router.put('/basket/:id', CustomerCtrl.updateBasket)

module.exports = router