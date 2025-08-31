import Donor from '../models/Donor.js';
import path from 'path';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
export const upload = multer({ storage });

export async function registerOrganDonation(req, res) {
    // Setup nodemailer transporter for Gmail using .env credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
  try {
    const {
      name,
      age,
      gender,
      photo,
      email,
      location,
      bloodType,
      pledge,
      phone,
      donationType,
      nomineeName1,
      nomineePhone1,
      nomineeEmail1,
      nomineeName2,
      nomineePhone2,
      nomineeEmail2,
      nomineeName3,
      nomineePhone3,
      nomineeEmail3
    } = req.body;
    let medicalCertificate = '';
    if (req.file) {
      medicalCertificate = req.file.path;
    }
    const nominees = [
      { name: nomineeName1, phone: nomineePhone1, email: nomineeEmail1 },
      { name: nomineeName2, phone: nomineePhone2, email: nomineeEmail2 },
      { name: nomineeName3, phone: nomineePhone3, email: nomineeEmail3 }
    ];
    // Map donationType to valid schema values
    let mappedDonationType = 'before_death';
    if (donationType === 'Order Pledge' || donationType === 'After Death') mappedDonationType = 'after_death';
    if (donationType === 'Both') mappedDonationType = 'before_death'; // or handle as needed

    const donor = new Donor({
      name,
      age,
      gender,
      photo,
      email,
      location,
      bloodType,
      organsPledged: pledge,
      phone,
      donationType: mappedDonationType,
      nominees,
      medicalCertificate,
      status: [{ type: 'Registered', date: new Date(), status: 'Active' }]
    });
    await donor.save();

    // Send email to each nominee
    for (const nominee of nominees) {
      if (nominee.email) {
        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: nominee.email,
          subject: 'Organ Donation Nominee Notification',
          text: `Dear ${nominee.name}, ${name} has enrolled you as a nominee for their organ donation. You should take responsibility for the user.\n\nOrganDonation Team (+91 99124 99598)`
        };
        try {
          await transporter.sendMail(mailOptions);
        } catch (mailErr) {
          console.error('Failed to send email to nominee:', nominee.email, mailErr);
        }
      }
    }
    res.status(201).json({ success: true, donor });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function getOrganDonationStatus(req, res) {
  try {
    const { email } = req.query;
    const donor = await Donor.findOne({ email });
    if (!donor) {
      return res.status(404).json({ isRegistered: false });
    }
    res.json({ isRegistered: true, ...donor._doc });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
