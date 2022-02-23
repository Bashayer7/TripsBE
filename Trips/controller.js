const Trip = require("../db/models/Trip");

exports.fetchTrip = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.tripDetail = async (req, res) => {
  try {
    const { tripId } = req.params;
    const ft = await Trip.findById(tripId);
    if (ft) {
      res.status(200).json(ft);
    } else {
      res.status(404).json({ message: "Trip not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "NOT FOUND" });
  }
};

exports.createTrip = async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);

    res.status(201).json(newTrip);
  } catch (error) {
    console.log(error);
  }
};
exports.deleteTrip = async (req, res) => {
  try {
    const { tripId } = req.params;
    const foundTrip = await Trip.findByIdAndDelete({ _id: tripId });
  } catch (error) {
    res.status(500).json({ message: "NOT FOUND" });
  }
};
