import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  photo: { type: String },
  email: { type: String, required: true },
  location: { type: String, required: true },
  bloodType: { type: String, required: true },
  organsPledged: [{ type: String }],
  donationType: { type: String, enum: ['before_death', 'after_death'], required: true },
  nomineeName: { type: String },
  nomineePhone: { type: String },
  status: [{
    type: { type: String },
    date: { type: Date },
    status: { type: String },
    requestedBy: { type: String },
    notes: { type: String }
  }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Donor', donorSchema);
