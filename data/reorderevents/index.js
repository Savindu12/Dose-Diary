'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getReorderList = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reorderevents');
        const list = await pool.request().query(sqlQueries.getreorderreport);
        return list.recordset;
    }catch(error) {
        return error.message;
    }
}

const getReorderCount = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reorderevents');
        const count = await pool.request().query(sqlQueries.reorderitemcount);
        return count.recordset;
    }catch(error) {
        return error.message;
    }
}

const getLatestReorderList = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reorderevents');
        const list = await pool.request().query(sqlQueries.latestreorderitems);
        return list.recordset;
    }catch(error) {
        return error.message;
    }
}

module.exports = {
    getReorderList,
    getLatestReorderList,
    getReorderCount
}