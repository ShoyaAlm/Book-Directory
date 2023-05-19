const express = require('express');
const router = express.Router();


const {signUp, login} = require('../controllers/auth')

router.route('/signin').post(signUp)
router.route('/login').post(login)



module.exports = router
