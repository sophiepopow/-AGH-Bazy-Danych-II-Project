const { json } = require('body-parser')
const Customer = require('../models/customer-model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const createCustomer = async (req, res) => {
    const body = req.body
    const hashedPassword = await bcrypt.hash(req.body.auth.password, 10)
    body.auth.password = hashedPassword
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a customer',
        })
    }

    const customer = new Customer(body)

    if (!customer) {
        return res.status(400).json({ success: false, error: err })
    }

    customer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: customer._id,
                message: 'Customer created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Customer not created!',
            })
        })
}

const updateCustomer = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Customer.findOne({ _id: req.params.id }, (err, customer) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Customer not found!',
            })
        }
        customer.auth.login = body.login
        customer.auth.password = body.password
        customer.name = body.name
        customer
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: customer._id,
                    message: 'Customer updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Customer not updated!',
                })
            })
    })
}

const deleteCustomer = async (req, res) => {
    await Customer.findOneAndDelete({ _id: req.params.id }, (err,customer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!customer) {
            return res
                .status(404)
                .json({ success: false, error: `Customer not found` })
        }

        return res.status(200).json({ success: true, data: customer })
    }).catch(err => console.log(err))
}

const getCustomerById = async (req, res) => {
    await Customer.findOne({ _id: req.params.id }, (err, customer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!customer) {
            return res
                .status(404)
                .json({ success: false, error: `Customer not found` })
        }
        return res.status(200).json({ success: true, data: customer })
    }).catch(err => console.log(err))
}

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).send({ success: true, data: customers });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    } 
}

const loginCustomer = async (req, res) => {
    const {login, password} = req.body.auth;
    const customer = await Customer.findOne({"auth.login":login})
    console.log(customer)
    if (!customer) {
            return res
                .status(200)
                .json({ success: false, error: `Wrong login` })
        }
    const isPasswordValid = await bcrypt.compare(password, customer.auth.password)
    if (!isPasswordValid) {
        return res
            .status(200)
            .json({ success: false, error: `Wrong password` })
    }
    var role = 'customer'
    if (customer.name == 'Admin'){
        role = 'admin'
    }
    const token = jwt.sign({
        name: customer.name,
        id: customer._id,
        role: role
    }, 'secret123')
    return res.status(200).json({ success: true, data: token })
}



module.exports = {
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomers,
    getCustomerById,
    loginCustomer
}
