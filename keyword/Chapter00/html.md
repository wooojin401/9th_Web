# HTML

### 키워드 리스트
> HTML, Semantic Tag, html element, head, body

## 1. HTML이란?
### 개념
> HTML은 Hyper Text Markup Language로, 웹 페이지를 구성하는데에 사용되는 기본 언어입니다.

여기서 **Hyper Text**는 다른 문서로 연결할 수 있는 링크를 의미합니다.
그리고 **Markup Language**는 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어의 한 가지 입니다.
우리가 지금 작성하고 있는 **MarkDown Language** 또한 마크업 언어의 일종입니다. 읽기도 쓰기도 쉽게 만들어진 문서 양식으로 기존 마크업 태그 구조가 어려워 몇 가지 문법만 알면 편히 작성할 수 있도록 만들어진 언어입니다.

### 기본 구조
HTML 문서는 크게 head와 body로 나뉩니다.

1. `<!DOCTYPE html>`
    - 브라우저에게 “이 문서는 HTML5 표준을 따릅니다”라고 알려주는 역할을 합니다.
    - 기존에는 HTML에도 다양한 버전이 존재했기 때문에, 문서의 상단에 해당 버전을 명시해주는 것이 일반적이었습니다.
    - `<!DOCTYPE>`을 소문자로도 작성해도 되지만, 다른 HTML 태그들과 쉽게 구분할 수 있도록 주로 대문자로 작성되는 편입니다.
    - 만약 이를 명시하지 않으면, 웹 브라우저는 이 문서를 최신 표준 모드가 아닌 **Quirks Mode**로 처리합니다. 이로 인해 브라우저마다 다르게 렌더링 되거나, 최신 HTML 기능을 제대로 지원하지 못해 의도한대로 표시되지 않을 수 있습니다.
2. `<html lang="en">`
    - 문서의 기본 언어가 영어임을 의미합니다.
3. `<head>`
    - 화면에는 보이지 않지만, 문서의 설정 및 정보를 담고 있습니다.
    - 페이지에 대한 메타데이터(정보)를 담습니다.
    - `<meta charset="UTF-8">`: 문자가 깨지지 않도록 인코딩 방식을 지정하는 것입니다. UTF-8은 전세계 문자 체계를 표현할 수 있습니다. 지정하지 않으면 브라우저가 다른 인코딩으로 해석해서 글자가 깨져보일 수 있습니다.
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 모바일·태블릿 화면 크기에 맞게 콘텐츠를 조정합니다.
    - `<title>`: 웹 브라우저 탭에 표시되는 제목을 지정합니다. SEO에 중요한 역할을 합니다. 
4. `<body>`
    - 살제로 사용자가 화면에서 보게 되는 부분입니다.

---

## 2. Semantic Tag
### Semantic Tag 등장 배경 간단 정리
> `<div>`로만 페이지를 구성하게 되면 어떻게 될까요? 
과거엔 의미 있는 태그가 부족해서 레이아웃을 대부분 `<div>`로 만들고, `class`나 `id`로 역할을 흉내 냈어요.
이렇게 하면
- 사람: 코드 읽을 때 영역의 역할을 바로 파악하기 어렵고, 유지보수 비용이 늘어남
- 기계: 검색엔진이 구조를 이해하기 어렵고, 스크린 리더가 문서의 “구획”을 구분하기 힘듦
즉, “보이는 레이아웃”은 되지만 “의미(semantics)”가 부족해서 협업, SEO, 접근성 모두에 비용이 커졌습니다.

### 표준의 변화: HTML5에서 의미 태그를 공식화
WHATWG/W3C가 HTML5에서 의미를 담은 요소들을 표준에 추가했어요. 대표적으로
 - 레이아웃/랜드마크: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
 - 미디어/콘텐츠 보강: `<figure>`, `<figcaption>`, `<time>`, `<address>` 등

핵심은 “태그 이름 자체가 역할을 설명”한다는 점!
이로써
- 개발자: 구조와 역할이 코드만 읽어도 드러남
- 검색엔진: 문서의 핵심/보조 영역을 더 정확히 파악
- 보조공학: 스크린 리더가 랜드마크 단위로 빠르게 탐색 가능
참고로 많은 시맨틱 요소는 암묵적 ARIA 역할을 가집니다(`nav` → navigation, `main` → main 등). 덕분에 접근성 도구가 문서를 더 잘 “이해”할 수 있어요.

### 주요 Semantic Tags
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<img>`, etc.

---

## 3. HTML 구성 요소
> HTML 문서는 HTML 요소(element)들로 구성됩니다.
HTML 요소는 태그 한 쌍으로 이루어 집니다
- 여는 태그, 내용, 닫는 태그
- 속성도 들어갈 수 있습니다.
- 내용 안에 또 다른 태그를 작성하여, 중첩으로도 작성할 수 있습니다.
- 내용이 없는 태그도 존재합니다.

---

## 4. 태그 정리
### `element` vs `container`
- `element level`: 화면에 직접적은 UI 요소를 나타냅니다. 주로 텍스트나 콘텐츠 자체를 표현할 때, 사용합니다.
- `container level`: 여러가지 요소를 담을 수 있는 태그입니다. 구조를 나누고 영역별 의미를 드러내는데에 사용합니다.

### `block` vs `inline`
- `block` 요소는 한 줄을 전부 차지합니다. 그래서 줄이 자동으로 바뀌고, 다른 요소들은 그 다음줄에 배치됩니다.
- `inline` 요소는 자기 크기만큼만 공간을 차지합니다. 만약 옆에 남은 공간이 부족하면, 자동으로 다음줄로 넘어갑니다.

---

## 5. DOM
> HTML은 어떻게 화면까지 오게 될까?
한 가지 개념을 배우게 되면 로우레벨까지 가보아야 제대로 안다... 고 생각하는 경향이 있는데요. 
전체적인 html, css, js가 화면에 렌더되기까지의 과정은 나중에 담아도 될 것 같으니, 우선 html을 읽어서 기계가 이해할 수 있는 구조로 바뀌는지까지만 정리해봅시다.

### 그래서 제목에 적힌 저 `DOM`이 뭡니까?
React로 웹 개발을 해보신 분들이라면, Virtual DOM이라는 단어를 들어보셨을 것입니다. 네, 그 DOM이 이 DOM입니다!

> `DOM`은 Document Object Model의 약자로, HTML이나 XML 문서를 웹 브라우저에서 자바스크립트와 같은 프로그래밍 언어가 조작할 수 있도록 트리(tree) 구조로 표현한 객체 모델입니다.

HTML이 DOM 트리로 변환되는 과정은, 프로그래밍 언어의 소스코드를 구문 트리(AST)로 파싱하는 과정과 비슷하고 볼 수 있습니다. 둘 다 입력된 텍스트를 구조화된 트리 형태로 바꿔서, 이후의 처리(조작, 실행, 렌더링 등)가 가능하도록 준비하는 과정이죠.

### DOM 트리 생성 과정: HTML이 어떻게 구조화되는가?
HTML 문서는 브라우저에 의해 읽혀질 때, 단순한 텍스트에서 **구조화된 객체 트리(DOM 트리)**로 변환됩니다. 이 과정은 웹 개발의 핵심 개념 중 하나로, 자바스크립트가 실제로 제어하는 것은 “화면에 보이는 HTML”이 아니라 이 DOM 트리입니다.

1. 파싱(Parsing): 문자열에서 트리로
 - 브라우저는 HTML 파일을 위에서 아래로 한 줄씩 읽으며, 각 태그와 텍스트, 주석 등을 해석합니다.
 - 이때, 태그를 만나면 해당 태그에 맞는 노드(Node) 객체를 생성합니다.
 - 예시: `<body>` 태그를 만나면 Body 요소 노드가 생성됨

2. DOM 노드(Node)의 종류와 역할

DOM의 “Node”는 문서의 모든 구성 요소를 표현하는 추상적 개념입니다. 실제로는 다음과 같은 다양한 하위 타입이 존재합니다.
 - Document Node: 전체 문서 자체, DOM 트리의 최상위 노드
 - Element Node: HTML 태그(예: `<div>`, `<a>`)에 해당
 - Text Node: 태그 내부의 텍스트(예: `<p>Hello</p>`의 “Hello”)
 - Comment Node: HTML 주석(예: `<!-- 주석 -->`)
 - Attribute Node, DocumentType Node 등: 기타 다양한 타입

각 노드는 부모-자식 및 형제 관계로 연결되어 트리 구조를 이룹니다.

3. 트리 구조화(Tree Construction)
 - 생성된 노드들은 부모-자식 관계로 계층 구조를 형성합니다.
 - 예를 들어, `<body>`는 `<html>`의 자식, `<p>`는 `<body>`의 자식이 됩니다.
 - 형제 노드는 같은 부모를 공유합니다.
 - 이 계층적 구조 덕분에, 자바스크립트로 특정 요소를 선택하고, 탐색하고, 수정할 수 있습니다.

4. DOM 트리의 완성 및 활용
 - 파싱이 끝나면, 브라우저는 완성된 DOM 트리를 메모리에 저장합니다.
 - 자바스크립트는 DOM API를 통해 이 트리의 노드를 동적으로 추가, 삭제, 변경할 수 있습니다.
 - 예시: `document.createElement`, `appendChild`, `removeChild`,`textContent` 등

5. DOM Node의 주요 속성과 메서드

모든 DOM 노드는 Node 인터페이스를 상속받으며, 공통적으로 다음과 같은 속성과 메서드를 가집니다.
 - 속성
 - `childNodes`: 모든 자식 노드(요소, 텍스트, 주석 등)를 실시간으로 반환
 - `parentNode`, `parentElement`: 부모 노드/요소 반환
 - `firstChild`, `lastChild`: 첫 번째/마지막 자식 노드 반환
 - `nextSibling`, `previousSibling`: 형제 노드 반환
 - `nodeName`, `nodeType`, `textContent` 등
 - 메서드
 - `appendChild(node)`: 자식 노드로 추가
 - `insertBefore(newNode, referenceNode)`: 특정 위치에 새 노드 삽입
 - `removeChild(node)`: 자식 노드 제거
 - `replaceChild(newNode, oldNode)`: 자식 노드 교체
 - `cloneNode(deep)`: 노드 복제
 - `hasChildNodes()`, `contains(node)` 등

이러한 공통 인터페이스 덕분에, 자바스크립트로 DOM 트리를 유연하게 탐색하고 조작할 수 있습니다.

### Node와 Element의 차이: DOM 구조와 실제 활용

지금까지 DOM 트리의 생성 과정과 주요 속성, 메서드에 대해 살펴봤습니다. 여기서 DOM 트리를 구성하는 핵심 단위인 **Node**와 그 중 하나인 **Element**의 차이에 대해 이어서 정리합니다.

#### Node란?
Node는 DOM(Document Object Model) 트리의 모든 구성 요소를 포괄하는 가장 기본적인 단위입니다.  
HTML 문서가 브라우저에서 파싱될 때, 태그, 텍스트, 주석 등 각각의 부분이 모두 Node로 변환됩니다.  
Node에는 다양한 타입이 있습니다:
- **Document Node**: 문서 전체를 나타내는 루트 노드
- **Element Node**: HTML 태그(예: `<div>`, `<a>`)를 나타내는 노드
- **Text Node**: 태그 내부의 텍스트(예: `<p>Hello</p>`의 "Hello")
- **Comment Node**: HTML 주석(예: `<!-- 주석 -->`)
- 그 외에도 Attribute Node, DocumentType Node 등이 존재합니다.

즉, Node는 DOM 트리의 모든 구성 요소를 포괄하는 추상적 개념입니다.

#### Element란?
Element는 Node의 하위 타입 중 하나로, 실제 HTML이나 XML 태그를 의미합니다.  
Element Node는 구조적인 역할을 하며, `id`, `class`, `style` 등 HTML 속성을 가질 수 있고,  
`querySelector()`, `getElementsByClassName()` 등 다양한 메서드를 사용할 수 있습니다.

모든 Element는 Node이지만, 모든 Node가 Element는 아닙니다.  
예를 들어, 텍스트 노드나 주석 노드는 Node이지만 Element가 아닙니다.

#### 주요 속성의 차이

- `textContent`: Node의 속성이므로 모든 Node에서 사용 가능합니다.  
  즉, Element Node, Text Node, Comment Node 모두에서 접근할 수 있습니다.
- `innerHTML`: Element의 속성이므로 Element Node에서만 사용 가능합니다.  
  Text Node나 Comment Node에서는 사용할 수 없습니다.

#### 자식 노드 선택 방법: childNodes vs children

- `childNodes`: Node의 속성.  
  해당 요소의 모든 자식 Node를 포함하는 NodeList를 반환합니다.  
  여기에는 Element뿐 아니라 Text Node, Comment Node 등 모든 종류의 Node가 포함됩니다.
- `children`: Element의 속성.  
  Element 타입의 자식 노드만을 포함하는 HTMLCollection을 반환합니다.  
  텍스트 노드나 주석 노드는 제외되고, HTML 요소 노드만 포함됩니다.

#### 실제 활용에서 주의할 점

- 자바스크립트로 DOM 트리를 탐색하거나 조작할 때,  
  Node와 Element의 차이를 이해하면 원하는 노드만 정확하게 선택할 수 있습니다.
- 예를 들어, `childNodes[0]`은 공백이나 텍스트 노드가 포함될 수 있지만,  
  `children[0]`은 항상 첫 번째 HTML 태그 요소만 반환합니다.
- 빈 공백(화이트 스페이스)이나 주석도 Node로 취급되기 때문에, Node 기반 탐색 시 예상치 못한 결과가 나올 수 있습니다.

### 참고/출처
- [Traversing an HTML table with JavaScript and DOM Interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)
- [Node - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)
