const express = require('express');
const path = require('path');
const User = require('./models/User.model'); // Import the User model
const NewsletterSubscription = require('./models/NewesLetter.model'); // Import the Newsletter model
const Project = require('./models/Project.model'); // Import the Project model
const Client = require('./models/Client.model'); // Import the Client model
 // Import the multer middleware for file uploads
const cloudinary = require('./utils/coudinary.config'); // Import the Cloudinary configuration
const multer = require('multer');// Import multer for file uploads
const app = express();

const port = 3000;

//Database connection
const mongoose = require('mongoose');
const { log } = require('console');
require('dotenv').config();

// Middleware to set view engine
app.set('view engine', 'ejs');

// Use express middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// Serve static files like the HTML form
app.use(express.static('public'));

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI,)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage: storage });


// Middleware to handle basic route
app.get('/',async (req, res) => {
 try {
    const projects = await Project.find();
    const clients =await  Client.find();
      res.render('index', { projects,clients });
  } catch (error) {
    console.error('Error rendering index page:', error);
    res.status(500).send("failed to fetch data");
    
  }
});

app.post('/submit', async (req, res) => {
  //console.log(req.body);
  
  const { username, userEmail, phone, city } = req.body;
  // res.send('Form submitted successfully!');
   console.log('Form submitted:', username, userEmail, phone, city);

  try {
    // Create a new user document
    const newUser = new User({
      name:username,
      email:userEmail,
      phone,
      city
    });

    // Save the user to MongoDB
    await newUser.save();

    // Send a success response
    res.status(201).send('Form submitted successfully!');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Internal server error.');
  }
});

app.post('/submitEmail', async (req, res) => {
  //console.log(req.body);
  
  const {email} = req.body;
  //console.log('Email received:', email);
  
  try {
    // Create a new user document
    const newSub = new NewsletterSubscription({
      email,
    });
    // Save the user to MongoDB
    await newSub.save();
    // Send a success response
    res.status(201).send('Form submitted successfully!');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Internal server error.');
  }
});

app.post('/projects',upload.single('image'), async (req, res) => {
   const { name, description, image } = req.body;
  //console.log(name, description, image);
  try {

    const result = await cloudinary.uploader.upload(req.file.path);
    // Create a new user document
    const newProject = new Project({
      name,
      description,
      image:result.secure_url,
    });


    // Save the user to MongoDB
    await newProject.save();

    // Send a success response
    res.status(201).send('Form submitted successfully!');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Internal server error.');
  }
});

app.post('/clients',upload.single('cimage'), async (req, res) => {
  
   const { cname, cdescription, designation,cimage} = req.body;
  //console.log(name, description, image);
  //console.log(cname, cdescription, designation,cimage);
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create a new user document
    const newClient = new Client({
      cname,
      cdescription,
      designation,
      cimage:result.secure_url,
    });

    // Save the user to MongoDB
    await newClient.save();

    // Send a success response
    res.status(201).send('Form submitted successfully!');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Internal server error.');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/admin',async (req, res) => {
    try {
    const users =await User.find();
    const NewesLetter = await NewsletterSubscription.find();
      res.render('admin', { users,NewesLetter });
  } catch (error) {
    console.error('Error rendering index page:', error);
    res.status(500).send("failed to fetch data");
    
  }

});