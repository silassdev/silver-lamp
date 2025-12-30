import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../lib/mongoose";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "devsecret";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  if (req.method !== "POST") return res.status(405).end();
  const { email, password, name } = req.body;
  if (!email || !password) return res.status(400).json({ message: "email and password required" });
  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: "email already registered" });
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashed, name });
  await user.save();
  const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
  res.status(201).json({ token, user: { id: user._id, email: user.email, name: user.name, role: user.role } });
}
