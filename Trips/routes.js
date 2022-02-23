const express = require("express");
const router = express.Router();
const {
  fetchTrip,
  createTrip,
  deleteTrip,
  tripDetail,
} = require("./controller");
router.get("/", fetchTrip);
router.post("/", createTrip);
router.delete("/:tripId", deleteTrip);
router.get("/:tripId", tripDetail);

module.exports = router;
