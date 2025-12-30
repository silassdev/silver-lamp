'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSearch, FiGithub, FiUser } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Focus search on Cmd/Ctrl+K
  useEffect(() => {
    const onKey = (e) => {
      const isK = (e.key === 'k' || e.key === 'K');
      const mod = e.metaKey || e.ctrlKey;
      if (mod && isK) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    // Navigate to a compare page or profile lookup
    router.push(`/compare/${encodeURIComponent(q)}`);
    setQuery('');
    setMobileOpen(false);
  };

  const navItems = [
    { label: 'Compare', href: '/compare' },
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'Docs', href: '/docs' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-white/70 dark:bg-slate-900/70 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md flex items-center justify-center bg-black/90 dark:bg-white/90 text-white dark:text-black">
                {/* Simple mark; replace with SVG if you have one */}
                <FiGithub className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                  GitBattle
                </span>
                <div className="text-[12px] text-slate-500 dark:text-slate-400 -mt-0.5">
                  Compare. Visualize. Rank.
                </div>
              </div>
            </Link>
          </div>

          {/* Middle: nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            {/* Search (hidden on very small screens) */}
            <form
              onSubmit={handleSearch}
              className="hidden sm:flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 shadow-sm"
              role="search"
              aria-label="Search GitHub username"
            >
              <FiSearch className="w-4 h-4 text-slate-500" />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GitHub username (press ⌘/Ctrl+K)"
                className="w-40 md:w-64 bg-transparent placeholder:text-slate-400 focus:outline-none text-sm text-slate-900 dark:text-slate-100"
                aria-label="Search username"
              />
              <button
                type="submit"
                className="text-sm font-semibold px-3 py-1 rounded-full bg-sky-600 text-white hover:bg-sky-500 transition"
                aria-label="Search"
              >
                Go
              </button>
            </form>

            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/battle/new"
                className="text-sm font-semibold px-3 py-1 rounded-md bg-sky-600 text-white hover:bg-sky-500 transition"
              >
                New Battle
              </Link>

              {/* Sign in — link to your Auth.js signin route */}
              <Link
                href="/api/auth/signin"
                className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200 hover:underline"
              >
                <FiUser className="w-4 h-4" />
                Sign in
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-4 space-y-3">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2 px-4"
                  role="search"
                  aria-label="Search GitHub username (mobile)"
                >
                  <div className="flex items-center gap-2 w-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-2">
                    <FiSearch className="w-4 h-4 text-slate-500" />
                    <input
                      ref={searchRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search username"
                      className="w-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none text-slate-900 dark:text-slate-100"
                    />
                    <button
                      type="submit"
                      className="text-sm font-semibold px-3 py-1 rounded-md bg-sky-600 text-white hover:bg-sky-500 transition"
                    >
                      Go
                    </button>
                  </div>
                </form>

                <div className="px-4">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      >
                        {item.label}
                      </Link>
                    ))}

                    <Link
                      href="/battle/new"
                      onClick={() => setMobileOpen(false)}
                      className="mt-2 inline-flex items-center justify-center px-3 py-2 rounded-md bg-sky-600 text-white text-sm font-semibold hover:bg-sky-500 transition"
                    >
                      New Battle
                    </Link>

                    <Link
                      href="/api/auth/signin"
                      onClick={() => setMobileOpen(false)}
                      className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <FiUser className="w-4 h-4" />
                      Sign in
                    </Link>

                    <div className="mt-2 border-t border-slate-200 dark:border-slate-800 pt-3">
                      <ThemeToggle />
                    </div>
                  </nav>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
