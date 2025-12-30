import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true },
  images: { type: [String], default: [] },
  stock: { type: Number, default: 0 },
  category: { type: String },
}, { timestamps: true });

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
