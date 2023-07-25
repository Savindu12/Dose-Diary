'use strict';

const express = require('express');
const reorderControll = require('../controllers/reorderController');
const router = express.Router();

router.get('/reorderlist', reorderControll.getReorderList);
router.get('/latestreorderlist', reorderControll.getLatestReorderList);
router.get('/reordercount', reorderControll.getReorderCount);

module.exports = {
    routes: router
}