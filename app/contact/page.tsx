"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiSend, FiMessageSquare, FiUser, FiArrowLeft, FiInfo } from "react-icons/fi";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Message sent successfully! We'll get back to you soon.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error(data.error || "Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDuration: '8s', animationDelay: '1s' }} />
            </div>

            <div className="container py-20">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-white/20 backdrop-blur-sm"
                        >
                            <FiMail className="text-brand-primary" />
                            <span className="text-xs font-bold uppercase tracking-wider">Get in Touch</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
                        >
                            How can we{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                Help You?
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        >
                            Have a question about rankings, feedback on visualizations, or just want to say hi? We'd love to hear from you.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div className="glass rounded-3xl p-8 border border-white/20 backdrop-blur-xl shadow-xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <FiInfo className="text-brand-primary" />
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <FiMail className="text-blue-500 text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-gray-400 uppercase tracking-wider">Email Us</p>
                                            <p className="text-gray-700 dark:text-gray-200 font-medium">support@gitbattle.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
                                            <FiMessageSquare className="text-purple-500 text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-gray-400 uppercase tracking-wider">Socials</p>
                                            <p className="text-gray-700 dark:text-gray-200 font-medium">@gitbattle_app</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors font-medium group">
                                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                                Back to Homepage
                            </Link>
                        </motion.div>

                        {/* Form Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-3"
                        >
                            <div className="glass rounded-3xl p-8 md:p-10 border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2 ml-1">
                                                <FiUser size={14} /> Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2 ml-1">
                                                <FiMail size={14} /> Email
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2 ml-1">
                                            <FiMessageSquare size={14} /> Subject
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How do rankings work?"
                                            className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2 ml-1">
                                            <FiMessageSquare size={14} /> Message
                                        </label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tell us what's on your mind..."
                                            className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-brand-primary outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={loading}
                                        type="submit"
                                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        {loading ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                                            />
                                        ) : (
                                            <>
                                                Send Message
                                                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
