import { useRouter } from "next/router";
import useSWR from "swr";
import api from "../../lib/api";
import { useCart } from "../../context/CartContext";

const fetcher = (url: string) => api.get(url).then(r => r.data);

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = useSWR(id ? `/products/${id}` : null, fetcher);
  const { dispatch } = useCart();

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex gap-6">
        <img src={product.images?.[0] || "/images/placeholder.png"} alt={product.name} className="w-96 h-96 object-cover" />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4 font-bold">₦{product.price}</div>
          <button
            onClick={() => dispatch({ type: "add", item: { productId: product._id, name: product.name, price: product.price, qty: 1, image: product.images?.[0] } })}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
