const express = require('express');
const router = express.Router();


const {signIn, login} = require('../controllers/auth')

router.route('/signIn').post(signIn)
router.route('/login').post(login)

module.exports = router
