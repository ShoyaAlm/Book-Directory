const express = require('express');
const router = express.Router();

const {
    getUsers,
    deleteUser,
    addFavBooks
    } = require('../controllers/users')

router.route('/').get(getUsers)
router.route('/:id').delete(deleteUser).patch(addFavBooks)

module.exports = router