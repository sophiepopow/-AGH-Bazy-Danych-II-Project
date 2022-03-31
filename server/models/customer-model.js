const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema(
    {
        firstname: { type: String, required: true},
        surname: { type: String, required: true },
        age: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('customers', Customer)