const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Vehicle = require("../models/vehicleRentalModel");

const initialVehicle = [
  {
    vehicleModel: "Toyota Camry",
    category: "Sedan",
    description: "A comfortable midsize sedan.",
    agency: {
      name: "City Rentals",
      contactEmail: "info@cityrentals.com",
      fleetSize: 50,
    },
    location: { city: "New York", state: "NY" },
    dailyPrice: 45,
    listingDate: new Date(),
    availabilityStatus: "available",
    bookingDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    insurancePolicy: "Standard Coverage",
  },

  {
    vehicleModel: "Ford Explorer",
    category: "SUV",
    description: "A spacious SUV for family trips.",
    agency: {
      name: "Urban Rentals",
      contactEmail: "info@urbanrentals.com",
      fleetSize: 30,
    },
    location: { city: "Los Angeles", state: "CA" },
    dailyPrice: 60,
    listingDate: new Date(),
    availabilityStatus: "available",
    bookingDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    insurancePolicy: "Standard Coverage"
  }
]

afterAll(() => {
  mongoose.connection.close();
});

beforeEach(async () => {
  await Vehicle.deleteMany({});
  let vehicleObject = new Vehicle(initialVehicle[0]);
  await vehicleObject.save();
  vehicleObject = new Vehicle(initialVehicle[1]);
  await vehicleObject.save();
});

describe("when there are initially some vehicles saved", () => {
  it.only("should return all vehicles in JSON format", async () => {
    const response = await api
      .get("/api/vehicles")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
})

