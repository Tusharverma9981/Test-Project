const mongoose = require('mongoose');

// Define the schema for the Newsletter Subscription model
const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,               // Ensure each email is unique
    lowercase: true,            // Store emails in lowercase
   },
});

// Create the NewsletterSubscription model
const NewsletterSubscription = mongoose.model('NewsletterSubscription', subscriptionSchema);

// Export the model
module.exports = NewsletterSubscription;
