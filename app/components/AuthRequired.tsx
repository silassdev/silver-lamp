"use client";

import { motion } from "framer-motion";
import { FiLock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function AuthRequired() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center"
            >
                {/* Lock Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-6 shadow-lg shadow-yellow-500/30"
                >
                    <FiLock className="text-white text-3xl" />
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-black mb-4"
                >
                    Oops! Login Required
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                >
                    You need to sign in to view the leaderboard and compete with other developers
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/login"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black uppercase shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105"
                    >
                        Sign In
                        <FiArrowRight />
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full glass border border-white/20 text-gray-700 dark:text-gray-200 font-bold transition-all hover:border-brand-primary/50"
                    >
                        Back to Home
                    </Link>
                </motion.div>

                {/* Info Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 p-6 rounded-2xl glass border border-white/20 backdrop-blur-sm"
                >
                    <h3 className="font-bold mb-2">Why sign in?</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 text-left">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>View global rankings and compete with developers</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>Track your battle history and wins</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✓</span>
                            <span>Climb the leaderboard and earn achievements</span>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
}
