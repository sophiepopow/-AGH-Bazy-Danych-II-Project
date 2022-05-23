const express = require('express')
const SellerCtrl = require('../controllers/seller-ctrl')
const router = express.Router()

router.post('/seller', SellerCtrl.createSeller)
router.put('/seller/:id', SellerCtrl.updateSeller)
router.delete('/seller/:id', SellerCtrl.deleteSeller)
router.get('/seller/:id', SellerCtrl.getSellerById)
router.get('/sellers', SellerCtrl.getSellers)
router.post('/sellerlogin', SellerCtrl.loginSeller)

module.exports = router