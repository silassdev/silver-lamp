import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  image: String,
  emailVerified: Date,
}, { timestamps: true });

export const User = models.User || model('User', UserSchema);

// models/BattleResult.ts
const BattleResultSchema = new Schema({
  winnerUsername: { type: String, required: true },
  loserUsername: { type: String, required: true },
  winnerScore: { type: Number, required: true },
  loserScore: { type: Number, required: true },
  playedBy: { type: Schema.Types.ObjectId, ref: 'User' }, 
}, { timestamps: true });

export const BattleResult = models.BattleResult || model('BattleResult', BattleResultSchema);