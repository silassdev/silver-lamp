"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [loading, setLoading] = useState<string | null>(null);

    const handleSignIn = async (provider: "google" | "github") => {
        setLoading(provider);
        await signIn(provider, { callbackUrl: "/" });
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '6s', animationDelay: '1s' }} />
            </div>

            <div className="container py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-white/20 backdrop-blur-sm"
                        >
                            <span className="text-xs font-bold uppercase tracking-wider">Secure Login</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
                        >
                            Welcome to{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                                GitBattle
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 dark:text-gray-300"
                        >
                            Sign in to compare profiles and climb the leaderboard
                        </motion.p>
                    </div>

                    {/* Sign-in Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass rounded-3xl p-8 border border-white/20 backdrop-blur-xl shadow-2xl"
                    >
                        <div className="space-y-4">
                            {/* Google Sign-in */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSignIn("google")}
                                disabled={loading !== null}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all font-semibold shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading === "google" ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full"
                                    />
                                ) : (
                                    <FcGoogle className="text-2xl" />
                                )}
                                <span className="text-gray-700 dark:text-gray-200">
                                    {loading === "google" ? "Signing in..." : "Continue with Google"}
                                </span>
                            </motion.button>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white/50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 font-medium">
                                        OR
                                    </span>
                                </div>
                            </div>

                            {/* GitHub Sign-in */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSignIn("github")}
                                disabled={loading !== null}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-900 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all font-semibold shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading === "github" ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-gray-600 border-t-white rounded-full"
                                    />
                                ) : (
                                    <FiGithub className="text-2xl text-white" />
                                )}
                                <span className="text-white">
                                    {loading === "github" ? "Signing in..." : "Continue with GitHub"}
                                </span>
                            </motion.button>
                        </div>

                        {/* Info Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
                        >
                            By signing in, you agree to our{" "}
                            <Link href="/terms" className="text-brand-primary hover:underline">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-brand-primary hover:underline">
                                Privacy Policy
                            </Link>
                        </motion.p>
                    </motion.div>

                    {/* Back to Home */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-6 text-center"
                    >
                        <Link
                            href="/"
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors"
                        >
                            ← Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
