let products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid');
const {writeDataToFile} = require('../utils');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

function findOne(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id);
        resolve(product);
    })
}

function create(product) {
    return new Promise((resolve, reject) => {

        const productData = {id: uuidv4(), ...product};
        
        products.push(productData);
        writeDataToFile('./data/products.json', products);
        resolve(productData)
    })
}

function update(id, productData) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((p) => p.id === id);
        
        products[index] = {id, ...productData};
        writeDataToFile('./data/products.json', products);
        resolve(products[index]);
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        products = products.filter((p) => p.id !== id);

        writeDataToFile('./data/products.json', products);
        resolve();
    })
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}