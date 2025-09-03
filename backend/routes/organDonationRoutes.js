
import express from 'express';
import { registerOrganDonation, getOrganDonationStatus } from '../controllers/organDonationController.js';
import { upload } from '../controllers/organDonationController.js';

const router = express.Router();
// Get all living donors (before_death) for hospital dashboard
router.get('/living-donors', getLivingDonors);

// ...existing code...
router.post('/register', upload.single('medicalCertificate'), registerOrganDonation);
router.get('/status', getOrganDonationStatus);

export default router;
