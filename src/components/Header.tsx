"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/placement-assistance", label: "Placement Assistance" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/career-guide", label: "Career Guide" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Right</span>
          <span className="text-2xl font-bold text-secondary">Roads</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/student-registration"
            className="ml-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Register Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-gray-700 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/student-registration"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Register Now
          </Link>
        </nav>
      )}
    </header>
  );
}
