const UserController = require('../controllers/userController')

const userRoutes = require('express').Router() 

userRoutes.post('/register', UserController.register)
userRoutes.post('/login', UserController.login)
userRoutes.post('/google-login', UserController.googleLogin)
// userRoutes.post('/login', UserController.login)
module.exports = userRoutes