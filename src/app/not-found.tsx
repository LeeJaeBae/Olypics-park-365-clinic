"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [heartbeat, setHeartbeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background medical grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#1d5b9b 1px, transparent 1px), linear-gradient(90deg, #1d5b9b 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated pulse circles */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1, 2, 2, 1, 1],
          opacity: [0.3, 0.2, 0, 0, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <div className="w-96 h-96 rounded-full border-2 border-primary" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        {/* 404 with heartbeat line */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-8xl md:text-9xl font-bold text-primary font-bebas-neue">
              4
            </span>
            
            {/* Heartbeat monitor */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ transform: "rotate(-90deg)" }}
              >
                <path
                  d={`M 10,50 L 30,50 L 35,30 L 45,70 L 55,20 L 65,80 L 75,40 L 80,50 L 100,50`}
                  fill="none"
                  stroke="#1d5b9b"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="200"
                  strokeDashoffset={-heartbeat}
                />
              </svg>
            </div>

            <span className="text-8xl md:text-9xl font-bold text-primary font-bebas-neue">
              4
            </span>
          </motion.div>
        </div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-optique-display">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 mb-2">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <p className="text-sm text-gray-500">
            걱정하지 마세요. 올림픽파크365의원이 올바른 길로 안내해드리겠습니다.
          </p>
        </motion.div>

        {/* Medical icons decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8 mb-8"
        >
          <div className="w-12 h-12 border-2 border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/50">
              medical_services
            </span>
          </div>
          <div className="w-12 h-12 border-2 border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/50">
              favorite
            </span>
          </div>
          <div className="w-12 h-12 border-2 border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/50">
              local_hospital
            </span>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white font-medium transition-all"
            >
              홈으로 돌아가기
            </motion.button>
          </Link>
          <Link href="/introduction">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary font-medium transition-all hover:bg-primary/5"
            >
              병원 소개 보기
            </motion.button>
          </Link>
        </motion.div>

        {/* Emergency contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-2">응급 상황이신가요?</p>
          <p className="text-lg font-bold text-primary">
            <span className="material-symbols-outlined text-sm align-middle mr-1">
              call
            </span>
            02-123-4567
          </p>
        </motion.div>
      </div>

      {/* Floating medical symbols */}
      <motion.div
        className="absolute top-20 left-20 text-primary/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="material-symbols-outlined text-6xl">
          health_and_safety
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-primary/10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <span className="material-symbols-outlined text-6xl">
          vaccines
        </span>
      </motion.div>

      <motion.div
        className="absolute top-40 right-40 text-primary/10"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <span className="material-symbols-outlined text-5xl">
          stethoscope
        </span>
      </motion.div>
    </div>
  );
}