"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { FiStar, FiAward, FiGithub, FiTrendingUp } from "react-icons/fi";
import Image from "next/image";
import AuthRequired from "@/app/components/AuthRequired";

interface LeaderboardEntry {
    _id: string;
    username: string;
    avatar: string;
    score: number;
    battlesWon: number;
    createdAt: string;
    updatedAt: string;
}

export default function LeaderboardPage() {
    const { data: session, status } = useSession();
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {
        try {
            const res = await fetch("/api/leaderboard");
            const data = await res.json();
            setLeaderboard(data);
        } catch (error) {
            console.error("Failed to fetch leaderboard:", error);
        } finally {
            setLoading(false);
        }
    };

    const getMedalColor = (rank: number) => {
        switch (rank) {
            case 1:
                return "from-yellow-400 to-orange-500";
            case 2:
                return "from-gray-300 to-gray-500";
            case 3:
                return "from-orange-400 to-orange-600";
            default:
                return "from-blue-500 to-purple-500";
        }
    };

    const getMedalIcon = (rank: number) => {
        if (rank <= 3) return FiAward;
        return FiStar;
    };

    // Check authentication status
    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-brand-primary/30 border-t-brand-primary rounded-full"
                />
            </div>
        );
    }

    if (!session) {
        return <AuthRequired />;
    }

    return (
        <main className="relative overflow-hidden min-h-screen">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '5s' }} />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '7s', animationDelay: '1s' }} />
            </div>

            {/* Header Section */}
            <section className="container py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-white/20 backdrop-blur-sm"
                    >
                        <FiAward className="text-yellow-500" />
                        <span className="text-xs font-bold uppercase tracking-wider">Global Rankings</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                            Leaderboard
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Top GitHub developers ranked by battle performance
                    </motion.p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
                >
                    <div className="glass rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                                <FiAward className="text-white text-xl" />
                            </div>
                            <div>
                                <div className="text-2xl font-black">{leaderboard.length}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Total Competitors</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <FiStar className="text-white text-xl" />
                            </div>
                            <div>
                                <div className="text-2xl font-black">
                                    {leaderboard.reduce((acc, entry) => acc + entry.battlesWon, 0)}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Total Battles</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                <FiTrendingUp className="text-white text-xl" />
                            </div>
                            <div>
                                <div className="text-2xl font-black">
                                    {leaderboard.length > 0 ? leaderboard[0].score.toLocaleString() : 0}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Top Score</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Leaderboard Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {loading ? (
                        <div className="text-center py-20">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-12 h-12 border-4 border-brand-primary/30 border-t-brand-primary rounded-full mx-auto"
                            />
                            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading leaderboard...</p>
                        </div>
                    ) : leaderboard.length === 0 ? (
                        <div className="text-center py-20 glass rounded-3xl p-12 border border-white/20">
                            <FiAward className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">No Rankings Yet</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Be the first to compete and claim the top spot!
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {leaderboard.map((entry, index) => {
                                const rank = index + 1;
                                const MedalIcon = getMedalIcon(rank);
                                const isTopThree = rank <= 3;

                                return (
                                    <motion.div
                                        key={entry._id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        whileHover={{ scale: 1.02 }}
                                        className={`relative glass rounded-2xl p-6 border backdrop-blur-xl transition-all group ${isTopThree
                                            ? 'border-yellow-400/50 shadow-lg shadow-yellow-500/20'
                                            : 'border-white/20 hover:border-brand-primary/50'
                                            }`}
                                    >
                                        {/* Rank Badge */}
                                        <div className="absolute -left-3 -top-3">
                                            <div
                                                className={`w-12 h-12 rounded-full bg-gradient-to-br ${getMedalColor(
                                                    rank
                                                )} flex items-center justify-center shadow-lg`}
                                            >
                                                {isTopThree ? (
                                                    <MedalIcon className="text-white text-xl" />
                                                ) : (
                                                    <span className="text-white font-black">{rank}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between ml-6">
                                            {/* User Info */}
                                            <div className="flex items-center gap-4 flex-1">
                                                <div className="relative">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                                                        <img
                                                            src={entry.avatar}
                                                            alt={entry.username}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    {isTopThree && (
                                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                                                            <FiStar className="text-white text-xs" />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-xl font-black">{entry.username}</h3>
                                                        <a
                                                            href={`https://github.com/${entry.username}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-400 hover:text-brand-primary transition-colors"
                                                        >
                                                            <FiGithub className="w-4 h-4" />
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-1">
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                                            {entry.battlesWon} {entry.battlesWon === 1 ? 'Win' : 'Wins'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Score */}
                                            <div className="text-right">
                                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                                    {entry.score.toLocaleString()}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                    Points
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 to-purple-600/0 group-hover:from-brand-primary/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-3xl p-12 text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                                Ready to Climb the Ranks?
                            </h2>
                            <p className="text-xl text-white/90 mb-6">
                                Challenge other developers and prove your skills
                            </p>
                            <motion.a
                                href="/"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-8 py-4 rounded-full bg-white text-purple-600 font-black uppercase shadow-2xl hover:shadow-white/50 transition-all"
                            >
                                Start a Battle
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
