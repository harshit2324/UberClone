const { model } = require('mongoose')
const captain = require('../models/cptain.model');
const captainModel = require('../models/cptain.model');



module.exports.createCaptain = async ({
  firstname, lastname, email, password, color, plate, capacity, vehicaleType
}) =>{

  if(!firstname || !email || !color || !plate || !capacity) {
    throw new Error('all fields are required');
  }
  const captain = captainModel.create({
    fullname:{
      firstname,
      lastname
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vihicleType
    }
  })
  return captain
}