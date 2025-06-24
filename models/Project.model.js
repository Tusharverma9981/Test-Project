const mongoose = require('mongoose');

// Define the schema for the Project
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,   // Name is required
  },
  description: {
    type: String,
    required: true,   // Description is required
        // Trim any extra spaces
  },
  image: {
    type: String,      // For storing image URL or file path
    required: true,    // Image URL is required
  },
});

// Create a model using the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
