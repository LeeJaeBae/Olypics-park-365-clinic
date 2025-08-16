"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollBottom = scrollHeight - scrollTop - clientHeight;

      // Show scroll to top button when scrolled down more than 200px
      setShowScrollTop(scrollTop > 200);

      // Show scroll to bottom button when there's more content below
      setShowScrollBottom(scrollBottom > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop - Square buttons stacked on the right */}
      <div className="hidden md:block">
        <AnimatePresence>
          {(showScrollTop || showScrollBottom) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-40 flex flex-col"
            >
              <button
                onClick={scrollToTop}
                disabled={!showScrollTop}
                className={`relative w-12 h-12 bg-background border border-primary shadow-lg flex items-center justify-center transition-all overflow-hidden ${
                  showScrollTop
                    ? "hover:bg-gray-50 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
                aria-label="Arrow Upward"
              >
                <span className="material-symbols-outlined text-primary" style={{ fontWeight: 100 }}>
                  arrow_upward
                </span>
              </button>
              <button
                onClick={scrollToBottom}
                disabled={!showScrollBottom}
                className={`relative w-12 h-12 bg-background border border-primary border-t-0 shadow-lg flex items-center justify-center transition-all overflow-hidden ${
                  showScrollBottom
                    ? "hover:bg-gray-50 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
                aria-label="Arrow Downward"
              >
                <span className="material-symbols-outlined text-primary" style={{ fontWeight: 100 }}>
                  arrow_downward
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile - Combined button bar at bottom */}
      <div className="md:hidden">
        <AnimatePresence>
          {(showScrollTop || showScrollBottom) && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-primary shadow-lg"
            >
              <div className="flex">
                <button
                  onClick={scrollToTop}
                  disabled={!showScrollTop}
                  className={`flex-1 py-3 flex items-center justify-center border-r border-primary transition-all ${
                    showScrollTop
                      ? "bg-background hover:bg-gray-50 text-primary"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                  }`}
                  aria-label="Keyboard arrow up"
                >
                  <span className="material-symbols-outlined" style={{ fontWeight: 100 }}>keyboard_arrow_up</span>
                </button>
                <button
                  onClick={scrollToBottom}
                  disabled={!showScrollBottom}
                  className={`flex-1 py-3 flex items-center justify-center transition-all ${
                    showScrollBottom
                      ? "bg-background hover:bg-gray-50 text-primary"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                  }`}
                  aria-label="Keyboard arrow down"
                >
                  <span className="material-symbols-outlined" style={{ fontWeight: 100 }}>keyboard_arrow_down</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
