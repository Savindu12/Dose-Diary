'use strict';

const medicineData = require('../data/medicineevents');

const getMedicines = async (req, res, next) => {
    try{
        const medicines = await medicineData.getMedicines();
        res.send(medicines);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getMedicine = async (req, res, next) => {
    try {
        const medicineID = req.params.id;
        const oneMedicine = await medicineData.getMedicineById(medicineID);
        res.send(oneMedicine);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getCategories = async(req, res, next) => {
    try {
        const categories = await medicineData.getCategoryDetails();
        res.send(categories);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const addMedicine = async (req, res, next) => {
    try {
        const data = req.body;
        const addMedicine = await medicineData.addMedicine(data);
        console.log(addMedicine);
        res.send(addMedicine);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateMedicine = async (req, res, next) => {
    try {
        const medicineID = req.params.id;
        const data = req.body;
        const updateMedicine = await medicineData.updateMedicine(medicineID, data);
        res.send(updateMedicine);

    } catch(error) {
        res.status(400).send(error.message);
    }
}

const deleteMedicine = async (req, res, next) => {
    try {
        const medicineID = req.params.id;
        const deleteMedicine = await medicineData.deleteMedicine(medicineID);
        res.send(deleteMedicine);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getMedicines,
    getMedicine,
    addMedicine,
    updateMedicine,
    deleteMedicine,
    getCategories
}