# HTML 키워드 정리

## 시맨틱 태그
#### -> 의미가 있는 태그
- **`<header>`** : 웹사이트나 섹션의 머리말 부분
- **`<nav>`** : 네비게이션(메뉴) 링크들
- **`<main>`** : 문서의 주요 내용
- **`<article>`** : 독립적인 글이나 콘텐츠 (블로그 포스트, 뉴스 기사 등)
- **`<section>`** : 문서의 구획을 나누는 영역
- **`<aside>`** : 본문과 관련 있지만 독립적인 콘텐츠 (사이드바, 광고 등)
- **`<footer>`** : 웹사이트나 섹션의 바닥글
**장점 : 가독성과 유지보수 용이, 접근성 향상, SEO 효과, 표준준수 & 웹 호환성, 코드재사용성 향상**

## 멀티미디어 요소를 나타내는 태그
- **`<img>`** : 이미지 삽입
- **`<video>`** : 동영상 재생
- **`<audio>`** : 음성 파일 재생
- **`<canvas>`** : 그래픽이나 애니메이션을 그릴 수 있는 영역

**폼 관련 태그들:**

- `<form>` : 사용자 입력 양식
- `<input>` : 다양한 입력 필드
- `<button>` : 클릭 가능한 버튼
- `<select>`, `<option>` : 드롭다운 선택 메뉴

**텍스트 관련 태그들:**

- `<strong>` : 중요한 텍스트 (굵게)
- `<em>` : 강조 텍스트 (기울임)
- `<mark>` : 하이라이트된 텍스트

**리스트 관련 태그:**

- `<ul>` : 순서 없는 리스트
- `<ol>` : 순서 있는 리스트
- `<li>` : 리스트 항목
- `<dl>` : 정의 리스트
- `<dt>` : 정의 용어
- `<dd>` : 정의 내용

**테이블 관련 태그:**

- `<table>` : 테이블
- `<tr>` : 행
- `<th>` : 헤더 셀
- `<td>` : 데이터 셀
- `<thead>` : 테이블 헤더 그룹
- `<tbody>` : 테이블 바디 그룹
- `<tfoot>` : 테이블 푸터 그룹


## <head> 태그 : 
실제 화면에는 보이지 않음, 페이지에 대한 메타데이터를 포함
- 문서 타입 선언
- HTML 태그 언어 정의
- head 태그 상세 설명
```html
<head>
  <!-- 문서의 메타데이터 + UI상으로 보여지지 않는 정보들 -->
  <!-- SEO (타이틀, 설명, 저자), CSS 스타일, JS 링크 -->
  <!-- meta 태그를 통해 다양한 속성을 지정 가능 -->
  
  <!-- 문자 인코딩: UTF-8은 한글, 영어, 이모지까지 폭넓게 지원 -->
  <meta charset="UTF-8">
  
  <!-- IE 호환성: Edge 렌더링 엔진 사용하도록 설정 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  
  <!-- 반응형 웹: 사용자의 디바이스 크기에 맞게 콘텐츠 표시 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 브라우저 탭에 표시될 제목 -->
  <title>Document</title>
  
  <!-- CSS 파일 연결 -->
  <link rel="stylesheet" href="style.css">
  
  <!-- JavaScript 파일 연결 -->
  <script src="script.js"></script>
</head>
```

## body 태그 (시멘틱 태그 활용)
사용자가 화면으로 볼 수 있는 내용


## Element Level 태그
화면에 직접적인 UI요소를 나타냄
```html
<h1>
<h2>
.
.
<h6>

<address>
<blockquote>
<p> : UI를 나타내는 것
<pre>
<table>
<ol>
<ul>
<a>
<abbr> : 축약을 나타내요
<audio>
<b>
<span>
<cite>
<code>
<data>
<i>
<mark> : UI를 나타내는 것
```
**텍스트나 콘텐츠 자체를 표현할 때 사용**
하나의 독립적인 HTML 요소 자체를 기준으로 의미와 성격을 나타내는 개념
### Block-level Element (블록 요소)
> 한줄 전체를 차지
> 다른 요소와 줄바꿈이 자동 발생
> 대표 예: <div>, <p>, <section>, <article>, <header>, <footer>
### Inline-level Element (인라인 요소)
> 컨텐츠 안에 자연스럽게 섞임
> 줄바꿈 없이 텍스트 흐름 안에 위치
> 대표 예: <span>, <a>, <strong>, <em>, <img>



## Container Level 
여러 가지 요소를 담을 수 있는 태그

```
<div>
<section>
<article>
<header>
<footer>
<aside>
<nav>
<main>
```
구조를 나누고, 영역별 의미를 드러내는데 사용
다른 요소들을 포함할 수 있는 요소
- **특징:**
    - 내부에 **자식 요소(다른 태그)**를 포함할 수 있음
    - 레이아웃 구조를 잡을 때 주로 사용
    - 대표 예: `<div>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- **Inline-level Container**도 있을 수 있음
    - 예: `<a>` 안에 `<span>` 포함 가능


## block 요소
block 요소는 한 줄을 전부 차지함. 
줄이 자동으로 바뀌고, 다른 요소들은 그 다음 줄에 배치됨.

## Inline 요소
자기 크기만큼만 공간을 차지.
옆에 남은 공간이 부족하면, 자동으로 다음 줄로 넘어감

## Inline-block 요소
Inline처럼 한 줄에 배치 + Block처럼 크기 지정 가능 + 다른 Block 기능도 가능

디자인할 때 **박스들을 가로로 나란히 정렬**하고 싶은 경우 자주 사용

# CSS 키워드 정리


## 선택자 활용 스타일링

```
선택자 {
  속성1: "속성값1";
  속성2: "속성값2";
}
```

```
/** 1. 태그 선택자 */
p {
  color: red;
}

/** 2. ID 선택자 */
#matthew {
  color: red;
}

/** 3. class 선택자 */
.yongmin {
  color: red;
}

```

## 인라인 스타일링

```
<태그 style="속성: 값;">내용</태그>
```

사용자가 브라우저 설정에서 <h1> 스타일을 직접 바꿔두면, 그 사용자 설정이 개발자가 작성한 스타일보다 우선 적용된다.

## CSS 우선순위
1. 사용자 스타일 (User Style)
> 브라우저에 내장된 기본 스타일 (사용자 에이전트, 브라우저)
> 예: <h1>의 기본크기와 굵기
> 퍼블리싱 시 normalize.css나 reset.css로 초기화

2. 코드 스타일 (Code Style)
> 개발자가 작성한 CSS 코드
> 화면 디자인 목적

3. 사용자 지정 스타일 (User Style)
> 개발자가 아닌, 웹 사이트의 사용자가 설정하는 StyleSheet를 의미
> 일부 사용자는 시각적 불편을 감소시키기 위한 목적 등으로, 자신만의 StyleSheet를 브라우저에 적용함

## 코드 스타일 우선순위

```css
<h1>태그</h1>               <!-- 태그 선택자 -->
<h1 class="cls">클래스</h1>   <!-- 클래스 선택자 -->
<h1 id="id">아이디</h1>       <!-- ID 선택자 -->
<h1 style="color: purple;">인라인</h1> <!-- 인라인 스타일 -->
```
**우선순위 : 태그 < 클래스 < #아이디 < 인라인 < !important**

```css
.sweet-potato-class {
  color: red !important; /* 강제 적용 */
}
```
💡 동일 레벨에서는 나중에 작성한 CSS가 우선 적용됨
```css
.sweet-potato-class { color: red; }
.sweet-potato-class { color: blue; } /* 최종 적용: blue */
```
즉, 같은 클래스에서 나중에 작성한 속성이 최종 적용됨

```css
.box{
  box-sizing: border-box;
}
```
border-box는 padding이랑 border를 아무리 줘도, 우리가 설정한 width랑 height은 그대로 유지됨

### border
> 요소 안쪽 테두리
> 레이아웃에 영향 있음 (크기 변함)
> border-radius 적용 가능

### Outline
> 요소 바깥 테두리
> 레이아웃에 영향 없음
> 항상 사각형, border-radius 영향 없음
> 포커스 강조용으로 자주 사용

### relative
> position : relative
> 원래 본인이 있어야 할 위치를 기준으로, 좌표 프로퍼티 (top, bottom, left, right) CSS 스타일링을 통해 위치를 이동시키는 속성

**이동 방향 이해하기:**
- 위 → 아래로 이동: `top` CSS 적용
- 왼쪽 → 오른쪽으로 이동: `left` CSS 적용
- 아래 → 위로 이동: `bottom` CSS 적용
- 오른쪽 → 왼쪽으로 이동: `right` CSS 적용


### absolute
> 부모/조상 요소를 기준으로 위치가 결정
> **기준이 되는 부모/조상 요소:**

- `position: relative`
- `position: absolute`
- `position: fixed`

이 중 가장 가까운 조상을 기준으로 삼아요. 만약 아무도 position이 설정되어 있지 않다면? 최상위 요소인 `<body>`를 기준으로 움직여요!
> 부모 요소를 기준으로 위치를 정하고 싶으면, 반드시 그 부모 요소에 **position: relative** 를 선언해야함
> absolute로 설정하면 BOX2가 Document Flow에서 빠지면서 다른 요소들에 영향을 주지 않게 됨

### fixed
> 부모 요소와 전혀 관계없이 브라우저 화면을 기준으로 위치가 고정됨
스크롤을 내려도 화면의 같은 위치에 고정되는 것
네비게이션 바나 플로팅 버튼을 만들 때 유용함
fixed는 document flow에서 완전히 빠져나옴
다른 차원에 존재하는 것처럼 다른 요소들과 겹칠 수 있다.

### sticky
> relative와 fixed의 하이브리드 속성
> 평소에 relative 처럼 동작하다가, 특정 스크롤 위치에 도달하면 fixed 처럼 화면에 딱 달라붙는다
> document flow를 유지한다
> 스크롤 임계점에 도달하면 고정된다
> 부모 요소의 범위를 벗어나지 않는다.

```css
 .box2 {
      background-color: purple;
      position: sticky;
      top: 40px;  /* 상단에서 40px 위치에 도달하면 고정! */
    }
```

### text-align
> 블록 요소 내부의 인라인 콘텐츠를 수평 정렬하는 속성
```css
text-align: left;     /* 왼쪽 정렬 (기본값) */
text-align: right;    /* 오른쪽 정렬 */
text-align: center;   /* 가운데 정렬 */
text-align: justify;  /* 양쪽 정렬 */
text-align: start;    /* 문서 시작 방향 */
text-align: end;      /* 문서 끝 방향 */
```
#### 적용 대상
- ✅ 텍스트
- ✅ 인라인 요소 (`<span>`, `<a>`, `<img>`)
- ✅ 인라인 블록 (`display: inline-block`)
- ❌ 블록 요소 자체는 정렬 불가예요

### margin
> 요소의 외부 여백을 설정하는 속성

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
 - margin collapse : 인접한 블록의 상하 마진은 겹침
 - auto 값 : 남은 공간을 자동으로 배분
 - 음수 값도 사용 가능


 ### flex
 1차원 레이아웃 시스템으로, 요소들을 행 또는 열로 배치
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

 item 속성 (자식)
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

 ### translate
 요소를 현재 위치에서 이동시키는 변환함수.  document Flow에 영향을 주지 않는다
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
 #### 핵심 특징

- **GPU 가속**: 성능이 우수해요
- **백분율 기준**: 자기 자신의 크기가 기준이에요
- **애니메이션**: transition, animation과 함께 자주 사용돼요
- **position과 조합**: absolute와 함께 가운데 정렬에 활용돼요


```css
/* 변환 기준점 */
transform-origin: center;     /* 중앙 (기본값) */
transform-origin: top left;   /* 좌상단 */
transform-origin: 50% 50%;    /* 백분율 */

/* 3D 설정 */
transform-style: preserve-3d;  /* 3D 공간 유지 */
perspective: 1000px;           /* 원근감 */
```

### grid
2차원 레이아웃 시스템, 행과 열

container 속성 (부모)
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
item 속성 (자식)
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

### 반응형 background
- background-image
    배경으로 이미지를 넣을때
    
- background-repeat
    이미지 반복 여부 ( repeat, no-repeat, repeat-x, repeat-y) 
    
- background-position
    이미지 위치 조정( center, top right, 50%  50%)
    
- background-size
    이미지 크기 조절 ( cover, contain, 100px 50px)
    
- 축약형
    background: [배경색] [이미지] [반복] [위치] [크기] [스크롤] [기타옵션];

### transform
회전 크기 조절, 기울이기, 이동효과
좌표 공간을 변경하는
> translate() : 현재 위치 기준으로 이동시키는 속성
> scale() : 크기변형
> rotate() : 회전 (deg)
> skew() : 기울이기 (deg)
> matrix(a, b, c, d, tx, ty) : translate + scale + rotate + skew를 동시에 표현 가능

### transition
#### 1. transition-property
효과를 적용할 속성을 지정
```
transition-property: none | all | <property>;
"
onmouseover="this.style.backgroundColor='#f44336';"
onmouseout="this.style.backgroundColor='#4caf50';">
```
property -> width, height, background-color 등이 올 수 있음

#### 2. transition-duration
효과가 적용되는 시간을 설정
```css
transition-duration: 0.5s; /* 초 단위 */
transition-duration: 500ms; /* 밀리초 단위 */
```

#### 3. transition-timing-function
속도의 진행 곡선(가속/감속 패턴)을 설정하는 속성
```css
transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(...);
```
linear : 처음부터 끝까지 속도가 일정
ease(기본값) : 천천히 시작 → 빨라졌다가 → 천천히 끝남
ease-in : 시작은 느리게, 끝날수록 빨라짐
ease-out : 빠르게 시작, 끝날수록 느려짐
ease-in-out : 시작과 끝은 느리고, 중간은 빠름
cubic-bezier(x1,y1,x2,y2) : 사용자 정의 속도 곡선 (베지어 곡선)
ex → cubic-bezier(0.25, 1, 0.5, 1) : 탄성 느낌

#### 4. transition-delay
transition이 시작되기 전까지 기다리는 시간을 설정하는 속성
```css
transition-delay: 2s;   /* 2초 후에 시작 */
transition-delay: 500ms; /* 0.5초 후에 시작 */
```

#### 5. transition-behavior
: normal -> discrete 속성에 대해서는 transition을 동작시키지 않음
: allow-discrete -> discrete 속성 변경도 transition으로 처리 가능
*discrete : '이전 값 -> 다음 값'이 중간값이 없는 경우가 discrete속성


### animation
#### 1. animation-name
어떤 애니메이션을 실행할지 지정하는 역할

#### 2. animation-duration
몇초동안 실행할지 :3s

#### 3. animaion-delay
애니메이션이 시작되기 전 지연시간

#### 4. animaiton-direction
애니메이션 재생 방향
normal : 정방향
reverse : 역방향
alternate : 왕복(정→역→정…)
altername-reverse : 역→정→역…

#### 5. animation-iteration-count
애니메이션 반복 횟수
숫자 또는 infinite(무한반복)

#### 6. animation-play-state
애니메이션 상태
running : 실행중
paused : 일시정지

#### 7. animation-timing-function
애니메이션 속도 곡선
-ease, linear, ease-in, ease-out, ease-in-out
-cubic-bezier(x,y,z,w)

#### 8. animation-fill-mode
애니메이션이 끝난 후 상태
none : 기본 상태로 돌아감
forwards : 마지막 상태 유지
backwards : 시작 상태 유지
both : 시작과 끝 상태 모두 유지

#### 9. @keyframes
애니메이션의 단계 
from : 시작상태 \ to : 종료상태

```css
@keyframes move {
  from { transform: translateX(0) scale(0.5);  }
  to { transform: translateX(100px) scale(1); }
}
```

#### 10. 축약형
```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;

.box {
  animation: move 2s ease-in-out 1s infinite alternate forwards running;
}
```
- `move`: `@keyframes` 이름
- `2s`: 실행 시간
- `ease-in-out`: 속도 곡선
- `1s`: 시작 지연 시간
- `infinite`: 무한 반복
- `alternate`: 왕복 방향
- `forwards`: 마지막 상태 유지
- `running`: 실행 중


# JavaScript 키워드 정리

## 원시타입 (primitive Type)
객체가 아닌 다른 모든 타입
객체가 아니기 때문에 메서드를 갖고 있지 x
### boolean
참과 거짓을 가지는 데이터 타입
조건문에서 사용
```javaScript
if (1) {
	// 1은 true처럼 동작해요.
}

if (0) {
	// 0은 false처럼 동작해요.
}

// NaN(Not A Number, /næn/)은 연산 과정에서 잘못된 입력을 받았음을 나타내는 기호에요.
if (NaN) {
	// NaN은 false처럼 동작해요.
}

// null, undefined, 빈 문자열("")도 falsy 값이에요.
```
### null
값이 아직 없거나 비어있음
의도적으로 변수에 값이 없다는 걸 나타내고 싶을 때
```js
let matthew = null;
console.log(matthew); // null
```
typeof null을 실행하면 'object'가 반환된다
```js
typeof null === 'object'; // true
```
### undefined
변수를 선언했지만 아직 값을 할당하지 않았을 때 나타나는 값
객체에 없는 프로퍼티를 접근할 때도 undefined가 반환된다
```js
let matthew;
matthew; // undefined

const matthewObject = {};
matthewObject.key; // undefined
```
### number
자바스크립트는 bigint가 나오기 전까지 모든 숫자를 number 타입으로 다뤘음
ECMAScript 표준에 따르면 -(2^53 - 1)부터 2^53 - 1 사이의 값을 안전하게 표현할 수 있어요.
```js
42;       // 정수
3.14159;  // 부동 소수점
0b1010;   // 2진수
0o755;    // 8진수
0x1A3;    // 16진수

// 숫자를 더 읽기 쉽게 세 자릿수 마다 _를 구분하여 표현해요.
1_000_000; 
```
### string
텍스트 데이터를 표현하는 타입
작은따옴표, 큰따옴표, 백틱(```)으로 감싸서 만들 수 있다
```js
let str1 = 'Matthew';      // 작은따옴표
let str2 = "Ohtani";      // 큰따옴표
let str3 = `hi ${str1}`; // 백틱(템플릿 리터럴)
```
문자열은 유니코드 기반이라 다양한 언어와 이모지도 표현할 수 있다
문자열 길이는 length로 알 수 있음
자주 쓰는 메서드로는 toUpperCase(), toLowerCase(), slice(), split(), replace() 등이 있다.

```Js
let text = 'Hello Matthew';
console.log(text.length);       // 13
console.log(text.toUpperCase()); // HELLO MATTHEW
console.log(text.slice(0, 5));   // Hello
```

### symbol
고유한 값을 만들 때 사용
symbol() 함수를 사용해서 새로운 심벌을 만들 수 있다

```js
const yongmin = Symbol('Matthew');
const sua = Symbol('Matthew');

yongmin === sua; // false
```

### bigint
아주 큰 정수를 표현할 수 있는 타입,
bigint는 숫자 뒤에 n을 붙이거나 BigInt() 함수를 사용해서 만들 수 있다
`bigint`는 `number`와 직접 섞어 쓸 수 없다

```js
const num = 10;
const big = 10n;

console.log(num + big); 
// TypeError: Cannot mix BigInt and other types
```

대신 `bigint`끼리만 연산해야 한다
```js
console.log(10000000000000000000n + 10n); 
// 10000000000000000010n
```


## 객체 타입 (Object Type)

### 배열

#### 1. 배열 리터럴 []
```js
// 배열 리터럴 []를 사용해서 만드는 방법이에요
let matthew = [];

// 각각 인덱스를 [] 안에 넣어 배열 안에 값을 할당할 수 있어요
matthew[0] = 'kim';
matthew[1] = 'yong';
matthew[2] = 'min';

// i = 0부터 matthew의 길이(총 3)까지 하나씩 증가하면서 출력해요
for (let i = 0; i < matthew.length; i++) {
  console.log(matthew[i]);
}
```

```js
// 배열 생성과 동시에 초기 값을 넣을 수 있어요
let arr = ['kim', 'yong', 'min'];

// 배열의 크기만 미리 지정할 수도 있어요
let arr = [,,,]; // undefined가 출력돼요
```

#### 2. array() 생성자 함수로 배열 생성

```jsx
// Array()를 사용해 빈 배열을 만들 수 있어요
let arr = new Array();

arr[0] = 'kim';
arr[1] = 'yong';
arr[2] = 'min';

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
```js
// 값을 할당한 채로 배열을 만들 수 있어요
let arr = new Array('kim', 'yong', 'min');

// 배열의 크기를 지정해서 만들 수도 있어요
let arr = new Array(3);

// 배열의 크기를 지정한 후 원하는 값으로 채워넣을 수 있어요
new Array(20).fill(0);
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

#### array method
sort()
join()
reverse()
splive()
slice()
find()
filter()
map()
reduce()
some()
every()
forEach()


### 함수
자바스크립트의 함수는 일급 객체라서 변수에 담을 수 있고, 인자로 넘기거나 반환값으로 돌려줄 수 있어요. 선언 방식에 따라 호이스팅과 this 바인딩 등 동작이 달라지니 차이를 정확히 이해하는 게 좋아요.

**1) 함수 선언문(Declaration)**

함수 이름으로 직접 선언하는 방식이에요. 호이스팅이 되어서, 선언보다 먼저 호출해도 동작해요.

```jsx
// 선언 이전 호출도 가능해요 (호이스팅 덕분이에요)
console.log(subtraction(5, 3)); // 2예요

function subtraction(a, b) {
  return a - b;
}
```

특징 요약

- 선언 전체가 호이스팅돼요 → 선언 전 호출 가능해요
- 함수 이름이 필수예요
- 가독성과 디버깅에 유리해요

### 2) 함수 표현식(Expression)

함수를 **값처럼 변수에 할당**하는 방식이에요. `const/let`에 담는 경우, **TDZ(Temporal Dead Zone)** 때문에 **선언 전에 호출하면 에러**가 나요.

```jsx
// 선언 이전 호출은 에러예요 (TDZ 때문이에요)
try {
  console.log(subtraction2(5, 3));
} catch (e) {
  console.log(e.name); // ReferenceError예요
}

const subtraction2 = function (a, b) {
  return a - b;
};

console.log(subtraction2(5, 3)); // 2예요
```

- 특징 요약이에요
    - 변수에 담기 때문에 **선언 이후**에만 호출해요
    - **익명** 또는 **기명 함수 표현식**이 가능해요
    - 콜백, 클로저, 고차 함수에서 많이 써요

> 기명 함수 표현식은 스택 트레이스가 좋아져 디버깅에 유리해요.
>


### 3) 화살표 함수(Arrow Function)

간결한 문법과 **렉시컬 this**가 핵심이에요. 자체 `this`/`arguments`/`new`가 없어요.

```jsx
const subtraction3 = (a, b) => {
  return a - b;
};

console.log(subtraction3(5, 3)); // 2예요
```

• **본문이 한 줄**이면 중괄호와 `return`을 생략할 수 있어요.

```jsx
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5예요
```

• **객체 리터럴을 바로 반환**하려면 괄호로 감싸요.

```jsx
const makeUser = (name) => ({ name });
console.log(makeUser('매튜')); // { name: '매튜' }예요
```

- **렉시컬 this** 예시예요

화살표 함수는 자신만의 `this`가 없어서, **바깥 스코프의 this**를 그대로 써요. 객체 메서드 안에서 콜백에 자주 사용해요.

```jsx
const person = {
  name: '매튜',
  sayHi() { console.log(this.name); },      // 메서드의 this는 person이에요
  sayHiArrow: () => console.log(this.name), // 화살표의 this는 바깥(전역)이에요
};

person.sayHi();       // '매튜'예요
person.sayHiArrow();  // undefined일 수 있어요 (전역 this를 참조해요)
```

- 주의해요
    - `new`로 호출할 수 없어요(생성자 불가예요)
    - `arguments`가 없어요(아래처럼 **rest 파라미터**를 써요)



## 4) 호이스팅(Hoisting)

- **함수 선언문**: 선언 전체가 끌어올려져서 **선언 전에 호출**해도 돼요.
- **함수 표현식/화살표 함수**: `const/let`에 담으면 **TDZ** 때문에 선언 전 접근 시 `ReferenceError`에요.

```jsx
// 함수 선언문은 가능해요
console.log(declared(2, 3)); // 5예요
function declared(a, b) { return a + b; }

// 표현식/화살표는 불가능해요
try { console.log(expr(2, 3)); } catch (e) { console.log(e.name); } // ReferenceError예요
const expr = function(a, b) { return a + b; };

try { console.log(arrow(2, 3)); } catch (e) { console.log(e.name); } // ReferenceError예요
const arrow = (a, b) => a + b;
```

### 클래스 (class)

클래스는 객체를 만들기 위한 **청사진(설계도)**이에요.

`class` 키워드로 선언하고, `constructor` 메서드에서 초기 데이터를 받아 필드에 할당할 수 있어요.

```jsx
// 클래스 선언
class Student {
  constructor(name, school) {
    // 필드예요
    this.name = name;
    this.school = school;
  }
}
```

---

### 메서드 추가하기

클래스 안에 메서드를 정의해서 객체가 가진 동작을 표현할 수 있어요.

```jsx
// 클래스 선언
class Student {
  constructor(name, school) {
    this.name = name;
    this.school = school;
  }
  
  // 메서드예요
  introduction() {
    console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고 있어요`);
  }
}
```

---

### 객체 생성하기

`new` 키워드를 사용하면 설계도를 바탕으로 새로운 객체를 만들 수 있어요.

```jsx
const matthew = new Student('matthew', '상명대학교');
console.log(matthew.name);    // 'matthew'
console.log(matthew.school);  // '상명대학교'
matthew.introduction();       // '안녕하세요, matthew입니다. 상명대학교에 다니고 있어요'
```

### Getter / Setter

클래스에는 **getter와 setter**라는 특별한 메서드를 정의할 수 있어요.

- **getter**: 값을 가져올 때 실행되는 메서드예요 (`.프로퍼티`처럼 접근 가능해요).
- **setter**: 값을 설정할 때 실행되는 메서드예요 (`=` 할당 시 동작해요).



- `getter`는 **읽을 때** 실행돼서, 마치 프로퍼티처럼 자연스럽게 값을 가져올 수 있어요.
- `setter`는 **할당할 때** 실행돼서, 값 변경 로직을 제어할 수 있어요.
    
    이를 활용하면 **데이터 은닉, 검증, 로깅** 등을 쉽게 구현할 수 있어요.


React에서 자주 사용하는 자바스크립트 문법 
- **구조 분해 할당(Destructuring assignment)**
    
    ### **구조 분해 할당 (배열)**
    
    구조 분해 할당은 배열의 값을 **순서대로 꺼내어 변수에 담는 문법**이에요.
    
    React에서 자주 쓰이는 `useState` 훅도 구조 분해 할당의 예시예요.
    
    ```tsx
    const [yongmin, setYongmin] = useState('초기값');
    ```
    
    여기서 `yongmin`은 현재 값이고, `setYongmin`은 값을 바꾸는 함수예요.
    
    ---
    
    **기본 사용 예시예요**
    
    ```tsx
    const UMC = ['WEB', 'SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN'];
    
    const [first, , , , , last] = UMC;
    
    console.log(first); // 'WEB'이에요
    console.log(last);  // 'DESIGN'이에요
    ```
    
    - 쉼표 위치에 따라 어떤 값이 들어갈지 결정돼요.
    - 배열이 길면 가독성이 떨어져서, 보통 배열이 짧을 때 활용해요.
    
    ---
    
    **기본값을 줄 수도 있어요**
    
    ```tsx
    const array = [1, 2];
    const [a = 'KIM', b = 'YONG', c = 'MIN'] = array;
    
    console.log(a); // 1이에요
    console.log(b); // 2예요
    console.log(c); // 'MIN'이에요 (배열에 값이 없어서 기본값이 들어갔어요)
    ```
    
    - 배열에 값이 없으면 `undefined` 대신 지정한 기본값을 써요.
    
    ---
    
    **나머지를 모아오기 (...rest)예요**
    
    ```tsx
    const UMC = ['WEB', 'SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN'];
    const [first, ...etc] = UMC;
    
    console.log(first); // 'WEB'이에요
    console.log(etc);   // ['SPRING', 'NODE', 'iOS', 'Android', 'PLAN', 'DESIGN']예요
    ```
    
    • 나머지 요소들은 전개 연산자(`...`)로 모아서 새로운 배열로 받을 수 있어요.
    
    ---
    
    ### 구조 분해 할당 (객체)
    
    객체는 이름(키)을 기준으로 값을 꺼내와요. 배열처럼 순서가 아니라, 속성 이름이 기준이에요.
    
    ```tsx
    const myName = {
      kim: '김',
      yong: '용',
      min: '민',
    };
    
    const { kim, ...rest } = myName;
    
    console.log(kim);  // '김'이에요
    console.log(rest); // { yong: '용', min: '민' }이에요
    ```
    
    ---
    
    **기본값을 줄 수도 있어요**
    
    ```tsx
    const myName = {
      yong: '용',
      min: '민',
    };
    
    const { yong = '야', min = '호', yaho = '야호' } = myName;
    
    console.log(yong); // '용'이에요
    console.log(min);  // '민'이에요
    console.log(yaho); // '야호'예요
    ```
    
    • 없는 속성은 `undefined`가 되지만, 기본값을 지정하면 그 값이 들어가요.
    
    ---
    
    ### **React에서 props에 자주 사용해요**
    
    부모에서 자식 컴포넌트로 값을 전달할 때, 구조 분해 할당으로 간단히 꺼내 쓸 수 있어요.
    
    ```tsx
    // props.name, props.age 이렇게 쓰지 않고
    // 구조 분해 할당으로 바로 꺼낼 수 있어요
    function ChildComponent({ name, age }) {
      return (
        <>
          <h1>안녕하세요 {name}입니다</h1>
          <span>{age}살 입니다</span>
        </>
      );
    }
    ```
    
    • React 코드를 처음 보면 어렵게 느껴질 수 있지만, 단순히 **객체 구조 분해 할당**을 활용한 문법이에요.
    
- **전개 연산자 (Spread Operator)**
    
    ### 전개 연산자 (Spread Operator)
    
    전개 연산자는 **배열이나 객체를 펼쳐서 새로운 배열/객체를 만드는 문법**이에요.
    
    React 프로젝트에서는 state 업데이트나 데이터 합성에 아주 자주 사용돼요.
    
    ---
    
    **배열 합성 예시예요**
    
    ```tsx
    const yaho = ['y', 'a'];
    const realYaho = [...yaho, 'h', 'o'];
    
    console.log(realYaho); 
    // ['y', 'a', 'h', 'o']예요
    ```
    
    • 예전에는 `concat`, `push` 등을 사용해야 했지만, 전개 연산자로 훨씬 간단하게 합칠 수 있어요.
    
    ---
    
    **참조와 복사 차이예요**
    
    ```tsx
    const yongmin = ['Kim', 'Yong', 'Min'];
    const yongmin2 = yongmin;
    
    console.log(yongmin === yongmin2); 
    // true예요 (같은 참조를 가리켜요)
    ```
    
    - 전개 연산자를 쓰면 실제 값을 복사해서 새로운 배열을 만들 수 있어요.
    - 따라서 원본 배열에 영향을 주지 않아요.
    
    ---
    
    ### 전개 구문 (객체)
    
    전개 연산자는 객체에도 쓸 수 있어요.
    
    여러 객체를 합치거나, 새로운 속성을 추가할 때 편리해요.
    
    ```tsx
    const KIM_YONG_MIN = {
      Kim: '김',
      Yong: '용',
      Min: '민',
    };
    
    const KIM_YONG_MIN_2 = {
      Ma: '매',
      tthew: '튜',
    };
    
    const EN_KO_NAME = { ...KIM_YONG_MIN, ...KIM_YONG_MIN_2 };
    
    console.log(EN_KO_NAME);
    // {Kim: '김', Yong: '용', Min: '민', Ma: '매', tthew: '튜'}예요
    ```
    
    ---
    
    **속성 덮어쓰기 순서예요**
    
    ```tsx
    const kim = {
      k: 'K',
      i: 'I',
      m: 'M',
    };
    
    const object1 = {
      ...kim,
      m: 'N',
    }; 
    // {k: 'K', i: 'I', m: 'N'}예요
    
    const object2 = {
      m: 'N',
      ...kim,
    }; 
    // {m: 'M', k: 'K', i: 'I'}예요
    ```
    
    - 뒤에 오는 값이 앞의 값을 덮어써요.
    - 따라서 전개 연산자의 위치에 따라 결과가 달라져요.
    
- **객체 초기자(Object shorthand assignment)**
    
    ### 객체 초기자 (Object Shorthand Assignment)
    
    객체 초기자는 **변수 이름과 객체의 키 이름이 같을 때, 짧게 작성할 수 있는 문법**이에요.
    
    자바스크립트에서 객체를 만들 때 아주 많이 활용돼요.
    
    ---
    
    **기본 예시예요**
    
    ```jsx
    const easy = 'easy';
    const hard = 'hard';
    
    // 보통은 이렇게 작성해요
    const difficulty1 = {
      easy: easy,
      hard: hard,
    };
    
    // 하지만 키와 변수 이름이 같으면 이렇게 줄일 수 있어요
    const difficulty2 = {
      easy, // :easy가 생략됨
      hard,
    };
    
    console.log(difficulty2); 
    // {easy: 'easy', hard: 'hard'}예요
    ```
    
- **Array 프로토타입의 메서드**
    - **map**
        
        ### map
        
        `map`은 **배열의 각 요소를 변환해서 새로운 배열을 만들어주는 메서드**예요.
        
        원본 배열은 바뀌지 않고, 결과만 새 배열로 반환돼요.
        
        ---
        
        **기본 예시예요**
        
        ```jsx
        const numbers = [1, 2, 3, 4, 5, 6];
        
        const numbersPlusTwo = numbers.map((number) => number + 2);
        
        console.log(numbersPlusTwo);
        // [3, 4, 5, 6, 7, 8]이에요
        ```
        
        - `number` → 현재 배열 요소를 나타내요.
        - 두 번째 인자 `index` → 현재 순회 중인 위치를 알 수 있어요.
        - 세 번째 인자 `array` → 원본 배열 자체를 가리켜요.
        
        즉, `map((element, index, array) => {...})` 형태로 쓸 수 있어요.
        
        ---
        
        ### React에서의 활용 예시예요
        
        React에서는 `map`을 이용해 배열 데이터를 JSX 요소로 바꿔 그릴 때 많이 써요.
        
        ```tsx
        const KimYongMin = ['김', '용', '민'];
        
        const ReturnElement = KimYongMin.map((name) => {
          return <div key={name}>{name}</div>;
        });
        ```
        
        - `key` 속성은 React가 리스트를 효율적으로 업데이트하기 위해 꼭 필요해요.
        - `map`으로 반복 렌더링할 때, 고유한 값을 `key`로 주는 게 좋아요.
        
    - **filter**
        
        ### filter
        
        `filter()`는 **배열에서 조건을 만족하는 요소만 모아서 새로운 배열을 만드는 메서드**예요.
        
        원본 배열은 바뀌지 않고, 걸러낸 결과만 새 배열로 돌려줘요.
        
        ---
        
        **기본 예시예요**
        
        ```tsx
        const words = ['sweetPotato', 'Potato', 'haha', 'yaho'];
        
        // 길이가 5 이하인 단어만 남겨요
        const answer = words.filter((word) => word.length < 6);
        
        console.log(answer);
        // ['haha', 'yaho']예요
        ```
        
        ---
        
        ### 인자 설명이에요
        
        `filter`의 콜백 함수는 세 가지 인자를 받을 수 있어요.
        
        - `element` → 현재 배열의 요소예요.
        - `index` → 현재 순회 중인 인덱스예요.
        - `array` → 원본 배열 자체예요.
        
        예시:
        
        ```tsx
        const nums = [10, 20, 30];
        
        const result = nums.filter((num, idx, arr) => {
          console.log(`요소: ${num}, 인덱스: ${idx}, 원본: ${arr}`);
          return num > 15;
        });
        
        // [20, 30]이에요
        ```
        
        ---
        
        ### 특징이에요
        
        - 조건에 맞는 요소만 남기고 나머지는 버려요.
        - 조건을 통과하지 못한 경우는 결과 배열에 포함되지 않아요.
        - 반환된 새 배열은 원본과 **길이가 다를 수도 있어요**.
        
    - **reduce**
        
        ### reduce
        
        `reduce()`는 배열을 순회하면서 **하나의 값으로 누적해 주는 메서드**예요.
        
        합계, 평균, 문자열 합치기, 객체 집계 등 다양한 상황에서 쓸 수 있어요.
        
        ---
        
        **기본 예시예요**
        
        ```tsx
        const numbers = [10, 20, 30, 40, 50];
        
        // 초기값 0부터 시작해서 모든 요소를 더해요
        const sum = numbers.reduce((acc, cur) => {
          return acc + cur;
        }, 0);
        
        console.log(sum); 
        // 150이에요
        ```
        
        - `acc` (accumulator): 누적된 값을 의미해요.
        - `cur` (current): 현재 순회 중인 요소예요.
        - 두 번째 인자로 준 `0`: 초깃값(initial value)이에요.
        
        ---
        
        **문자열 합치기 예시예요**
        
        ```tsx
        const chars = ['고', '구', '마'];
        
        const word = chars.reduce((acc, ch) => acc + ch, '');
        
        console.log(word);
        // '고구마'예요
        ```
        
        ---
        
        ### 인자 설명이에요
        
        `reduce`의 콜백은 최대 4개의 인자를 받아요.
        
        1. `accumulator` → 누적된 값이에요.
        2. `currentValue` → 현재 요소예요.
        3. `currentIndex` → 현재 인덱스예요.
        4. `array` → 원본 배열이에요.
        
        ---
        
        ### 특징이에요
        
        - 초기값을 주면 **빈 배열에도 안전하게 동작**해요.
        - 초기값이 없으면 배열의 첫 번째 요소가 초기값이 돼요.
        - `reduce`는 숫자뿐 아니라 문자열, 객체, 배열 등 원하는 형태로 누적할 수 있어요.
    - **forEach**
        
        ### forEach
        
        `forEach()`는 배열을 순회하면서 **각 요소에 대해 콜백 함수를 실행하는 메서드**예요.
        
        배열 요소를 하나씩 처리할 때 간단하게 쓸 수 있어요.
        
        ---
        
        **기본 예시예요**
        
        ```tsx
        const Matthew = ['M', 'A', 'T', 'T', 'H', 'E', 'W'];
        
        Matthew.forEach((alpha) => console.log(alpha));
        
        // 출력 결과
        // M
        // A
        // T
        // T
        // H
        // E
        // W
        ```
        
        ---
        
        ### 인자 설명이에요
        
        `forEach`의 콜백 함수는 세 가지 인자를 받아요.
        
        1. `element` → 현재 배열의 요소예요.
        2. `index` → 현재 요소의 인덱스예요.
        3. `array` → 원본 배열이에요.
        
        예시:
        
        ```jsx
        const arr = ['고구마', '매튜', '김용민'];
        
        arr.forEach((item, idx, origin) => {
          console.log(`인덱스: ${idx}, 값: ${item}, 원본: ${origin}`);
        });
        ```
        
        ---
        
        ### 특징이에요
        
        - **반환값이 없어요.** 항상 `undefined`를 돌려줘요.
        - 단순히 콜백을 실행만 하고, `map`처럼 새로운 배열을 만들지 않아요.
        - 중간에 `break`를 걸 수 없어서, 조건에 따라 멈추고 싶다면 `for`문이나 `some`, `every`를 사용하는 게 좋아요.
        
    - **length**
        
        ### length
        
        `length`는 배열의 **요소 개수(길이)**를 알려주는 속성이에요.
        
        배열의 마지막 인덱스를 알거나, 반복문에서 조건으로 자주 활용돼요.
        
        ---
        
        ### 기본 예시예요
        
        ```jsx
        const Matthew = ['M', 'A', 'T', 'T', 'H', 'E', 'W'];
        
        console.log(Matthew.length);
        // 7이에요
        ```
        
        ---
        
        ### 응용 예시예요
        
        ```jsx
        const arr = ['고구마', '매튜', '김용민'];
        
        for (let i = 0; i < arr.length; i++) {
          console.log(arr[i]);
        }
        // 고구마
        // 매튜
        // 김용민
        ```
        
        `arr.length`를 쓰면 배열 크기가 바뀌어도 자동으로 반복 횟수가 맞춰져서 편리해요.
        
- **삼항 조건 연산자 (Ternary Operator)**
    
    ### 삼항 조건 연산자
    
    삼항 조건 연산자는 **JavaScript에서 세 개의 피연산자를 받는 유일한 연산자**예요.
    
    구조는 `조건 ? 참일 때 값 : 거짓일 때 값` 형태이고, 간단한 `if...else`를 짧게 쓸 때 많이 활용돼요.
    
    ---
    
    ### 기본 예시예요
    
    ```jsx
    const number = 27;
    
    const isOdd = number % 2 !== 0 ? true : false;
    
    console.log(isOdd);
    // true예요 (27은 홀수니까요)
    ```
    
    ---
    
    ### 이해하기 쉬운 공식이에요
    
    ```jsx
    조건 ? 조건이 참일 때 실행할 값 : 조건이 거짓일 때 실행할 값;
    ```
    
    예시:
    
    ```jsx
    const age = 20;
    
    const status = age >= 18 ? '성인이에요' : '미성년자예요';
    console.log(status);
    // '성인이에요'
    ```
    
    ---
    
    ### 특징이에요
    
    - 짧고 간단한 조건 분기에서 자주 써요.
    - 여러 조건을 중첩해서도 쓸 수 있지만, 가독성이 나빠질 수 있어요.


    ### DOM 조작

    - 태그 가져오기
    
    ### 1) 태그 가져오기
    
    HTML 문서에서 특정 태그를 가져와야 조작할 수 있어요.
    
    - `getElementById('id')` → ID로 가져와요
    - `querySelector('선택자')` → CSS 선택자로 첫 번째 요소만 가져와요
    - `querySelectorAll('선택자')` → 모든 요소(NodeList)를 가져와요
    
    ```html
    <div id="title">고구마</div>
    <ul>
      <li class="item">김용민</li>
      <li class="item">매튜</li>
    </ul>
    
    <script>
      const title = document.getElementById('title');        // #title 하나
      const firstItem = document.querySelector('.item');     // 첫 번째 .item
      const allItems = document.querySelectorAll('.item');   // 모든 .item
    </script>
    ```
    
- 이벤트 리스너 추가하기
    
    ### 2) 이벤트 리스너 추가하기
    
    `addEventListener`를 사용하면 특정 동작(클릭, 입력 등)이 일어날 때 실행할 함수를 등록할 수 있어요.
    
    ```html
    <button id="btn">눌러봐요</button>
    
    <script>
      const btn = document.querySelector('#btn');
      btn.addEventListener('click', () => {
        console.log('버튼이 눌렸어요');
      });
    </script>
    ```
    
- 이벤트 리스너 제거하기
    
    ### 3) 이벤트 리스너 제거하기
    
    `removeEventListener`를 사용하면 등록된 이벤트를 해제할 수 있어요. 주의할 점은 **같은 함수 참조**를 전달해야 제거돼요.
    
    ```html
    <button id="btn">눌러봐요</button>
    
    <script>
      const btn = document.querySelector('#btn');
    
      function handleClick() {
        console.log('클릭했어요');
      }
    
      btn.addEventListener('click', handleClick);
    
      // 나중에 이벤트 제거
      btn.removeEventListener('click', handleClick);
    </script>
    ```
    
- 키보드와 마우스 이벤트
    
    ### 4) 키보드와 마우스 이벤트
    
    자주 쓰이는 이벤트는 다음과 같아요.
    
    - `click` → 마우스 클릭
    - `mouseover` / `mouseout` → 마우스 올림 / 내림
    - `keydown` / `keyup` → 키보드 누름 / 뗌
    - `input` → 입력창 값이 바뀔 때
    
    ```tsx
    <input id="textInput" placeholder="아무거나 입력해봐요" />
    
    <script>
      const input = document.querySelector('#textInput');
    
      input.addEventListener('keydown', (e) => {
        console.log(`키를 눌렀어요: ${e.key}`);
      });
    </script>
    ```
    
- 태그 속성 다루기
    
    ### 5) 태그 속성 다루기
    
    `setAttribute`, `getAttribute`, `removeAttribute`로 속성을 조작할 수 있어요.
    
    또는 `element.id`, `element.className`처럼 직접 접근도 가능해요.
    
    ```html
    <img id="img" src="goguma.png" alt="고구마" />
    
    <script>
      const img = document.querySelector('#img');
      console.log(img.getAttribute('src')); // goguma.png
    
      img.setAttribute('alt', '맛있는 고구마');
      img.removeAttribute('src'); // 이미지가 사라져요
    </script>
    ```
    
- 부모와 자식 태그 찾기
    
    ### 6) 부모와 자식 태그 찾기
    
    DOM 계층을 따라 올라가거나 내려가며 요소를 찾을 수 있어요.
    
    - `parentElement` → 부모
    - `children` → 자식들 (HTMLCollection)
    - `firstElementChild`, `lastElementChild` → 첫/마지막 자식
    
    ```html
    <ul id="list">
      <li>고구마</li>
      <li>김용민</li>
    </ul>
    
    <script>
      const list = document.querySelector('#list');
      console.log(list.parentElement);     // list의 부모
      console.log(list.children[0]);       // 첫 번째 자식 (고구마)
    </script>
    ```
    
- 새로운 태그 만들기
    
    ### 7) 새로운 태그 만들기
    
    `document.createElement`로 태그를 만들고, `appendChild`나 `append`로 붙일 수 있어요.
    
    ```html
    <ul id="list"></ul>
    
    <script>
      const list = document.querySelector('#list');
      const li = document.createElement('li');
      li.textContent = '새로운 아이템이에요';
      list.appendChild(li);
    </script>
    ```
    
- 태그 복제하기
    
    ### 8) 태그 복제하기
    
    `cloneNode(true/false)`를 사용하면 태그를 복사할 수 있어요.
    
    - `true` → 자식 요소까지 함께 복사
    - `false` → 태그만 복사
    
    ```html
    <ul id="list">
      <li>고구마</li>
    </ul>
    
    <script>
      const list = document.querySelector('#list');
      const firstItem = list.children[0];
      const clone = firstItem.cloneNode(true); // 내용까지 복사해요
      list.appendChild(clone); // 리스트에 추가돼요
    </script>
    ```

    