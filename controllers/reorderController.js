'use strict';

const reorderData = require('../data/reorderevents');

const getReorderList = async (req, res, next) => {
    try{
        const reorderlist = await reorderData.getReorderList();
        res.send(reorderlist);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getLatestReorderList = async (req, res, next) => {
    try{
        const reorderlist = await reorderData.getLatestReorderList();
        res.send(reorderlist);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getReorderCount = async (req, res, next) => {
    try{
        const reordercount = await reorderData.getReorderCount();
        res.send(reordercount );
    }catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getReorderList,
    getLatestReorderList,
    getReorderCount
}
