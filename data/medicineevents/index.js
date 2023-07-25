'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getMedicines = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('medicineevents');
        const list = await pool.request().query(sqlQueries.medicinelist);
        return list.recordset;
    }catch(error) {
        return error.message;
    }
}

const getMedicineById = async (medicineID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('medicineevents');
        const oneMedicine = await pool.request()
                                .input('medicineID', sql.Int, medicineID)
                                .query(sqlQueries.medicinebyId);
        return oneMedicine.recordset;
    }catch(error){
        return error.message;
    }
}

const getCategoryDetails = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('medicineevents');
        const categorylist = await pool.request()
                            .query(sqlQueries.getcategorylist);
        const categoryDetails = categorylist.recordset;
        return (categoryDetails);
    }catch (error) {
        error.message;
    }
}

const addMedicine = async (medicineData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('medicineevents');
        const lastMedicine = await pool   
                            .request()
                            .query(sqlQueries.getlastmedicineid);
        let medicineID = 1;

        if (lastMedicine && lastMedicine.recordset && lastMedicine.recordset.length > 0) {
            medicineID = lastMedicine.recordset[0].medicineID + 1; // Increment the batch ID
        }

        console.log(medicineID);

        const insertMedicine = await pool.request()
                                .input('medicineID', sql.Int, medicineID)
                                .input('medicineName', sql.NVarChar(100), medicineData.medicineName)
                                .input('productionDate', sql.Date, medicineData.productionDate)
                                .input('expiryDate', sql.Date, medicineData.expiryDate)
                                .input('reorderLevel', sql.NVarChar(100), medicineData.reorderLevel)
                                .input('price', sql.Decimal, medicineData.price)
                                .input('categoryName', sql.NVarChar(100), medicineData.categoryName)
                                .query(sqlQueries.createmedicine);
        return insertMedicine.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateMedicine = async (medicineID, medicineData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('medicineevents');
        const updateMedicine = await pool.request()
                                .input('medicineID', sql.Int, medicineData.medicineID)
                                .input('medicineName', sql.NVarChar(100), medicineData.medicineName)
                                .input('productionDate', sql.Date, medicineData.productionDate)
                                .input('expiryDate', sql.Date, medicineData.expiryDate)
                                .input('reorderLevel', sql.NVarChar(100), medicineData.reorderLevel)
                                .input('createdDate', sql.Date, medicineData.createdDate)
                                .input('price', sql.Decimal, medicineData.price)
                                .input('categoryID', sql.Int, medicineData.categoryID)
                                .query(sqlQueries.updatemedicine);
        return updateMedicine.recordset;
    }catch (error) {
        return error.message;
    }
}

const deleteMedicine = async (medicineID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('medicineevents');
        const deleteMedicine = await pool.request()
                                .input('medicineID', sql.Int, medicineID)
                                .query(sqlQueries.deletemedicine);
        return deleteMedicine.recordset;
    }catch(error){
        return error.message;
    }
}

module.exports = {
    getMedicines,
    getMedicineById,
    addMedicine,
    updateMedicine,
    deleteMedicine,
    getCategoryDetails
}