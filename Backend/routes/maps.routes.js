const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const mapCOntoller = require("../controllers/map.controller");
const { query } = require("express-validator");

router.get(
  "/get-cordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.athUser,
  mapCOntoller.getCoordinates
);

router.get(
  "/get-distance-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.athUser,
  mapCOntoller.getDistanceTime
);

router.get(
  "/get-suggetion",
  query("input").isString().isLength({ min: 3 }),
  authMiddleware.athUser,
  mapCOntoller.getAutoCompleteSuggestion
);

module.exports = router;
