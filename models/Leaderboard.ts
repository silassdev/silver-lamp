import mongoose, { Schema, model, models, Document } from "mongoose";

export interface ILeaderboard extends Document {
  username: string;
  avatar: string;
  score: number;
  battlesWon: number;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the Schema
const LeaderboardSchema = new Schema<ILeaderboard>(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true, // Prevents duplicate entries for the same users
      index: true 
    },
    avatar: { 
      type: String, 
      required: true 
    },
    score: { 
      type: Number, 
      required: true, 
      default: 0 
    },
    battlesWon: { 
      type: Number, 
      required: true, 
      default: 1 
    },
  },
  { 
    timestamps: true // Automatically manages createdAt and updatedAt
  }
);

// 3. Export the Model
// Note: In Next.js, we must check if the model already exists to prevent
// errors during hot-reloading (development mode).
export const Leaderboard = models.Leaderboard || model<ILeaderboard>("Leaderboard", LeaderboardSchema);