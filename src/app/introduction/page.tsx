"use client";

import Image from "next/image";
export default function IntroducePage() {
  const facilities = [
    {
      title: "대학병원급 협심(협역검사)",
      description: "정밀 검사 결과 확인이 가능한 대학병원급 검사 시설",
      image: "/images/facility1.jpg"
    },
    {
      title: "프리미엄 수액실",
      description: "편안한과 프라이버시를 보호 갖춘 치료 공간",
      image: "/images/facility2.jpg"
    }
  ];

  return (
    <main className="min-h-screen container mx-auto bg-background text-primary pt-[100px]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium">의료정보/시설</h1>
            <p
              className="text-xl md:text-2xl font-semibold"
              style={{ fontFamily: "space-grotesk" }}
            >
              OLYMPICS PARK 365 CLINIC
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 mt-20 text-left">
            {/* Left Side - Main Text */}
            <div className="space-y-8 flex-1 flex flex-col">
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
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6 flex-1">
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
            </div>
          </div>
        </div>
      </section>

      {/* Medical Equipment Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-2">
              의료장비
            </h2>
            <p
              className="text-lg md:text-xl text-primary/70"
              style={{ fontFamily: "space-grotesk" }}
            >
              MEDICAL DEVICES
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 하이랜드 초음파 */}
            <div className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <div className="w-full h-full bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  하이랜드 초음파
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  최고급 초음파 장비로 미세한 병변까지 놓치지 않고
                  정교하게 진단합니다.
                </p>
              </div>
            </div>

            {/* CT */}
            <div className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <div className="w-full h-full bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-primary">CT</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  최고 사양 장비로 미세한 병변까지 선명하게 찾아냅니다.
                </p>
              </div>
            </div>

            {/* 엑스레이 */}
            <div className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <div className="w-full h-full bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-primary">엑스레이</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  디지털 부위별 선명하고 안전하게 촬영합니다.
                </p>
              </div>
            </div>

            {/* C-arm(투시장비) */}
            <div className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <div className="w-full h-full bg-gray-200 rounded"></div>
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
            </div>

            {/* 고압산소치료기기 */}
            <div className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                <div className="text-gray-400">
                  {/* Equipment Image Placeholder */}
                  <div className="w-full h-full bg-gray-200 rounded"></div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Medical Facilities Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-2">
              의료시설
            </h2>
            <p
              className="text-lg md:text-xl text-primary/70"
              style={{ fontFamily: "space-grotesk" }}
            >
              MEDICAL FACILITIES
            </p>
          </div>

          {/* Facilities List */}
          <div className="space-y-12">
            {facilities.map((facility, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-gray-200 aspect-[16/9] rounded-lg">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span>의료시설 이미지</span>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-primary">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-primary/70">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department of Treatment Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-2">
              진료과목
            </h2>
            <p
              className="text-lg md:text-xl text-primary/70 mb-8"
              style={{ fontFamily: "space-grotesk" }}
            >
              DEPARTMENT OF TREATMENT
            </p>
            
            <div className="text-center space-y-2 mb-12">
              <p className="text-lg text-primary">
                내과 · 정형외과 · 소아청소년과
              </p>
              <p className="text-lg text-primary">
                이비인후과 · 경증응급진료 · 혈액검사
              </p>
            </div>
          </div>

          {/* Treatment List */}
          <div className="border border-primary/20 rounded-lg divide-y divide-primary/10">
            {/* 내과 */}
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-primary mb-2">내과</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  순환기, 호흡기, 호흡기 등 신체 내부 장반의 질환을<br />
                  종합적으로 진단하고 맞춤 치료를 제공합니다.
                </p>
              </div>
            </div>

            {/* 정형외과 */}
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-primary mb-2">정형외과</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  뼈와 관절, 근육 손상까지 외부적 질환까지<br />
                  정확한 진단과 체계적인 치료를 진행합니다
                </p>
              </div>
            </div>

            {/* 소아청소년과 */}
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-primary mb-2">소아청소년과</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  별련 원, 게, 세균 감염 및 약상 설현을<br />
                  정보하게 진단하고 효과적인 치료 계획을 세움니다.
                </p>
              </div>
            </div>

            {/* 경증응급진료 */}
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-primary mb-2">경증응급진료</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  감작스러운 아동, 환상, 통증 등 모든 응급 상황에 대해<br />
                  빠를 또 신속하게 신속하고 안전한 응급 진료를 제공합니다.
                </p>
              </div>
            </div>

            {/* 혈액검사 */}
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-primary mb-2">혈액검사</h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  가속적 혈안통과 인정혈한 업온 경과를<br />
                  정음에 세로 확인을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
