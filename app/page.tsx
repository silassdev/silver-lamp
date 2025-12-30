"use client";


import { useState } from "react";
import { battleAction } from "@/lib/actions";

export default function Home() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleBattle = async () => {
    setLoading(true);
    const data = await battleAction(user1, user2);
    setResults(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">GitBattle</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <input 
            onChange={(e) => setUser1(e.target.value)}
            className="p-4 rounded-xl border-2 border-slate-200" 
            placeholder="GitHub User 1"
          />
          <input 
            onChange={(e) => setUser2(e.target.value)}
            className="p-4 rounded-xl border-2 border-slate-200" 
            placeholder="GitHub User 2"
          />
        </div>

        <button 
          onClick={handleBattle}
          disabled={loading}
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold disabled:bg-slate-400"
        >
          {loading ? "Calculating..." : "FIGHT!"}
        </button>

        {/* Quick Result Display */}
        {results?.p1 && (
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className={`p-6 rounded-xl ${results.p1.score > results.p2.score ? 'bg-green-100 border-2 border-green-500' : 'bg-white'}`}>
              <h2 className="font-bold text-xl">{results.p1.name}</h2>
              <p className="text-3xl font-black">{results.p1.score} pts</p>
            </div>
            <div className={`p-6 rounded-xl ${results.p2.score > results.p1.score ? 'bg-green-100 border-2 border-green-500' : 'bg-white'}`}>
              <h2 className="font-bold text-xl">{results.p2.name}</h2>
              <p className="text-3xl font-black">{results.p2.score} pts</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}