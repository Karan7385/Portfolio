import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { ContactMe } from "./models/contactMe.js";
import nodemailer from "nodemailer";

main().catch(err => console.log(err));

async function main() {
  let conn = await mongoose.connect('mongodb://127.0.0.1:27017/portfolio');
}
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res) => {
    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message

    const contact = new ContactMe({ email: email, subject: subject, message: message});
    contact.save()

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'karanvishwakarma7385@gmail.com',
          pass: 'Karan@7385'
      }
    });

    // Send email code here (use nodemailer)
    let mailOptions = {
      from: 'karanvishwakarma7385@gmail.com',
      to: email,
      subject: subject,
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send('Error sending email');
      } else {
        res.send('Email sent successfully');
      }
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})