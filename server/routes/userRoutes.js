const { UserController } = require('../controllers')
const express = require('express')
const router = express.Router()

router.post('/register', UserController.handleRegister)
router.post('/login', UserController.handleLogin)

module.exports = router