import type { NextPage } from "next";
import useSWR from "swr";
import api from "../lib/api";
import ProductCard from "../components/ProductCard";

const fetcher = (url: string) => api.get(url).then(r => r.data);

const Home: NextPage = () => {
  const { data: products } = useSWR("/products", fetcher);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products?.map((p: any) => <ProductCard key={p._id} product={p} />)}
      </div>
    </main>
  );
}

export default Home;
