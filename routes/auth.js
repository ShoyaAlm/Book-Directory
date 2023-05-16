const express = require('express');
const router = express.Router();


const {signUp, login} = require('../controllers/auth')

router.route('/signIn').post(signUp)
router.route('/login').post(login)

module.exports = router
