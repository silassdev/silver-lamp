'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-12 md:py-20">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-brand-secondary/10 to-transparent blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest"
                    >
                        Premium Tech Collection
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-black text-brand-dark dark:text-white leading-[1.1] tracking-tight"
                    >
                        Precision <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Engineering.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed"
                    >
                        Elevate your professional and creative workflow with our curated selection of high-performance components and peripherals.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a href="/products" className="px-8 py-4 rounded-full bg-brand-primary text-white font-bold transition-standard shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-1">
                            Explore Setup
                        </a>
                        <a href="/about" className="px-8 py-4 rounded-full glass border-gray-200 dark:border-gray-800 text-brand-dark dark:text-white font-bold transition-standard hover:bg-white/10">
                            Our Philosophy
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-20 blur-2xl rounded-[3rem]"></div>
                    <div className="relative glass p-4 rounded-[2.5rem] shadow-2xl animate-float">
                        <div className="overflow-hidden rounded-[2rem] bg-brand-dark dark:bg-gray-950 aspect-square md:aspect-video flex items-center justify-center">
                            <img
                                src="/images/starter_pack.png"
                                alt="Premium Tech Setup"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 dark:from-gray-950/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-white font-bold text-2xl uppercase tracking-tight">Elite Series V2</div>
                                <div className="text-brand-primary font-mono text-sm mt-1">AVAILABLE NOW / NX-2024</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Info Card */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -right-8 top-1/4 glass p-4 rounded-2xl shadow-xl hidden xl:block border-brand-primary/10"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" /></svg>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">In Stock</div>
                                <div className="text-sm font-black text-brand-dark dark:text-white font-mono uppercase">24H DELIVERY</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
