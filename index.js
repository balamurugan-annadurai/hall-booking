import express from 'express';  // Import the Express framework
import cors from 'cors';  // Import CORS middleware for handling cross-origin requests

// Import the hallBookingRouter from the specified file
import hallBookingRouter from './Routers/HallBooking.router.js' 

const app = express(); // Create an instance of Express application

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse JSON bodies sent in requests


// Define the port number
const PORT = 4000;

// Root endpoint to verify API is running
app.get('/', (req, res) => {
    res.status(200).json({"message":"API for Hall Booking app"})
})

// Mount hallBookingRouter under '/api/hallbooking' path
app.use('/api/hallbooking', hallBookingRouter);

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
    console.log('App is listening');
})