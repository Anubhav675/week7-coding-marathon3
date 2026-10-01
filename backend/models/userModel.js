const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {

    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    licenseNumber: {
      type: String,
      required: true,
      unique: true
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    
    licenseExpiryDate: {
        type: Date,
        required: true,
    },
    city: {
        type: String,
        required:true,
    },
    yearOfExperience: {
        type: Number,
        required: true
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
