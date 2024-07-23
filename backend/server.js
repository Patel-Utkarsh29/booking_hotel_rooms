const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user'); // Ensure this path is correct
const Booking = require('./models/booking'); // Ensure this path is correct

const app = express();
const port = process.env.PORT || 5005;

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://<username/password>.luxlcjz.mongodb.net/booking?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Route to handle GET request to root URL
app.get('/', (req, res) => {
  res.send('Welcome to the booking API');
});

// Endpoint to handle POST request to add bookings
app.post('/api/bookings', async (req, res) => {
  try {
    console.log('Received booking data:', req.body);  // Logging received data
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).send(newBooking);
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(400).send(error);
  }
});

// Endpoint to handle GET request to retrieve bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find(); // Retrieve all bookings
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).send(error);
  }
});

// Endpoint to handle user registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).send(error);
  }
});

// Endpoint to handle user login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && user.validatePassword(password)) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(400).send(error);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
