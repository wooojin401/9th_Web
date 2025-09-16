⭐️1.HTML이란?
HTML (Hyper Text Markup Language)로 나누어서 설명하면
하이퍼텍스트(Hypertext): 관련 항목을 연결하기 위해 구성된 텍스트(종종 이미지 등 삽입 포함)
마크업(Markup): 하드카피나 소프트카피로 출력될 모든 활자에 관한 스타일 가이드
언어(Language): 컴퓨터 시스템이 명령어를 이해하고 해석할 때 사용하는 언어
즉, 웹페이지의 구조를 정의하고 결정하는 언어라고 할 수 있다. 웹페이지의 뼈대라고 보면 쉽게 알 수 있습니다.
구조는 다음과 같습니다.

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Definition of HTML</title>
  </head>
  <body>
    <!--Page content such as text and images goes in here-->
  </body>
</html>

<!Doctype html>: 이 코드에서 HTML5를 사용하고 있음을 명시합니다. HTML5가 도입되기 전까지는 <!Doctype> 태그 속에 코딩 중인 HTML 버전을 분명하게 명시해야 했습니다. 예를 들면 HTML4.0 혹은 3.2, 이런 식으로요. 하지만 더 이상 그럴 필요가 없어졌습니다. 코드에 "html"이라고 적혀 있으면 브라우저는 자동으로 HTML5로 코딩하는 것으로 받아들입니다.
<html></html>: 모든 HTML 문서의 루트, 혹은 최상위 요소입니다. 다른 모든 요소는 이 안에 래핑 되어야 합니다.
<head></head>: 웹 크롤러는 페이지에서 중요한 정보를 얻기 위해 head 태그 내부를 살펴봅니다. 여기에는 페이지 타이틀, 스타일시트, SEO용 메타 인포메이션 등과 같은 정보가 포함되어 있습니다.
<meta />: 페이지의 메타 인포메이션을 전달하는 빈 요소입니다. 이러한 정보에는 작성자, 사용 중인 인코딩 유형(거의 항상 UTF-8), 응답성, 호환성 등이 포함될 수 있습니다. 웹 크롤러는 SEO에서 중요한 역할을 하는 웹페이지에 관한 정보를 얻기 위해 언제나 메타 태그를 확인합니다.
<title></title>: 웹페이지의 타이틀을 정의하며, 항상 브라우저 탭에 표시됩니다.
<body></body>: HTML 문서의 모든 내용은 body 태그 안에 있습니다. 전체 페이지에는 단 하나의 <body> 태그만 존재할 수 있습니다.

⭐️시멘틱 태그란?
시맨틱 태그 (Semantic Tag)는 포함된 콘텐츠의 특정 의미를 정의하고 목적을 갖는 태그입니다.
시맨틱 태그의 요소로는 <header>, <nav>, <article>, <section>, <footer>, <main> 등이 존재합니다. 이처럼 웹페이지를 논리적으로 구분하므로써 각 기능과 역할을 전달합니다.

👉div로만 구별하면 생기는 문제점 1.접근성 저하: 전부 <div>만 쓰면 보조 기기가 구역을 구별하지 못해 웹 접근성이 떨어집니다. 2.코드 가독성 저하: 개발자가 봤을 때 <header>와 <footer>는 바로 역할이 드러나는데 이를 쓰지 않으면 코드의 의미파악에 시간이 걸릴 수 있습니다. 3.검색엔진이 웹사이트 구조를 파악하기 어렵습니다.

👉시멘틱 태그로 해결하자
100가지가 넘는 시멘틱 태그가 존재하지만 자주 사용되는 몇가지만 알아보면

<header> : 사이트의 헤더 영역에 사용, 주로 사이트의 로고나 이름 등이 포함된다.
<nav> : 내비게이션을 의미하는 태그로, 주로 메뉴 영역에 사용된다.
<main> : 메인 컨텐츠 영역에 사용되며, <nav>, <aside>, <article> 등이 포함된다.
<section> : 주로 <article>을 포함하는 태그로 섹션별로 나눠줄 때 사용한다.
<article> : 개별 콘텐츠, 반복되는 콘텐츠를 나타낼  때 사용한다.
<aside> : 메인 컨텐츠 이외의 내용을 담을때 주로 사용(사이드), 보통 광고나 사이드바에 사용된다.
<footer> : 페이지의 하단에 주로 고객센터나 회사 정보를 담을때 사용한다.
이렇게 있습니다.

👉멀티미디어 요소를 나타내는 태그
태그를 사용해서 각종 멀티미디어들(이미지,영상,녹음 등)을 나타낼 수 있습니다.
이미지,오디오,영상의 사용법은 각각 다음과 같습니다.
<img src="google logo img 경로" alt="google logo" width="333" >
<audio src="오디오 경로" controls muted loop autoplay></audio>
<video src="비디오 경로" controls muted autoplay loop poster="썸네일 경로"></video>
속성값으로 muted, loop 등을 적용해서 영상의 속성을 태그안에 작성할 수 있습니다.

👉IE(Internet Explorer)에서 사용되던 불필요한 태그 제거
<acronym>, <applet>, <dir>, <isindex>와 같은 태그는 HTML5에서 더이상 사용되지 않습니다.

👉기타 태그들

기타 태그들을 간단히 살펴보면
텍스트 콘텐츠:

<p>:하나의 문단을 나타냅니다. 시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의 들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로 관련있는 콘텐츠 무엇이나 될 수 있습니다.
<pre>:미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현합니다. 텍스트는 보통 고정폭 글꼴을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지합니다.
<ul>:정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다.
<ol>:정렬된 목록을 나타냅니다. 보통 숫자 목록으로 표현합니다.
<dl>:설명 목록을 나타냅니다. <dl>은 <dt>로 표기한 용어와 <dd> 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다.

인라인 텍스트 시멘틱:
<mark>:현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.
<span>:구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않습니다. 스타일을 적용하기 위해서, 또는 lang 등 어떤 특성의 값을 서로 공유하는 요소를 묶을 때 사용할 수 있습니다. 적절한 의미를 가진 다른 요소가 없을 때에만 사용해야 합니다. <span>은 <div>와 매우 유사하지만, <div>는 블록 레벨 요소인 반면 <span>은 인라인 요소입니다.
<u>:글자로 표현하지 않는 주석을 가진 것으로 렌더링 해야 하는 텍스트를 나타냅니다. 기본값에서는 단순한 밑줄로 표시하지만 CSS를 사용해 바꿀 수 있습니다.
<s>:글자에 취소선, 즉 글자를 가로지르는 선을 그립니다. <s> 요소를 사용해 이제 관계 없거나 더 이상 정확하지 않은 부분을 나타내세요. 그러나, <s>는 문서의 편집 기록을 나타내는 용도로는 적합하지 않습니다. 상황에 따라 <del>과 <ins> 요소를 대신 사용하세요.
를 예시로 들 수 있습니다.

⭐️HTML의 구성요소
HTML의 구성요소로는 여는태그, 내용, 닫는태그로 나눌 수 있습니다. p태그로 예시를 들자면

<p>안녕하세요</p>
여기서 <p>는 여는태그, </p>가 닫는태그, 그 사이에 있는 것이 내용입니다. 태그 사이에 다른 태그가 들어가는 것도 가능합니다.
또한 속성 또한 추가해 원하는 스타일을 적용할 수도 있습니다.

⭐️HEAD태그란?
head 태그란 문서의 문자 인코딩, 타이틀, 설명, 스타일시트, 스크립트 등 문서 정보(메타데이터)에 관련된 다양한 요소를 모아둔 태그입니다. 사용자는 이를 볼 수 없다.
HEAD태그의 특징은 다음과 같다.
1.head 태그는 html 태그의 첫 번째 자식 요소여야 한다.
2.head 태그는 HTML의 기본 구조에 반드시 필요한 필수 태그이다.
3.HTML 문서에는 하나의 head 태그만 존재해야 한다.
4.head 태그의 필수 자식 요소는 title 태그이다.
5.head 태그는 반드시 body 태그를 형제 요소로 두고 있어야 하며, 이때, head 태그가 먼저 위치해 있어야 한다.

⭐️BODY태그란?
HEAD태그와 다르게 사용자가 직접적으로 볼 수 있다. 이 태그는 반드시 HEAD태그 다음에 사용되고, 웹페이지의 구성요소는 거의 모두 BODY태그 안에 작성되어있다.
👉시멘틱 태그를 잘 사용했을때 장점은?
페이지의 가독성이 향상되고 다른 개발자가 보았을 때 어떠한 부분이 어떤 역할을 하는지 한눈에 확인하기 쉽다.

⭐️태그 정리

👉element vs container
Element:
의미:HTML 문서의 기본 단위 (모든 태그/노드)
예시:<p>안녕하세요</p>
특징:단일 요소
역할:콘텐츠나 기능 표현
Container:
의미:다른 요소들을 담는 상자/그룹 역할
예시:<div class="box"> <p>내용</p> </div>
특징:보통 레이아웃/구조를 위해 여러 요소 감싸기
역할:구조와 배치 담당

👉block vs inline
Block
줄바꿈:O (새 줄 차지)
너비:기본 100% (부모 채움)
포함 가능:block + inline 가능
대표 태그:<div>, <p>, <h1>
Inline
줄바꿈:X (줄 안에 그대로)
너비:콘텐츠 크기만큼
포함 가능:보통 inline만 (block은 불가)
대표 태그:<span>, <a>, <img>

참고자료:
https://www.freecodecamp.org/korean/news/what-is-html-definition-and-meaning/
https://seo.tbwakorea.com/blog/what-is-semantic-tag/
https://blacksoy0516.tistory.com/28
https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements
https://velog.io/@chrios99/HTML-head-%ED%83%9C%EA%B7%B8

---

⭐️CSS 기본문법
CSS(Cascading Style Sheets)란 웹사이트에서 표시되는 정보들을 꾸며주는 역할을 합니다.
CSS를 사용하는 방법은 다음과 같습니다.

1. HTML 안에서 style 속성을 이용하는 방법
2. <style> 태그를 통해 HTML 문서 내부에서 이용하는 방법
3. 별도로 CSS 파일을 분리하여 HTML의 문서에 연결하는 방법
   이중 3번이 유지보수가 쉽고 가독성이 뛰어나기 때문에 가장 추천하는 방법입니다.

CSS 적용 우선순위는 다음과 같습니다.

1. 속성 값 뒤에 !important 를 붙인 속성
2. HTML에서 style을 직접 지정한 속성
3. #id 로 지정한 속성
4. .클래스, :추상클래스 로 지정한 속성
5. 태그이름 으로 지정한 속성
6. 상위 객체에 의해 상속된 속성

⭐️box-sizing
box-sizing은 박스의 크기를 어떤 것을 기준으로 계산할지를 정하는 속성입니다.
content-box : 콘텐트 영역을 기준으로 크기를 정한다.
border-box : 테두리를 기준으로 크기를 정한다.
initial : 기본값으로 설정한다.
inherit : 부모 요소의 속성값을 상속받는다.

⭐️border / outline
border
위치:padding 바깥쪽
요소 크기 영향:O (차지하는 공간 늘어남)
개별 면 지정:가능 (top, right, bottom, left)
주 용도:디자인, 구분선
스타일링 제어:매우 세밀하게 가능
outline
위치: margin 바깥쪽
요소 크기 영향:X (공간 차지 안 함)
개별 면 지정:불가능 (전체만 적용)
주 용도:포커스 표시, 접근성
스타일링 제어:단순 (전체 한 번에 적용)

⭐️relative / absolute
relative
문서흐름:유지 (공간 차지)
기준:자기 자신(원래 위치)
이동방식:원래 자리에서 살짝 이동
주요 용도:absolute 기준점 제공, 미세 조정

absolute
문서흐름:제거 (공간 차지 안 함)
기준:가장 가까운 position된 조상
이동방식:기준점에 맞춰 정확한 위치 지정
주요 용도:레이아웃 자유 배치

⭐️fixed / sticky

fixed
기준:뷰포트(브라우저 창)
문서 흐름 영향:차지하지 않음 (absolute처럼 제거됨)
스크롤 반응:항상 고정

sticky
기준:가장 가까운 스크롤 가능한 조상 요소
문서 흐름 영향:차지함 (relative처럼 공간 유지)
스크롤 반응:특정 조건에서만 고정

⭐️정렬의 진수
정렬하는데에는 여러 키워드가 사용되는데 그중 몇가지를 알아보면
text-align:블록 요소 내부의 인라인 콘텐츠를 수평 정렬하는 속성입니다. left,right,center 등 방식을 정해서 정렬할 수 있습니다. 적용 대상으로는 텍스트, 인라인요소, 인라인 블록요소가 있고 블록 요소 자체는 정렬되지 않습니다.
margin:요소의 외부 여백을 설정하는 속성입니다.요소와 요소 사이의 간격을 만드는 역할을 합니다. padding과 달리 요소 내부가 아니라, 바깥 공간을 제어합니다. 제어 공간은 right,left,bottom,top 등 사용자가 마음대로 설정할 수 있습니다.
flex:요소들을 행 또는 열로 배치하는 강력한 도구입니다.

1. Flex Container (복도 규칙)
   display: flex → 복도를 만든다.
   flex-direction → 가구를 가로로 놓을지, 세로로 놓을지 결정.
   justify-content → 가구들을 복도의 왼쪽/가운데/끝에 몰아놓거나, 간격을 균등 분배.
   align-items → 가구들을 복도의 위/중앙/아래로 맞춤.
   flex-wrap → 복도에 공간이 부족하면 줄을 바꿀지 말지 결정.
2. Flex Item (가구 자체의 규칙)
   flex-grow → 복도에 남는 공간이 있으면 얼마나 더 커질지.
   grow: 2 → 옆 가구보다 2배 넓게 차지.
   flex-shrink → 복도가 좁아질 때 얼마나 줄어들지.
   flex-basis → 기본 가구 크기 (시작 크기).
   align-self → 특정 가구만 따로 위/중앙/아래 정렬.
   translate:요소를 현재 위치에서 이동시키는 변환 함수입니다.예시를 들
   2D:
   transform: translateX(100px); /_ X축 이동 _/
   transform: translateY(50px); /_ Y축 이동 _/
   transform: translate(100px, 50px);/_ X, Y 동시 _/
   transform: translate(50%, 50%); /_ 백분율 사용 _/
   3D:
   transform: translateZ(100px); /_ Z축 이동 _/
   transform: translate3d(x, y, z); /_ 3D 이동 _/
   처럼
   grid: 2차원 레이아웃 시스템으로, 행과 열을 동시에 다루는 가장 강력한 레이아웃 도구입니다. flex와 차이를 알아보면
   flexbox
   차원:1차원 (가로 또는 세로)
   주 용도:아이템 정렬, 메뉴, 단일 축 레이아웃
   간격:gap 지원
   제어 단위:아이템 중심

grid
차원:2차원 (가로 + 세로)
주 용도:전체 페이지 레이아웃, 격자 배치
간격:gap 지원
제어 단위:행/열 중심

⭐️반응형 background

👉background-image
background-image는 요소의 배경에 이미지를 설정하는 속성입니다. 기본 문법을 알아보면
.box {
background-image: url("image.jpg");
} 와 같이 쓸 수 있다. url쪽에는 사진이 있는 경로를 적습니다.

👉background-repeat
이 속성은 배경 이미지가 요소 안에서 어떻게 반복될지를 결정합니다. 예시를 들어보면
background-repeat: repeat; /_ 기본값 _/
값 종류로는 다음과 같다.
repeat-x: 가로방향으로 반복
repeat-y: 세로방향으로 반복
no-repeat: 반복 없이 이미지 1개만 표시

👉background-position

이 속성은 배경 이미지의 시작 위치를 결정합니다. 예시를 들면
background-position: center center;과 같이 쓸 수 있습니다. 키워드 값으로는 left, center, right (가로) top, center, bottom (세로)이고 두개를 조합해서도 사용할 수 있습니다.

👉background-size
이 속성은 배경 이미지가 요소 안에서 어떤 크기로 표시될지를 결정합니다. 값의 종류로는
auto (기본값), background-size: 100px;\*(단일값:가로 너비 100px, 세로는 비율에 맞게 자동 계산),background-size: 100px 50px;(두개값:가로 100px, 세로 50px → 비율이 무시됨),background-size: cover(요소 전체를 덮도록 이미지 확대/축소),background-size: contain(요소 안에 이미지 전체가 보이도록 확대/축소)를 들 수 있습니다.
👉축약형
이것들을 축약해서 사용할 수 있는데 기본문법으로
background: <color> <image> <position>/<size> <repeat> <origin> <clip> <attachment>; 이고 이는 순서가 딱히 중요하지 않는데 브라우저가 알아서 해석하기 떄문이다.
⭐️transform
transform 속성으로, 요소에 회전 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다.
translate:요소를 X축, Y축 방향으로 이동시킵니다. translate(x, y) → x는 가로 이동, y는 세로 이동
예시-transform: translate(50px, 20px); /_ 오른쪽 50px, 아래로 20px 이동 _/
scale:요소의 크기를 비율로 조정합니다. scale(x, y) → x는 가로 비율, y는 세로 비율
예시-transform: scale(2, 1.5); /_ 가로 2배, 세로 1.5배 _/
rotate:요소를 지정된 각도만큼 회전시킵니다. 단위: deg (도), rad (라디안), turn (회전 단위)
예시-transform: rotate(45deg); /_ 시계 방향으로 45도 회전 _/
skew:요소를 X축 또는 Y축 방향으로 기울임. skew(x-angle, y-angle)
예시- transform: skew(20deg, 10deg); /_ X축 20도, Y축 10도 기울이기 _/
matrix:위의 모든 변환(translate, scale, rotate, skew)을 행렬 수학 방식으로 한 번에 표현하는 방법. matrix(a, b, c, d, e, f)
a, d: scale (확대/축소)
b, c: skew (비틀기)
e, f: translate (이동)
예시- transform: matrix(1, 0.5, -0.5, 1, 30, 20);
⭐️transition
transition-property:어떤 속성을 애니메이션할지 지정.
예시- transition-property: background-color, transform;
transition-duration:애니메이션이 얼마나 걸릴지 (지속 시간).
예시-transition-duration: 0.3s; /_ 0.3초 동안 변화 _/
transition-timing-function:속도 곡선(가속/감속 패턴)을 정의.
linear: 일정한 속도
ease (기본값): 느리게 → 빠르게 → 다시 느리게
ease-in: 점점 빨라짐
ease-out: 점점 느려짐
ease-in-out: 느리게 시작 → 빠르게 → 느리게 끝
cubic-bezier(x1, y1, x2, y2): 직접 커브 정의
예시- transition-timing-function: ease-in-out;
transition-delay:애니메이션이 시작되기 전 대기 시간.
예시- transition-delay: 0.5s; /_ 0.5초 후에 시작 _/
transition-behavior: 현재 존재 x
⭐️animation
animation-name:연결할 @keyframes 이름 지정
예시-animation-name: fadeIn;
animation-duration:애니메이션이 한 번 실행되는 시간
예시-animation-duration: 2s;
animation-delay:애니메이션 시작 전 대기 시간
예시-animation-delay: 1s;
animation-direction:애니메이션 반복 시 방향 지정 normal (기본값): 순방향reverse: 역방향 alternate: 순방향 → 역방향 번갈아 실행 alternate-reverse: 역방향 → 순방향 번갈아 실행
예시-animation-direction: alternate;
animation-iteration-count:반복 횟수 지정
예시- animation-iteration-count: infinite;
animation-play-state:재생/정지 제어
예시-animation-play-state: paused;
animation-timing-function:속도 곡선(가속/감속 패턴)
예시-animation-timing-function: ease-in-out;
animation-fill-mode:애니메이션이 시작 전 / 끝난 후 어떤 상태를 유지할지 지정
예시-animation-fill-mode: forwards;
@keyframes:애니메이션 동작 과정을 단계별로 정의하는 규칙
예시-
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}
@keyframes slide {
0% { transform: translateX(-100%); }
50% { transform: translateX(50%); }
100% { transform: translateX(0); }
}
축약형:animation: name duration timing-function delay iteration-count direction fill-mode play-state;
⭐️CSS 방법론 BEM
BEM이란 CSS 클래스 이름을 체계적으로 작성하는 방법으로 Block,Element, Modifier의 줄임말입니다.
Block:Block은 그 자체로 의미를 가지는 독립적인 컴포넌트입니다. 페이지 어디에든 재사용할 수 있는 기능적 단위입니다. Block을 만들 때에는 명확한 의미를 가지고 있는 것이 좋고, 너무 일반적이거나 의미를 제대로 알 수 없는 공간에 사용하는 것은 좋지 않습니다.
Element:Block의 일부분으로, Block 안에서만 의미를 가지는 구성 요소입니다.Block과 Element는 \_\_ (더블 언더스코어)로 연결합니다.
Modifier:Modifier는 Block이나 Element의 모양, 상태, 동작을 변경합니다
BEM 사용시 유의사항

1. Element의 Element 만들기
2. Modifier만 단독 사용
3. 의미 없는 이름 사용
   BEM 도입 전 후 비교
   도입전:css파일 크기 증가, 클래스 의미 불명, 이름 중복 등 ->도입 후 단점이 사라짐
   참고자료:
   https://blinders.tistory.com/87
   https://developer.mozilla.org/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations
   https://developer.mozilla.org/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions

---

⭐️원시 타입
-boolean:참과 거짓을 나타냅니다. 주로 조건문에 사용됩니다.
-null:아직 값이 비어있는 경우 사용합니다. typeof null을 실행하면 object가 반환됩니다.
-undefined:변수는 선언했는데 아직 값이 주어지지 않은 경우입니다. int a;처럼 선언하면 undefined가 발생합니다.
-number:정수와 실수 구분 없이 모두 number를 사용합니다.
-string:string은 텍스트 데이터를 표현하는 타입입니다. 작은따옴표('), 큰따옴표("), 백틱(```)으로 감싸서 만들 수 있습니다.
-symbol:유일무이한 값을 만들 때 사용합니다.
-bigint: 아주 큰 정수를 나타낼 때 사용합니다.±9,007,199,254,740,991(2^53 - 1) 이상의 수를 나타낼 때 사용합니다.
⭐️객체 타입
원시타입을 제외한 모든 것이 객체타입입니다. 배열, 함수, 클래스로 알아보면 -배열:자바스크립트에서 배열은 만드는 방법에는

1. 배열 리터럴
   let matthew = [];
2. 생성자 함수로 배열 생성
   let arr = new Array();
   이 있다. 이런 Array에는 다양한 메소드가 있는데
   sort() : 배열 요소 정렬
   reverse() : 배열 순서 뒤집기
   join(sep) : 배열을 문자열로 합치기
   splice(start, deleteCount, ...items) : 요소 삭제/추가 (원본 변경)
   slice(start, end) : 배열 일부 잘라내기 (새 배열 반환)
   find(fn) : 조건 맞는 첫 번째 요소 반환
   filter(fn) : 조건 맞는 모든 요소 배열로 반환
   map(fn) : 각 요소를 변환해 새 배열 반환
   reduce(fn, init) : 누적 계산
   some(fn) : 하나라도 조건 만족 → true
   every(fn) : 모두 조건 만족 → true
   forEach(fn) : 각 요소 순회 (반환값 없음)

-함수:함수의 특징으로는 다음과 같습니다.

1.  선언 전체가 호이스팅됩니다. 호이스팅은 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다.
2.  함수 이름이 필수입니다.
3.  가독성과 디버깅에 유리합니다.
    함수는 일반적으로
    const divide = function divideFn(a, b) {
    return a / b;
    };
    이런식으로 호출되지만 자바스크립트에서는 화살표 함수 즉,
    const subtraction3 = (a, b) => {
    return a - b;
    };
    이런식으로도 호출이 가능합니다.화살표 함수는 자신만의 this가 없어서, 바깥 스코프의 this를 그대로 사용합니다.

-클래스:클래스는 객체를 만들기 위한 청사진입니다. 예시를 들겠습니다.
class Person {
// 생성자 (객체가 만들어질 때 실행)
constructor(name, age) {
this.name = name;
this.age = age;
}

// 메서드
sayHello() {
console.log(`안녕하세요, 저는 ${this.name}입니다.`);
}
}

// 객체 생성
const p1 = new Person("철수", 20);
p1.sayHello(); // 안녕하세요, 저는 철수입니다.
특징으로는

1. constructor : 객체 생성 시 초기화
2. 메서드 정의 : function 키워드 없이 정의 가능
3. new 키워드 필요 : 클래스로 만든 객체는 반드시 new로 생성
4. 상속 가능 : extends 와 super로 부모 클래스 상속
5. getter,setter을 추가해 내부 변수를 설정 가능합니다.

⭐️구조 분해 할당
구조 분해 할당은 배열의 값을 순서대로 꺼내어 변수에 담는 문법입니다. 예시를 들면
const arr = [1, 2, 3];

// 일반 방식
const a = arr[0];
const b = arr[1];

// 구조 분해
const [x, y] = arr;
console.log(x, y); // 1 2

여기에서 배열의 기본값을 다음과 같이 줄 수 도 있습니다.
const [a, b, c = 10] = [1, 2];
console.log(c); // 10

배열의 나머지를 다음과 같이 모아올 수도 있습니다.
const UMC = ['WEB', 'SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN'];
const [first, ...etc] = UMC;
console.log(first); // 'WEB'
console.log(etc); // ['SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN']

객체의 구조분해는 이런식으로 합니다.
const person = { name: "Alice", age: 25 };
// 일반 방식
const name1 = person.name;
// 구조 분해
const { name, age } = person;
console.log(name, age); // Alice 25

기본값설정도 배열과 마찬가지로 다음과 같이 설정 가능합니다.
const { city = "Seoul" } = person;
console.log(city); // Seoul

⭐️전개 연산자
전개 연산자는 배열이나 객체를 펼쳐서 새로운 배열/객체를 만드는 문법입니다.
배열 복사하는법
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]
배열 합치는법
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]
⭐️객체 초기자
객체 초기자는 변수 이름과 객체의 키 이름이 같을 때, 짧게 작성할 수 있는 문법입니다.
⭐️Array 프로토타입의 메서드
map:map은 배열의 각 요소를 변환해서 새로운 배열을 만들어주는 메서드입니다.
기본문법은 array.map((element, index, array) => {
// 새로운 값 반환
})이고
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n \* 2);
console.log(doubled); // [2, 4, 6, 8]
이런식으로 사용됩니다. 문자열도 똑같은 방식으로 사용 가능합니다.
filter:배열에서 조건을 만족하는 요소만 모아서 새로운 배열을 만드는 메서드입니다.
reduce:reduce()는 배열을 순회하면서 하나의 값으로 누적해 주는 메서드입니다.
기본문법은 array.reduce((accumulator, currentValue, index, array) => {
// 누적값 반환
}, initialValue); 이고 사용 예시는
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15
입니다.
forEach:forEach()는 배열을 순회하면서 각 요소에 대해 콜백 함수를 실행하는 메서드입니다. 배열 내부 값을 모두 출력합니다.
length:배열의 길이를 알 수 있습니다.
⭐️삼향 조건 연산자
세 개의 피연산자를 받는 유일한 연산자입니다. 간단한 조건을 판별할 때 if문 대신 사용하는데 사용 공식은 조건 ? 조건이 참일 때 실행할 값 : 조건이 거짓일 때 실행할 값;입니다.

⭐️태그 가져오기

- `getElementById('id')` → ID로 가져옵니다.
- `querySelector('선택자')` → CSS 선택자로 첫 번째 요소만 가져옵니다.
- `querySelectorAll('선택자')` → 모든 요소(NodeList)를 가져옵니다.
  ⭐️이벤트 리스너 추가하기
  addEventListener는 특정 동작(클릭, 입력 등)이 일어날 때 실행할 함수를 등록할 수 있습니다.
  ⭐️이벤트 리스너 제거하기
  removeEventListener는 함수 전달 참조를 제거합니다.
  ⭐️키보드와 마우스 이벤트
  removeEventListener와 addEventListener의 특정동작을 설정 할 수 있습니다. click(마우스 클릭),mouseover / mouseout(마우스 올림,내림),keydown / keyup(키보드 누름,뗌),input(입력창 값이 바뀜)이 있습니다.
  ⭐️태그 속성 다루기
  setAttribute, getAttribute, removeAttribute로 속성을 설정,가져오기,삭제 할 수 있습니다.
  ⭐️부모와 자식 태그 찾기
  속성의 부모,자식태그는 다음과 같이 설명됩니다.
  parentElement -부모요소입니다.
  children - 자식요소입니다.
  firstElementChild, lastElementChild - 첫번째 자식요소와 마지막 자식요소입니다.
  ⭐️새로운 태그 만들기
  document.createElement로 태그를 만들 수 있고 appendChild,append로 붙일 수 있습니다.
  ⭐️태그 복제하기
  cloneNode(true/false)를 사용하면 태그를 복사할 수 있습니다.
