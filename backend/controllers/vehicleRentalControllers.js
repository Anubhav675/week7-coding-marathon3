const VehicleRental = require('../models/vehicleRentalModel');
const mongoose = require('mongoose');

// GET /api/vehicleRentals
const getAllVehicleRentals = async (req, res) => {
  try{
    const vehiclerentals = await VehicleRental.find({}).sort({createdAt:-1});
    res.status(200).json(products);
  }catch (error){
    res.status(500).json({error:error.message});
  }
};

// POST /api/vehicleRentals
const createVehicleRental = async (req, res) => {
  res.send("createVehicleRental");
};

// GET /api/vehicleRentals/:vehicleRentalId
const getVehicleRentalById = async (req, res) => {
  const{vehiclerentalId} = req.params;
  if(!mongoose.Types.ObjectId.isValid(vehiclerentalId)){
    return res.status(404).json({error: 'Invalid vehicle ID'});

  }
  try{
    const vehiclerental = await VehicleRental.findById(vehiclerentalId);
    if(!product){
      return res.status(404).json({error: 'Vehicle not found'});

    }
    res.status(200).json(vehiclerental);

  }catch(error){
    res.status(500).json({error: error.message});
  }
};

// PUT /api/vehicleRentals/:vehicleRentalId
const updateVehicleRental = async (req, res) => {
  res.send("updateVehicleRental");
};

// DELETE /api/vehicleRentals/:vehicleRentalId
const deleteVehicleRental = async (req, res) => {
  res.send("deleteVehicleRental");
};

module.exports = {
  getAllVehicleRentals,
  createVehicleRental,
  getVehicleRentalById,
  updateVehicleRental,
  deleteVehicleRental,
};

