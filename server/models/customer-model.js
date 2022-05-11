const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema(
    {
        auth:{login:String,password:String},
        role:String
    },
    { timestamps: true },
)

module.exports = mongoose.model('customers', Customer)