const mongoose = require("mongoose");

// Define the schema for the data model
const dataSchema = new mongoose.Schema({
  id: Number,
  Name: String,
  Branch: String,
});

// Create the "Data" model using the schema
const Data = mongoose.model("Data", dataSchema);

// Export the "Data" model to be used in other files
module.exports = Data;
