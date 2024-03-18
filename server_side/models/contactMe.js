import mongoose from "mongoose";

const ContactMeSchema = new mongoose.Schema({
    email: String,
    subject: String,
    message: String
  });

  export const ContactMe = mongoose.model('ContactMe', ContactMeSchema);