"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const sections = [
    {
      id: "hero",
      title: "올림픽파크365의원",
      subtitle: "365일, 당신의 골든 타임을 지킵니다",
      description: "응급의학과 전문의가 직접 진료하는 믿을 수 있는 병원",
      bgImage:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070",
      accent: "#4A90E2",
      cta: { text: "진료 예약하기", link: "/reservation" },
      sideText: {
        left: {
          title: "24시간 응급진료",
          desc: "365일 언제나 열려있는\n믿을 수 있는 의료 서비스",
        },
        right: {
          title: "대학병원급 의료진",
          desc: "15년 경력의 응급의학과 전문의\n직접 진료하는 전문 병원",
        },
      },
    },
    {
      id: "emergency",
      title: "24시간 응급진료",
      subtitle: "긴급한 순간, 언제나 열려있습니다",
      description: "대학병원급 장비와 전문 의료진이 365일 24시간 대기",
      bgImage:
        "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=2071",
      accent: "#E94B3C",
      cta: { text: "응급실 안내", link: "/emergency" },
      sideText: {
        left: {
          title: "골든타임 사수",
          desc: "신속한 응급처치로\n생명을 구합니다",
        },
        right: {
          title: "365일 24시간",
          desc: "언제나 열려있는\n응급의료 서비스",
        },
      },
    },
    {
      id: "equipment",
      title: "대학병원급 의료장비",
      subtitle: "정확한 진단, 신속한 치료",
      description: "CT, 초음파, X-ray 등 최신 의료장비 완비",
      bgImage:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
      accent: "#6ECF70",
      cta: { text: "시설 둘러보기", link: "/facilities" },
      sideText: {
        left: {
          title: "최신 의료장비",
          desc: "CT, MRI, 초음파\n정밀 진단 장비 완비",
        },
        right: {
          title: "원스톱 진료",
          desc: "검사부터 치료까지\n한 곳에서 해결",
        },
      },
    },
    {
      id: "doctors",
      title: "응급의학과 전문의",
      subtitle: "15년 경력의 베테랑 의료진",
      description: "수많은 생명을 살린 경험과 전문성",
      bgImage:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070",
      accent: "#F5A623",
      cta: { text: "의료진 소개", link: "/doctors" },
      sideText: {
        left: {
          title: "전문의 직접 진료",
          desc: "응급의학과 전문의가\n직접 진단하고 치료",
        },
        right: {
          title: "15년 임상경험",
          desc: "수많은 생명을 살린\n베테랑 의료진",
        },
      },
    },
    {
      id: "contact",
      title: "오시는 길",
      subtitle: "올림픽공원 인근 접근성 최고",
      description: "지하철 5호선 올림픽공원역 도보 5분",
      bgImage:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128",
      accent: "#BD10E0",
      cta: { text: "위치 확인하기", link: "/contact" },
      sideText: {
        left: {
          title: "교통 편의",
          desc: "지하철 5호선\n올림픽공원역 도보 5분",
        },
        right: {
          title: "편리한 주차",
          desc: "넓은 주차 공간\n발렛파킹 서비스",
        },
      },
    },
  ];

  // Auto slide effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
      setProgress(0);
    }, 6000); // Change slide every 6 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [sections.length]);

  // Progress bar animation
  useEffect(() => {
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / 60; // 6 seconds = 60 intervals of 100ms
      });
    }, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentSection]);

  const goToSection = (index: number) => {
    setCurrentSection(index);
    setProgress(0);
  };

  const currentBg = sections[currentSection];

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Images with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${currentBg.bgImage}')`,
            }}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, ${currentBg.accent}33 100%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Cross Lines Animation - Dynamic with Responsive Max */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <AnimatePresence mode="wait">
          {/* Vertical Line */}
          <motion.div
            key={`vertical-${currentSection}`}
            className={`absolute w-[1px] bg-white/80 ${
              currentSection % 2 === 0 
                ? "h-[80%] md:h-[40%]"  // Even slides: 80% mobile, 40% desktop
                : "h-[60%] md:h-[30%]"  // Odd slides: 60% mobile, 30% desktop
            }`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Horizontal Line */}
          <motion.div
            key={`horizontal-${currentSection}`}
            className={`absolute h-[1px] bg-white/80 ${
              currentSection % 2 === 0 
                ? "w-[80%] md:w-[40%]"  // Even slides: 80% mobile, 40% desktop
                : "w-[60%] md:w-[30%]"  // Odd slides: 60% mobile, 30% desktop
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Side Text Content - Main Focus */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <AnimatePresence mode="wait">
          {/* Desktop: Left and Right Text with Better Spacing */}
          <div
            className="hidden md:flex h-full items-center justify-between px-12 lg:px-20 xl:px-32"
            key={`desktop-${currentSection}`}
          >
            <motion.div
              className="text-white text-left max-w-md"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                {currentBg.sideText.left.title}
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl opacity-90 whitespace-pre-line leading-relaxed">
                {currentBg.sideText.left.desc}
              </p>
            </motion.div>

            <motion.div
              className="text-white text-right max-w-md"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                {currentBg.sideText.right.title}
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl opacity-90 whitespace-pre-line leading-relaxed">
                {currentBg.sideText.right.desc}
              </p>
            </motion.div>
          </div>

          {/* Mobile: Top and Bottom Text - Larger */}
          <div
            className="flex md:hidden flex-col h-full justify-between py-24"
            key={`mobile-${currentSection}`}
          >
            <motion.div
              className="text-white text-center px-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">
                {currentBg.sideText.left.title}
              </h3>
              <p className="text-base opacity-90 whitespace-pre-line">
                {currentBg.sideText.left.desc}
              </p>
            </motion.div>

            <motion.div
              className="text-white text-center px-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">
                {currentBg.sideText.right.title}
              </h3>
              <p className="text-base opacity-90 whitespace-pre-line">
                {currentBg.sideText.right.desc}
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots with Labels */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-6">
        {sections.map((section, index) => (
          <motion.button
            key={index}
            onClick={() => goToSection(index)}
            className="group flex items-center justify-end gap-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: 10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              {section.title}
            </motion.span>
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              style={{
                backgroundColor:
                  currentSection === index ? currentBg.accent : undefined,
              }}
              whileHover={{ scale: 1.5 }}
            />
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div
          className="h-full"
          style={{
            backgroundColor: currentBg.accent,
            width: `${progress}%`,
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>


      {/* Section Counter */}
      <div className="fixed bottom-8 right-8 z-50 text-white">
        <motion.div
          className="text-6xl font-light opacity-30"
          key={currentSection}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {String(currentSection + 1).padStart(2, "0")}
          <span className="text-2xl">
            /{String(sections.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

    </div>
  );
}
