- border vs outline의 차이점 🍠

## 1. **border**

- **박스 모델(Box Model)의 일부**
- 요소의 크기(width/height)에 **영향**을 줌
- 각 변(`top`, `right`, `bottom`, `left`)을 따로 지정 가능
- 모서리에 **border-radius** 적용 가능 → 둥근 모양 가능
- 요소의 **레이아웃을 밀어내는 효과**가 있음

```css
div {
    border: 2px solid red;
}

```

---

## 2. **outline**

- **박스 모델에 포함되지 않음**
- 요소의 크기(width/height)에 **영향 없음**
- 항상 **사각형 전체**를 감쌈 → `outline-radius` 같은 속성 없음
- 기본적으로 요소 외곽을 덮어쓰지 않고, **요소 바깥쪽에 겹쳐서 그림**
- 주로 **접근성 표시(포커스 표시)** 용도로 사용 (`:focus` 등)

```css
input:focus {
    outline: 3px solid blue;
}

```

---

- 정렬의 진수 🍠
    
    ### 다양한 정렬 방법
    
    **프론트엔드 개발**에서 요소를 가운데 정렬하는 건 정말 자주 마주치는 작업이에요. 
    
    상황에 따라 적절한 방법을 선택할 수 있도록, 5가지 핵심 정렬 방법을 마스터해봐요!
    
    <aside>
    💡
    
    **왜 여러 가지 방법을 알아야 할까요?**
    
    - 상황마다 최적의 방법이 다르기 때문이에요
    - 브라우저 호환성을 고려해야 할 때가 있어요
    - 레이아웃 구조에 따라 특정 방법이 더 효율적일 수 있어요
    </aside>
    
    ### 키워드 정리
    
    - text-align
        
        # text-align
        
        ### 기본 개념
        
        블록 요소 내부의 **인라인 콘텐츠**를 수평 정렬하는 속성이에요.
        
        ---
        
        ### 주요 값
        
        ```css
        text-align: left;     /* 왼쪽 정렬 (기본값) */
        text-align: right;    /* 오른쪽 정렬 */
        text-align: center;   /* 가운데 정렬 */
        text-align: justify;  /* 양쪽 정렬 */
        text-align: start;    /* 문서 시작 방향 */
        text-align: end;      /* 문서 끝 방향 */
        ```
        
        ---
        
        ### 적용 대상
        
        - ✅ 텍스트
        - ✅ 인라인 요소 (`<span>`, `<a>`, `<img>`)
        - ✅ 인라인 블록 (`display: inline-block`)
        - ❌ 블록 요소 자체는 정렬 불가예요
        
    - margin
        
        # margin
        
        ### 기본 개념
        
        요소의 **외부 여백**을 설정하는 속성이에요.
        
        ---
        
        ### 주요 값
        
        ```css
        /* 개별 설정 */
        margin-top: 10px;
        margin-right: 20px;
        margin-bottom: 10px;
        margin-left: 20px;
        
        /* 단축 속성 */
        margin: 10px;                /* 모든 방향 10px */
        margin: 10px 20px;          /* 상하 10px, 좌우 20px */
        margin: 10px 20px 30px;     /* 상 10px, 좌우 20px, 하 30px */
        margin: 10px 20px 30px 40px;/* 상 우 하 좌 (시계방향) */
        
        /* 특수 값 */
        margin: 0 auto;  /* 좌우 자동 여백 (가운데 정렬) */
        margin: inherit;  /* 부모 요소로부터 상속 */
        ```
        
        ### 핵심 특징
        
        - **margin collapse**: 인접한 블록 요소의 상하 마진은 겹쳐요
        - **auto 값**: 남은 공간을 자동으로 배분해요
        - 음수 값도 사용 가능해요
        
        ---
        
    - flex
        
        # flex
        
        ### 기본 개념
        
        **1차원 레이아웃** 시스템으로, 요소들을 행 또는 열로 배치하는 강력한 도구예요.
        
        ---
        
        ### 주요 값
        
        **Container 속성 (부모)**
        
        ```css
        /* Flex 컨테이너 선언 */
        display: flex;
        display: inline-flex;
        
        /* 방향 설정 */
        flex-direction: row;          /* 가로 방향 (기본값) */
        flex-direction: column;       /* 세로 방향 */
        flex-direction: row-reverse;  /* 가로 역방향 */
        flex-direction: column-reverse;/* 세로 역방향 */
        
        /* 줄바꿈 설정 */
        flex-wrap: nowrap;    /* 한 줄에 배치 (기본값) */
        flex-wrap: wrap;      /* 여러 줄 허용 */
        flex-wrap: wrap-reverse;
        
        /* 주축 정렬 */
        justify-content: flex-start;  /* 시작점 정렬 */
        justify-content: center;      /* 중앙 정렬 */
        justify-content: flex-end;    /* 끝점 정렬 */
        justify-content: space-between;/* 양 끝 배치 */
        justify-content: space-around; /* 균등 여백 */
        justify-content: space-evenly; /* 완전 균등 */
        
        /* 교차축 정렬 */
        align-items: stretch;     /* 늘리기 (기본값) */
        align-items: center;      /* 중앙 정렬 */
        align-items: flex-start;  /* 시작점 정렬 */
        align-items: flex-end;    /* 끝점 정렬 */
        align-items: baseline;    /* 텍스트 기준선 */
        
        /* 여러 줄 정렬 */
        align-content: stretch;
        align-content: center;
        align-content: space-between;
        
        /* 간격 설정 */
        gap: 20px;           /* 모든 간격 20px */
        row-gap: 10px;       /* 행 간격 */
        column-gap: 20px;    /* 열 간격 */
        ```
        
        **Item 속성 (자식)**
        
        ```css
        /* 크기 조절 */
        flex-grow: 1;     /* 늘어나는 비율 */
        flex-shrink: 1;   /* 줄어드는 비율 */
        flex-basis: 200px;/* 기본 크기 */
        
        /* 단축 속성 */
        flex: 1;          /* grow: 1, shrink: 1, basis: 0 */
        flex: 1 1 200px;  /* grow shrink basis */
        
        /* 개별 정렬 */
        align-self: center;   /* 자신만 다르게 정렬 */
        
        /* 순서 변경 */
        order: 1;         /* 표시 순서 (음수 가능) */
        ```
        
    - translate
        
        # translate
        
        ### 기본 개념
        
        요소를 **현재 위치에서 이동**시키는 변환 함수예요. **`Document Flow`**에 영향을 주지 않아요.
        
        ---
        
        ### 주요 문법
        
        ```css
        /* 2D 이동 */
        transform: translateX(100px);     /* X축 이동 */
        transform: translateY(50px);      /* Y축 이동 */
        transform: translate(100px, 50px);/* X, Y 동시 */
        transform: translate(50%, 50%);   /* 백분율 사용 */
        
        /* 3D 이동 */
        transform: translateZ(100px);     /* Z축 이동 */
        transform: translate3d(x, y, z);  /* 3D 이동 */
        
        /* 다른 transform과 조합 */
        transform: translate(50px, 100px) rotate(45deg);
        transform: translate(-50%, -50%) scale(1.2);
        ```
        
        ### 핵심 특징
        
        - **GPU 가속**: 성능이 우수해요
        - **백분율 기준**: 자기 자신의 크기가 기준이에요
        - **애니메이션**: transition, animation과 함께 자주 사용돼요
        - **position과 조합**: absolute와 함께 가운데 정렬에 활용돼요
        
        **관련 속성**
        
        ```css
        /* 변환 기준점 */
        transform-origin: center;     /* 중앙 (기본값) */
        transform-origin: top left;   /* 좌상단 */
        transform-origin: 50% 50%;    /* 백분율 */
        
        /* 3D 설정 */
        transform-style: preserve-3d;  /* 3D 공간 유지 */
        perspective: 1000px;           /* 원근감 */
        ```
        
    - grid
        
        # grid
        
        ### 기본 개념
        
        **2차원 레이아웃** 시스템으로, 행과 열을 동시에 다루는 가장 강력한 레이아웃 도구예요.
        
        ---
        
        ### 주요 문법
        
        ### **Container 속성 (부모)**
        
        ```css
        /* Grid 컨테이너 선언 */
        display: grid;
        display: inline-grid;
        
        /* 열 정의 */
        grid-template-columns: 200px 200px 200px;  /* 고정 크기 */
        grid-template-columns: 1fr 2fr 1fr;        /* 비율 */
        grid-template-columns: repeat(3, 1fr);     /* 반복 */
        grid-template-columns: minmax(100px, 1fr); /* 최소/최대 */
        grid-template-columns: auto-fit;           /* 자동 맞춤 */
        
        /* 행 정의 */
        grid-template-rows: 100px 200px;
        grid-template-rows: repeat(3, minmax(100px, auto));
        
        /* 영역 정의 */
        grid-template-areas: 
          "header header header"
          "sidebar main main"
          "footer footer footer";
        
        /* 간격 설정 */
        gap: 20px;              /* 모든 간격 */
        row-gap: 10px;          /* 행 간격 */
        column-gap: 20px;       /* 열 간격 */
        
        /* 자동 배치 */
        grid-auto-flow: row;    /* 행 방향 자동 배치 */
        grid-auto-flow: column; /* 열 방향 자동 배치 */
        grid-auto-flow: dense;  /* 빈 공간 채우기 */
        
        /* 자동 크기 */
        grid-auto-rows: 100px;   /* 자동 생성 행 크기 */
        grid-auto-columns: 1fr;  /* 자동 생성 열 크기 */
        
        /* 정렬 (전체) */
        justify-content: center;  /* 수평 정렬 */
        align-content: center;    /* 수직 정렬 */
        place-content: center;    /* 수평 + 수직 단축 */
        
        /* 정렬 (아이템) */
        justify-items: center;    /* 아이템 수평 정렬 */
        align-items: center;      /* 아이템 수직 정렬 */
        place-items: center;      /* 아이템 정렬 단축 */
        ```
        
        ### **Item 속성 (자식)**
        
        ```css
        /* 위치 지정 */
        grid-column: 1 / 3;      /* 1번째부터 3번째 라인까지 */
        grid-column: span 2;     /* 2개 열 차지 */
        grid-row: 2 / 4;         /* 2번째부터 4번째 라인까지 */
        
        /* 단축 속성 */
        grid-area: 2 / 1 / 4 / 3;  /* row-start / col-start / row-end / col-end */
        grid-area: header;          /* template-areas 이름 사용 */
        
        /* 개별 정렬 */
        justify-self: center;    /* 자신만 수평 정렬 */
        align-self: center;      /* 자신만 수직 정렬 */
        place-self: center;      /* 자신만 정렬 단축 */
        ```
        
        ### **유용한 함수들**
        
        ```css
        /* repeat(): 반복 */
        grid-template-columns: repeat(3, 1fr);
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        
        /* minmax(): 최소/최대값 */
        grid-template-columns: minmax(100px, 300px);
        grid-template-rows: minmax(50px, auto);
        
        /* fr 단위: 비율 */
        grid-template-columns: 1fr 2fr 1fr;  /* 1:2:1 비율 */
        ```
        
    
    ### 위의 키워드를 활용해서 가운데 정렬을 구현해보세요! 🍠
    
    <aside>
    💡
    
    HTML 요소는 여러분이 직접 만들어서, 가운데 정렬을 구현한 영상과 코드를 남겨주세요.
    향후 학습에 있어서 매우 중요한 부분이니, 꼭 직접 코드를 작성하면서 실습해보세요!
    
    </aside>
    
    - text-align
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <title>text-align 가운데 정렬</title>
          <style>
            .box {
              width: 100px;
              height: 100px;
              background-color: purple;
              color: white;
              box-sizing: border-box;
              text-align: center;
            }
          </style>
        </head>
        
        <body>
          <div class="box">BOX</div>
        </body>
        
        </html>
        ```
        
        ![image.png](attachment:6c6fd68d-9656-4c97-83a1-47e02f5341bc:image.png)
        
    - margin
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <title>margin 가운데 정렬</title>
          <style>
            .box {
              width: 100px;
              height: 100px;
              background-color: purple;
              color: white;
              text-align: center;
              margin: 0 auto; 
            }
          </style>
        </head>
        
        <body>
          <div class="box">BOX</div>
        </body>
        
        </html>
        ```
        
        ![image.png](attachment:04e95fec-2148-425a-bf66-e9af8ad8aeee:image.png)
        
    - flex
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <title>flex 가운데 정렬</title>
          <style>
            body {
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
        
            .box {
              width: 100px;
              height: 100px;
              background-color: purple;
              color: white;
        
            }
          </style>
        </head>
        
        <body>
          <div class="box">BOX</div>
        </body>
        
        </html>
        
        ```
        
        ![image.png](attachment:e693398d-e737-4fcb-94cb-38865343f365:image.png)
        
    - translate
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <title>translate 가운데 정렬</title>
          <style>
            body {
              margin: 0;
              height: 100vh;
            }
        
            .box {
              width: 100px;
              height: 100px;
              background-color: purple;
              color: white;
              text-align: center;
              line-height: 100px;
        
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          </style>
        </head>
        
        <body>
          <div class="box">BOX</div>
        </body>
        
        </html>
        
        ```
        
        ![image.png](attachment:89c4e6f3-23e1-4afb-a237-7ae800a21255:image.png)
        
    - grid
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <title>grid 가운데 정렬</title>
          <style>
            body {
              margin: 0;
              height: 100vh;
              display: grid;
              place-items: center;
            }
        
            .box {
              width: 100px;
              height: 100px;
              background-color: purple;
              color: white;
              text-align: center;
              line-height: 100px;
            }
          </style>
        </head>
        
        <body>
          <div class="box">BOX</div>
        </body>
        
        </html>
        
        ```
        
        ![image.png](attachment:ae315841-c4d6-44a1-82ca-3b49687ee644:image.png)

- 반응형 background 🍠
    
    ### 아래 반응형 background 관련 키워드를 정리해보세요 🍠
    
    <aside>
    💡
    
    아래 키워드에 대해 정리한 후,  코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - background-image
        
        요소에 배경 이미지를 삽입하는 속성이다. 여러 장의 이미지를 콤마(,)로 나열 가능하다.
        
        background-image: url("image.jpg");
        background-image: url("img1.png"), url("img2.png");
        
    - background-repeat
        
        배경 이미지를 반복할지에 대한 여부를 설정한다.
        
        background-repeat: repeat;      /* 기본값: 가로+세로 반복 */
        background-repeat: no-repeat;   /* 반복 없음 */
        background-repeat: repeat-x;    /* 가로만 반복 */
        background-repeat: repeat-y;    /* 세로만 반복 */
        
    - background-position
        
        배경 이미지의 위치를 지정한다.
        
        background-position: left top;     /* 왼쪽 위 */
        background-position: center center;/* 가운데 */
        background-position: right bottom; /* 오른쪽 아래 */
        background-position: 50% 50%;      /* 비율 지정 */
        background-position: 20px 50px;    /* 픽셀 단위 */
        
    - background-size
        
        배경 이미지의 크기를 조절한다.
        
        background-size: auto;     /* 원래 크기 (기본값) */
        background-size: cover;    /* 요소를 가득 채움 (잘릴 수 있음) */
        background-size: contain;  /* 요소 안에 맞춤 (빈 공간 생길 수 있음) */
        background-size: 100% 100%;/* 가로세로 강제 맞춤 */
        
    - 축약형
        
        여러 속성을 한 줄로 표현 가능한 기능으로, 순서는 background: color image repeat position / size;로 한다.
        
        background: url("image.jpg") no-repeat center/cover;

- transform 🍠
    
    ### transform 🍠
    
    CSS **`transform`** 속성으로, 요소에 회전 크기 조절, 기울이기, 이동 효과를 부여할 수 있어요.
    
     `transform`은 CSS [시각적 서식 모델](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)의 좌표 공간을 변경해요.
    
    <aside>
    💡 아래 키워드에 대해 정리한 후, 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - translate
        
        요소를 이동시키는 속성이다. 원래 위치에서 벗어나지만 문서 흐름에는 영향을 주지 않는다.
        
        transform: translateX(50px);     /* X축으로 50px 이동 */
        transform: translateY(30px);     /* Y축으로 30px 이동 */
        transform: translate(50px, 30px);/* X, Y 동시에 */
        transform: translate(-50%, -50%);/* 자기 크기 기준 이동 (중앙 정렬에 자주 사용) */
        
    - scale
        
        요소의 크기를 확대/축소하는 기능이다. 원래 크기를 기준으로 비율을 지정한다.
        
        transform: scale(1.5);       /* 가로, 세로 1.5배 */
        transform: scaleX(2);        /* 가로만 2배 */
        transform: scaleY(0.5);      /* 세로만 절반 */
        transform: scale(1.2, 0.8);  /* 가로 1.2배, 세로 0.8배 */
        
    - rotate
        
        요소를 회전시키는 기능이다. 각도 단위는 deg, rad, turn이 있다.
        
        transform: rotate(45deg);   /* 시계 방향 45도 회전 */
        transform: rotate(-90deg);  /* 반시계 방향 90도 회전 */
        
    - skew
        
        요소를 기울이는 효과이다. 각 축별로 다른 기울기를 지정할 수 있다. 
        
        transform: skewX(30deg);     /* X축 방향으로 30도 기울이기 */
        transform: skewY(15deg);     /* Y축 방향으로 15도 기울이기 */
        transform: skew(30deg, 15deg); /* X, Y 동시 기울이기 */
        
    - matrix
        
        2D 변환을 한 번에 정의하는 방식이다. 형식은 다음과 같다. 
        
        `matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)`
        
        /* scaleX=1, skewY=0, skewX=0, scaleY=1, translateX=50px, translateY=100px */
        transform: matrix(1, 0, 0, 1, 50, 100);

- transition 🍠
    
    ### transition  🍠
    
    <aside>
    💡 아래 키워드에 대해 정리한 후, 실습을 진행해주시고, 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - transition-property
        
        어떤 속성에 트랜지션 효과를 줄지 지정하는 기능이다. 여러 개를 쉼표를 이용하여 동시에 지정 가능하다. 
        
        transition-property: all;           /* 모든 속성 (기본값) */
        transition-property: width, height; /* 특정 속성만 */
        
    - transition-duration
        
        트랜지션이 얼마 동안 실행될지를 지정한다. 단위는 s 또는 ms를 사용한다.
        
        transition-duration: 0.5s;   /* 0.5초 */
        transition-duration: 2s;     /* 2초 */
        
    - transition-timing-function
        
        속성의 변화와 가속도 곡선을 지정한다.
        
        transition-timing-function: ease;       /* 기본값, 부드럽게 시작/끝 */
        transition-timing-function: linear;     /* 일정한 속도 */
        transition-timing-function: ease-in;    /* 점점 빨라짐 */
        transition-timing-function: ease-out;   /* 점점 느려짐 */
        transition-timing-function: ease-in-out;/* 양쪽 모두 */
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); /* 직접 정의 */
        
    - transition-delay
        
        애니메이션 시작을 지연시키는 기능이다. 
        
        transition-delay: 0s;   /* 바로 시작 */
        transition-delay: 1s;   /* 1초 후 시작 */
        
    - transition-behavior
        
        불연속 속성 전환 방식을 제어하는 기능이다.
        
        transition-behavior: allow-discrete; /* 불연속 속성도 트랜지션 허용 */

- animation 🍠
    
    ### animation 🍠
    
    <aside>
    💡 아래 키워드에 대해 학습한 후, 실습을 진행하시고 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - animation-name
        
        사용할 애니메이션의 이름을 지정한다.
        
        animation-name: 이름;
        
    - animation-duration
        
        애니메이션이 한 번 실행되는 시간을 지정한다. 단위는 s 또는 ms를 사용한다.
        
        animation-duration: 2s;
        
    - animation-delay
        
        애니메이션이 시작되기 전에 얼마나 기다릴지를 지정한다.
        
        animation-delay: 1s; /* 1초 후 시작 */
        
    - animation-direction
        
        애니메이션 진행 방향을 제어한다.
        
        animation-direction: normal;           /* 정방향 (기본값) */
        animation-direction: reverse;          /* 역방향 */
        animation-direction: alternate;        /* 정방향 → 역방향 반복 */
        animation-direction: alternate-reverse;/* 역방향 → 정방향 반복 */
        
    - animation-iteration-count
        
        애니메이션 반복 횟수를 지정한다,
        
        animation-iteration-count: 1;        /* 1번만 */
        animation-iteration-count: 3;        /* 3번 반복 */
        animation-iteration-count: infinite; /* 무한 반복 */
        
    - animation-play-state
        
        애니메이션 재생 상태를 제어한다.
        
        animation-play-state: running; /* 실행 (기본값) */
        animation-play-state: paused;  /* 일시정지 */
        
    - animation-timing-function
        
        프레임 간 속도 곡선을 지정한다.
        
        animation-timing-function: ease;       /* 기본값 */
        animation-timing-function: linear;     /* 일정한 속도 */
        animation-timing-function: ease-in;    /* 점점 빨라짐 */
        animation-timing-function: ease-out;   /* 점점 느려짐 */
        animation-timing-function: ease-in-out;/* 양쪽 모두 */
        
    - animation-fill-mode
        
        애니메이션 시작 전과 종료 후의 상태를 정의한다.
        
        animation-fill-mode: none;      /* 기본값, 원래 상태로 */
        animation-fill-mode: forwards;  /* 종료 상태 유지 */
        animation-fill-mode: backwards; /* 시작 상태 유지 */
        animation-fill-mode: both;      /* 시작+종료 상태 유지 */
        
    - @keyframes
        
        애니메이션의 단계별 동작을 정의한다.
        
        @keyframes bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-50px); }
        100% { transform: translateY(0); }
        }
        
    - 축약형
        
        여러 속성을 한줄에 작성 가능하다.
        
        animation: bounce 2s ease-in-out 1s infinite alternate forwards;

- CSS 방법론 BEM 🍠
    
    <aside>
    💡
    
    아래 블로그를 참고하여 **BEM 방법론**에 대해 직접 정리해 보세요.
    
    BEM이란, Block, Element, Modifier의 약자로, CSS 클래스 이름을 체계적으로 짓는 규칙을 일컫는다. 클래스 충돌 방지와 구조를 한눈에 이해 가능하다. Block은 독립적인 단위로, .card, ,menu, .header가 있다. Element는 Block안의 구성 요소로, .card_title, .menu_item이 있다. Modifier는 상태나 스타일을 변형하는 것이고, .button—primary, .card—featured 등이 포함된다.
    
    기본 규칙은 다음과 같다.
    
    .block {}                /* 독립적인 컴포넌트 */
    .block__element {}       /* 블록의 구성 요소 */
    .block--modifier {}      /* 블록의 변형/상태 */
    .block__element--modifier {}
    
    BEM은 클래스 이름이 명확항 구조와 역할을 바로 알 수 있다는 장점과 그로 인한 재사용성이 높다는 특징이 있다. 또한 댜른 블록과의 스타일이 겹치지 않아 충돌이 적어 협업과 리팩토링이 쉽다는 이점이 있다.
    
    </aside>