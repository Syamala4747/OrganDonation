import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  category: { type: String, enum: ['Donor', 'Hospital', 'Admin', 'Organization'], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
