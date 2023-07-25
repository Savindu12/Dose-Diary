'use strict';

const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

const {getCategories, getCategory, addCategory, updateCategory, deleteCategory} = categoryController;

router.get('/categoryevents', getCategories);
router.get('/categoryevent/:id', getCategory);
router.post('/categoryevent', addCategory);
router.put('/categoryevent/:id', updateCategory);
router.delete('/categoryevent/:id', deleteCategory);

module.exports = {
    routes: router
}