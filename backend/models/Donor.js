import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  photo: { type: String },
  location: { type: String },
  bloodType: { type: String },
  organsPledged: [{ type: String }],
  donationType: { type: String, enum: ['before_death', 'after_death'] },
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
