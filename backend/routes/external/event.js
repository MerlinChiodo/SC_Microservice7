const express = require('express');
const { param, header, body } = require('express-validator');
const { createEvent, changeEvent, getEvent, getAllEvents, deleteEvent  } = require("../../controllers/external/event.js");
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.post('/',
    header('token').not().isEmpty().trim().escape(),
    body('id').not().isEmpty().isNumeric(),
    body('title').not().isEmpty().isAlphanumeric(),
    body('text').not().isEmpty().isAlphanumeric(),
    body('date').optional().isDate(),
    body('authorID').not().isEmpty().isNumeric(),
    createEvent)

router.put('/',
    param('id').optional().isNumeric(),
    header('token').optional().trim().escape(),
    body('id').optional().isNumeric(),
    body('title').optional().isAlphanumeric(),
    body('text').optional().isAlphanumeric(),
    body('date').optional().isDate(),
    body('authorID').not().isEmpty().isNumeric(),
    changeEvent)

router.get('/:eventID',
    param('eventID').not().isEmpty(),
    header('token').not().isEmpty().trim().escape(),
    getEvent)

router.get('/all',
    header('token').not().isEmpty().trim().escape(),
    getAllEvents)

router.delete('/:eventID',
    param('eventID').not().isEmpty().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    deleteEvent)

module.exports = router