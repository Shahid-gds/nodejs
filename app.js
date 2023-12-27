const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  try {
    const { name, company, email, size, message } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.elasticemail.com',
      secure: true,
      auth: {
        user: 'email@americanwebcraft.com',
        pass: '259D56DCCB0B48789952B072ADCE6CE45922',
      },
    });

    // Email content
    const mailOptions = {
      from: 'email@americanwebcraft.com',
      to: 'info@americanwebcraft.com',
      subject: 'Hire Us || Contact Form',
      html: `
        <p>Name: ${name}</p>
        <p>Company: ${company}</p>
        <p>Email: ${email}</p>
        <p>Company Size: ${size}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info);

    res.status(200).send('Form submitted successfully.');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
