const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Seller = new Schema(
    {
        auth:{login:String,password:String},
        name:String
    },
    { timestamps: true },
)

module.exports = mongoose.model('sellers', Seller)