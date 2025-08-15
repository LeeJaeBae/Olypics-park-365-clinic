"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "원장소개", href: "/doctors" },
    { label: "의원소개", href: "/introduction" },
    { label: "치료사례", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[100px] text-primary bg-background">
      <div className="container mx-auto h-full px-6">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[200px] h-[60px]">
              {/* Logo placeholder - replace with actual logo */}
              <div className="flex items-center h-full">
                <span className="text-2xl font-bold text-primary">
                  올림픽파크<span className="text-primary">365</span>의원
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Thread/Menu Icon */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="메뉴"
            >
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="모바일 메뉴 토글"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[100px] left-0 right-0 bg-background border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
