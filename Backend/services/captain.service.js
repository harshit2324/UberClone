const captainModel = require("../models/cptain.model");

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
