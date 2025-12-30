'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="container py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center mb-24"
            >
                <h1 className="text-5xl md:text-7xl font-black text-brand-dark dark:text-white leading-tight tracking-tight mb-8">
                    Defining the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Future of Tech.</span>
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                    At ECOM, we believe that high-performance hardware should be accessible to every professional. We curate only the precision-engineered components that pass our rigorous standards.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {[
                    { title: 'Performance', desc: 'Every component is tested for maximum reliability and speed.', icon: '⚡' },
                    { title: 'Curation', desc: 'We only stock gear that we use and love ourselves.', icon: '💎' },
                    { title: 'Support', desc: 'Expert technical assistance for every build you dream of.', icon: '🛠️' },
                ].map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-10 rounded-[2.5rem] border-brand-primary/10 hover:shadow-xl transition-standard"
                    >
                        <div className="text-4xl mb-6">{item.icon}</div>
                        <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-4">{item.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <section className="relative overflow-hidden rounded-[3rem] bg-brand-dark dark:bg-brand-primary/10 p-12 md:p-20 text-white">
                <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-br from-brand-primary/20 to-transparent"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Founded in 2024, ECOM started as a small community of enthusiasts. Today, we're a leading provider of premium hardware, dedicated to empowering creators and professionals worldwide.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <div className="text-3xl font-black text-brand-primary">10K+</div>
                                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-brand-primary">500+</div>
                                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden glass border-white/10 shadow-2xl">
                        <img
                            src="/images/starter_pack.png"
                            alt="The Workspace"
                            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-standard cursor-pointer"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
