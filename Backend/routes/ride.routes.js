const express = require("express");
const router = express.Router();

const rideController = require('../controllers/ride.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const { body, query } = require('express-validator');

router.post(
  "/create",
  authMiddleware.athUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "moto"])
    .withMessage("Invalid vehicle type"),
  rideController.createRide
);

module.exports = router;
