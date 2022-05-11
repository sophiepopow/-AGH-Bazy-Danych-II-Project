const express = require('express')
const ProductCtrl = require('../controllers/products-ctrl')
const router = express.Router()

router.post('/product', ProductCtrl.createProduct)
// router.put('/product/:id', ProductCtrl.updateCustomer)
// router.delete('/product/:id', ProductCtrl.deleteCustomer)
// router.get('/product/:id', ProductCtrl.getCustomerById)
router.get('/products', ProductCtrl.getProducts)

module.exports = router