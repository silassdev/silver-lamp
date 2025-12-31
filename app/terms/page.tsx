"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronLeft, FiShield, FiFileText, FiShieldOff, FiInfo, FiGithub } from "react-icons/fi";

export default function TermsPage() {
    return (
        <main className="relative overflow-hidden min-h-screen">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '8s', animationDelay: '1s' }} />
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
                        <FiFileText className="text-brand-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">Legal Framework</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Terms of{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                            Service
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                            <FiInfo className="text-blue-500" />
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            By accessing or using GitBattle, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service. GitBattle is a platform for comparing GitHub profiles and should be used for entertainment and educational purposes only.
                        </p>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <FiShield className="text-purple-500" />
                            2. Account Responsibilities
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            To use certain features like the leaderboard, you must sign in using your GitHub or Google account. You are responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Maintaining the security of your authentication tokens</li>
                            <li>All activities that occur under your account</li>
                            <li>Ensuring your use of the service complies with GitHub's and Google's respective policies</li>
                        </ul>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <FiGithub className="text-gray-900 dark:text-white" />
                            3. Data Usage & GitHub API
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            GitBattle fetches public data from the GitHub API. We do not store your private code, repositories, or personal information beyond what is necessary to maintain the leaderboard (username, avatar, and calculated battle score). Your use of GitBattle is also subject to GitHub's Acceptable Use Policies.
                        </p>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <FiShieldOff className="text-red-500" />
                            4. Prohibited Conduct
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            Users agree not to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Attempt to manipulate battle scores through artificial means</li>
                            <li>Abuse or overload our infrastructure or the GitHub API</li>
                            <li>Use the service for any illegal or unauthorized purpose</li>
                            <li>Harass or target other developers based on their battle rankings</li>
                        </ul>
                    </section>

                    <section className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            GitBattle provides weighted profile comparisons "as is." We are not liable for any discrepancies in GitHub data or any decisions made based on the rankings provided by this platform. Battle scores are calculated using a proprietary formula and do not represent a definitive measure of developer skill.
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
                    <p className="text-gray-500 mb-4">Questions about our terms?</p>
                    <Link href="/contact" className="text-brand-primary font-bold hover:underline">
                        Contact Support
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
