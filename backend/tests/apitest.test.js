const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const VehicleRental = require("../models/vehicleRentalModel");

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
    listingDate: "2024-10-15",
    availabilityStatus: "available",
    bookingDeadline: "2024-12-31",
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
    listingDate: "2024-10-20",
    availabilityStatus: "available",
    bookingDeadline: "2024-12-31",
    insurancePolicy: "Standard Coverage"
  }
]

afterAll(() => {
  mongoose.connection.close();
});

beforeEach(async () => {
  await VehicleRental.deleteMany({});
  let vehicleObject = new VehicleRental(initialVehicle[0]);
  await vehicleObject.save();
  console.log(vehicleObject);
});

describe("when there is initially some vehicles saved", () => {
 it.only("should return all vehicles in JSON format", async () => {
    await api
      .get("/api/vehicleRentals")
      .expect(200)
      // .expect("Content-Type", /application\/json/);
  })
})