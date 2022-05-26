const Product = require('../models/product.model');

const createProduct = (req,res) => {
    Product.create(req.body)
    .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
    })
    .catch((err) => {
        res.status(500).json({message: "Product creation failed", error: err});
    });
};

const getProducts = (req, res) => {
    Product.find({}).then((products) => {
        console.log(products);
        res.status(200).json(products);
    })
    .catch((err) => {
        res.status(400).json({message: "Get all products failed", error: err});
    });
};

const getProductById = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then((oneProduct) => {
        console.log(oneProduct);
        res.status(200).json(oneProduct);
    })
    .catch((err) => {
        res.status(400).json({message: "Get single product failed", error: err});
    });
};

const updateProduct = (req, res) => {
    Product.updateOne({_id: req.params.id}, 
        req.body,
        {upsert:true, new: true, runValidators: "true"})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    })
    .catch((err) => {
        res.status(400).json({message: "Update product failed", error: err})
    });
};

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then((deletedProduct) => {
        res.json(deletedProduct);
    })
    .catch((err) => {
        res.status(400).json({message: "Delete product failed", error: err})
    })
};


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};