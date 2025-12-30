import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../lib/mongoose";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "devsecret";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  if (req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "invalid credentials" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "invalid credentials" });
  const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user._id, email: user.email, name: user.name, role: user.role } });
}
