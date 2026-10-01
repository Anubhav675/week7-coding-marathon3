const VehicleRental = require('../models/vehicleRentalModel');
const mongoose = require('mongoose');

// GET /api/vehicleRentals
const getAllVehicleRentals = async (req, res) => {
  res.send("getAllVehicleRentals");
};

// POST /api/vehicleRentals
const createVehicleRental = async (req, res) => {
  const { vehicleModel, category, description, agency, location, dailyPrice, listingDate, availabilityStatus, bookingDeadline, insurancePolicy } = req.body;
  if (!vehicleModel || !category || !description || !agency || !location || !dailyPrice || !insurancePolicy) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const newVehicle = await VehicleRental.create({ vehicleModel, category, description, agency, location, dailyPrice, listingDate, availabilityStatus, bookingDeadline, insurancePolicy });
    if (newVehicle) {
      return res.status(201).json(newVehicle);
    }
  } catch (err) {
    return res.status(500).json({ message: "Error creating vehicle rental", error: err.message });
  }
};

// GET /api/vehicleRentals/:vehicleRentalId
const getVehicleRentalById = async (req, res) => {
  res.send("getVehicleRentalById");
};

// PUT /api/vehicleRentals/:vehicleRentalId
const updateVehicleRental = async (req, res) => {
  const { vehicleRentalId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(vehicleRentalId)) {
    return res.status(400).json({ message: "Invalid vehicle rental ID" });
  }
  const updatedData = req.body;
  try {
    const updatedVehicle = await VehicleRental.findOneAndUpdate({ _id: vehicleRentalId }, updatedData, { returnDocument: 'after' });
    if (!updatedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    } else {
      return res.status(200).json(updatedVehicle);
    }
  } catch (error) {
    return res.status(500).json({ message: "Error updating vehicle", error: error.message });
  }
}


// DELETE /api/vehicleRentals/:vehicleRentalId
const deleteVehicleRental = async (req, res) => {
  const { vehicleRentalId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(vehicleRentalId)) {
    return res.status(400).json({ error: 'Invalid vehicle rental ID' });
  }
  try {
    const deletedVehicle = await VehicleRental.findOneAndDelete({ _id: vehicleRentalId });
    if (!deletedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    } else {
      return res.status(200).json({ message: "Vehicle deleted successfully" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error deleting vehicle", error: err.message });
  }
};

module.exports = {
  getAllVehicleRentals,
  createVehicleRental,
  getVehicleRentalById,
  updateVehicleRental,
  deleteVehicleRental,
};

