const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/submit-form", async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      secure: true,
      auth: {
        user: "email@americanwebcraft.com",
        pass: "259D56DCCB0B48789952B072ADCE6CE45922",
      },
    });

    // Email content
    const mailOptions = {
      from: "email@americanwebcraft.com",
      to: "info@americanwebcraft.com",
      subject: "Hire Us || Contact Form",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Company Name: ${company}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info);

    // Email content for the thank you message to the user
    const thankYouMailOptions = {
      from: "email@americanwebcraft.com",
      to: email,
      subject: "Thank You for Contacting American Web Crafts",
      html: `
      <html>
      <head>
        <style>
          .card {
            border: 0px solid #9d0208;
            max-width: 400px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background: linear-gradient(to top, #601417, #9d0208);
          }
          .header {
              background: #161617;
              text-align: center;
              color: #fff;
              padding: 15px;
              font-size: 20px;
            }
          .dear {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            margin-top: 20px;
            font-size: 22px;
          }
          .name {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 20px;
          }

          h2 {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            text-align:right;
          }

          p {
            line-height: 1.6;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 17px;
            color: #fff;
          }

          .footer {
            background: #161617;
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
      <div class="back_bg"></div>
      <div class="header">Greeting from American Web Crafts</div>
        <div class="dear">Dear,</div>
        <div class="name">${name}</div>
        <p>
        Rest assured that a highly dedicated and experienced representative from our team is committed to reaching out to you shortly, 
        utilizing either your provided phone number or email address, and will diligently ensure that you receive the prompt and 
        personalized assistance you deserve.
        </p>
        <h2>Thank You 😇</h2>
        <div class="footer">
          <p>Best regards,<br>American Web Crafts</p>
        </div>
      </div>
      </body>
    </html>
    `,
    };

    // Send thank you email to the user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).send("Form submitted successfully.");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/get-in", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      secure: true,
      auth: {
        user: "email@americanwebcraft.com",
        pass: "259D56DCCB0B48789952B072ADCE6CE45922",
      },
    });

    // Email content
    const mailOptions = {
      from: "email@americanwebcraft.com",
      to: "info@americanwebcraft.com",
      subject: "Get In Touch || Contact Form",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info);

    // Email content for the thank you message to the user
    const thankYouMailOptions = {
      from: "email@americanwebcraft.com",
      to: email,
      subject: "Thank You for Contacting American Web Crafts",
      html: `
      <html>
      <head>
        <style>
          .card {
            border: 0px solid #9d0208;
            max-width: 400px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background: linear-gradient(to top, #601417, #9d0208);
          }
          .header {
              background: #161617;
              text-align: center;
              color: #fff;
              padding: 15px;
              font-size: 20px;
            }
          .dear {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            margin-top: 20px;
            font-size: 22px;
          }
          .name {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 20px;
          }

          h2 {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            text-align:right;
          }

          p {
            line-height: 1.6;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 17px;
            color: #fff;
          }

          .footer {
            background: #161617;
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
      <div class="back_bg"></div>
      <div class="header">Greeting from American Web Crafts</div>
        <div class="dear">Dear,</div>
        <div class="name">${name}</div>
        <p>
        Rest assured that a highly dedicated and experienced representative from our team is committed to reaching out to you shortly, 
        utilizing either your provided phone number or email address, and will diligently ensure that you receive the prompt and 
        personalized assistance you deserve.
        </p>
        <h2>Thank You 😇</h2>
        <div class="footer">
          <p>Best regards,<br>American Web Crafts</p>
        </div>
      </div>
      </body>
    </html>
    `,
    };

    // Send thank you email to the user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).send("Form submitted successfully.");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/get-started", async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      secure: true,
      auth: {
        user: "email@americanwebcraft.com",
        pass: "259D56DCCB0B48789952B072ADCE6CE45922",
      },
    });

    // Email content
    const mailOptions = {
      from: "email@americanwebcraft.com",
      to: "info@americanwebcraft.com",
      subject: "Get Started || Contact Form",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Company Name: ${company}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info);

    // Email content for the thank you message to the user
    const thankYouMailOptions = {
      from: "email@americanwebcraft.com",
      to: email,
      subject: "Thank You for Contacting American Web Crafts",
      html: `
      <html>
      <head>
        <style>
          .card {
            border: 0px solid #9d0208;
            max-width: 400px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background: linear-gradient(to top, #601417, #9d0208);
          }
          .header {
              background: #161617;
              text-align: center;
              color: #fff;
              padding: 15px;
              font-size: 20px;
            }
          .dear {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            margin-top: 20px;
            font-size: 22px;
          }
          .name {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 20px;
          }

          h2 {
            color: #fff;
            padding-right: 20px;
            padding-left: 20px;
            text-align:right;
          }

          p {
            line-height: 1.6;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 17px;
            color: #fff;
          }

          .footer {
            background: #161617;
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
      <div class="back_bg"></div>
      <div class="header">Greeting from American Web Crafts</div>
        <div class="dear">Dear,</div>
        <div class="name">${name}</div>
        <p>
        Rest assured that a highly dedicated and experienced representative from our team is committed to reaching out to you shortly, 
        utilizing either your provided phone number or email address, and will diligently ensure that you receive the prompt and 
        personalized assistance you deserve.
        </p>
        <h2>Thank You 😇</h2>
        <div class="footer">
          <p>Best regards,<br>American Web Crafts</p>
        </div>
      </div>
      </body>
    </html>
    `,
    };

    // Send thank you email to the user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).send("Form submitted successfully.");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/order-now", async (req, res) => {
  try {
    const { name, company, email, phone, message, logoType } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      secure: true,
      auth: {
        user: "email@americanwebcraft.com",
        pass: "259D56DCCB0B48789952B072ADCE6CE45922",
      },
    });

    // Email content
    const mailOptions = {
      from: "email@americanwebcraft.com",
      to: "info@americanwebcraft.com",
      subject: `Order Now || ${logoType} Logo`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Company Name: ${company}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info);

    // Email content for the thank you message to the user
    const thankYouMailOptions = {
      from: "email@americanwebcraft.com",
      to: email,
      subject: "Thank You for Contacting American Web Crafts",
      html: `
      <html>
        <head>
          <style>
            .card {
              border: 0px solid #9d0208;
              max-width: 400px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              background: linear-gradient(to top, #601417, #9d0208);
            }
            .header {
                background: #161617;
                text-align: center;
                color: #fff;
                padding: 15px;
                font-size: 20px;
              }
            .dear {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              margin-top: 20px;
              font-size: 22px;
            }
            .name {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 20px;
            }
  
            h2 {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              text-align:right;
            }
  
            p {
              line-height: 1.6;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 17px;
              color: #fff;
            }
  
            .footer {
              background: #161617;
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
        <div class="back_bg"></div>
        <div class="header">Greeting from American Web Crafts</div>
          <div class="dear">Dear,</div>
          <div class="name">${name}</div>
          <p>
          Rest assured that a highly dedicated and experienced representative from our team is committed to reaching out to you shortly, 
          utilizing either your provided phone number or email address, and will diligently ensure that you receive the prompt and 
          personalized assistance you deserve.
          </p>
          <h2>Thank You 😇</h2>
          <div class="footer">
            <p>Best regards,<br>American Web Crafts</p>
          </div>
        </div>
        </body>
      </html>
    `,
    };

    // Send thank you email to the user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).send("Form submitted successfully.");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/packages", async (req, res) => {
  try {
    const { name, company, email, phone, message, logoType, logoHeading } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      secure: true,
      auth: {
        user: "email@americanwebcraft.com",
        pass: "259D56DCCB0B48789952B072ADCE6CE45922",
      },
    });

    // Email content
    const mailOptions = {
      from: "email@americanwebcraft.com",
      to: "info@americanwebcraft.com",
      subject: `Packages || Order Now || ${logoType} ${logoHeading}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Company Name: ${company}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info);

    // Email content for the thank you message to the user
    const thankYouMailOptions = {
      from: "email@americanwebcraft.com",
      to: email,
      subject: "Thank You for Contacting American Web Crafts",
      html: `
      <html>
        <head>
          <style>
            .card {
              border: 0px solid #9d0208;
              max-width: 400px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              background: linear-gradient(to top, #601417, #9d0208);
            }
            .header {
                background: #161617;
                text-align: center;
                color: #fff;
                padding: 15px;
                font-size: 20px;
              }
            .dear {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              margin-top: 20px;
              font-size: 22px;
            }
            .name {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 20px;
            }
  
            h2 {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              text-align:right;
            }
  
            p {
              line-height: 1.6;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 17px;
              color: #fff;
            }
  
            .footer {
              background: #161617;
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
        <div class="back_bg"></div>
        <div class="header">Greeting from American Web Crafts</div>
          <div class="dear">Dear,</div>
          <div class="name">${name}</div>
          <p>
          Rest assured that a highly dedicated and experienced representative from our team is committed to reaching out to you shortly, 
          utilizing either your provided phone number or email address, and will diligently ensure that you receive the prompt and 
          personalized assistance you deserve.
          </p>
          <h2>Thank You 😇</h2>
          <div class="footer">
            <p>Best regards,<br>American Web Crafts</p>
          </div>
        </div>
        </body>
      </html>
    `,
    };

    // Send thank you email to the user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).send("Form submitted successfully.");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/contact-us", async (req, res) => {
  try {
    const { name, company, email, phone, size, services, message } = req.body;

    // Create a nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      secure: true,
      auth: {
        user: "email@americanwebcraft.com",
        pass: "259D56DCCB0B48789952B072ADCE6CE45922",
      },
    });

    // Email content
    const mailOptions = {
      from: "email@americanwebcraft.com",
      to: "info@americanwebcraft.com",
      subject: "Contact Us || Contact Form",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Company Name: ${company}</p>
        <p>Company Size: ${size}</p>
        <p>Type of Services: ${services}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info);

    // Email content for the thank you message to the user
    const thankYouMailOptions = {
      from: "email@americanwebcraft.com",
      to: email,
      subject: "Thank You for Contacting American Web Crafts",
      html: `
      <html>
        <head>
          <style>
            .card {
              border: 0px solid #9d0208;
              max-width: 400px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              background: linear-gradient(to top, #601417, #9d0208);
            }
            .header {
                background: #161617;
                text-align: center;
                color: #fff;
                padding: 15px;
                font-size: 20px;
              }
            .dear {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              margin-top: 20px;
              font-size: 22px;
            }
            .name {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 20px;
            }
  
            h2 {
              color: #fff;
              padding-right: 20px;
              padding-left: 20px;
              text-align:right;
            }
  
            p {
              line-height: 1.6;
              padding-right: 20px;
              padding-left: 20px;
              font-size: 17px;
              color: #fff;
            }
  
            .footer {
              background: #161617;
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
        <div class="back_bg"></div>
        <div class="header">Greeting from American Web Crafts</div>
          <div class="dear">Dear,</div>
          <div class="name">${name}</div>
          <p>
          Rest assured that a highly dedicated and experienced representative from our team is committed to reaching out to you shortly, 
          utilizing either your provided phone number or email address, and will diligently ensure that you receive the prompt and 
          personalized assistance you deserve.
          </p>
          <h2>Thank You 😇</h2>
          <div class="footer">
            <p>Best regards,<br>American Web Crafts</p>
          </div>
        </div>
        </body>
      </html>
    `,
    };

    // Send thank you email to the user
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).send("Form submitted successfully.");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
