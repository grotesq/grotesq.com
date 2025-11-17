# AGENTS.md

이 문서는 GrotesQ 웹사이트 프로젝트에 대한 상세한 정보를 제공합니다. AI 에이전트가 프로젝트를 이해하고 작업할 수 있도록 프로젝트 구조, 기술 스택, 주요 컴포넌트 등을 설명합니다.

## 프로젝트 개요

**프로젝트명**: grotesq.com  
**버전**: 0.1.0  
**목적**: 그로테스큐(GrotesQ) 회사의 포트폴리오 및 소개 웹사이트  
**설명**: 기획, 디자인부터 앱, 플랫폼 서비스 런칭까지 도와주는 개발 회사의 공식 웹사이트입니다. 회사 소개, 포트폴리오, 프로젝트 문의 기능을 제공합니다.

## 기술 스택

### 핵심 프레임워크 및 라이브러리

- **Next.js**: `^12.1.0` - React 기반 서버사이드 렌더링 프레임워크
- **React**: `17.0.2` - UI 라이브러리
- **TypeScript**: `4.3.5` - 타입 안정성을 위한 정적 타입 언어
- **Styled-components**: `^5.3.0` - CSS-in-JS 스타일링 라이브러리
- **Tailwind CSS**: `^3.0.11` - 유틸리티 우선 CSS 프레임워크
- **Framer Motion**: `^5.6.0` - 애니메이션 라이브러리
- **Swiper**: `^7.4.1` - 터치 슬라이더/캐러셀 라이브러리

### 개발 도구

- **ESLint**: `7.29.0` - 코드 린팅
- **Prettier**: `^2.3.2` - 코드 포맷팅
- **Husky**: `^7.0.4` - Git 훅 관리
- **Babel Plugin Styled-components**: `^2.0.2` - Styled-components 최적화

### 배포 및 인프라

- **Serverless Framework**: `^2.72.0` - 서버리스 배포 도구
- **AWS**: S3, CloudFront, Lambda를 사용한 서버리스 아키텍처
- **@sls-next/serverless-component**: Next.js 서버리스 배포 컴포넌트

### 기타 라이브러리

- **next-seo**: `^4.29.0` - SEO 최적화
- **axios**: `^1.3.4` - HTTP 클라이언트
- **@svgr/webpack**: `^6.1.2` - SVG를 React 컴포넌트로 변환

## 프로젝트 구조

```
grotesq.com/
├── public/                    # 정적 파일
│   ├── assets/               # 이미지, 아이콘 등 리소스
│   │   ├── icon/            # SVG 아이콘
│   │   └── image/           # 이미지 파일
│   │       ├── logo/        # 로고 이미지
│   │       ├── main/        # 메인 페이지 이미지
│   │       └── works/       # 포트폴리오 이미지
│   ├── favicons/            # 파비콘 파일들
│   └── galleryInfos.ts      # 갤러리 정보 데이터
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── layouts/        # 레이아웃 컴포넌트
│   │   │   └── BaseLayout.tsx
│   │   ├── main/           # 메인 페이지 컴포넌트
│   │   │   ├── Introduce.tsx
│   │   │   ├── WorkFlow.tsx
│   │   │   ├── Clients.tsx
│   │   │   └── Portfolio.tsx
│   │   ├── works/          # 포트폴리오 페이지 컴포넌트
│   │   │   ├── Carousel.tsx
│   │   │   └── OurWorks.tsx
│   │   ├── Button.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   └── Header.tsx
│   ├── contexts/            # React Context
│   │   └── NavContext.tsx   # 네비게이션 상태 관리
│   ├── pages/              # Next.js 페이지
│   │   ├── _app.tsx        # 앱 루트 컴포넌트
│   │   ├── _document.tsx   # HTML 문서 커스터마이징
│   │   ├── index.tsx       # 메인 페이지
│   │   ├── works.tsx       # 포트폴리오 페이지
│   │   └── contact.tsx     # 문의 페이지
│   └── styles/             # 스타일 관련 파일
│       ├── global-style.ts # 전역 스타일
│       ├── theme.ts        # 테마 설정
│       ├── styled.d.ts     # Styled-components 타입 정의
│       └── tailwind.css    # Tailwind CSS 진입점
├── next.config.js          # Next.js 설정
├── next-seo.config.js      # SEO 설정
├── tailwind.config.js      # Tailwind CSS 설정
├── tsconfig.json           # TypeScript 설정
├── serverless.main.yaml    # Serverless 배포 설정
└── package.json            # 프로젝트 의존성 및 스크립트
```

## 주요 페이지

### 1. 메인 페이지 (`/`)

**파일**: `src/pages/index.tsx`

메인 랜딩 페이지로 다음 섹션들을 포함합니다:
- **Introduce**: 회사 소개 및 히어로 섹션
- **WorkFlow**: 작업 프로세스 소개
- **Clients**: 고객사 소개
- **Portfolio**: 포트폴리오 갤러리
- **Contact**: 문의 섹션

### 2. 포트폴리오 페이지 (`/works`)

**파일**: `src/pages/works.tsx`

주요 프로젝트를 소개하는 페이지:
- **Carousel**: 프로젝트 슬라이더 캐러셀
- **OurWorks**: 프로젝트 갤러리
- **Contact**: 문의 섹션

### 3. 문의 페이지 (`/contact`)

**파일**: `src/pages/contact.tsx`

프로젝트 문의를 위한 폼 페이지:
- 프로젝트 정보 입력 폼
- API 엔드포인트: `https://api.grotesq.com/contacts` (POST)
- 폼 필드: 이름, 연락처, 이메일, 서비스 유형, 예산 등

## 주요 컴포넌트

### 레이아웃 컴포넌트

#### BaseLayout (`src/components/layouts/BaseLayout.tsx`)

모든 페이지의 기본 레이아웃을 제공합니다:
- Header 컴포넌트
- 페이지 콘텐츠 영역
- Footer 컴포넌트
- 반응형 마진 조정 (데스크톱: 6.25rem, 모바일: 3.75rem)

### 공통 컴포넌트

#### Header (`src/components/Header.tsx`)

네비게이션 헤더:
- 로고 (홈 링크)
- 데스크톱 메뉴: Works, Recruit, 프로젝트 문의하기
- 모바일 햄버거 메뉴 (Framer Motion 애니메이션)
- 현재 페이지 하이라이트
- 고정 헤더 (z-index: 9999)

#### Footer (`src/components/Footer.tsx`)

푸터 정보:
- 회사 정보 및 연락처
- 저작권 정보 (동적 연도)

#### Button (`src/components/Button.tsx`)

재사용 가능한 버튼 컴포넌트:
- 다양한 사이즈 및 스타일 지원
- 라운드 모서리 옵션

#### Contact (`src/components/Contact.tsx`)

문의 섹션 컴포넌트 (메인 및 포트폴리오 페이지에서 사용)

#### Gallery (`src/components/Gallery.tsx`)

포트폴리오 갤러리 컴포넌트:
- `public/galleryInfos.ts`에서 데이터 로드
- 썸네일 이미지 표시

### 메인 페이지 컴포넌트

#### Introduce (`src/components/main/Introduce.tsx`)

히어로 섹션:
- 배경 이미지 (WebP 지원)
- Framer Motion 페이드인 애니메이션
- CTA 버튼 (프로젝트 문의하기)

#### WorkFlow (`src/components/main/WorkFlow.tsx`)

작업 프로세스 소개 섹션

#### Clients (`src/components/main/Clients.tsx`)

고객사 소개 섹션

#### Portfolio (`src/components/main/Portfolio.tsx`)

포트폴리오 미리보기 섹션

### 포트폴리오 페이지 컴포넌트

#### Carousel (`src/components/works/Carousel.tsx`)

프로젝트 슬라이더 캐러셀 (Swiper 사용)

#### OurWorks (`src/components/works/OurWorks.tsx`)

프로젝트 목록 섹션

## 스타일링

### Styled-components

프로젝트의 주요 스타일링 방식입니다:

- **테마 시스템**: `src/styles/theme.ts`에서 중앙 집중식 테마 관리
  - 색상: primary-blue, black, white
  - 미디어 쿼리 헬퍼 함수
  - 공통 스타일 믹스인 (flexCenter, logoTitle, subTitle1 등)
  - 배경 그라데이션 설정

- **전역 스타일**: `src/styles/global-style.ts`
  - CSS Reset 적용
  - 기본 폰트 설정 (Noto Sans KR)
  - 스크롤바 숨김

- **타입 정의**: `src/styles/styled.d.ts`에서 테마 타입 확장

### Tailwind CSS

유틸리티 클래스를 보조적으로 사용:

- **설정**: `tailwind.config.js`
  - 커스텀 색상: primary-blue, primary-blue-light
  - 커스텀 스페이싱
  - 반응형 브레이크포인트 설정

- **사용 예시**: 
  - 레이아웃: `px-5`, `lg:px-40`
  - 반응형: `hidden sm:flex`, `sm:hidden`
  - 호버 효과: `hover:bg-primary-blue-light`

### 반응형 디자인

- **브레이크포인트**:
  - xs: 375px
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

- **모바일 우선 접근**: 기본 모바일 스타일, 미디어 쿼리로 데스크톱 확장

## 상태 관리

### NavContext (`src/contexts/NavContext.tsx`)

모바일 네비게이션 메뉴 상태 관리:
- `isNavOpened`: 메뉴 열림/닫힘 상태
- `toggleNavOpened`: 상태 토글 함수
- 모든 페이지에서 사용 가능하도록 `_app.tsx`에서 Provider로 감쌈

## 애니메이션

### Framer Motion

주요 애니메이션 라이브러리로 사용:

- **Header**: 모바일 메뉴 슬라이드 애니메이션
- **Introduce**: 페이드인 및 스태거 애니메이션
- **기타**: 다양한 컴포넌트에서 페이드인 효과 사용

## SEO 설정

### next-seo

`next-seo.config.js`에서 기본 SEO 설정:
- 사이트 제목 템플릿
- 기본 메타 설명
- Open Graph 설정
- Canonical URL

각 페이지에서 `NextSeo` 컴포넌트로 페이지별 SEO 설정 가능.

## 이미지 최적화

### Next.js Image 컴포넌트

- 자동 이미지 최적화
- 반응형 이미지 로딩
- WebP 포맷 지원 (fallback: JPG)

### SVG 처리

`next.config.js`에서 `@svgr/webpack` 설정:
- SVG를 React 컴포넌트로 변환
- fill 속성 자동 제거
- 컴포넌트로 직접 import 가능

## API 통신

### Axios

문의 폼 제출 시 사용:
- 엔드포인트: `https://api.grotesq.com/contacts`
- POST 요청으로 폼 데이터 전송

## 배포 설정

### Serverless Framework

`serverless.main.yaml` 설정:
- **컴포넌트**: `@sls-next/serverless-component`
- **도메인**: grotesq.com
- **인프라**:
  - S3 버킷: grotesq-web-s3 (ap-northeast-2)
  - CloudFront: distributionId E1Y6LBA6QE0EEZ
  - Lambda 함수: defaultLambda, apiLambda, imageLambda
  - 메모리: 2048MB

### 배포 명령어

```bash
yarn deploy  # 또는 npm run deploy
```

## 개발 환경 설정

### 필수 요구사항

- Node.js (버전은 package.json 참조)
- Yarn 또는 npm

### 설치 및 실행

```bash
# 의존성 설치
yarn install  # 또는 npm install

# 개발 서버 실행
yarn dev  # 또는 npm run dev

# 프로덕션 빌드
yarn build:next  # 또는 npm run build:next

# 프로덕션 서버 실행
yarn start  # 또는 npm start

# 린트 검사
yarn lint  # 또는 npm run lint
```

### 환경 변수

- `BASE_URL`: 기본 URL 설정 (next.config.js에서 사용)
- `PORT`: 프로덕션 서버 포트 (기본값 사용)
- `ANALYZE`: 번들 분석 활성화 (`true`로 설정 시)

## 주요 설정 파일

### next.config.js

- 타겟: `serverless`
- SVG 처리 설정 (@svgr/webpack)
- 절대 경로 모듈 해석
- 번들 분석기 설정

### tsconfig.json

- 타겟: ES5
- JSX: preserve
- Strict 모드 활성화
- 모듈 해석: node

### tailwind.config.js

- 콘텐츠 경로: `./src/pages/**/*.{js,ts,jsx,tsx}`, `./src/components/**/*.{js,ts,jsx,tsx}`
- 커스텀 색상 및 스페이싱 확장

## 데이터 구조

### 갤러리 정보 (`public/galleryInfos.ts`)

포트폴리오 썸네일 정보:
- `src`: 이미지 경로 (StaticImageData)
- `title`: 프로젝트 제목
- `url`: 상세 페이지 링크 (Notion 또는 빈 문자열)

## 주의사항

1. **서버리스 타겟**: Next.js가 서버리스 모드로 설정되어 있음
2. **이미지 경로**: public 폴더의 이미지는 `/assets/...` 경로로 접근
3. **SVG 컴포넌트**: SVG 파일은 React 컴포넌트로 import하여 사용
4. **반응형**: 모든 컴포넌트는 모바일과 데스크톱을 모두 고려하여 설계됨
5. **타입 안정성**: TypeScript를 사용하므로 타입 정의를 준수해야 함

## 향후 개선 사항

- React 18로 업그레이드 고려
- Next.js 13+ App Router 마이그레이션 검토
- API 라우트 추가 (현재 외부 API 사용)
- 테스트 코드 추가
- Storybook 도입 검토

