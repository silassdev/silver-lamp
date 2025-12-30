import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../lib/mongoose";
import Product from "../../../models/Product";
import mongoose from "mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).end();
  if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: "invalid id" });

  if (req.method === "GET") {
    const p = await Product.findById(id);
    if (!p) return res.status(404).json({ message: "not found" });
    return res.json(p);
  }

  if (req.method === "PUT") {
    const data = req.body;
    const updated = await Product.findByIdAndUpdate(id, data, { new: true });
    if (!updated) return res.status(404).json({ message: "not found" });
    return res.json(updated);
  }

  if (req.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    return res.status(204).end();
  }

  res.status(405).end();
}
