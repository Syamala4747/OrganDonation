// Get all living (before_death) donors for hospital dashboard
export async function getLivingDonors(req, res) {
  try {
    // Show donors who chose 'before_death' or 'both'
    const livingDonors = await OrganDonation.find({
      $or: [
        { donationType: 'before_death' },
        { donationType: 'both' }
      ]
    });
    res.json(livingDonors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
// Photo upload handler
export async function uploadDonorPhoto(req, res) {
  if (!req.file) {
    return res.status(400).json({ success: false, error: 'No photo file uploaded.' });
  }
  // Return the file path to be stored in the main registration
  return res.status(201).json({ success: true, photoPath: req.file.path });
}
import User from '../models/User.js';
// Get all users with donor category
export async function getDonorUsers(req, res) {
  try {
    const donors = await User.find({ category: 'Donor' });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all users with organization category
export async function getOrganizationUsers(req, res) {
  try {
    const orgs = await User.find({ category: 'Organization' });
    res.json(orgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all users with hospital category
export async function getHospitalUsers(req, res) {
  try {
    const hospitals = await User.find({ category: 'Hospital' });
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
import Donor from '../models/Donor.js';
<<<<<<< HEAD
=======
import OrganDonation from '../models/OrganDonation.js';
>>>>>>> pr-6
import path from 'path';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

<<<<<<< HEAD
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
=======
import fs from 'fs';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
>>>>>>> pr-6
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
export const upload = multer({ storage });

export async function registerOrganDonation(req, res) {
<<<<<<< HEAD
=======
  console.log('--- Organ Donation Registration Attempt ---');
  console.log('Request method:', req.method);
  console.log('Headers:', req.headers);
  console.log('BODY:', JSON.stringify(req.body, null, 2));
  console.log('FILE:', req.file);
  // Check all required fields
  const requiredFields = [
    'name', 'age', 'gender', 'bloodType', 'email', 'location', 'phone',
    'donationType', 'nomineeName1', 'nomineePhone1', 'nomineeEmail1',
    'nomineeName2', 'nomineePhone2', 'nomineeEmail2',
    'nomineeName3', 'nomineePhone3', 'nomineeEmail3', 'pledge'
  ];
  let missingFields = [];
  for (const field of requiredFields) {
    if (!req.body[field] || (typeof req.body[field] === 'string' && req.body[field].trim() === '')) {
      missingFields.push(field);
    }
  }
  if (!req.body.pledge || (Array.isArray(req.body.pledge) && req.body.pledge.length === 0)) {
    missingFields.push('pledge');
  }
  if (missingFields.length > 0) {
    console.error('Missing required fields:', missingFields);
    return res.status(400).json({ success: false, error: `Missing required fields: ${missingFields.join(', ')}` });
  }
  // Parse pledge field from FormData
  let pledge;
  if (typeof req.body.pledge === 'string') {
    pledge = [req.body.pledge];
  } else if (typeof req.body.pledge === 'object' && !Array.isArray(req.body.pledge)) {
    pledge = Object.values(req.body.pledge);
  } else {
    pledge = req.body.pledge;
  }
  // Validate required fields
  if (!req.body.name || !req.body.email || !req.body.phone || !req.body.bloodType || !req.body.location || !pledge || pledge.length === 0) {
    console.error('Missing required fields:', {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      bloodType: req.body.bloodType,
      location: req.body.location,
      pledge
    });
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }
  console.log('Received organ donation data:', req.body);
  console.log('Parsed pledge:', pledge);
>>>>>>> pr-6
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
<<<<<<< HEAD
    // Map donationType to valid schema values
    let mappedDonationType = 'before_death';
    if (donationType === 'Order Pledge' || donationType === 'After Death') mappedDonationType = 'after_death';
    if (donationType === 'Both') mappedDonationType = 'before_death'; // or handle as needed

    const donor = new Donor({
=======
  // Map donationType to valid schema values
  let mappedDonationType = 'before_death';
  if (donationType.toLowerCase() === 'order pledge' || donationType.toLowerCase() === 'after death') mappedDonationType = 'after_death';
  if (donationType.toLowerCase() === 'both') mappedDonationType = 'both';

    const organDonation = new OrganDonation({
>>>>>>> pr-6
      name,
      age,
      gender,
      photo,
      email,
    location,
      bloodGroup: bloodType,
      organs: pledge,
      phone,
      donationType: mappedDonationType,
<<<<<<< HEAD
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
=======
      nominee1: { name: nomineeName1, phone: nomineePhone1, email: nomineeEmail1 },
      nominee2: { name: nomineeName2, phone: nomineePhone2, email: nomineeEmail2 },
      nominee3: { name: nomineeName3, phone: nomineePhone3, email: nomineeEmail3 },
      medicalCertificate,
      status: 'Registered',
      createdAt: new Date()
    });
    await organDonation.save();
    // Send email to each nominee (optional, does not affect response)
    // Send emails in parallel for speed
    const nomineeEmailPromises = nominees.filter(nominee => nominee.email).map(nominee => {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: nominee.email,
        subject: 'Organ Donation Nominee Notification',
        text: `Dear ${nominee.name},\n\nYou have been nominated by ${name} (${email}, Phone: ${phone}) as a responsible contact for their organ donation pledge.\n\nDonor Details:\n- Name: ${name}\n- Age: ${age}\n- Gender: ${gender}\n- Location: ${location}\n- Blood Group: ${bloodType}\n- Organs Pledged: ${Array.isArray(pledge) ? pledge.join(', ') : pledge}\n- Donation Type: ${donationType}\n\nYour role as a nominee is to support and help fulfill the donor's wishes. Please keep this information safe and inform the donor's family if needed.\n\nThank you for being part of this life-saving mission!\n\nOrganDonation Team (+91 7207476697)`
      };
      return transporter.sendMail(mailOptions).catch(mailErr => {
        console.error('Failed to send email to nominee:', nominee.email, mailErr);
      });
    });
    // Don't block response, but wait for all emails to be sent in the background
    Promise.allSettled(nomineeEmailPromises);
    // Always return JSON response
    res.status(201).json({ success: true, organDonation });
>>>>>>> pr-6
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
