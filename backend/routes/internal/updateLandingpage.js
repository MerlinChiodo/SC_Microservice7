const express = require('express');
const { header, body } = require('express-validator');
const { updateLandingpage, deleteLandingpage } = require("../../controllers/internal/updateLandingpage.js");
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.post('/',
    header('token').not().isEmpty().trim().escape(),
    body('url').not().isEmpty().isURL(),
    body('imurl').not().isEmpty().isURL(),
    body('aboutus').not().isEmpty(),
    updateLandingpage)

router.delete('/',
    header('token').not().isEmpty().trim().escape(),
    deleteLandingpage)

module.exports = router