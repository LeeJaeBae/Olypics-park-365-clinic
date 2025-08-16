"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();
  const isHeroPage = pathname === "/" || pathname === "/hero";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // navItems는 이제 @/constants/navigation에서 가져옵니다
  const visibleNavItems = navItems.filter(item => item.href !== "/");

  const headerClasses = isHeroPage && !isScrolled
    ? "fixed top-0 left-0 right-0 z-50 h-[100px] text-white bg-transparent transition-all duration-300"
    : "fixed top-0 left-0 right-0 z-50 h-[100px] text-primary bg-background transition-all duration-300";

  const textColorClass = isHeroPage && !isScrolled ? "text-white" : "text-primary";
  const hoverColorClass = isHeroPage && !isScrolled ? "hover:text-white/80" : "hover:text-primary/80";
  const buttonHoverClass = isHeroPage && !isScrolled ? "hover:bg-white/10" : "hover:bg-gray-100";

  return (
    <motion.header 
      className={headerClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto h-full px-6">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <motion.div 
              className="relative w-[200px] h-[60px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/2x/logo@2x.png"
                alt="올림픽파크365의원"
                width={200}
                height={60}
                className={`object-contain ${isHeroPage && !isScrolled ? 'brightness-0 invert' : ''}`}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {visibleNavItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="relative group"
                >
                  <motion.span
                    className={`${textColorClass} ${hoverColorClass} font-medium transition-colors duration-200`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 ${isHeroPage && !isScrolled ? 'bg-white' : 'bg-primary'}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.subItems && hoveredItem === item.href && (
                    <motion.div
                      className={`absolute top-full left-0 mt-1 w-max ${
                        isHeroPage && !isScrolled 
                          ? 'bg-black/90 backdrop-blur-md' 
                          : 'bg-background'
                      } overflow-hidden`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block py-2 ${textColorClass} ${hoverColorClass} ${
                            isHeroPage && !isScrolled 
                              ? 'hover:bg-white/10' 
                              : 'hover:bg-gray-50'
                          } transition-colors duration-200`}
                        >
                          <span className="text-sm font-medium">{subItem.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Thread/Menu Icon */}
            <motion.button
              className={`p-2 ${buttonHoverClass} rounded-lg transition-colors duration-200`}
              aria-label="메뉴"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className={`w-6 h-6 ${textColorClass}`}
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
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 ${buttonHoverClass} rounded-lg transition-colors duration-200`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="모바일 메뉴 토글"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className={`w-6 h-6 ${textColorClass}`}
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
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={`lg:hidden absolute top-[100px] left-0 right-0 ${isHeroPage && !isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-background border-t border-gray-200'} shadow-lg`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container mx-auto px-6 py-4">
              {visibleNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div>
                    <button
                      className={`w-full flex items-center justify-between py-3 ${textColorClass} ${hoverColorClass} font-medium transition-colors duration-200`}
                      onClick={() => {
                        if (item.subItems) {
                          setMobileExpandedItem(mobileExpandedItem === item.href ? null : item.href);
                        } else {
                          window.location.href = item.href;
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      <span>{item.label}</span>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.subItems && mobileExpandedItem === item.href && (
                        <motion.div
                          className="pl-4"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block py-2 pl-4 ${textColorClass} ${hoverColorClass} text-sm transition-colors duration-200`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
