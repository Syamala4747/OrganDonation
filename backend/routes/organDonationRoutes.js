
import express from 'express';
import { registerOrganDonation, getOrganDonationStatus, getDonorUsers, getOrganizationUsers, getHospitalUsers, upload, uploadDonorPhoto, getLivingDonors } from '../controllers/organDonationController.js';

const router = express.Router();
// Get all living donors (before_death) for hospital dashboard
router.get('/living-donors', getLivingDonors);

// Photo upload route
router.post('/upload-photo', upload.single('photo'), uploadDonorPhoto);

router.get('/donor-users', getDonorUsers);
router.get('/organization-users', getOrganizationUsers);
router.get('/hospital-users', getHospitalUsers);
router.post('/register', upload.single('medicalCertificate'), registerOrganDonation);
router.get('/status', getOrganDonationStatus);

export default router;
