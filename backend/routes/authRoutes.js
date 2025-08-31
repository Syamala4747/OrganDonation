import express from 'express';
import { donorSignup, login, requestSignup, forgotPassword } from '../controllers/authController.js';
const router = express.Router();


// Donor signup
router.post('/donor-signup', donorSignup);
// Hospital signup
router.post('/hospital-signup', requestSignup); // will distinguish in controller
// Organization signup
router.post('/organization-signup', requestSignup); // will distinguish in controller

router.post('/login', login);

router.post('/forgot-password', forgotPassword);

export default router;
