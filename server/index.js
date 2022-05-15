const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const db = require('./db')
const customerRouter = require('./routes/customer-router')
const sellerRouter = require('./routes/seller-router')
const productRouter = require('./routes/product-router')
const app = express()
const apiPort = 3000

app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', customerRouter)
app.use('/api', productRouter)
app.use('/api', sellerRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))