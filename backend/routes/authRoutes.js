import express from 'express';
import { donorSignup, login, requestSignup, forgotPassword } from '../controllers/authController.js';
const router = express.Router();

router.post('/donor-signup', donorSignup);
router.post('/login', login);
router.post('/request-signup', requestSignup);

router.post('/forgot-password', forgotPassword);

export default router;
