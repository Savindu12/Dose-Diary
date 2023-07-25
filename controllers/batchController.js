'use strict';

const batchData = require('../data/batchevents');

const getBatches = async(req, res, next) => {
    try {
        const batches = await batchData.getBatches();
        res.send(batches);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const getBatch = async (req, res, next) => {
    try {
        const batchID = req.params.id;
        const oneBatch = await batchData.getBatchById(batchID);
        res.send(oneBatch);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBatchCount = async (req, res, next) => {
    try {
        const batchCount = await batchData.getbatchCount();
        console.log(batchCount);
        res.send(batchCount);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const addBatch = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await batchData.addBatch(data);
        res.send(created);
        console.log(created);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const updateBatch = async (req, res, next) => {
    try {
        const batchID = req.params.id;
        const data = req.body;
        const updated = await batchData.updateBatch(batchID, data);
        res.send(updated);

    } catch(error) {
        res.status(400).send(error.message);
    }
}

const deleteBatch = async (req, res, next) => {
    try {
        const batchID = req.params.id;
        const deletedBatch = await batchData.deleteBatch(batchID);
        res.send(deletedBatch);

    } catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getBatches,
    getBatch,
    addBatch,
    updateBatch,
    deleteBatch,
    getBatchCount
}