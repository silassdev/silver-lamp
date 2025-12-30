'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by only rendering after mounting
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-gray-800" />;
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="relative w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-standard focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {resolvedTheme === 'dark' ? (
                    <motion.svg
                        key="moon"
                        initial={{ y: 15, opacity: 0, scale: 0.5, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ y: -15, opacity: 0, scale: 0.5, rotate: -45 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="text-brand-primary"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </motion.svg>
                ) : (
                    <motion.svg
                        key="sun"
                        initial={{ y: 15, opacity: 0, scale: 0.5, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ y: -15, opacity: 0, scale: 0.5, rotate: -45 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="text-brand-dark"
                    >
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </motion.svg>
                )}
            </AnimatePresence>
        </button>
    );
}
