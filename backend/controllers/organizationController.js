import Organization from '../models/Organization.js';
import Donor from '../models/Donor.js';

// Get organization profile
export const getOrgProfile = async (req, res) => {
  try {
    const org = await Organization.findOne({ user: req.user._id }).populate('user', '-password');
    if (!org) return res.status(404).json({ message: 'Organization not found' });
    res.json(org);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update organization profile
export const updateOrgProfile = async (req, res) => {
  try {
    const org = await Organization.findOne({ user: req.user._id });
    if (!org) return res.status(404).json({ message: 'Organization not found' });
    Object.assign(org, req.body);
    await org.save();
    res.json(org);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get after-death pledged donors
export const getAfterDeathDonors = async (req, res) => {
  try {
    const donors = await Donor.find({ donationType: 'after_death' }).populate('user', '-password');
    res.json(donors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add contact query
export const addOrgContactQuery = async (req, res) => {
  try {
    // Here you would send an email or save the query
    res.json({ message: 'Contact query sent' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
