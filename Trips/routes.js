const express = require("express");
const router = express.Router();
const { fetchTrip, createTrip, deleteTrip } = require("./controller");
