'use strict';

const categoryData = require('../data/categoryevents');

const getCategories = async(req, res, next) => {
    try {
        const categories = await categoryData.getCategories();
        res.send(categories);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const getCategory = async (req, res, next) => {
    try {
        const categoryID = 1;
        const oneCategory = await categoryData.getCategoryById(categoryID);
        res.send(oneCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await categoryData.createCategory(data);
        res.send(created);

    } catch(error) {
        res.status(400).send(error.message);
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const updated = await categoryData.updateCategory(data);
        res.send(updated);
        console.log(updated);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const categoryID = req.params.id;
        const deletedCategory = await categoryData.deleteCategory(categoryID);
        res.send(deletedCategory);

    } catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}