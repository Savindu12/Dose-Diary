'use strict';

const express = require('express');
const userControll = require('../controllers/createAccController');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');

router.get('/users', jwtAuth, userControll.getAllUsers);
router.post('/login/:Email/:Password', userControll.userLogin);
router.post('/createAccount', userControll.createAccount);

module.exports = {
    routes: router
}