'use strict'

const stockInData = require('../data/stockInevents');


const getStockDetails = async (req, res, next) => {
    try {
        const insert = await stockInData.getStockDetails();
        console.log(insert);
        res.send(insert);
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getBatchDetails = async (req, res, next) => {
    try {
        const getBatches = await stockInData.getBatchDetails();
        console.log(getBatches);
        res.send(getBatches);
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getCategoryDetails = async (req, res, next) => {
    try {
        const getCategory = await stockInData.getCategoryDetails();
        res.send(getCategory);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getmedicineDetails = async (req, res, next) => {
    try {
        const getMedicine = await stockInData.getMedicineDetails();
        res.send(getMedicine);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getstockCount = async (req, res, next) => {
    try {
        const stockCount = await stockInData.getStockInCount();
        res.send(stockCount);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const addStock = async (req, res, next) => {
    try {
        const stockData = req.body;
        const insert = await stockInData.addStockIn(stockData);
        console.log(insert);
        res.send(insert);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getExistingQuantity = async (req, res, next) => {
    try {
        const stockInID = req.params.id;
        const getExistQuantity = await stockInData.getExistingQuantity(stockInID);
        console.log(getExistQuantity);
        res.send(getExistQuantity);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addStock,
    getStockDetails,
    getBatchDetails,
    getCategoryDetails,
    getmedicineDetails,
    getExistingQuantity,
    getstockCount
}