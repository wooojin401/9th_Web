- **border vs outline의 차이점 🍠
    - **border**

      → 요소의 **박스 모델(box model)** 안에 포함되어, `content → padding → border → margin` 순서에 맞게 배치됩니다.

      → 따라서 `border` 두께만큼 요소 크기에 영향을 줍니다.

    - **outline**

      → 요소의 **바깥쪽**에 그려지며, 박스 모델에 포함되지 않습니다.

      → 즉, `outline`을 적용해도 요소의 크기나 레이아웃에는 영향을 주지 않습니다.

위의 키워드를 활용해서 가운데 정렬을 구현해보세요! 🍠
 
- text-align
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-align</title>
  <style>
    .item{
      width:200px;
      height: 200px;
      background-color: purple;
      color:white;
      text-align: center;
    }
  </style>
</head>

<body>
<div class="item">안녕하슈 text-align테스트</div>
</body>

</html>

```

- margin
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>text-align</title>
  <style>
    .item {
      width: 200px;
      height: 200px;
      background-color: purple;
      color: white;
      margin: 0 auto; <!-- 좌우 자동 여백 -->
    text-align: center;
    }
  </style>
</head>

<body>
<div class="item">안녕하슈 margin 정렬</div>
</body>

</html>

```


- 반응형 background
  아래 반응형 background 관련 키워드를 정리해보세요 🍠
- background-image

  **배경이미지 지정시** 사용

  기본값: `none`

  이미지의 위치를 상대 경로 또는 절대 경로를 통해서 나타낼 수 있음

  속성값 명시할 때 url() 함수 사용
- background-repeat

    배경 이미지가 **주어진 영역에 꽉 차지 않는 경우 이미지를 반복할 방식** 결정

    기본값: `repeat`(배경이미지를 가로와 세로 모든 방향으로 반복)

    `repeat-x`: 가로 방향으로만 배경이미지 반복

    `repeat-y`: 세로 방향으로만 배경이미지 반

    `no-repeat`: 반복 원하지 않을 때
- background-position

    배경 이미지가 주어진 영역에서 **어디에 위치할지** 결정

    보통 no-repeat로 설정해놓고 사용(배경 이미지가 반복된다면 위치를 지정하는 게 큰 의미가 없어지기 때문)

    기본값: 0% 0%

    절대/상대 단위를 사용하여 좌측, 상단으로부터 얼마나 떨어져야하는지 지정

    `top`, `bottom`, `left`, `right`, `center`
- background-size

    배경 이미지의 **크기** 결정

    기본값: auto (배경 이미지의 실제 크기)

    절대/상대 단위 사용해서 특정값 지정 가능

    주어진 영역에 따라 이미지의 크기 자동으로 조절

    `cover`: 배경 이미지가 짤리더라도 주어진 영역을 완전히 덮을 수 있도록 이미지를 크기를 맞춰줌

    이때, `background-position` 속성을 `center`로 설정 (이미지의 중앙이 좌측상단으로 치우쳐져서 어색해보일 수 있기 때문)
contain: 빈 공간이 생기더라도 배경 이미지가 주어진 영역 안에 모두 들어올 수 있도록 이미지의 크기 맞춰줌

**transform**
아래 키워드에 대해 정리한 후, 코드와 실행 영상을 남겨주세요!
- translate

  요소를 X축 또는 Y축으로 **이동**

    - x: 요소를 X축 따라 이동시키는 거리. 픽셀(px), 퍼센트(%) 사용
    - y: 요소를 Y축 따라 이동시키는 거리. 픽셀(px), 퍼센트(%) 사용
    - 인자를 양수로 지정: x축은 오른쪽, y축은 아래쪽으로 이동
    - 인자를 음수로 지정: x축은 왼쪽, y축은 위쪽으로 이동
  
.example {
width: 100px;
height: 100px;
background-color: blue;
transform: translate(50px, 100px);
}

.example-x {
transform: translateX(50px);
}

.example-y {
transform: translateY(100px);
}

.example-z {
transform: translateZ(200px);
}

.example-3d {
transform: translate3d(50px, 100px, 200px);
}



- scale
    
    요소의 **크기** 변경
    
    요소의 가로, 세로 크기를 비율에 따라 늘리거나 줄이는 기능
    
    - x: 요소의 가로 크기 변경하는 비율
    - y: 요소의 세로 크기 변경하는 비율 (생략하면 x와 동일한 값 적용)
      .example {
      width: 100px;
      height: 100px;
      background-color: blue;
      transform: scale(1.5, 2);
      }

.example-x {
transform: scaleX(1.5);
}

.example-y {
transform: scaleY(2);
}

.example-z {
transform: scaleZ(1.2);
}

.example-3d {
transform: scale3d(1.5, 2, 1.2);
}

- rotate

  요소를 회전시킴(시계 방향 또는 반시계 방향)

  기본적으로 중심점을 기준으로 이루어짐

  transform-origin 속성 사용해 회전 중심점 변경 가능

  `rotateX`, `rotateY`, `rotateZ`

    - angle: 요소를 회전시킬 각도.
        - deg: 도 단위(360 deg ==한 바퀴 회전)
        - grad: 그라디언트 (400 grad == 한 바퀴 회전)
        - rad: 라디안 (2파이rad ==한 바퀴 회전)
        - turn: 턴 (1 turn == 한 바퀴 회전)
          .example {
          width: 100px;
          height: 100px;
          background-color: blue;
          transform: rotate(45deg);
          }

.example-x {
transform: rotateX(45deg);
}

.example-y {
transform: rotateY(45deg);
}

.example-z {
transform: rotateZ(45deg);
}

.example-3d {
transform: rotate3d(1, 1, 0, 45deg);
}

.example-origin {
transform: rotate(45deg);
transform-origin: bottom right;
}

- skew

  요소를 기울이는 데 사용

  요소를 X축과 Y축을 기준으로 기울여 비뚤어지게 변형

    - x-angle: 요소를 X축을 기준으로 기울이는 각도
    - y-angle: 요소를 Y축을 기준으로 기울이는 각도. 생략하면 0이 기본값

.example {
width: 100px;
height: 100px;
background-color: blue;
transform: skew(30deg, 20deg);
}

.example-x {
transform: skewX(30deg);
}

.example-y {
transform: skewY(20deg);
}

- matrix

  2D 변형 동차 행렬 선언

  6개의 값 지정

**transition**
- transition-property

  **트랜지션 이벤트를 적용할 CSS속성**을 지정하기 위해 사용
- transition-duration

  **트랜지션 이벤트를 실행할 시간**을 지정하기위해 사용
- transition-timing-function

  트랜지션 이벤트의 진행속도 지정
- transition-delay

  트랜지션 이벤트를 바로 실행시키지 않고 지연시키고자 하는 경우 사용
- transition-behavior

  “트랜지션이 어떤 상황에서 발생할지”를 제어하기 위해 제안된 기능


**animation**
- animation-name

  애니메이션의 중간 상태를 지정하기 위한 이름 정의

  중간 상태는 @keyframes 규칙을 이용하여 기술
- animation-duration

  한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정
- animation-delay

  엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정
- animation-direction

  애니메이션이 종료되고 다시 처음부터 시작할지, 역방향으로 진행할지 지정
- animation-iteration-count

  애니메이션이 몇 번 반복될지 지정
- animation-play-state

  애니메이션을 멈추거나 다시 시작
- animation-timing-function

  중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정
- animation-fill-mode

  애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정
- @keyframes

  애니메이션을 재생할 각 프레임의 스타일을 정의하는 것

  from 속성이나 0% 속성에 설정한 스타일에서 출발해 to 속성이나 100% 속성에 설정한 스타일로 점차 바뀌면서 애니메이션 재생

  키프레임은 애니메이션을 적용할 요소의 animation-name을 정의하고 그 키프레임 코드 블럭에 재생할 프레임별 시간 비율을 작성함

0%: 애니메이션의 시작 프레임

100%: 애니메이션의 마지막 프레임

from: 애니메이션의 시작 프레임 (== 0%)

to: 애니메이션의 마지막 프레임(== 100%)

0%와 100% 사이에는 여러 개의 중간 값(%)을 설정해 프레임을 작성할 수 있다.