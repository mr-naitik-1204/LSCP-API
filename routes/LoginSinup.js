var express = require('express');
var router = express.Router();
var UC= require('../Controller/LoginSCo')

/* GET home page. */
router.post('/Login',UC.Login)
router.post('/Singup',UC.Singup)

module.exports = router;
