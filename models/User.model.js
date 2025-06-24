const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,    // Ensure that fullName is provided
   },
  email: {
    type: String,
    required: true,
    unique: true,      // Ensure email is unique
    lowercase: true,   // Convert email to lowercase before saving
    trim: true         // Remove spaces from the start and end
  },
  phone: {
    type: String,
    required: true,
    unique: true,      // Ensure mobile number is unique
   },
  city: {
    type: String,
    required: true,    // Ensure city is provided
   }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
