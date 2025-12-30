import connect from "../lib/mongoose";
import Product from "../models/Product";

async function run() {
  await connect();
  const items = [
    {
      name: "Mechanical Keyboard - RGB",
      slug: "mechanical-keyboard-rgb",
      description: "Hot-swap switches, RGB backlight.",
      price: 8500,
      images: ["/images/keyboard.jpg"],
      stock: 20,
      category: "keyboards"
    },
    {
      name: "Gaming Mouse",
      slug: "gaming-mouse",
      description: "16000 DPI, ergonomic.",
      price: 4500,
      images: ["/images/mouse.jpg"],
      stock: 35,
      category: "mice"
    }
  ];
  await Product.deleteMany({});
  await Product.create(items);
  console.log("Seeded");
  process.exit(0);
}

run().catch((e)=>{ console.error(e); process.exit(1); });
