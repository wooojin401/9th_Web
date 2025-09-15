# CSS

### 키워드 리스트

> CSS, box-sizing, border/outline, relative/absolute, fixed/sticky, 정렬, 반응형, transform, transition, animation, BEM

---

## 목차

* CSS 개념
* box-sizing
* border / outline
* position (relative / absolute / fixed / sticky)
* 정렬
* 반응형 background
* transform
* transition
* animation
* BEM (추가 예정)

---

## 1. CSS란?

### 개념

CSS(Cascading Style Sheets)는 웹 문서의 **스타일을 관리**하는 언어입니다.
HTML이 구조(뼈대)를 담당한다면, CSS는 텍스트 색상, 크기, 배경, 레이아웃 등 **시각적 표현**을 담당합니다.

브라우저는 각 태그에 \*\*기본 스타일(User Agent Style)\*\*을 자동으로 적용합니다. 예: `<h1>`은 기본적으로 크고 굵게 표시됩니다.
사용자가 브라우저에서 직접 스타일을 변경하면 개발자 코드보다 우선 적용될 수도 있습니다.

### 기본 문법

1. **선택자 기반 스타일링**: 태그, 클래스, 아이디 등 선택자 사용
2. **인라인 스타일링**: `<div style="...">` 형태로 직접 지정

### 선택자 우선순위와 CSS 적용 원리

#### 선택자 우선순위 (간단 정리)

1. 태그 선택자 (`h1`, `p` 등)
2. 클래스 선택자 (`.class`)
3. 아이디 선택자 (`#id`)
4. 인라인 스타일 (`style="..."`)
5. `!important`

동일 우선순위라면 **나중에 작성된 규칙**이 적용됩니다.

#### CSS-Origin

* **브라우저 기본 스타일(User Agent Style)**: 자동 적용
* **초기화 스타일(Reset / Normalize)**: 브라우저별 차이 해소
* **개발자 코드(Code Style)**: 직접 작성한 스타일
* **사용자 스타일(User Style)**: 사용자가 브라우저에 지정한 스타일

---

## 2. box-sizing

`box-sizing`은 요소의 크기 계산 기준을 정합니다.

* `content-box` (기본): `width`/`height`에 padding, border가 더해짐
* `border-box`: 지정한 크기 안에 padding과 border 포함 → 레이아웃 예측성 증가

실무에서는 대부분 전역으로 `box-sizing: border-box;`를 사용합니다.

```css
/* 권장 전역 설정 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

## 3. border / outline

두 속성은 테두리 용도지만 동작과 영향이 다릅니다.

* **border**

  * 요소의 실제 크기에 포함 → 레이아웃에 영향
  * 방향별(상/하/좌/우) 스타일 지정 가능
  * 레이아웃 배치에 직접 영향

* **outline**

  * 박스 바깥쪽에 표시 → 크기나 레이아웃에 영향 없음
  * 방향별 지정 불가(전체 박스에만 적용)
  * 주로 포커스 표시나 접근성 강조에 사용

정리: `border`는 레이아웃 영향, `outline`은 시각적 강조(레이아웃 비파괴).

---

## 4. position (relative / absolute / fixed / sticky)

* **relative**

  * 문서 흐름 유지, 원래 위치 기준으로 이동
  * 공간 유지 → 다른 요소 레이아웃 영향 없음
  * `absolute` 자식의 기준으로 자주 사용

* **absolute**

  * 문서 흐름에서 제외, 공간 차지하지 않음
  * 가장 가까운 position 지정(예: relative) 조상 기준으로 배치
  * 기준 조상 없으면 `<body>` 기준

* **fixed**

  * 뷰포트(viewport) 기준 고정, 스크롤해도 위치 유지
  * 네비게이션, 플로팅 버튼 등에 적합
  * 문서 흐름 제외

* **sticky**

  * 기본엔 relative처럼 있다가, 특정 스크롤 위치에서 fixed처럼 고정
  * 원래의 공간은 유지, 부모 컨테이너 범위를 벗어나지 않음

---

## 5. 정렬

### 1) text-align

* 인라인 콘텐츠(텍스트, inline/inline-block 요소) 정렬: `left`, `center`, `right`, `justify`

### 2) margin

* `margin: 0 auto` → 폭이 지정된 블록 요소 가로 중앙 정렬
* 상하 마진 병합(margin collapse) 유의

### 3) flex

* 1차원 레이아웃(행/열)
* 부모: `display: flex`
* 주요 속성: `justify-content`, `align-items`, `flex-direction`, `gap`
* 예: 수평·수직 중앙 정렬에 매우 편리

```css
.container {
  display: flex;
  justify-content: center; /* 수평 */
  align-items: center;     /* 수직 */
}
```

### 4) transform: translate

* 문서 흐름에 영향 없이 이동
* 중앙 정렬에서 자주 사용: `left: 50%; top: 50%; transform: translate(-50%, -50%);`

### 5) grid

* 2차원 레이아웃(행 + 열)
* 부모: `display: grid`
* 전체/아이템 정렬용 `place-items`, `place-content`, `justify-items` 등 제공

```css
.grid-center {
  display: grid;
  place-items: center; /* 수평+수직 중앙 정렬 */
}
```

---

## 6. 반응형 background

### 주요 속성 정리

* `background-image`: URL, 그라디언트 등. 여러 이미지 레이어 가능
* `background-repeat`: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`, `space`, `round`
* `background-position`: 키워드/픽셀/퍼센트 (`center`, `50% 50%`)
* `background-size`: `auto`, `cover`, `contain`, 직접값(예: `100% 50%`)
* 축약형 `background`: 색상, 이미지, 반복, 위치/크기, 첨부 방식까지 한 줄로 설정 가능

### 반응형 활용 예

* 미디어 쿼리로 화면별 배경 이미지/크기 변경

```css
.hero {
  background: #f8f9fa url('hero-desktop.jpg') no-repeat center/cover;
}

@media (max-width: 768px) {
  .hero {
    background: #ececec url('hero-mobile.jpg') no-repeat center/contain;
  }
}
```

---

## 7. transform

요소를 시각적으로 변형(이동·확대·회전·기울임 등)합니다. GPU 가속 적용되어 애니메이션 성능에 유리합니다.

* `translate(x, y)` / `translateX()` / `translateY()` / `translate3d()`
* `scale(x, y)` / `scaleX()` / `scaleY()` / `scale3d()`
* `rotate(angle)` / `rotateX()` / `rotateY()` / `rotate3d()`
* `skew(x, y)` / `skewX()` / `skewY()`
* `matrix(a, b, c, d, e, f)` — 복합 변환(정밀 제어)

활용 예:

* 중앙 정렬, 마우스 인터랙션, 카드 뒤집기, 스케일 호버 등

---

## 8. transition

상태 변화(hover, focus 등)에 대해 부드러운 변화 효과를 제공.

* `transition-property`: 어떤 속성에 적용할지
* `transition-duration`: 지속시간(예: `0.3s`)
* `transition-timing-function`: 속도 함수(`ease`, `linear`, `ease-in`, `cubic-bezier(...)`)
* `transition-delay`: 지연시간
* 축약형: `transition: [property] [duration] [timing-function] [delay];`

예시:

```css
.button {
  transition: transform 0.2s ease-in-out, background-color 0.2s;
}
.button:hover {
  transform: scale(1.08) rotate(-2deg);
  background-color: #ffe066;
}
```

**팁:** transform과 opacity는 레이아웃에 영향을 적게 주므로 애니메이션에 적합합니다.

---

## 9. animation

키프레임 기반 애니메이션을 정의해 복잡한 반복 동작을 만들 수 있습니다.

* `animation-name`
* `animation-duration`
* `animation-delay`
* `animation-timing-function`
* `animation-iteration-count` (`infinite` 가능)
* `animation-direction` (`normal`, `reverse`, `alternate`, ...)
* `animation-fill-mode` (`forwards`, `backwards`, `both`)
* `animation-play-state` (`running`, `paused`)
* 축약형: `animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

예시:

```css
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-40px); }
  100% { transform: translateY(0); }
}

.ball {
  animation: bounce 1s ease-in-out 0s infinite alternate;
}
```

---

## 10. (간단) BEM

* BEM(Block\_\_Element--Modifier) 명명 규칙은 클래스의 의도를 명확히 하고 유지보수를 쉽게 합니다.

  * Block: `card`
  * Element: `card__title`
  * Modifier: `card--large` 또는 `card__title--highlight`
* 네이밍 컨벤션으로 CSS 스코프와 재사용성을 개선할 수 있습니다.
