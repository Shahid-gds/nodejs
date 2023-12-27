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
    const { name, company, email, phone, message } = req.body;

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
        <p>Email: ${email}</p>
        <p>Company Size: ${phone}</p>
        <p>Company: ${company}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info);
    
   // Email content for the thank you message to the user
const thankYouMailOptions = {
    from: 'email@americanwebcraft.com',
    to: email, // Use the user's email address
    subject: 'Thank You for Contacting Us',
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 0;
            }
            
            .card {
              border: 2px solid #601417;
              max-width: 400px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: #2d2e30;
                text-align: center;
                color: #fff;
                padding: 15px;
                font-size: 20px;
              }
            .dear {
              color: #2d2e30;
              padding-right: 20px;
              padding-left: 20px;
              margin-top: 20px;
              font-size: 22px;
            }
            .name {
              color: #2d2e30;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 20px;
            }
  
            h2 {
              color: #2d2e30;
              padding-right: 20px;
              padding-left: 20px;
            }
  
            p {
              line-height: 1.6;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 17px;
            }
  
            .footer {
              background: #2d2e30;
              padding: 10px;
              margin-top: 20px;
              text-align: center;
              color: #fff;
              font-size: 16px;
            }
          </style>
        </head>
        <body>
          <div class="card">
          <div class="header">Welcome to American Webcraft</div>
            <div class="dear">Dear,</div>
            <div class="name">${name}</div>
            <h2>Thank You for Contacting Us.</h2> <br> <p>One of our representative will call you shortly on your number or your email.</p>
            <div class="footer">
              <p>Best regards,<br>American Webcraft</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };
  
  // Send thank you email to the user
  await transporter.sendMail(thankYouMailOptions);
  

    res.status(200).send('Form submitted successfully.');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
