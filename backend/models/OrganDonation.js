import mongoose from 'mongoose';

const organDonationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  city: { type: String, required: true },
  organs: [{ type: String, required: true }],
  status: { type: String, default: 'Registered' },
  createdAt: { type: Date, default: Date.now }
});

const OrganDonation = mongoose.model('OrganDonation', organDonationSchema);
export default OrganDonation;
