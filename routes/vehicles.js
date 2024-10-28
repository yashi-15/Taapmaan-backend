const express = require("express");
const router = express.Router();

const { getAllVehicles, getAllVehiclesTesting } = require("../controllers/vehicles");

router.route("/").get(getAllVehicles);
router.route("/testing").get(getAllVehiclesTesting);

module.exports = router;
