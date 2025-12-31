"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { battleAction } from "@/lib/actions";
import { FiGithub, FiZap, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function Home() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleBattle = async () => {
    if (!user1 || !user2) return;
    setLoading(true);
    const data = await battleAction(user1, user2);
    setResults(data);
    setLoading(false);
  };

  const features = [
    { icon: FiZap, label: "Instant Comparison", value: "Real-time analysis" },
    { icon: FiTrendingUp, label: "Smart Scoring", value: "Weighted metrics" },
    { icon: FiUsers, label: "Global Leaderboard", value: "Track rankings" },
    { icon: FiAward, label: "Achievement System", value: "Unlock badges" },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-white/20 backdrop-blur-sm"
          >
            <SiGithub className="text-brand-primary" />
            <span className="text-xs font-bold uppercase tracking-wider">GitHub Developer Arena</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              GitBattle
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Compare GitHub profiles head-to-head with intelligent scoring,
            visual insights, and competitive rankings
          </motion.p>
        </motion.div>

        {/* Battle Arena */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-xl shadow-2xl">
            {/* VS Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-500/50">
                VS
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Player 1 Input */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="group"
              >
                <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-gray-700 dark:text-gray-300">
                  <FiGithub className="inline mr-2" />
                  Fighter 1
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={user1}
                    onChange={(e) => setUser1(e.target.value)}
                    placeholder="username"
                    className="w-full px-6 py-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all outline-none font-mono text-lg group-hover:border-blue-300 dark:group-hover:border-blue-600"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <SiGithub size={20} />
                  </div>
                </div>
              </motion.div>

              {/* Player 2 Input */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="group"
              >
                <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-gray-700 dark:text-gray-300">
                  <FiGithub className="inline mr-2" />
                  Fighter 2
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={user2}
                    onChange={(e) => setUser2(e.target.value)}
                    placeholder="username"
                    className="w-full px-6 py-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 transition-all outline-none font-mono text-lg group-hover:border-purple-300 dark:group-hover:border-purple-600"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <SiGithub size={20} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Battle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBattle}
              disabled={loading || !user1 || !user2}
              className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black text-xl uppercase tracking-wider shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                    />
                    Analyzing Battle...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <FiZap className="text-yellow-300" />
                    Start Battle!
                    <FiZap className="text-yellow-300" />
                  </span>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Results Display */}
        {results?.p1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <h2 className="text-3xl font-black text-center mb-8">Battle Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Winner Card - Player 1 */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`relative p-8 rounded-2xl backdrop-blur-xl border-2 transition-all ${results.p1.score > results.p2.score
                    ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500 shadow-lg shadow-green-500/50'
                    : 'glass border-white/20'
                  }`}
              >
                {results.p1.score > results.p2.score && (
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <FiAward className="text-white text-xl" />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-black text-2xl">
                    {results.p1.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-black text-2xl">{results.p1.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fighter 1</p>
                  </div>
                </div>
                <div className="text-center py-6">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {results.p1.score}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-2">points</div>
                </div>
              </motion.div>

              {/* Winner Card - Player 2 */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`relative p-8 rounded-2xl backdrop-blur-xl border-2 transition-all ${results.p2.score > results.p1.score
                    ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500 shadow-lg shadow-green-500/50'
                    : 'glass border-white/20'
                  }`}
              >
                {results.p2.score > results.p1.score && (
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <FiAward className="text-white text-xl" />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl">
                    {results.p2.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-black text-2xl">{results.p2.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fighter 2</p>
                  </div>
                </div>
                <div className="text-center py-6">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {results.p2.score}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-2">points</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Features Section */}
      <section className="container py-20 border-t border-gray-200/50 dark:border-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">GitBattle</span>?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Advanced analytics and competitive features designed for developers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl glass border border-white/20 backdrop-blur-sm hover:border-brand-primary/50 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-brand-primary/30">
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.label}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6"
            >
              Ready to Battle?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of developers comparing their GitHub profiles
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-5 rounded-full bg-white text-purple-600 font-black text-lg uppercase shadow-2xl hover:shadow-white/50 transition-all"
            >
              Start Your Battle
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}