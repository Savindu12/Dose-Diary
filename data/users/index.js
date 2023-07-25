'use strict'

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const accountList = await pool.request().query(sqlQueries.accountlist);
        return accountList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const userLogin = async (Email, Pasword) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const oneUser = await pool.request()
                            .input('Email', sql.NVarChar, Email)
                            .input('Pasword', sql.NVarChar, Pasword)
                            .query(sqlQueries.userlogin);
        return oneUser.recordset;
    }catch (error) {
        console.log(error.message);
    }
}

const createAccount = async (accdata) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const addAccount = await pool.request()
                            .input('Firstname',sql.NVarChar(50), accdata.Firstname)
                            .input('Lastname', sql.NVarChar(50), accdata.Lastname)
                            .input('Userame', sql.NVarChar(50), accdata.Username)
                            .input('Email', sql.NVarChar(50), accdata.Email)
                            .input('Password', sql.NVarChar(100), accdata.Password)
                            .input('Confirmpassword', sql.NVarChar(100), accdata.Confirmpassword)
                            .query(sqlQueries.createAccount);
            return addAccount.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    createAccount,
    userLogin
}