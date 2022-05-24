const Product = require('../models/product-model');
const jwt = require('jsonwebtoken');

const createProduct = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a product',
        })
    }
    if(!body.token) {
        return res.status(401).json({
            succes: false,
            error: "Please login first to add product!"
        })
    }
    let user = jwt.decode(body.token);

    // TO DO when user ready - pass right uid
    const uid = user.id;
    const product = new Product({...body, uid})

    if (!product) {
        return res.status(400).json({ success: false, error: err })
    }

    product
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: product._id,
                message: 'Product created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Product not created!',
            })
        })
}

const getProducts = async (req, res) => {
    const match={}
    const sort ={}
    console.log(req)
    if(req.query.sortBy){
        const parts = req.query.sortBy.split('.')
        sort[parts[0]] = parts[1]==='desc'? -1 : 1
    }

    if(req.query.productName){
        match.productName = { $regex: req.query.productName };
    }

    if(req.query.shopName){
        match.shopName = { $regex: req.query.shopName };
    }

    if(req.query.category){
        match.category = req.query.category;
    }

    if(req.query.pricelte){
        match.price = {$lte:req.query.pricelte};
    }

    if(req.query.pricegte){
        match.price = {$gte:req.query.pricegte};
    }
    console.log(match)
    try {
        const products = await Product.find(match).sort(sort);
        res.status(200).send({ success: true, data: products });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    } 
}
const updateProductReview = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide review to update Product',
        })
    }
    if(!body.token) {
        return res.status(401).json({
            succes: false,
            error: "Please login first to add review!"
        })
    }
    let user = jwt.decode(body.token);
    Product.findOne({ _id: req.params.id }, (err, product) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Product not found!',
            })
        }
        product.reviews = product.reviews.filter(p => p.user !== user.id)
        product.reviews.push({
            user: user.id,
            date: new Date().toDateString(),
            stars: parseInt(body.review),
        });
        product
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    _id: product.id,
                    message: 'Product updated!',
                })
            })
            .catch(error => {
                console.log(error);
                return res.status(404).json({
                    error,
                    message: 'Product not updated!',
                })
            })
    })
}

module.exports = {
    createProduct,
    getProducts,
    updateProductReview
}
