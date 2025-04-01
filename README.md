This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 프로젝트 구조
/portfolio
 ├── public/           # 정적 파일 (이미지, favicon 등)
 ├── src/
 │   ├── components/   # UI 컴포넌트 모음
 │   ├── pages/        # 페이지별 라우팅
 │   │   ├── index.tsx      # 메인 페이지 (About Me)
 │   │   ├── projects.tsx   # 프로젝트 목록
 │   │   ├── contact.tsx    # 연락처
 │   ├── styles/       # 전역 및 컴포넌트 스타일
 │   ├── utils/        # 유틸리티 함수
 │   ├── data/         # 프로젝트 데이터 관리
 ├── .gitignore
 ├── package.json
 ├── tsconfig.json
 ├── next.config.js
 ├── README.md
