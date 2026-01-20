## 프로젝트 폴더 구조 (Scalable Structure)

```
src/
├── components/
│   ├── layout/           # 모든 페이지에 공통으로 쓰이는 레이아웃 컴포넌트
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MainLayout.jsx # Header와 Footer를 합친 기본 틀
│   ├── sections/         # 페이지를 구성하는 큰 섹션 단위 컴포넌트
│   │   ├── HeroSection.jsx
│   │   └── ProductCarouselSection.jsx
│   └── ui/               # 재사용 가능한 작은 UI 컴포넌트
│       ├── ProductCard.jsx  # 캐러셀 안의 제품 하나하나
│       └── ArrowButton.jsx  # 캐러셀 좌우 화살표
└── pages/
    └── HomePage.jsx      # 위 섹션들을 조립해서 만드는 메인 페이지
```