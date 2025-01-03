const express = require('express')
const router = express.Router();
const {body} = require("express-validator")
const usercontroller = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
  body('email').isEmail().withMessage('invalid Email'),
  body('fullname.firstname').isLength({min: 3}).withMessage('first name must be at least 3 characters long'),
  body('password').isLength({min: 6}).withMessage('password must at least 6 characters long')
],
usercontroller.registerUser
)

router.post('/login', [
  body('email').isEmail().withMessage('invalid Email'),
  body('password').isLength({min: 6}).withMessage('password must at least 6 characters long')
],
usercontroller.loginUser
)

router.get('/profile', authMiddleware.athUser, usercontroller.getUserProfile)

router.get('/logout', authMiddleware.athUser, usercontroller.logoutUser)

module.exports = router;
