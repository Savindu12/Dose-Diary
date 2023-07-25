'use strict';

const express = require('express');
const medicineControll = require('../controllers/medicineController');
const router = express.Router();

const {getMedicines, getCategories, addMedicine, getMedicine, updateMedicine, deleteMedicine} = medicineControll;

router.get('/medicines', getMedicines);
router.get('/medicinecategories', getCategories);
router.get('/medicine/:id', getMedicine);
router.post('/medicine', addMedicine);
router.put('/medicine/:id', updateMedicine);
router.delete('/medicine/:id', deleteMedicine);


module.exports = {
    routes: router
}