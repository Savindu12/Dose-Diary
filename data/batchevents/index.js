'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getBatches = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchevents');
        const list = await pool.request().query(sqlQueries.batchlist);
        return list.recordset;

    } catch(error) {
        return error.message;
    }
}

const getBatchById = async(batchID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchevents');
        const oneBatch = await pool.request()
                         .input('batchID', sql.Int, batchID)
                         .query(sqlQueries.batchbyid);
        return oneBatch.recordset;
    } catch(error) {
        return error.message;
    }
}

const getbatchCount = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchevents');
        const counts = await pool.request().query(sqlQueries.batchpiechart);

        if (!counts.recordset || counts.recordset.length === 0) 
        {
            console.log('No batch counts found');
            return null;
        }

        const activeCount = counts.recordset[0].ActiveBatches;
        const frozenCount = counts.recordset[0].FrozenBatches;

        console.log(activeCount);

        return {activeCount, frozenCount};
    }catch (error) {
        return error.message;
    }
}

const addBatch = async(batchData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchevents');
        const lastBatch = await pool
                            .request()
                            .query(sqlQueries.getlastbatch);
        let batchID = 0; // Default value for the first batch

        // Check if there is a last inserted batch ID
        if (lastBatch && lastBatch.recordset && lastBatch.recordset.length > 0) {
            batchID = lastBatch.recordset[0].batchID + 1; // Increment the batch ID
        }
        
        console.log(lastBatch);

        const insertBatch = await pool.request()
                            .input('batchID', sql.Int, batchID)
                            .input('batchDes', sql.NVarChar(100), batchData.batchDes)
                            .input('batchStatus', sql.NVarChar(20), batchData.batchStatus)
                            .input('batchDate', sql.Date, batchData.batchDate)
                            .input('adminID', sql.Int, batchData.adminID)
                            .query(sqlQueries.createbatch);
                            console.log(batchID);
        return insertBatch.recordset;
    } catch(error) {
        return error.message;
    }
}

const updateBatch = async (batchID, batchData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchevents');
        const update = await pool.request()
                        .input('batchID', sql.Int, batchID)
                        .input('batchDes', sql.NVarChar(100), batchData.batchDes)
                        .input('batchStatus', sql.NVarChar(20), batchData.batchStatus)
                        .input('batchDate', sql.Date, batchData.batchDate)
                        .input('adminID', sql.Int, batchData.adminID)
                        .query(sqlQueries.updatebatch);
        return update.recordset;

    } catch(error) {
        return error.message;
    }
}

const deleteBatch = async (batchID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('batchevents');
        const deleted = await pool.request()
                        .input('batchID', sql.Int, batchID)
                        .query(sqlQueries.deletebatch);

        if (deleted.rowsAffected[0] > 0) {
            const updateBatchNumbers = await pool.request()
                        .query(sqlQueries.updateBatchNumbers);
                return true;
            }
        return updateBatchNumbers.recordset;
        // return deleted.recordset;
    } catch(error) {
        return error.message;
    }
}

module.exports = {
    getBatches,
    getBatchById,
    addBatch,
    updateBatch,
    deleteBatch,
    getbatchCount
}