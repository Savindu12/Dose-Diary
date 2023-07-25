'use strict'

const subcategoryData = require('../data/subcategoryevents');

const getSubCategories = async(req, res, next) => {
    try {
        const subCategories = await subcategoryData.getSubcategories();
        res.send(subCategories);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const getSubcatego = async (req, res, next) =>{
    try {
        const oneSubCategory = await subcategoryData.selectSubCate();
        res.send(oneSubCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSubCategory = async (req,res,next) => {
    try {
        const oneSubCategory = await subcategoryData.getSubCateById(subCategoryID);
        res.send(oneSubCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCategoryName = async (req, res, next) => {
    try {
        const subCategoryID = req.params.id;
        const categoryName = await subcategoryData.getCategoryNameBySubcategoryId(subCategoryID);
        res.send(categoryName);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addSubCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await subcategoryData.createSubCate(data);
        res.send(created);
        console.log(created);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const deleteSubCategory = async (req, res, next) => {
    try {
        const subCategoryID = req.params.id;
        const deletedSubCategory = await subcategoryData.deleteSubCategory(subCategoryID);
        res.send(deletedSubCategory);

    } catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getSubCategories,
    getSubCategory,
    addSubCategory,
    deleteSubCategory,
    getCategoryName,
    getSubcatego
}