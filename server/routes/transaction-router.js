const express = require('express')
const TransactionCtrl = require('../controllers/transaction-ctrl')
const router = express.Router()

router.post('/transaction', TransactionCtrl.createTransaction)
// router.get('/transactions', TransactionCtrl.getTransactions)
module.exports = router