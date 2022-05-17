const Product = require('../models/product-model')

const createProduct = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a product',
        })
    }

    // TO DO when user ready - pass right uid
    const product = new Product({...body, uid: 1234})

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
    try {
        const products = await Product.find({});
        res.status(200).send({ success: true, data: products });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    } 
}



const getProductsByShop = async (req, res) => {
    try {
        const products = await Product.find({shopName: req.params.shopName});

        console.log(products);
        res.status(200).send({ success: true, data: products });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    }
}


const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({category: req.params.category});

        console.log(products);
        res.status(200).send({ success: true, data: products });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    }
}


// const getProductsCheaperThan = async (req, res) => {
//     try {
//         const products = await Product.find({price: {$lt:req.params.price}});
//
//         console.log(products);
//         res.status(200).send({ success: true, data: products });
//     }
//     catch(err){
//         console.log(err);
//         res.status(400).send({ success: false, error: err });
//     }
// }
//
//
// const getProductsMoreExpensiveThan = async (req, res) => {
//     try {
//         const products = await Product.find({price: {$gt:req.params.price}});
//
//         console.log(products);
//         res.status(200).send({ success: true, data: products });
//     }
//     catch(err){
//         console.log(err);
//         res.status(400).send({ success: false, error: err });
//     }
// }


const getProductByName = async (req, res) => {
    try {
        const products = await Product.find({productName: req.params.productName});

        console.log(products);
        res.status(200).send({ success: true, data: products });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    }
}


module.exports = {
    createProduct,
    getProducts,
    getProductsByShop,
    getProductsByCategory,
    getProductByName
}
