const { model } = require("mongoose");
const captain = require("../models/captain.model");
const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicaleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicaleType
  ) {
    throw new Error("all fields are required");
  }
  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicaleType,
    },
  });
  return captain;
};
