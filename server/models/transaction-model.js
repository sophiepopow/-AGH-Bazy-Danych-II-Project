const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Transaction = new Schema(
    {
        customer_id: { type: String, required: true },
        products: [{product_id:String, productName:String, seller_id:String, count:Number}],
        price: {type: Number, required:true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('transactions', Transaction)