'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getSubcategories = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('subcategoryevents');
        const subCatelist = await pool.request().query(sqlQueries.subcatelist);
        return subCatelist.recordset;
    }catch (error) {
        return error.message;
    }
}

const getSubCateById = async (subCategoryID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('subcategoryevents');
        const oneSubCate = await pool.request()
                         .input('subCategoryID', sql.Int, subCategoryID)
                         .query(sqlQueries.subcatebyid);
        return oneSubCate.recordset;
    } catch(error) {
        return error.message;
    }
}

const selectSubCate= async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('subcategoryevents');
        const subCategory = await pool
                            .request()
                            .query(sqlQueries.subcatedropdown);
        return subCategory.recordset;
    }catch (error){
        return error.message;
    }
}

const createSubCate = async (subCateData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('subcategoryevents');
        const lastCate = await pool
                            .request()
                            .query(sqlQueries.getlastsubcategory);
        let subCategoryID = 1; // Default value for the first batch

        // Check if there is a last inserted batch ID
        if (lastCate && lastCate.recordset && lastCate.recordset.length > 0) {
            subCategoryID = lastCate.recordset[0].subCategoryID + 1; // Increment the batch ID
        }

        const insertSubCategory = await pool.request()
                            .input('subCategoryID', sql.Int, subCategoryID)
                            .input('subCategoryName', sql.NVarChar(100), subCateData.subCategoryName)
                            .input('categoryName', sql.NVarChar(100), subCateData.categoryName)
                            .input('subCategoryDes', sql.NVarChar(20), subCateData.subCategoryDes)
                            .input('subCategoryStatus', sql.NVarChar(20), subCateData.subCategoryStatus)
                            .query(sqlQueries.createsubcate);
        console.log(subCategoryID );
        return insertSubCategory.recordsets;
    } catch(error) {
        return error.message;
    }
}

const deleteSubCategory = async (subCategoryID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('subcategoryevents');
        const deleted = await pool.request()
                        .input('subCategoryID', sql.Int, subCategoryID)
                        .query(sqlQueries.deletesubcate);
        return deleted.recordset;
    } catch(error) {
        return error.message;
    }
}

const getCategoryNameBySubcategoryId = async (subCategoryID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('subcategoryevents');
        const result = await pool.request()
            .input('subcategoryId', sql.Int, subCategoryID)
            .query(sqlQueries.GetCategoryNameBySubcategoryId);

        console.log(result);

        const categoryName = result.recordset;
        return categoryName;
    } catch(error) {
        return error.message;
    }
}

module.exports = {
    getSubcategories,
    getSubCateById,
    createSubCate,
    deleteSubCategory,
    getCategoryNameBySubcategoryId,
    selectSubCate
}