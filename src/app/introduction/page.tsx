"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, cardVariants } from "@/components/ui/AnimationComponents";

export default function IntroducePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const facilities = [
    {
      title: "대학병원급 협심(협역검사)",
      description: "정밀 검사 결과 확인이 가능한 대학병원급 검사 시설",
      image: "/images/facility1.jpg",
    },
    {
      title: "프리미엄 수액실",
      description: "편안한과 프라이버시를 보호 갖춘 치료 공간",
      image: "/images/facility2.jpg",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.main 
        key="introduction-page"
        className="min-h-screen container mx-auto bg-background text-primary pt-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
      {/* Hero Section */}
      <AnimatedSection className="relative min-h-[80vh] flex items-center justify-center px-6">
        <motion.div 
          className="max-w-6xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-medium">의료정보/시설</h1>
            <p
              className="text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "space-grotesk" }}
            >
              OLYMPICS PARK 365 CLINIC
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="flex flex-col md:flex-row gap-12 mt-20 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Left Side - Main Text */}
            <motion.div 
              className="space-y-8 flex-1 flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <Image
                  width={500}
                  height={500}
                  src="/images/about1.png"
                  alt="병원 소개"
                  className="w-72 h-auto"
                />

                <div className="space-y-2 text-lg">
                  <p>스스로 진료과목을 정할필요 없이,</p>
                  <p>대형병원 수준의 진료를 가까운 곳에서,</p>
                  <p>복잡한 절차 없이 받을 수 있는 병원입니다.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Details */}
            <motion.div 
              className="space-y-6 flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base leading-relaxed">
                올림픽파크365의원은 가슴이 아파도, 배가 아파도, 허리나 관절이
                아파도, 혹은 원인을 알 수 없는 통증에도 진단부터 치료까지 한번에
                이루어 집니다.
              </p>

              <p className="text-base leading-relaxed">
                첫 단계부터 정확하게 증상의 긴급도와 필요한 처치를 빠르게
                판단해, 위험한 상황이면 곧바로 상급병원으로 연결하고, 그렇지
                않다면 그 자리에서 진단부터 처치까지 한번에 해결합니다.
              </p>

              <p className="text-base leading-relaxed">
                원스톱 검사와 치료, CT, 초음파, 혈액검사, 시술까지 가능한
                대학병원급 장비와 풍부한 임상경험을 바탕으로 빠르고 정확하게
                환자들을 진료합니다.
              </p>

              <p className="text-base leading-relaxed">
                소아·성인 모두 안전하게 열성경련, 복통, 호흡기 질환, 스포츠
                손상까지 연령에 관계없이 신속하게 구분하고 치료합니다.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* Medical Equipment Section */}
      <AnimatedSection className="py-20 bg-background" useInView={true}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-2">
              의료장비
            </h2>
            <p
              className="text-lg md:text-xl text-primary/70"
              style={{ fontFamily: "space-grotesk" }}
            >
              MEDICAL DEVICES
            </p>
          </motion.div>

          {/* Equipment Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" delay={0.15}>
            {/* 하이랜드 초음파 */}
            <motion.div 
              variants={cardVariants}
              className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8 group-hover:bg-gray-50 transition-colors duration-300">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <motion.div 
                    className="w-full h-full bg-gray-200 rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  하이랜드 초음파
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  최고급 초음파 장비로 미세한 병변까지 놓치지 않고 정교하게
                  진단합니다.
                </p>
              </div>
            </motion.div>

            {/* CT */}
            <motion.div 
              variants={cardVariants}
              className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8 group-hover:bg-gray-50 transition-colors duration-300">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <motion.div 
                    className="w-full h-full bg-gray-200 rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-primary">CT</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  최고 사양 장비로 미세한 병변까지 선명하게 찾아냅니다.
                </p>
              </div>
            </motion.div>

            {/* C-arm(투시장비) */}
            <motion.div 
              variants={cardVariants}
              className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8 group-hover:bg-gray-50 transition-colors duration-300">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <motion.div 
                    className="w-full h-full bg-gray-200 rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  C-arm(투시장비)
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  디지털 부위별 선명하고 안전하게 촬영합니다.
                </p>
              </div>
            </motion.div>

            {/* 고압산소치료기기 */}
            <motion.div 
              variants={cardVariants}
              className="group border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8 group-hover:bg-gray-50 transition-colors duration-300">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <motion.div 
                    className="w-full h-full bg-gray-200 rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  고압산소치료기기
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  3기압의 고농도 산소로 빠른 회복과 재생이 가능합니다
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Medical Facilities Section */}
      <AnimatedSection className="py-20 bg-background" useInView={true}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-2">
              의료시설
            </h2>
            <p
              className="text-lg md:text-xl text-primary/70"
              style={{ fontFamily: "space-grotesk" }}
            >
              MEDICAL FACILITIES
            </p>
          </motion.div>

          {/* Facilities List */}
          <div className="space-y-12">
            {facilities.map((facility, index) => (
              <motion.div 
                key={index} 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div 
                  className="bg-gray-200 aspect-[16/9] rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span>의료시설 이미지</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="text-center space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-primary/70">
                    {facility.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      </motion.main>
    </AnimatePresence>
  );
}
