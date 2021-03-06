const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema(
    {
        auth:{login:String,password:String},
        name:String,
        basket: [{product_id:String, productName:String, seller_id:String, count:Number, price:Number}]

    },
    { timestamps: true },
)

module.exports = mongoose.model('customers', Customer)