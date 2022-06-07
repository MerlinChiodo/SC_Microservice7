const express = require('express');
const { param, header, body } = require('express-validator');
const { createAboutUs, getAboutUs, getAllAboutUs, deleteAboutUs  } = require("../../controllers/external/aboutUs.js");
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.post('/',
    header('token').not().isEmpty().trim().escape(),
    body('id').not().isEmpty().isNumeric(),
    body('text').not().isEmpty().isAlphanumeric(),
    body('date').not().isEmpty().isDate(),
    body('authorID').not().isEmpty().isAlphanumeric(),
    createAboutUs)

router.get('/:aboutUsID',
    param('aboutUsID').not().isEmpty(),
    header('token').not().isEmpty().trim().escape(),
    getAboutUs)

router.get('/all',
    header('token').not().isEmpty().trim().escape(),
    getAllAboutUs)

router.delete('/:aboutUsID',
    param('aboutUsID').not().isEmpty().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    deleteAboutUs)

module.exports = router