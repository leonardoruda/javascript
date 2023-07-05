const Product = require('../models/productModel');
const {getPostData } = require('../utils');

// @desc   Gets all products
// @route  GET /api/products/
async function getProducts(req, res) {
    try {
        const products = await Product.findAll();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

// @desc   Gets a product
// @route  GET /api/products/:id
async function getProduct(req, res, id) {
    try {
        const product = await Product.findOne(id);

        if(!product) {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product not found!'}));
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(product));
        }
    } catch (error) {
        console.log(error);
    }
}

// @desc   Creates a product
// @route  POST /api/products/:id
async function createProduct(req, res) {
    try {
        const body = await getPostData(req);
        const {title:title, description, price} = JSON.parse(body);
        const product = {
            title,
            description,
            price
        }

        const newProduct = await Product.create(product);

        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(newProduct));
    } catch (error) {
        console.log(error);
    }
}

// @desc   Updates one product
// @route  PUT /api/products/:id
async function updateProduct(req, res, id) {
    try {
        const product = await Product.findOne(id);

        if(!product) {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product not found!'}));
        } else {
            const body = await getPostData(req);
            const {title, description, price} = JSON.parse(body);
            const productData = {
                title: title || product.title,
                description: description || product.description,
                price: price || product.price
            }

            const updProduct = await Product.update(id, productData);

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(updProduct));
            }

    } catch (error) {
        console.log(error);
    }
}

// @desc   Deletes a product
// @route  DELETE /api/products/:id
async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findOne(id);

        if(!product) {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product not found!'}));
        } else {
            const deleted = await Product.remove(id);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(`Product ${id} has been deleted`));
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}