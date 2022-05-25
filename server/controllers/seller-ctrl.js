const Seller = require('../models/seller-model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const createSeller = async (req, res) => {
    const body = req.body
    const hashedPassword = await bcrypt.hash(req.body.auth.password, 10)
    body.auth.password = hashedPassword

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a seller',
        })
    }

    const seller = new Seller(body)

    if (!seller) {
        return res.status(400).json({ success: false, error: err })
    }

    seller
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: seller._id,
                message: 'Seller created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Seller not created!',
            })
        })
}

const updateSeller = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Seller.findOne({ _id: req.params.id }, (err, seller) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Seller not found!',
            })
        }
        seller.auth.login = body.login
        seller.auth.password = body.password
        seller.name = body.name
        seller
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: seller_id,
                    message: 'Seller updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Seller not updated!',
                })
            })
    })
}

const deleteSeller = async (req, res) => {
    await Seller.findOneAndDelete({ _id: req.params.id }, (err,seller) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seller) {
            return res
                .status(404)
                .json({ success: false, error: `Seller not found` })
        }

        return res.status(200).json({ success: true, data: seller })
    }).catch(err => console.log(err))
}

const getSellerById = async (req, res) => {
    await Seller.findOne({ _id: req.params.id }, (err, seller) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!seller) {
            return res
                .status(404)
                .json({ success: false, error: `Seller not found` })
        }
        return res.status(200).json({ success: true, data: seller })
    }).catch(err => console.log(err))
}

const getSellers = async (req, res) => {
    try {
        const sellers = await Seller.find({});
        res.status(200).send({ success: true, data: sellers });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    } 
}

const loginSeller = async (req, res) => {
    const {login, password} = req.body.auth;
    const seller = await Seller.findOne({"auth.login":login})
    if (!seller) {
        return res
            .status(200)
            .json({ success: false, error: `Wrong login` })
    }
    const isPasswordValid = await bcrypt.compare(password, seller.auth.password)
    if (!isPasswordValid) {
        return res
            .status(200)
            .json({ success: false, error: `Wrong password` })
    }
    const token = jwt.sign({
        name: seller.name,
        id: seller._id,
        role: 'seller'
    }, 'secret123')
    return res.status(200).json({ success: true, data: token })
}

module.exports = {
    createSeller,
    updateSeller,
    deleteSeller,
    getSellers,
    getSellerById,
    loginSeller
}
