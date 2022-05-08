const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        productName: { type: String, required: true},
        category: { type: String, required: true },
        price: { type: Number, required: true },
        uid: {type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)