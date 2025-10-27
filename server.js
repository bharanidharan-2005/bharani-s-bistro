const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// === Middleware ===
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));


// === API Endpoint for Contact Form ===
app.post('/api/contact', (req, res) => {

    const { name, email, message } = req.body;

    console.log('--- New Contact Message ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('---------------------------');

    res.status(200).json({ message: 'Message received successfully! We will get back to you soon.' });
});

// === NEW: API Endpoint for Reservation Form ===
app.post('/api/reservation', (req, res) => {

    const { name, phone, date, time, guests } = req.body;

    // In a real app, you would save this to a database and send a confirmation email.
    // For now, we just log it to the console.

    console.log('--- New Reservation Request ---');
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Guests: ${guests}`);
    console.log('-------------------------------');

    // Send a success response back to the frontend
    res.status(200).json({ message: `Reservation request for ${name} (${guests} guests) on ${date} at ${time} has been received! We will call ${phone} to confirm.` });
});


// === Start the Server ===
app.listen(PORT, () => {
    console.log(`Server is running!`);
    console.log(`View your website at: http://localhost:${PORT}`);
});
