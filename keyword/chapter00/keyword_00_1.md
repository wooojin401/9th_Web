시맨틱 태그란? 🍠

- 기타 태그 추가 정리해보기 🍠  
    **추가로 태그를 정리해주세요:**
    
    - `<h1> ~ <h6>` : 제목 태그 (숫자가 커질수록 텍스트의 크기 및 중요도가 줄어든다)
    - `<p>` : 단락 태그 (단, 개행이 포함되지 않은 block-level 의 태그이다)
    - `<br>` : 줄바꿈 태그 (개행을 해주기 위해 사용할 수 있다)
    - `<blockquote>` : 인용문 태그, 들여쓰기가 포함되어 있다
    - `<b>` : 텍스트의 크기를 **굵게** 표현 (단, strong 태그와 달리, 강조가 아닌 **단순 굵기**이다)
    - `<em>` : 텍스트의 기울임를 표현, 강조하기 위해 사용
    - `<i>` : 텍스트의 기울임을 표현 (단, em 태그와 달리, 강조가 아닌 *단순 기울임*이다)
    - `<u>` :  텍스트 밑줄
    - `<s>` : 텍스트 취소선
    - `<hr>` : 선 추가
    - `<table>` : 표 제작 (`<tr>` 과 `<td>` 태그로 행과 열을 표현)
    - `<label>` : 입력 필드와 연결되는 설명
    - `<pre>` : 작성된 그대로의 텍스트 (공백, 줄바꿈 포함) 표시
    - `<address>` : 문서나 글쓴이, 웹사이트의 연락처 정보를 나타낼 때 사용
    
    
- **`Sementic Tag`**를 잘 활용하였을 때 장점은? 🍠
    1. **검색 엔진 최적화 (SEO) 향상**
        
        검색 엔진은 HTML 코드를 분석하여 어떤 내용이 중요한 내용인지 파악합니다. 
        
        `<h1>` 태그는 제목, `<nav>` 태그는 주요 메뉴, `<article>` 핵심 콘텐츠인 것처럼, 의미가 명확한 시맨틱 태그 사용 시 검색 엔진이 페이지의 구조와 핵심 내용을 더욱 정확하게 이해할 수 있습니다.
        
        ⇒ 단순히 `<div>` 태그로만 감싼 제목보다, `<h1>` 태그로 작성된 제목이 검색 엔진에게 페이지의 가장 중요한 대목임을 알려주기 때문에 검색 결과에서 더 높은 우선순위를 가질 수 있습니다. 
        
    2. **웹 접근성 향상**
        
        시각 장애인 등이 사용하는 스크린 리더기는 HTML 태그 기반으로 페이지의 구조를 파악하고 사용자에게 정보를 전달합니다.
        
        - `<nav>` : 스크린 리더기는 이 태그를 만나면 사용자에게 네비게이션 메뉴임을 밝혀, 사용자가 바로 본문으로 이동하게끔 사용
        - `<main>` : 페이지의 핵심 컨텐츠가 시작되는 부분을 명확하게 알림
        - `<header>`, `<footer>` : 페이지의 상 / 하단 정보 영역을 구분
        
        위 정보들처럼, 시맨틱 태그는 보조 기술을 사용하는 사용자들이 웹 페이지 구조를 쉽게 파악하고 이용할 수 있도록 도와줍니다.
        
    3. **코드의 가독성 및 유지보수 증대** 
        
        의미 없는 `<div>` 태그의 남발보다, `<header>`, `<article>`, `<aside>`, `<footer>` 등 의미에 맞는 태그를 사용할 시 코드의 구조를 한눈에 쉽게 파악하고 이해할 수 있습니다.
        
        ⇒ 다른 개발자들이 나의 코드를 보거나, 협업하거나, 코드를 수정할 때 어떤 부분이 어떤 역할을 수행하고 있는지 빠르게 이해할 수 있기 때문에 협업 효율과 코드의 유지보수성을 크게 향상시킵니다.

- Element Level과 Container Level은 무엇을 의미하며, 어떤 것이 다른지 정리해주세요.
    
    HTML 에서 Element 와 Container 란?
    
    - Element : h1 ~ h6, p, b 와 같이 단순히 요소를 **표현하기** 위한 태그
    - Container : div, article, header 와 같이 요소를 담는 **영역**을 위한 태그
        
        컨테이너 태그는 태그 자체에는 의미가 없고 단순히 요소를 묶기 위한 용도로만 이용한다.        스타일을 주기 위해서, 또는 서버에 보내는 데이터를 담기 위해서 사용한다

### 실습 🍠

- 그러면, **`inline-block`**은 어떠한 방식으로 동작할까요? 🍠
    - 블록 레벨 (block-level)
        
        태그를 사용하여 요소를 삽입하였을 때, 요소가 페이지의 한 줄을 혼자 차지하는 요소이다.     즉, 너비가 100% 임을 의미하며, 다음 요소가 양 옆으로 붙을 공간이 존재하지 않으므로,        자연스레 줄이 넘어갑니다.
        
        블록 레벨이 갖는 속성
        
        - **style** 속성을 통해서 `margin, width, height` 속성을 부여할 시 모두 정의됩니다.      이러한 특성 덕분에, 블록 속성을 가진 태그로 화면을 구성하거나 레이아웃을 구성할 수 있습니다.
        
    - 인라인 레벨 (inline-level)
        
        줄을 차지하지 않는 요소입니다. 브라우저 같은 화면에 표시되는 컨텐츠 만큼 영역을 차지하고 나머지 공간에는 다른 요소가 올 수 있습니다. 따라서 한 줄에 여러개의 인라인 레벨 요소를 표시하는 것이 가능합니다.
        
        인라인 레벨이 갖는 속성
        
        - 상, 하단 외부 여백 (margin-top, margin-bottom) 속성을 정의해도 적용되지 않습니다
            
            ⇒ 상, 하단 여백은 line-height 속성에 의해 발생됩니다
            
        - 너비 (width) 와 높이 (height) 속성이 적용됩니다
            
            ⇒ 인라인 요소의 너비 / 높이는 태그가 품고 있는 내부 요소의 부피에 맞춰집니다
            
        - 인라인 속성을 가진 태그끼리 연속으로 사용되는 경우 최소한의 간격을 유지하기 위해      좌, 우에 약 5px 의 외부 여백이 적용됩니다
        - 인라인 태그들은 한 줄에 나란히 배치됩니다
    
    - 인라인-블록 레벨 (inline-block-level)
        
        인라인과 같이 한 줄에 표현하면서도 margin, width, height 속성 정의 시 모두 표현됩니다. 이 속성을 기본적으로 가지고 있는 태그가 없기 때문에 따로 inline-block 이라 선언을 해야합니다.
        
        인라인과 다르게 inline-block 이 갖는 속성
        
        - 상, 하단 외부 여백 속성 (margin-top, margin-bottom) 정의할 수 있습니다
        - inline-block 요소의 상, 하 여백 (margin, line-height) 속성 설정 가능합니다
        - 너비 (width) 와 높이 (height) 속성이 적용됩니다
        - 인라인과 같이 5px 의 외부 여백이 자동으로 적용되나, margin-left, margin-right 으로 추가 여백을 지정할 수 있습니다



-  block, inline, inline-block 직접 html과 css를 활용해서 무엇이 다른지, VS Code Live Server Extension을 활용하여, 실습 한 이미지를 첨부하여 설명해주세요. 🍠

    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UMC Practice</title>
    <script src="practice.js"></script>
    </head>
    <body>
    <div style="background-color: aqua;">
        블록 레벨 div
    </div>

    <div style="background-color: aquamarine; width: 500px; height: 300px; margin-top: 50px; margin-bottom: 50px;">
        블록 레벨 div - margin / width / height 지정
    </div>

    <span style="background-color: blueviolet; border: 2px solid black; margin: 5px;">
        인라인 레벨 span 1
    </span>

    <span style="background-color: blueviolet; border: 2px solid black; margin: 5px;">
        인라인 레벨 span 2
    </span>

    <span style="background-color: blueviolet; border: 2px solid black; margin: 5px;">
        인라인 레벨 span 3
    </span>

    <br>
    <br>

    <span style="background-color: brown; width: 500px; height: 300px;">
        인라인 레벨 span - width / height 지정
    </span>

    <br>
    <br>

    <div style="background-color: dodgerblue; display: inline-block; width: 200px; height: 50px;">
        인라인-블록 레벨
    </div>
    </body>
    </html>
    ```