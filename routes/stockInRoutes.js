'user strict';

const express = require('express');
const stockInCrontroller = require('../controllers/stockInController');
const router = express.Router();

const {addStock, getstockCount ,getStockDetails,getExistingQuantity, getBatchDetails, getCategoryDetails, getmedicineDetails} = stockInCrontroller

router.get('/stockindetails', getStockDetails);
router.get('/stockbatches', getBatchDetails);
router.get('/stockcount', getstockCount);
router.get('/stockcategories', getCategoryDetails);
router.get('/existquantity/:id', getExistingQuantity);
router.get('/stockmedicines', getmedicineDetails);
router.post('/stockin', addStock);

module.exports = {
    routes: router
}