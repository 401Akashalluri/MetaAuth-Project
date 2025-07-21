// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// --- Middleware ---
app.use(cors()); // Allows requests from the front-end
app.use(express.json()); // Parses incoming JSON requests
app.use(express.static('public')); // Serves the index.html file

// --- Email Transporter Setup (using Nodemailer) ---
// This configures how emails will be sent.
// We are using Gmail here as an example.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email from .env file
    pass: process.env.EMAIL_PASS, // Your App Password from .env file
  },
});

// --- Helper Functions to Generate Codes ---
const WORD_LIST = ["apple", "banana", "cherry", "date", "elder", "fig", "grape", "honey", "indigo", "juniper", "kiwi", "lemon"];

function generateRandomWords(count) {
  let words = [];
  for (let i = 0; i < count; i++) {
    words.push(WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]);
  }
  return words.join(" ");
}

function generateRandomOtp(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

// --- API Endpoints ---

// Endpoint to send the 4-word login phrase
app.post('/send-phrase', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  const phrase = generateRandomWords(4);

  const mailOptions = {
    from: `"VaultChain Security" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your VaultChain Login Phrase',
    html: `
      <p>Dear User,</p>
      <p>Your unique 4-word login phrase for VaultChain is:</p>
      <h2 style="font-family: monospace; color: #4CAF50;">${phrase}</h2>
      <p>Please enter this phrase into the VaultChain application to log in.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    // We send the phrase back to the front-end to verify user input
    res.json({ success: true, phrase: phrase });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

// Endpoint to send the 6-digit OTP for recovery
app.post('/send-otp', async (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }
  
    const otp = generateRandomOtp();
  
    const mailOptions = {
      from: `"VaultChain Security" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your VaultChain Recovery OTP',
      html: `
        <p>Dear User,</p>
        <p>Your One-Time Password (OTP) for account recovery is:</p>
        <h2 style="font-family: monospace; color: #DA3633;">${otp}</h2>
        <p>Please enter this OTP to proceed.</p>
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      // We send the OTP back to the front-end to verify user input
      res.json({ success: true, otp: otp });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  });


// --- Start Server ---
app.listen(PORT, () => {
  console.log(`VaultChain server running on http://localhost:${PORT}`);
});