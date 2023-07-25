'use strict';

const express = require('express');
const subcategoryController = require('../controllers/subCategoryController');
const router = express.Router();

router.get('/subcategoryevents', subcategoryController.getSubCategories);
router.get('/subcategoryeventname/:id', subcategoryController.getCategoryName);
router.get('/subcategoryevent/:id', subcategoryController.getSubCategory);
router.post('/subcategoryevent', subcategoryController.addSubCategory);
router.get('/subcategories', subcategoryController.getSubcatego);
// router.put('/categoryevent/:id', updateCategory);
router.delete('/subcategoryevent/:id', subcategoryController.deleteSubCategory);

module.exports = {
    routes: router
}