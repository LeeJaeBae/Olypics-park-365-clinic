"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  MedicalButton,
} from "@/components/ui/AnimationComponents";

export default function DoctorsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Total number of facility images

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <main className="space-y-12 pt-[100px] bg-background text-primary break-keep">
        {/* Hero Section */}
        <AnimatedSection className="container mx-auto pb-16 px-6 md:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Text */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="space-y-6 text-center">
                  <p className="text-xl text-primary font-[600] font-space-grotesk">
                    2025.08.20 OPEN
                  </p>
                  <h1 className="text-4xl md:text-5xl font-medium">
                    올림픽파크
                    <span className="font-space-grotesk">365</span>
                    의원
                  </h1>
                  <p
                    className="text-xl md:text-2xl text-primary font-semibold"
                    style={{
                      fontFamily: "space-grotesk",
                    }}
                  >
                    OLYMPICS PARK 365 CLINIC
                  </p>
                </div>

                <div className="space-y-8 pt-6 break-keep">
                  <p className="text-md leading-relaxed break-keep">
                    환자의 상태에 따라 큰 문제일 경우 정확한 진단에 따라 빠르게
                    판단하는 것이 핵심입니다. 기존의 응급실에서 받지 못하는
                    영역의 확장을 하고 입원과 치료의 여부를 결정합니다. 방치하는
                    동안 큰 휴유증과 더 나아가서 생명을 위협할 수 있습니다.
                  </p>

                  <p className="text-md leading-relaxed break-keep">
                    의료시스템의 저렴한 공급 주는것, 기존의 응급실에서 받지
                    못하는 영역의 확장을 하고자 하는 것이 목표 입니다.
                  </p>
                </div>
              </motion.div>

              {/* Right side - Image placeholder */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="bg-gray-300 h-[50rem] rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Story Section */}
        <AnimatedSection className="py-20 bg-background" useInView={true}>
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-6xl mx-auto border border-primary/20 p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ boxShadow: "0 10px 40px rgba(29, 91, 155, 0.1)" }}
            >
              {/* Title above the content */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  두 원장의 특별한 만남
                </h2>
                <p
                  className="text-xl text-primary/70 font-medium mt-2"
                  style={{ fontFamily: "space-grotesk" }}
                >
                  OUR STORY
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Image */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="bg-gray-300 aspect-[4/5] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Right side - Text */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-md leading-relaxed">
                    박종석 원장은 친구의 권유로 의대에 진학, 이렇게 원장은
                    투석과 이식을 반복하던 어머니를 지켜보며 의사가 되어야겠다고
                    마음을 굳혔습니다.
                  </p>

                  <p className="text-md leading-relaxed">
                    두 사람의 인연은 코로나19 유행이 한창이던 2020년, 안동병원
                    응급실에서 보건소 세입자 동기로 만나 인연이 되어 의사로서의
                    꿈을 키웠습니다. 뒤 늦게 한 논문에서 공저자로 이름이 함께
                    올라 있었던 사실도 알게되며 운명적 만남의 깊이
                    시작되었습니다.
                  </p>

                  <p className="text-md leading-relaxed">
                    00년 사명감을 가지고 꿈임없이 폴리트는 응동 의상·심혈관
                    질환· 중환자를 방낳없이 치료하며 포름을 맛추고 다양한 치료
                    경험을 쌓았습니다.
                  </p>

                  <p className="text-md leading-relaxed">
                    함께 일하고, 공부하며 입상 경험을 쌓은 결과, 전문의
                    자격시험에서 전국 150여 명 중 나란히 2위와 3위를 기록하기도
                    했습니다. 오랜 기간 힘든 경험을 함께하며 서로의 판단력과
                    실행력에 대한 깊은 신뢰를 바탕과 폭부한 입상경험을 바탕으로
                    "환자가 직정 진료과목을 정할 필요 없는 병원", "응급 의료
                    체계의 빈틈을 메울 수 있는 병원" 이라는 목표로
                    "올림픽파크365의원"을 설립하게 되었습니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Doctor Introduction Section */}
        <AnimatedSection className="py-20 bg-background" useInView={true}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  원장 소개
                </h2>
                <p
                  className="text-xl text-primary/70 font-medium"
                  style={{ fontFamily: "space-grotesk" }}
                >
                  INTRODUCTION
                </p>
              </motion.div>

              {/* Doctor Profile Box */}
              <motion.div
                className="border border-primary/20 p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  boxShadow: "0 15px 50px rgba(29, 91, 155, 0.12)",
                }}
              >
                <div className="space-y-8">
                  {/* Quote */}
                  <motion.h3
                    className="text-2xl md:text-3xl text-primary"
                    style={{
                      fontFamily: "optique-display",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    "결정적인 순간과 세심한 관리, 모두 놓치지 않습니다."
                  </motion.h3>

                  <p className="text-md">
                    응급실에서 수많은 긴급 상황을 마주하며, 빠른 판단력과 시술
                    실력을 갖춘 베테랑입니다.
                    <br />셀 수 없는 경험을 기반으로 심장·호흡·복부·근골격까지
                    한 번에 확인하고, 꼭 필요한 치료까지 그 자리에서 시행합니다.
                  </p>

                  <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
                    {/* Left side - Doctor Image and Name */}
                    <motion.div
                      className="flex flex-col"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <motion.div
                        className="bg-gray-300 w-full aspect-[3/4] mb-6 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="text-left">
                        <h3 className="text-2xl font-medium text-primary mb-2">
                          박용석 대표원장
                        </h3>
                        <p className="text-md text-primary/70">
                          응급의학과 전문의
                        </p>
                      </div>
                    </motion.div>

                    {/* Right side - Credentials */}
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <div>
                        <h4 className="font-bold text-md ">프로필</h4>
                        <ul className=" text-primary/80">
                          <li>
                            차의과학대학교 직업응급의료센터 응급의학과 조교수
                          </li>
                          <li>
                            인동병원 직업응급의료센터 임상과장,
                            항공의료팀(닥터헬기) 의사
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className=" text-primary/80">
                          <li>화평병원 지역응급의료센터 과장</li>
                          <li>화평병원 응환자실 실장</li>
                          <li>화평병원 기초진료조정 실장</li>
                          <li>보건정책협의회 회장</li>
                        </ul>
                      </div>

                      <div>
                        <ul className=" text-primary/80">
                          <li>소방 119 상황실 구급지도 의사</li>
                          <li>국립중앙의료원 중앙응급의료상황실 전문의</li>
                        </ul>
                      </div>

                      <div>
                        <ul className=" text-primary/80">
                          <li>대한응급의학회 정회원</li>
                          <li>대한소아응급의학회 평생회원</li>
                          <li>대한구급지도사회 정회원</li>
                          <li>대한신부인과학회 정회원</li>
                          <li>대한스포츠의학회 정회원</li>
                          <li>대한정형통증의학회 평생회원</li>
                          <li>대한척추통증학회 정회원</li>
                          <li>대한도수의학회 정회원</li>
                          <li>대한침구재제의학회 정회원</li>
                          <li>대한심장소생학회 정회원</li>
                          <li>대한근골격초음파학회 정회원</li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2 text-primary/80">
                          <li>대한재활의학회 TPI(통증유발점주사) 인증</li>
                          <li style={{ fontFamily: "space-grotesk" }}>
                            KAOM professional diploma in musculoskeletal
                            ultrasound
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Second Doctor Introduction */}
        <AnimatedSection className="py-20 bg-background" useInView={true}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="border border-primary/20 p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  boxShadow: "0 15px 50px rgba(29, 91, 155, 0.12)",
                }}
              >
                <div className="space-y-8">
                  {/* Quote */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-primary"
                    style={{
                      fontFamily: "optique-display",
                    }}
                  >
                    "타이밍을 놓치지 않는 진료"
                  </motion.h3>

                  <motion.p
                    className="text-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    소아부터 성인까지, 가장 알맞은 시점에 필요한 치료를
                    제공합니다.
                    <br />
                    장기와 근골격을 연속으로 스캔해 원인을 정확히 찾고, 치료와
                    회복 계획까지 한 번에 제시합니다.
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
                    {/* Right side - Credentials */}
                    <motion.div
                      className="order-2 md:order-1"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-md">프로필</h4>
                          <ul className="text-primary/80">
                            <li>국군춘천병원 응급의학과장</li>
                            <li>남양주한양병원 지역응급의료센터 임상과장</li>
                            <li>
                              인동병원 직업응급의료센터 임상과장,
                              항공의료팀(닥터헬기) 의사
                            </li>
                            <li>
                              한양대학교 병원 명지병원 응급의학과 임상조교수
                            </li>
                            <li>화평병원 지역응급의료센터 부센터장</li>
                          </ul>
                        </div>

                        <div>
                          <ul className="text-primary/80">
                            <li>소방 119 상황실 구급지도 의사</li>
                            <li>국립중앙의료원 중앙응급의료상황실 전문의</li>
                          </ul>
                        </div>

                        <div>
                          <ul className="text-primary/80">
                            <li>대한응급의학회 정회원</li>
                            <li>대한소아응급의학회 평생회원</li>
                            <li>대한구급지도사회 정회원</li>
                            <li>대한신부인과학회 정회원</li>
                            <li>대한스포츠의학회 정회원</li>
                            <li>대한정맥동종의학회 평생회원</li>
                            <li>대한척추통증학회 정회원</li>
                            <li>대한도수의학회 정회원</li>
                            <li>대한침구재제의학회 정회원</li>
                            <li>대한심장소생학회 정회원</li>
                            <li>대한근골격초음파학회 정회원</li>
                          </ul>
                        </div>

                        <div>
                          <ul className="text-primary/80">
                            <li>대한재활의학회 TPI(통증유발점주사) 인증</li>
                            <li style={{ fontFamily: "space-grotesk" }}>
                              KAOM professional diploma in musculoskeletal
                              ultrasound
                            </li>
                            <li style={{ fontFamily: "space-grotesk" }}>
                              IARM Cadaver US guided injection workshop 수료
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>

                    {/* Left side - Doctor Image and Name */}
                    <motion.div
                      className="order-1 md:order-2 flex flex-col"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <motion.div
                        className="bg-gray-300 w-full aspect-[3/4] mb-6 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="text-left">
                        <h3 className="text-2xl font-medium text-primary mb-2">
                          이영기 대표원장
                        </h3>
                        <p className="text-md text-primary/70">
                          응급의학과 전문의
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Philosophy Section */}
        <AnimatedSection className="py-20 bg-background" useInView={true}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl text-primary">올림픽365의원의 철학</h2>
                <p
                  className="text-xl text-primary font-medium"
                  style={{ fontFamily: "space-grotesk" }}
                >
                  PHILOSOPHY
                </p>
              </motion.div>

              {/* Philosophy Icons */}
              <motion.div
                className="flex justify-center items-center gap-6 sm:gap-12 md:gap-24 mb-20"
                style={{
                  fontFamily: "optique-display",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-1 border-primary flex items-center justify-center">
                    <span className="text-sm sm:text-base md:text-xl font-bold text-primary">
                      전문성
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-1 border-primary rounded-full flex items-center justify-center">
                    <span className="text-sm sm:text-base md:text-xl font-bold text-primary">
                      신속성
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center">
                    <svg
                      className="absolute inset-0"
                      viewBox="0 0 128 110"
                      fill="none"
                    >
                      <path
                        d="M64 0 L128 110 L0 110 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary"
                      />
                    </svg>
                    <span className="text-sm sm:text-base md:text-xl font-bold text-primary relative">
                      따뜻함
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Philosophy Content */}
              <motion.div
                className="space-y-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h3
                  className="text-xl md:text-2xl font-semibold text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  365일, 당신의 골든 타임을 지킵니다
                </motion.h3>

                <motion.div
                  className="space-y-6 text-md leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <p>
                    지난 15년간 수많은 생명을 살리며 한 가지 고민을 품었습니다.
                    <br />
                    과연 환자분들이 안축하셨을까? 더 좋은 치료 방법은 없을까?"
                    <br />이 따뜻한 의문이 바로 올림픽파크365의원의
                    시작이었습니다.
                  </p>

                  <p>
                    응급 치치만으로 끝나는 진료가 아니라, 한 분 한 분의 환자분을
                    진단부터 치료, 퇴원 후까지 끝까지 책임지는 통합적인 의료
                    서비스를 만들고 자 합니다. 복잡한 문제를 가진 환자분들을
                    위해 응급 치치는 물론, 고압산소치료, 통증 클리닉 같은
                    전문적인 치료까지 직접 제공하며 모든 과정을 함께하겠습니다.
                  </p>

                  <p>
                    올림픽파크365의원은 환자를 향한 원장님의 진심과 경험을
                    바탕으로 365일 언제나 환자분들 곁에서 대학병원급 장비와 전문
                    의료진이 신속하고 정확한 진료를 약속드립니다.
                  </p>

                  <p>
                    이제 올림픽파크365의원이 어려분의 건강한 일상을 지키는
                    든든한 친구가 되어 드릴게요.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Facilities Section */}
        <AnimatedSection className="py-20 bg-background" useInView={true}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                  병원 둘러보기
                </h2>
                <p
                  className="text-xl text-primary font-medium"
                  style={{ fontFamily: "space-grotesk" }}
                >
                  OUR FACILITIES
                </p>
              </motion.div>

              {/* Carousel */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-lg">
                  <motion.div
                    className="flex"
                    animate={{ x: `-${currentSlide * 100}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.6,
                    }}
                  >
                    {/* Slide 1 */}
                    <div className="min-w-full">
                      <div className="bg-gray-300 aspect-[16/9] relative">
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2">
                          올림픽파크365의원
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="min-w-full">
                      <div className="bg-gray-400 aspect-[16/9]"></div>
                    </div>

                    {/* Slide 3 */}
                    <div className="min-w-full">
                      <div className="bg-gray-500 aspect-[16/9]"></div>
                    </div>

                    {/* Slide 4 */}
                    <div className="min-w-full">
                      <div className="bg-gray-600 aspect-[16/9]"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Previous slide"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                  aria-label="Next slide"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {[...Array(totalSlides)].map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? "bg-primary w-8"
                          : "bg-primary/30 w-3"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}
