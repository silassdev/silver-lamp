"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronLeft, FiLock, FiEye, FiDatabase, FiShare2, FiUserCheck } from "react-icons/fi";

export default function PrivacyPage() {
    return (
        <main className="relative overflow-hidden min-h-screen">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '7s' }} />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '9s', animationDelay: '2s' }} />
            </div>

            <div className="container py-16 md:py-24 max-w-4xl mx-auto">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link href="/login" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors font-medium">
                        <FiChevronLeft />
                        Back to Login
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-white/20 backdrop-blur-sm">
                        <FiLock className="text-emerald-500" />
                        <span className="text-xs font-bold uppercase tracking-wider">Privacy First</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Privacy{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                            Policy
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        How we protect and handle your professional developer data
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <FiEye className="text-blue-500" />
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            We only collect data that is publicly available on GitHub and the minimal information provided during OAuth sign-in:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Public GitHub username and profile display name</li>
                            <li>Public avatar URL</li>
                            <li>Public statistics (Followers, Repositories, Stars)</li>
                            <li>Email address (for authentication purposes only)</li>
                        </ul>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <FiDatabase className="text-emerald-500" />
                            2. How We Use It
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            Your data is used specifically for the GitBattle ecosystem:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Generating profile comparison visualizations</li>
                            <li>Calculating ranked battle scores</li>
                            <li>Displaying your ranking on the global leaderboard</li>
                            <li>Maintaining your authenticated session</li>
                        </ul>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <FiShare2 className="text-purple-500" />
                            3. Data Sharing
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We do not sell, trade, or lease your personal information to third parties. Your public profile data (username, avatar, and battle score) is visible to other users on the global leaderboard. We use standard third-party authentication providers (GitHub, Google) to handle secure sign-ins.
                        </p>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <FiUserCheck className="text-rose-500" />
                            4. Your Control
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            You have full control over your session and presence on GitBattle:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            <li>You can sign out at any time to clear your local session</li>
                            <li>You can revoke GitBattle's access via your GitHub or Google account settings</li>
                            <li>To request deletion of your leaderboard record, please contact us</li>
                        </ul>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">5. Security Measures</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We implement a variety of security measures to maintain the safety of your information. We use SSL encryption for all data transport and industry-standard hashing for session management. We do not store sensitive passwords; all authentication is handled via OAuth.
                        </p>
                    </section>
                </motion.div>

                {/* Footer Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 mb-4">Privacy concerns?</p>
                    <Link href="/contact" className="text-brand-primary font-bold hover:underline">
                        Legal Inquiry
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
