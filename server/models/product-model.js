const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema({user: Number, date: Date, stars: Number, text: {type: String, required: false}})
const Product = new Schema(
    {
        productName: { type: String, required: true},
        category: { type: String, required: true },
        price: { type: Number, required: true },
        shopName: {type: String, required: true },
        reviews: [{type: Review, required: false}],
        count:  {type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)