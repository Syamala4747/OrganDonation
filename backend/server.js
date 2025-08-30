import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import connectDB from './config/db.js';

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middleware/errorHandler.js';

import donorRoutes from './routes/donorRoutes.js';
import hospitalRoutes from './routes/hospitalRoutes.js';
import organizationRoutes from './routes/organizationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import supportRoutes from './routes/supportRoutes.js';
import organDonationRoutes from './routes/organDonationRoutes.js';

// API routes
app.use('/api/auth', authRoutes);

app.use('/api/donor', donorRoutes);
app.use('/api/donor', organDonationRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/organization', organizationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/support', supportRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
