'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getStockDetails = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stockInevents');
        const getAll = await pool.request()
                            .query(sqlQueries.stockInlist);
        const stockDetails = getAll.recordset;
        return (stockDetails);
    }catch (error) {
        error.message;
    }
}

const getBatchDetails = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stockInevents');
        const batchlist = await pool.request()
                            .query(sqlQueries.selectbatchdropdown);
        const batchDetails = batchlist.recordset;
        return (batchDetails);
    }catch (error) {
        error.message;
    }
}

const getStockInCount = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stockInevents');
        const stockcount = await pool.request()
                            .query(sqlQueries.stockincount);
        const batchDetails = stockcount.recordset;
        return (batchDetails);
    }catch (error) {
        error.message;
    }
}

const getCategoryDetails = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stockInevents');
        const categorylist = await pool.request()
                                    .query(sqlQueries.selectcategorydropdown);
        return (categorylist.recordset);
    }catch (error) {
        error.message
    }
}

const getMedicineDetails = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stockInevents');
        const medicinelist = await pool.request()
                                    .query(sqlQueries.selectmedicinedropdown);
        return (medicinelist.recordset);
    }catch (error) {
        error.message
    }
}

const getExistingQuantity = async (stockInID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stockInevents');
        const existQuan = await pool.request()
                                    .input('stockInID', sql.Int, stockInID)
                                    .query(sqlQueries.selectexistingquantity);
        return (existQuan.recordset);
    }catch (error) {
        error.message
    }
} 

const addStockIn = async (stockInData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('stockInevents');
        const lastID = await pool
                        .request()
                        .query(sqlQueries.getlaststockInID);
        let StockInID = 1;

        if (lastID && lastID.recordset && lastID.recordset.length > 0) {
            StockInID = lastID.recordset[0].StockInID + 1; // Increment the batch ID
        }

        const lastStock = await pool
                        .request()
                        .query(sqlQueries.getlaststockID);
        let StockID = 1;

        if (lastStock && lastStock.recordset && lastStock.recordset.length > 0) {
            StockID  = lastStock.recordset[0].StockID  + 1; // Increment the batch ID
        }

        console.log(StockInID, StockID);

        const insertStock = await pool.request()
                            .input('StockInDate', sql.Date, stockInData.StockInDate)
                            .input('Batchname', sql.NVarChar(100), stockInData.Batchname)
                            .input('categoryName', sql.NVarChar(100), stockInData.categoryName)
                            .input('subCategoryName', sql.NVarChar(100), stockInData.subCategoryName)
                            .input('medicineName', sql.NVarChar(100), stockInData.medicineName)
                            .input('existingQuantity', sql.Int, stockInData.existingQuantity)
                            .input('addedQuantity', sql.Int, stockInData.addedQuantity)
                            .input('notes', sql.NVarChar(100), stockInData.notes)
                            .input('StockInID', sql.Int, StockInID)
                            .input('newStockQuantity', sql.Int, stockInData.newStockQuantity)
                            .query(sqlQueries.createstockIn);

        const insertStockDetails = await pool.request()
                            .input('StockID', sql.Int, StockID)
                            .input('medicineName', sql.NVarChar(100), stockInData.medicineName)
                            .input('stockInDate', sql.Date, stockInData.StockInDate)
                            .input('addedQuantity', sql.Int, stockInData.addedQuantity)
                            .input('newStockQuantity', sql.Int, stockInData.newStockQuantity)
                            .input('StockInID', sql.Int, StockInID)
                            .query(sqlQueries.updatestock);

        return insertStock.recordsets;
    }catch (error) {
        return error.message
    }
}

module.exports = {
    addStockIn,
    getStockDetails,
    getBatchDetails,
    getCategoryDetails,
    getMedicineDetails,
    getExistingQuantity,
    getStockInCount
}