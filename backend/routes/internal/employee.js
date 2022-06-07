const express = require('express');
const { param, header, body } = require('express-validator');
const { createEmployee, changeEmployee, getEmployee, getAllEmployees, deleteEmployee  } = require("../../controllers/internal/employee.js");
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.post('/',
    header('token').not().isEmpty().trim().escape(),
    body('id').not().isEmpty().isNumeric(),
    body('lastname').not().isEmpty().isAlpha(),
    body('firstname').not().isEmpty().isAlpha(),
    body('salary').optional().isNumeric(),
    createEmployee)

router.put('/',
    param('id').optional().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    body('lastname').optional().isAlpha(),
    body('firstname').optional().isAlpha(),
    body('salary').optional().isNumeric(),
    changeEmployee)

router.get('/:employeeID',
    param('employeeID').not().isEmpty(),
    header('token').not().isEmpty().trim().escape(),
    getEmployee)

router.get('/all',
    header('token').not().isEmpty().trim().escape(),
    getAllEmployees)

router.delete('/:employeeID',
    param('employeeID').not().isEmpty().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    deleteEmployee)

module.exports = router