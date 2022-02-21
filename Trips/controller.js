const Trip = require("../db/models/Trip");

exports.fetchTrip = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createTrip = async (req, res) => {
  try {
  } catch (error) {}
};
exports.deleteTrip = async (req, res) => {
  try {
    const { tripId } = req.params;
    const foundTrip = await Trip.findByIdAndDelete({ _id: tripId });
  } catch (error) {}
};
