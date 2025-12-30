import './globals.css';
import React from 'react';
import Header from './components/Header';
import Link from 'next/link';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata = {
    title: 'ECOM - Premium Tech & Components',
    description: 'Modern store for high-performance PCs, peripherals and accessories',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen font-sans antialiased text-brand-dark dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
                <ThemeProvider>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-1">{children}</main>
                        <footer className="mt-20 py-12 glass border-t-0">
                            <div className="container">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-100 dark:border-gray-800 pb-12">
                                    <div className="space-y-4">
                                        <div className="font-black text-2xl tracking-tighter">ECOM<span className="text-brand-primary">.</span></div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                                            Providing precision-engineered hardware for the modern professional. Built for performance, designed for style.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-brand-primary">Platform</h4>
                                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                            <li><Link href="/products" className="hover:text-brand-dark dark:hover:text-white transition-standard">Store</Link></li>
                                            <li><Link href="/about" className="hover:text-brand-dark dark:hover:text-white transition-standard">Our Story</Link></li>
                                            <li><Link href="/blog" className="hover:text-brand-dark dark:hover:text-white transition-standard">Tech Insights</Link></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-brand-primary">Connect</h4>
                                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                            <li><Link href="#" className="hover:text-brand-dark dark:hover:text-white transition-standard">Twitter</Link></li>
                                            <li><Link href="#" className="hover:text-brand-dark dark:hover:text-white transition-standard">Instagram</Link></li>
                                            <li><Link href="#" className="hover:text-brand-dark dark:hover:text-white transition-standard">GitHub</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
                                    <div className="text-xs text-gray-400">© {new Date().getFullYear()} ECOM DIGITAL. ALL RIGHTS RESERVED.</div>
                                    <div className="flex gap-6 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                        <Link href="#" className="hover:text-brand-dark dark:hover:text-white">Privacy</Link>
                                        <Link href="#" className="hover:text-brand-dark dark:hover:text-white">Terms</Link>
                                        <Link href="#" className="hover:text-brand-dark dark:hover:text-white">Cookies</Link>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}