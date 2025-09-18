<h3>border vs outline</h3>
- border은 box의 안쪽영역에 그려지는 선으로 box-sizing 계산에 포함된다.
- outline : box의 바깥 쪽에 그려지는 선으로 box-sizing 계산에 포함되지 않아 크기가 더욱 커진다. 따라서 사용할 때의 크기변화에 주의해야한다.

<h3> absolute vs relative </h3>
- relative는 Document Flow에 따라 원래 본인이 있어야 할 위치를 기준으로 좌표 property CSS스타일을 통해 위치를 이동시킨다.
- absolute는 Document Flow에서 완전히 제외되며 position:static이 아닌 부모/조상 요소를 기준으로 위치가 결정됨. 만약 아무도 position이 설정되지 않았다면 최상위 요소인 <!-- <body> --> 를 통해 결정됨.

<h3>text-align</h3>
- 블록 요소 내부의 인라인 콘텐츠를 수평 정렬하는 속성이다.
<h3>margin</h3>
- 요소의 외부 여백을 설정하는 속성
<h3>flex!!</h3>
- 1차원 레이아웃 시스템으로 요소를 행 또는 열로 배치는 도구
<h3>transform</h3>
- CSS 시각적 서실 모델의 좌표 공간을 변경한다.
<h3>grid</h3>
- 2차원 레이아웃 시스템 , 행과열을 동시에 다루는 레이아웃
- ex justify-content : center; 수평정렬 , align-content: center; 수직 정렬

<h3> BEM 방법론 </h3>
- Block, Element,Modifier의 약자로 CSS 클래스 이름을 짓는 규칙이다.
- 특징으로는 독립성, 재사용성, 이동가능, 중첩가능이 있다.

<h3>반응형 background</h3>
- 축약형
    - background 속성을 한 줄로 묶어서 쓸 수 있다.
    보통은 background: [color] [image] [position] [size] [repeat] 의 순서이지만 순서는 유연하게 바꿀 수 있다.