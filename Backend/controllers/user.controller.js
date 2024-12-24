const userModel = require('../models/user.model');
const userService = require('../services/user.service')
const { validationResult } =require('express-validator')
module.exports.registerUser = async(req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});

  } 

  const {firstname, lastname, email, password} = req.body;

  const hashPassword = await userModel.hashPassword(password)

}