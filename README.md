# 올림픽파크365의원 (OLYMPIC PARK 365 CLINIC)

> 🏥 재활 특화 의료 서비스 플랫폼

## 프로젝트 소개

올림픽파크365의원은 혁신적인 재활의학과 전문 의료기관으로, 최첨단 재활 장비와 전문 의료진을 통해 환자 맞춤형 치료 서비스를 제공합니다. 본 플랫폼은 환자들이 보다 쉽게 의료 서비스에 접근하고, 효율적인 재활 치료를 받을 수 있도록 설계되었습니다.

## 주요 특징

### 🎯 전문 재활의학 서비스
- **개인 맞춤형 재활 치료 프로그램**
- **최신 재활 장비를 활용한 과학적 치료**
- **전문 의료진의 체계적인 치료 계획 수립**

## 기술 스택
- **Frontend**: Next.js 15.4.6, React 19.1.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **Development**: Turbopack (빠른 개발 환경)

## 프로젝트 구조

```
hospital-369/
├── app/              # Next.js App Router
├── components/       # React 컴포넌트
├── public/          # 정적 파일
│   ├── 2x/         # 2배 해상도 이미지
│   └── 4x/         # 4배 해상도 이미지
├── design/          # 디자인 파일
│   ├── 1.webp      # 메인 페이지 디자인
│   └── 2.webp      # 의원 소개 페이지 디자인
└── styles/          # 스타일 파일
```

## 시작하기

### 필요 사항

- Node.js 18.0 이상
- pnpm 또는 npm

### 설치

```bash
# 저장소 클론
git clone [repository-url]
cd hospital-369

# 의존성 설치
pnpm install
# 또는
npm install
```

### 개발 서버 실행

```bash
pnpm dev
# 또는
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드

```bash
pnpm build
pnpm start
# 또는
npm run build
npm start
```

## 주요 기능

### 🏠 메인 페이지
- 의원 소개 및 핵심 의료 서비스 안내
- 최신 재활 장비 소개
- 진료 예약 시스템 연동

### 👥 의료진 소개
- 전문의 상세 프로필
- 진료 철학 및 특화 분야
- 주요 경력 및 자격 사항

### 🏥 시설 안내
- 최첨단 재활 장비 상세 정보
- 시설 갤러리 및 가상 투어
- 접근성 및 편의시설 안내

## 접근성

본 플랫폼은 웹 접근성 표준을 준수하여 모든 사용자가 편리하게 이용할 수 있도록 설계되었습니다.

- WCAG 2.1 Level AA 준수
- 키보드 내비게이션 지원
- 스크린 리더 호환
- 고대비 모드 지원

## 라이선스

Copyright © 2025 올림픽파크365의원. All rights reserved.
