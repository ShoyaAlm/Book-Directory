const express = require('express');

const router = express.Router()

const {
    getAllBooks,
    getOneBook,
    addBook,
    updateBook,
    deleteBook,
    getUsers,
} = require('../controllers/controller');


router.route('/').get(getAllBooks).post(addBook)
router.route('/:id').get(getOneBook).patch(updateBook).delete(deleteBook)
router.route('/users').get(getUsers)

module.exports = router
