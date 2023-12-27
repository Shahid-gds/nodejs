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
        user: 'shahid.gdsdev@gmail.com',
        pass: '9834B6F8C633956210B89A2AAF53423EC7BB',
      },
    });

    // Email content
    const mailOptions = {
      from: 'shahid.gdsdev@gmail.com',
      to: 'shahid.gdsdev@gmail.com',
      subject: 'New Contact Form Submission',
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
