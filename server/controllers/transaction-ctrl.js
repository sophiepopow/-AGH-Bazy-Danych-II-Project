const Transaction = require('../models/transaction-model');
const jwt = require('jsonwebtoken');




const createTransaction = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'There is something wrong with transaction',
        })
    }
    if(!body.token) {
        return res.status(401).json({
            succes: false,
            error: "Please login first to buy products!"
        })
    }
    let user = jwt.decode(body.token);

    const customer_id = user.id;
    const transaction = new Transaction({...body, customer_id})

    if (!transaction) {
        return res.status(400).json({ success: false, error: err })
    }

    transaction
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: transaction._id,
                message: 'Transaction created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Transaction not created!',
            })
        })
}

module.exports = {
    createTransaction
}