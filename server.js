const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Set up body parser middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// Serve the homepage when someone visits the root URL
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html"); // Make sure the path to your homepage is correct
});

// POST route for form submission
app.post("/submit-form", (req, res) => {
    const { name, email, message } = req.body;

    // Set up nodemailer transporter (replace with your email and password)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com", // Replace with your email
            pass: "your-email-password"    // Replace with your email password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: "your-email@example.com", // Replace with your email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("Sorry, something went wrong. Please try again later.");
        } else {
            console.log("Email sent: " + info.response);
            res.send("Thank you for contacting us!");
        }
    });
});

// Start server on port 3000 (or another port if you changed it)
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
