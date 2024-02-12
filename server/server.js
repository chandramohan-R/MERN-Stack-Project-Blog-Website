const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // Assuming your MongoDB connection is in a separate file
const postRoutes = require('./routes/routes'); // Assuming your routes are in a separate file


const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', postRoutes);
connectDB();
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});



// Multer middleware for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rivermonster8765@gmail.com',
    pass: 'btzv frdv zgre kkqu',
  },
});

// API endpoint for handling form submissions
app.post('/submit-application', upload.single('file_cv'), (req, res) => {
    try {
      const { full_name, email, position, message } = req.body;
  
      // Attach file if it exists
      const attachment = req.file ? { filename: 'cv.pdf', content: req.file.buffer } : null;
      const mailOptions = {
      from: 'rivermonster8765@gmail.com',
      to: 'tessalovehardin77@gmail.com',
      subject: 'Job Application',
      text: `
        Full Name: ${full_name}
        Email: ${email}
        Position: ${position}
        Message: ${message}
      `,
      attachment: attachment,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ success: true, message: 'Application sent successfully' });
      });
    } catch (error) {
      console.error('Error processing form data:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
