const mongoose = require('mongoose')

mongoose
    .connect('mongodb://db:27017/warzywniaczek', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db