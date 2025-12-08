# 🌐 Personal Portfolio Website

나만의 포트폴리오 웹사이트입니다.  
프론트엔드 개발자로서의 역량, 프로젝트, 기술 스택을 한눈에 볼 수 있도록 구성했습니다.

---

## ✨ 주요 기능 (Features)

- **스크롤 기반 내비게이션 (Scroll Spy)**
  - 화면 오른쪽에 위치한 점 형태의 내비게이션이 현재 섹션을 자동 감지하여 활성화됩니다.
  
- **부드러운 UI 전환 및 인터랙션**
  - React 기반의 애니메이션과 인터랙션 적용

- **반응형 디자인**
  - 모바일 · 태블릿 · 데스크탑 모두 보기 좋게 최적화

- **섹션 구성**
  - Hero
  - About
  - Skills
  - Projects
  - Contact

---

## 🛠 기술 스택 (Tech Stack)

### Frontend
- **React**
- **JavaScript (ES6+)**
- **CSS / styled-components (or Tailwind, 프로젝트에 맞게 수정)**
- IntersectionObserver 기반 사용자 정의 훅 `useScrollSpy`

### Development Tools
- **Vite / CRA** (프로젝트 구조에 따라 선택)
- **ESLint / Prettier**

---

## 📁 폴더 구조 (예시)

```bash
src/
 ├─ components/
 │   ├─ Hero/
 │   ├─ About/
 │   ├─ Skills/
 │   ├─ Projects/
 │   ├─ Contact/
 │   └─ RightSideNav/
 ├─ hooks/
 │   └─ useScrollSpy.js
 ├─ App.jsx
 └─ main.jsx
