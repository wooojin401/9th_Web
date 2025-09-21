# border vs outline 차이점

---

## 1️⃣ content-box일 때

- **border**
  - 요소의 실제 박스 영역에 포함됨
  - `margin`에도 영향
- **outline**
  - 요소 크기나 레이아웃에 영향 없음
  - 박스 **외부**에만 표시

📸 예시

![스크린샷(267).png](<attachment:4d516ad0-28e9-459a-bf58-47391c789340:스크린샷(267).png>)

---

## 2️⃣ border-box일 때

- **outline**
  - `box-sizing` 설정과 무관
  - 이전과 동일하게 박스 외곽에 표시
- **border**
  - 요소의 `width`와 `height`에 포함됨
  - `100px`로 설정하면 그 크기 그대로 유지되며 border가 안쪽에 계산됨

📸 예시

![스크린샷(268).png](<attachment:f7b229b4-cbd0-43bc-a1ba-194907011187:스크린샷(268).png>)

---

## 핵심 차이

| 구분              | border                          | outline   |
| ----------------- | ------------------------------- | --------- |
| 크기 영향         | 있음 (box-sizing에 따라 달라짐) | 없음      |
| 위치              | 요소 안쪽 / 테두리              | 항상 외부 |
| box-sizing과 관계 | 영향 받음                       | 영향 없음 |

---

## 반응형 background 속성

| 속성                | 설명                                | 주요 값 / 예시                                                   |
| ------------------- | ----------------------------------- | ---------------------------------------------------------------- |
| background-image    | 요소의 배경을 이미지로 설정         | `url("이미지경로")`                                              |
| background-repeat   | 배경 이미지 반복 방식 지정          | `repeat` / `repeat-x` / `repeat-y` / `no-repeat`                 |
| background-position | 배경 이미지 위치 지정               | `top` / `bottom` / `left` / `right` / `center` / `x y` 픽셀 단위 |
| background-size     | 배경 이미지 크기 조절               | `cover` / `contain` / 특정 px 또는 %                             |
| background (축약형) | 여러 background 속성을 한 줄로 축약 | `background: url("이미지") repeat-x 50px 50px;`                  |

---

## CSS transform 속성

CSS **`transform`**은 요소에 **이동, 크기 조절, 회전, 기울이기** 등의 시각적 변형을 줄 수 있는 속성입니다.  
좌표 공간을 변경하여 요소를 다양한 방식으로 변형할 수 있습니다.

| 속성      | 설명                                     | 주요 값 / 예시                                        |
| --------- | ---------------------------------------- | ----------------------------------------------------- |
| translate | 요소를 x, y, z축 기준으로 이동           | `translate(x, y)` / `translateX(x)` / `translateY(y)` |
| scale     | 요소의 크기를 조절                       | `scale(x, y)` / `scaleX(x)` / `scaleY(y)`             |
| rotate    | 요소를 회전                              | `rotate(angle)`                                       |
| skew      | 요소를 원하는 축으로 기울이기            | `skew(x-angle, y-angle)`                              |
| matrix    | scale, skew, translate를 복합적으로 적용 | `matrix(a, b, c, d, e, f)`                            |

---

## CSS transition 속성

CSS **`transition`**은 요소의 상태 변화에 애니메이션 효과를 부여할 수 있는 속성입니다.

| 속성                       | 설명                                                    | 주요 값 / 예시                                                                 |
| -------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| transition-property        | 애니메이션을 적용할 속성을 지정                         | `all`, `background-color`, `width`, `height`                                   |
| transition-duration        | 속성이 변화하는 시간을 지정                             |                                                                                |
| transition-timing-function | 변화 속도를 조절                                        | `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(...)` 등 |
| transition-delay           | 애니메이션 시작 전 대기 시간                            |                                                                                |
| transition-behavior        | 애니메이션 동작 방식 지정 (일부 브라우저/속성에서 지원) | `smooth`                                                                       |

---

## CSS animation 속성

CSS **`animation`**은 요소에 반복적이거나 일정한 동작을 애니메이션 효과로 적용할 수 있는 속성입니다.

| 속성                      | 설명                              | 주요 값 / 예시                                        |
| ------------------------- | --------------------------------- | ----------------------------------------------------- |
| animation-name            | 적용할 애니메이션 이름 지정       |                                                       |
| animation-duration        | 애니메이션 실행 시간 지정         |                                                       |
| animation-delay           | 애니메이션 시작 전 대기 시간      |                                                       |
| animation-direction       | 애니메이션 반복 시 방향 지정      | `normal`, `reverse`, `alternate`, `alternate-reverse` |
| animation-iteration-count | 애니메이션 반복 횟수 지정         | `1`, `2`, `infinite`                                  |
| animation-play-state      | 애니메이션 실행/정지 제어         | `running`, `paused`                                   |
| animation-timing-function | 애니메이션 진행 속도 변화 지정    | `linear`,`ease-in`, `ease-out`                        |
| animation-fill-mode       | 애니메이션 종료 후 상태 유지 방식 | `none`, `forwards`, `backwards`, `both`               |
| @keyframes                | 애니메이션 단계 정의              | `from { ... } to { ... }`, `% { ... }` 등             |
| 축약형                    | 여러 속성을 한 줄로 설정          | `animation: mover 2s alternate infinite;              |

---

## BEM(Block Element Modifier) 방법론

BEM은 CSS를 체계적으로 작성하여 **협업과 유지보수**를 쉽게 해주는 방법론입니다.

| 구분     | 설명                                                          | 클래스 예시       |
| -------- | ------------------------------------------------------------- | ----------------- |
| Block    | 독립적이고 재사용 가능, 이동 가능, 중첩 가능                  | `.card`           |
| Element  | Block 안에서만 의미를 가지는 구성 요소 (더블 언더스코어 사용) | `.card__title`    |
| Modifier | Element나 Block의 모양, 상태, 동작을 변경 (더블 대시 사용)    | `.card--featured` |

출처: [transform - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
