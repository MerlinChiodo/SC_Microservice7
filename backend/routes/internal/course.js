const express = require('express');
const { param, header, body } = require('express-validator');
const { createCourse, changeCourse, getCourse, getAllCourses, deleteCourse  } = require("../../controllers/internal/course.js");
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.post('/',
    header('token').not().isEmpty().trim().escape(),
    body('id').not().isEmpty().isNumeric(),
    body('name').not().isEmpty().isAlphanumeric(),
    body('day').not().isEmpty().isAlpha(),
    body('start').not().isEmpty().isDate(),
    body('end').not().isEmpty().isDate(),
    body('description').optional().isAlphanumeric(),
    body('employeeID').not().isEmpty().isAlphanumeric(),
    createCourse)

router.put('/',
    param('id').optional().isNumeric(),
    header('token').optional().trim().escape(),
    body('name').optional().isAlphanumeric(),
    body('day').optional().isAlpha(),
    body('start').optional().isDate(),
    body('end').optional().isDate(),
    body('description').optional().isAlphanumeric(),
    body('employeeID').optional().isAlphanumeric(),
    changeCourse)

router.get('/:courseID',
    param('courseID').not().isEmpty(),
    header('token').not().isEmpty().trim().escape(),
    getCourse)

router.get('/all',
    header('token').not().isEmpty().trim().escape(),
    getAllCourses)

router.delete('/:courseID',
    param('courseID').not().isEmpty().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    deleteCourse)

module.exports = router