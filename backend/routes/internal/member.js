const express = require('express');
const { param, header, body } = require('express-validator');
const { createMember, changeMember, getMember, getAllMembers, deleteMember } = require("../../controllers/internal/member.js");
const router = express.Router()

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.post('/',
    header('token').not().isEmpty().trim().escape(),
    body('lastname').not().isEmpty().isAlpha(),
    body('firstname').not().isEmpty().isAlpha(),
    body('tarif').not().isEmpty().isNumeric(),
    createMember)

router.put('/',
    param('id').optional().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    body('lastname').optional().isAlpha(),
    body('firstname').optional().isAlpha(),
    body('tarifID').optional().isNumeric(),
    body('gassi').optional().isBoolean(),
    changeMember)

router.get('/:memberID',
    param('memberID').not().isEmpty(),
    header('token').not().isEmpty().trim().escape(),
    getMember)

router.get('/all',
    header('token').not().isEmpty().trim().escape(),
    getAllMembers)

router.delete('/:memberID',
    param('memberID').not().isEmpty().isNumeric(),
    header('token').not().isEmpty().trim().escape(),
    deleteMember)

module.exports = router