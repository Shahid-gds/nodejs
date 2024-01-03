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
          border: 2px solid #9b1d21;
          max-width: 500px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
      }

      .header,
      .footer {
          display: flex;
      }

      .first,
      .last {
          width: 100%;
      }

      .middle {
          width: 250px;
          height: 20px;
          background: #9b1d21;
      }

      .content {
          padding: 25px;
      }

      .logo {
          margin: 2rem 0 2rem 0rem;
      }

      .greeting {
          font-size: 46px;
          color: #9b1d21;
          font-weight: bold;
      }

      .from {
          font-size: 46px;
          color: #000000;
          font-weight: bold;
      }

      .web-crafts {
          font-size: 25px;
          color: #000000;
          font-weight: bold;
      }

      .middle-line-div {
          display: flex;
      }

      .middle-line {
          width: 350px;
          height: 8px;
          background: #9b1d21;
          margin: 1.5rem 0 1.5rem 0;
      }
      .dear {
          color: #b95857;
          font-size: 22px;
          font-weight: bold;
      }

      .name {
          color: #424242;
          font-size: 22px;
          font-weight: bold;
      }

      p {
          color: #555555;
          font-size: 18px;
      }

      h2 {
          font-size: 25px;
          color: #9d0208;
          font-weight: bold;
      }

      .best-regards {
          color: #2f2f2f;
          font-size: 20px;
          font-weight: bold;
      }

      .footer-middle {
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: center;
          background: #9b1d21;
      }
  </style>
      </head>
      <body>
      <div class="card">
      <div class="header">
          <div class="first"></div>
          <div class="middle"></div>
          <div class="last"></div>
      </div>
      <div class="content">
          <div class="logo"></div>
          <div class="greeting-from">
              <span class="greeting">Greeting</span>
              <span class="from">From</span> <br>
              <span class="web-crafts">American Web Crafts</span>
          </div>
          <div class="middle-line-div">
              <div class="first"></div>
              <div class="middle-line"></div>
              <div class="last"></div>
          </div>
          <div class="">
              <span class="dear">Dear,</span> <span class="name">${name}</span>
          </div>
          <p>
              Rest assured that a highly dedicated and experienced representative from our team is committed to
              reaching out to you shortly,
              utilizing either your provided phone number or email address, and will diligently ensure that you
              receive the prompt and
              personalized assistance you deserve.
          </p>
          <h2>Thank You</h2>
          <div class="best-regards">
              <sapn>Best regards,<br>American Web Crafts</sapn>
          </div>
      </div>
      <div class="footer">
          <div class="first"></div>
          <div class="footer-middle"></div>
          <div class="last"></div>
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
          border: 2px solid #9b1d21;
          max-width: 500px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
      }

      .header,
      .footer {
          display: flex;
      }

      .first,
      .last {
          width: 100%;
      }

      .middle {
          width: 250px;
          height: 20px;
          background: #9b1d21;
      }

      .content {
          padding: 25px;
      }

      .logo {
          margin: 2rem 0 2rem 0rem;
      }

      .greeting {
          font-size: 46px;
          color: #9b1d21;
          font-weight: bold;
      }

      .from {
          font-size: 46px;
          color: #000000;
          font-weight: bold;
      }

      .web-crafts {
          font-size: 25px;
          color: #000000;
          font-weight: bold;
      }

      .middle-line-div {
          display: flex;
      }

      .middle-line {
          width: 350px;
          height: 8px;
          background: #9b1d21;
          margin: 1.5rem 0 1.5rem 0;
      }
      .dear {
          color: #b95857;
          font-size: 22px;
          font-weight: bold;
      }

      .name {
          color: #424242;
          font-size: 22px;
          font-weight: bold;
      }

      p {
          color: #555555;
          font-size: 18px;
      }

      h2 {
          font-size: 25px;
          color: #9d0208;
          font-weight: bold;
      }

      .best-regards {
          color: #2f2f2f;
          font-size: 20px;
          font-weight: bold;
      }

      .footer-middle {
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: center;
          background: #9b1d21;
      }
  </style>
      </head>
      <body>
      <div class="card">
      <div class="header">
          <div class="first"></div>
          <div class="middle"></div>
          <div class="last"></div>
      </div>
      <div class="content">
          <div class="logo"></div>
          <div class="greeting-from">
              <span class="greeting">Greeting</span>
              <span class="from">From</span> <br>
              <span class="web-crafts">American Web Crafts</span>
          </div>
          <div class="middle-line-div">
              <div class="first"></div>
              <div class="middle-line"></div>
              <div class="last"></div>
          </div>
          <div class="">
              <span class="dear">Dear,</span> <span class="name">${name}</span>
          </div>
          <p>
              Rest assured that a highly dedicated and experienced representative from our team is committed to
              reaching out to you shortly,
              utilizing either your provided phone number or email address, and will diligently ensure that you
              receive the prompt and
              personalized assistance you deserve.
          </p>
          <h2>Thank You</h2>
          <div class="best-regards">
              <sapn>Best regards,<br>American Web Crafts</sapn>
          </div>
      </div>
      <div class="footer">
          <div class="first"></div>
          <div class="footer-middle"></div>
          <div class="last"></div>
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
          border: 2px solid #9b1d21;
          max-width: 500px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
      }

      .header,
      .footer {
          display: flex;
      }

      .first,
      .last {
          width: 100%;
      }

      .middle {
          width: 250px;
          height: 20px;
          background: #9b1d21;
      }

      .content {
          padding: 25px;
      }

      .logo {
          margin: 2rem 0 2rem 0rem;
      }

      .greeting {
          font-size: 46px;
          color: #9b1d21;
          font-weight: bold;
      }

      .from {
          font-size: 46px;
          color: #000000;
          font-weight: bold;
      }

      .web-crafts {
          font-size: 25px;
          color: #000000;
          font-weight: bold;
      }

      .middle-line-div {
          display: flex;
      }

      .middle-line {
          width: 350px;
          height: 8px;
          background: #9b1d21;
          margin: 1.5rem 0 1.5rem 0;
      }
      .dear {
          color: #b95857;
          font-size: 22px;
          font-weight: bold;
      }

      .name {
          color: #424242;
          font-size: 22px;
          font-weight: bold;
      }

      p {
          color: #555555;
          font-size: 18px;
      }

      h2 {
          font-size: 25px;
          color: #9d0208;
          font-weight: bold;
      }

      .best-regards {
          color: #2f2f2f;
          font-size: 20px;
          font-weight: bold;
      }

      .footer-middle {
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: center;
          background: #9b1d21;
      }
  </style>
      </head>
      <body>
      <div class="card">
      <div class="header">
          <div class="first"></div>
          <div class="middle"></div>
          <div class="last"></div>
      </div>
      <div class="content">
          <div class="logo"></div>
          <div class="greeting-from">
              <span class="greeting">Greeting</span>
              <span class="from">From</span> <br>
              <span class="web-crafts">American Web Crafts</span>
          </div>
          <div class="middle-line-div">
              <div class="first"></div>
              <div class="middle-line"></div>
              <div class="last"></div>
          </div>
          <div class="">
              <span class="dear">Dear,</span> <span class="name">${name}</span>
          </div>
          <p>
              Rest assured that a highly dedicated and experienced representative from our team is committed to
              reaching out to you shortly,
              utilizing either your provided phone number or email address, and will diligently ensure that you
              receive the prompt and
              personalized assistance you deserve.
          </p>
          <h2>Thank You</h2>
          <div class="best-regards">
              <sapn>Best regards,<br>American Web Crafts</sapn>
          </div>
      </div>
      <div class="footer">
          <div class="first"></div>
          <div class="footer-middle"></div>
          <div class="last"></div>
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
          border: 2px solid #9b1d21;
          max-width: 500px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
      }

      .header,
      .footer {
          display: flex;
      }

      .first,
      .last {
          width: 100%;
      }

      .middle {
          width: 250px;
          height: 20px;
          background: #9b1d21;
      }

      .content {
          padding: 25px;
      }

      .logo {
          margin: 2rem 0 2rem 0rem;
      }

      .greeting {
          font-size: 46px;
          color: #9b1d21;
          font-weight: bold;
      }

      .from {
          font-size: 46px;
          color: #000000;
          font-weight: bold;
      }

      .web-crafts {
          font-size: 25px;
          color: #000000;
          font-weight: bold;
      }

      .middle-line-div {
          display: flex;
      }

      .middle-line {
          width: 350px;
          height: 8px;
          background: #9b1d21;
          margin: 1.5rem 0 1.5rem 0;
      }
      .dear {
          color: #b95857;
          font-size: 22px;
          font-weight: bold;
      }

      .name {
          color: #424242;
          font-size: 22px;
          font-weight: bold;
      }

      p {
          color: #555555;
          font-size: 18px;
      }

      h2 {
          font-size: 25px;
          color: #9d0208;
          font-weight: bold;
      }

      .best-regards {
          color: #2f2f2f;
          font-size: 20px;
          font-weight: bold;
      }

      .footer-middle {
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: center;
          background: #9b1d21;
      }
  </style>
      </head>
      <body>
      <div class="card">
      <div class="header">
          <div class="first"></div>
          <div class="middle"></div>
          <div class="last"></div>
      </div>
      <div class="content">
          <div class="logo"></div>
          <div class="greeting-from">
              <span class="greeting">Greeting</span>
              <span class="from">From</span> <br>
              <span class="web-crafts">American Web Crafts</span>
          </div>
          <div class="middle-line-div">
              <div class="first"></div>
              <div class="middle-line"></div>
              <div class="last"></div>
          </div>
          <div class="">
              <span class="dear">Dear,</span> <span class="name">${name}</span>
          </div>
          <p>
              Rest assured that a highly dedicated and experienced representative from our team is committed to
              reaching out to you shortly,
              utilizing either your provided phone number or email address, and will diligently ensure that you
              receive the prompt and
              personalized assistance you deserve.
          </p>
          <h2>Thank You</h2>
          <div class="best-regards">
              <sapn>Best regards,<br>American Web Crafts</sapn>
          </div>
      </div>
      <div class="footer">
          <div class="first"></div>
          <div class="footer-middle"></div>
          <div class="last"></div>
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
          border: 2px solid #9b1d21;
          max-width: 500px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
      }

      .header,
      .footer {
          display: flex;
      }

      .first,
      .last {
          width: 100%;
      }

      .middle {
          width: 250px;
          height: 20px;
          background: #9b1d21;
      }

      .content {
          padding: 25px;
      }

      .logo {
          margin: 2rem 0 2rem 0rem;
      }

      .greeting {
          font-size: 46px;
          color: #9b1d21;
          font-weight: bold;
      }

      .from {
          font-size: 46px;
          color: #000000;
          font-weight: bold;
      }

      .web-crafts {
          font-size: 25px;
          color: #000000;
          font-weight: bold;
      }

      .middle-line-div {
          display: flex;
      }

      .middle-line {
          width: 350px;
          height: 8px;
          background: #9b1d21;
          margin: 1.5rem 0 1.5rem 0;
      }
      .dear {
          color: #b95857;
          font-size: 22px;
          font-weight: bold;
      }

      .name {
          color: #424242;
          font-size: 22px;
          font-weight: bold;
      }

      p {
          color: #555555;
          font-size: 18px;
      }

      h2 {
          font-size: 25px;
          color: #9d0208;
          font-weight: bold;
      }

      .best-regards {
          color: #2f2f2f;
          font-size: 20px;
          font-weight: bold;
      }

      .footer-middle {
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: center;
          background: #9b1d21;
      }
  </style>
      </head>
      <body>
      <div class="card">
      <div class="header">
          <div class="first"></div>
          <div class="middle"></div>
          <div class="last"></div>
      </div>
      <div class="content">
          <div class="logo"></div>
          <div class="greeting-from">
              <span class="greeting">Greeting</span>
              <span class="from">From</span> <br>
              <span class="web-crafts">American Web Crafts</span>
          </div>
          <div class="middle-line-div">
              <div class="first"></div>
              <div class="middle-line"></div>
              <div class="last"></div>
          </div>
          <div class="">
              <span class="dear">Dear,</span> <span class="name">${name}</span>
          </div>
          <p>
              Rest assured that a highly dedicated and experienced representative from our team is committed to
              reaching out to you shortly,
              utilizing either your provided phone number or email address, and will diligently ensure that you
              receive the prompt and
              personalized assistance you deserve.
          </p>
          <h2>Thank You</h2>
          <div class="best-regards">
              <sapn>Best regards,<br>American Web Crafts</sapn>
          </div>
      </div>
      <div class="footer">
          <div class="first"></div>
          <div class="footer-middle"></div>
          <div class="last"></div>
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
          border: 2px solid #9b1d21;
          max-width: 500px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
      }

      .header,
      .footer {
          display: flex;
      }

      .first,
      .last {
          width: 100%;
      }

      .middle {
          width: 250px;
          height: 20px;
          background: #9b1d21;
      }

      .content {
          padding: 25px;
      }

      .logo {
          margin: 2rem 0 2rem 0rem;
      }

      .greeting {
          font-size: 46px;
          color: #9b1d21;
          font-weight: bold;
      }

      .from {
          font-size: 46px;
          color: #000000;
          font-weight: bold;
      }

      .web-crafts {
          font-size: 25px;
          color: #000000;
          font-weight: bold;
      }

      .middle-line-div {
          display: flex;
      }

      .middle-line {
          width: 350px;
          height: 8px;
          background: #9b1d21;
          margin: 1.5rem 0 1.5rem 0;
      }
      .dear {
          color: #b95857;
          font-size: 22px;
          font-weight: bold;
      }

      .name {
          color: #424242;
          font-size: 22px;
          font-weight: bold;
      }

      p {
          color: #555555;
          font-size: 18px;
      }

      h2 {
          font-size: 25px;
          color: #9d0208;
          font-weight: bold;
      }

      .best-regards {
          color: #2f2f2f;
          font-size: 20px;
          font-weight: bold;
      }

      .footer-middle {
          width: 250px;
          height: 50px;
          display: flex;
          justify-content: center;
          background: #9b1d21;
      }
  </style>
      </head>
      <body>
      <div class="card">
      <div class="header">
          <div class="first"></div>
          <div class="middle"></div>
          <div class="last"></div>
      </div>
      <div class="content">
          <div class="logo"></div>
          <div class="greeting-from">
              <span class="greeting">Greeting</span>
              <span class="from">From</span> <br>
              <span class="web-crafts">American Web Crafts</span>
          </div>
          <div class="middle-line-div">
              <div class="first"></div>
              <div class="middle-line"></div>
              <div class="last"></div>
          </div>
          <div class="">
              <span class="dear">Dear,</span> <span class="name">${name}</span>
          </div>
          <p>
              Rest assured that a highly dedicated and experienced representative from our team is committed to
              reaching out to you shortly,
              utilizing either your provided phone number or email address, and will diligently ensure that you
              receive the prompt and
              personalized assistance you deserve.
          </p>
          <h2>Thank You</h2>
          <div class="best-regards">
              <sapn>Best regards,<br>American Web Crafts</sapn>
          </div>
      </div>
      <div class="footer">
          <div class="first"></div>
          <div class="footer-middle"></div>
          <div class="last"></div>
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
