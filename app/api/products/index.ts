import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../lib/mongoose";
import Product from "../../../models/Product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  if (req.method === "GET") {
    const q = req.query.q as string | undefined;
    const filter = q ? { $text: { $search: q } } : {};
    const products = await Product.find(filter).sort({ createdAt: -1 }).limit(100);
    return res.json(products);
  }

  if (req.method === "POST") {
    // Basic admin-only check omitted for brevity — add JWT auth in production
    const { name, slug, description, price, images, stock, category } = req.body;
    const product = new Product({ name, slug, description, price, images, stock, category });
    await product.save();
    return res.status(201).json(product);
  }

  res.status(405).end();
}
