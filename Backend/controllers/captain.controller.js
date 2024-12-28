const { validationResult } = require('express-validator');
const captainModel = require('../models/cptain.model')
const captainService = require('../services/captain.service');

module.exports.registerCaptain = async (req, res, next ) => {
  const error = validationResult(req);
  if(!error.isEmpty()) {
    return res.status(400).json({ error: error.array()})
  }
  const { fullname, email, password, vehicle} = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({email})

  if(isCaptainAlreadyExist) {
    return res.status(400).json({ message: 'captain already exist'})
  }

  const hashedpassword = await captainModel.hashPassword(password)

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedpassword,
    color: vehicle.color,
    plate: vehicle.capacity,
    vehicaleType: vehicle.vehicaleType
  });

  const token = captain.genreAuthToken();
  res.status(201).json({token, captain})
}