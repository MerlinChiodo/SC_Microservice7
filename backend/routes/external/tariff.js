const express = require('express');
const { param, header, body } = require('express-validator');
const { createTariff, changeTariff, getTariff, getAllTariffs, deleteTariff  } = require("../../controllers/external/tariff.js");
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.post('/',
    header('token').not().isEmpty().trim().escape(),
    body('id').not().isEmpty().isNumeric(),
    body('prize').not().isEmpty().isNumeric(),
    body('services').not().isEmpty().isAlphanumeric(),
    body('conditions').optional().isAlphanumeric(),
    createTariff)

router.put('/',
    param('id').optional().isNumeric(),
    header('token').optional().trim().escape(),
    body('id').optional().isNumeric(),
    body('prize').optional().isNumeric(),
    body('services').optional().isAlphanumeric(),
    body('conditions').optional().isAlphanumeric(),
    changeTariff)

router.get('/:tariffID',
    param('tariffID').not().isEmpty(),
    header('token').not().isEmpty().trim().escape(),
    getTariff)

router.get('/all',
    header('token').not().isEmpty().trim().escape(),
    getAllTariffs)

router.delete('/:tariffID',
    param('tariffID').not().isEmpty().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    deleteTariff)

module.exports = router