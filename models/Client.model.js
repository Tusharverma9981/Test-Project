const mongoose = require('mongoose');

// Define the schema for the Client
const clientSchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true,  // Client's name is required
         // Remove extra spaces
  },
  cdescription: {
    type: String,
    required: true,  // Client's description is required
         // Remove extra spaces
  },
  cimage: {
    type: String,    // Store the image URL or file path (e.g., path to the image or URL)
    required: true,  // Image is required
  },
  designation: {
    type: String,
    required: true,  // Client's designation is required
  },
});

// Create the Mongoose model for Client
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
