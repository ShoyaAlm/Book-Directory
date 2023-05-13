const express = require('express');

const router = express.Router()

const {
    getAllBooks,
    addBook,
} = require('../controllers/controller');


router.route('/').get(getAllBooks).post(addBook)

module.exports = router
