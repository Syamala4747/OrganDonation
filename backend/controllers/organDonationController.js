import Donor from '../models/Donor.js';

export async function registerOrganDonation(req, res) {
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
      nomineeName,
      nomineePhone
    } = req.body;
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
      donationType: donationType === 'After Death' ? 'after_death' : 'before_death',
      nomineeName,
      nomineePhone,
      status: [{ type: 'Registered', date: new Date(), status: 'Active' }]
    });
    await donor.save();
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
