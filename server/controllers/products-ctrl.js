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
    const match={}
    const sort ={}

    console.log(req.query);

    if(req.query.sortBy){
        const parts = req.query.sortBy.split('.')
        sort[parts[0]] = parts[1]==='desc'? -1 : 1
    }

    if(req.query.productName){
        match.productName = req.query.productName;
    }

    if(req.query.shopName){
        match.shopName = req.query.shopName;
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

    try {
        const products = await Product.find(match).sort(sort);

        res.status(200).send({ success: true, data: products });
    }
    catch(err){
        console.log(err);
        res.status(400).send({ success: false, error: err });
    } 
}



module.exports = {
    createProduct,
    getProducts
}
