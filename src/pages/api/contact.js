const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Create email transporter
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_EMAIL_ADDRESS,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // Send the email
      const info = await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_EMAIL_ADDRESS, // Recipient email
        text: message,
        html: `<p><b>From:</b> ${name}<br><b>Email:</b> ${email}<br><br>${message}</p>`, // Add HTML formatting
      });

      // console.log("Message sent: %s", info.messageId);
      res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
      // console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
