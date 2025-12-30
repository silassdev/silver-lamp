'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Logic will be handled here
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
            <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-brand-primary/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 -z-10 w-64 h-64 bg-brand-secondary/10 blur-3xl rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl border-white/50 dark:border-gray-800">
                    <div className="text-center mb-10">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-black text-3xl tracking-tighter text-brand-dark dark:text-white">
                                ECOM<span className="text-brand-primary">.</span>
                            </span>
                        </Link>
                        <h1 className="text-2xl font-bold text-brand-dark dark:text-white">Welcome back</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Enter your details to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-brand-dark dark:text-gray-300 mb-2 ml-1">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-5 py-4 rounded-2xl border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 text-brand-dark dark:text-white focus:bg-white dark:focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-standard outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                placeholder="name@company.com"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2 ml-1">
                                <label className="block text-sm font-bold text-brand-dark dark:text-gray-300">Password</label>
                                <Link href="#" className="text-xs font-semibold text-brand-primary hover:underline">Forgot password?</Link>
                            </div>
                            <input
                                type="password"
                                required
                                className="w-full px-5 py-4 rounded-2xl border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 text-brand-dark dark:text-white focus:bg-white dark:focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-standard outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 rounded-2xl bg-brand-dark dark:bg-brand-primary text-white font-bold transition-standard hover:bg-brand-primary dark:hover:bg-brand-secondary shadow-lg shadow-brand-dark/20 dark:shadow-brand-primary/20 hover:shadow-brand-primary/30 disabled:opacity-50"
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Don't have an account?{' '}
                            <Link href="/register" className="font-bold text-brand-primary hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
