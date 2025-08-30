import express from 'express';
import { registerOrganDonation, getOrganDonationStatus } from '../controllers/organDonationController.js';

const router = express.Router();

router.post('/register', registerOrganDonation);
router.get('/status', getOrganDonationStatus);

export default router;
