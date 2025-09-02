import mongoose from 'mongoose';

const organDonationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  photo: { type: String },
  email: { type: String, required: true },
    location: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  organs: [{ type: String, required: true }],
  phone: { type: String, required: true },
  donationType: { type: String },
  nominee1: {
    name: String,
    phone: String,
    email: String
  },
  nominee2: {
    name: String,
    phone: String,
    email: String
  },
  nominee3: {
    name: String,
    phone: String,
    email: String
  },
  medicalCertificate: { type: String },
  status: { type: String, default: 'Registered' },
  createdAt: { type: Date, default: Date.now }
});

const OrganDonation = mongoose.model('OrganDonation', organDonationSchema);
export default OrganDonation;
