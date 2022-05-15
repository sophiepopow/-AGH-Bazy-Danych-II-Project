const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema(
    {
        auth:{login:String,password:String},
        name:String,
        transactions: [Schema.Types.ObjectId]
    },
    { timestamps: true },
)

module.exports = mongoose.model('customers', Customer)