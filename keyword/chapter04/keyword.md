# 📝 학습 목표

---

- **인증과 인가의 핵심 개념 및 차이점 이해**
    - `인증(Authentication)`: **'누구인지'** 확인하는 절차를 명확히 이해하고, 다양한 인증 방법을 학습합니다.
    - `인가(Authorization)`: **'무엇을 할 수 있는지'** 권한을 부여하는 절차와 권한 관리 방식을 학습합니다.
- **인증 방식에 따른 서버/클라이언트 흐름 파악**
    - **JWT**와 **세션** 방식의 원리, 장단점, 그리고 프론트엔드에서의 클라이언트 인증 흐름을 비교하며 이해합니다.
    - **Refresh Token**을 활용한 **Access Token** 재발급 흐름을 익힙니다.
- **민감 데이터 저장소의 종류와 보안 이슈 해결**
    - **쿠키**, **로컬 스토리지**, **세션 스토리지**의 특징을 파악하고, 각 저장소에 따른 보안 취약점(XSS, CSRF 등)과 방어 전략을 학습합니다.
- **Custom Hook의 필요성과 활용 능력 습득**
    - `useToggle` 훅 실습을 통해 **Custom Hook**을 사용하는 이유(코드 중복 제거, 유지보수 용이 등)를 직접 경험하고, 재사용 가능한 로직을 모듈화하는 능력을 기릅니다.
- **API 명세서(Swagger)를 통한 협업 능력 향상**
    - **Swagger** 문서를 읽고 백엔드 API 명세를 이해하는 방법을 익혀, 프론트엔드와 백엔드 간의 효율적인 협업 프로세스를 구축합니다.
- **`react-hook-form`과 `Zod`를 활용한 폼 유효성 검사**
    - **`react-hook-form`**을 사용하여 복잡한 폼 상태를 효율적으로 관리하고, **`Zod`**를 활용하여 스키마 기반의 강력하고 타입 안정성 높은 유효성 검사 로직을 구현하는 방법을 학습합니다.

---

<aside>
💡 이번 주차는 웹 서비스의 가장 기본이자 중요한 요소인 **인증(Authentication)**과 인가(Authorization)의 개념을 정립하는 시간입니다. 

더 나아가, 이 두 개념을 구현하는 대표적인 방법인 **JWT**와 **세션**의 동작 원리를 학습하고, 로그인 정보를 안전하게 다루는 **저장소 전략**과 관련된 **보안 이슈**들을 깊이 있게 다룹니다. 

또한, 이 모든 복잡한 로직을 깔끔하게 관리할 수 있는 **Custom Hook**과, 백엔드와의 효율적인 소통을 위한 **Swagger** 사용법을 익힙니다. 

마지막으로 `react-hook-form`과 `Zod`를 활용해 강력하고 타입 안정성 높은 폼 유효성 검사 기술까지 습득하며 실무 역량을 강화합니다.

**- 중앙 웹 파트장 매튜 김용민 -**

</aside>

# ⚠️ 스터디 진행 방법

---

1. **워크북 완료 후 스터디 참여**
    - 스터디 전, 워크북 내용을 **모두 작성**하고 이해되지 않은 부분을 준비합니다.
2. **스터디 미션 수행**
    - 워크북 완료 후 미션을 수행합니다.
    - 진행 내용과 문제점을 스터디 시간에 공유합니다.
    - **코드 리뷰**는 GitHub PR에서 상시 진행합니다.
3. **스터디 시간 구성**
    1. 각자 진행한 미션 중 **해결하지 못한 이슈 공유**
    2. 해당 문제를 **스터디원과 함께 해결 방법 공유**, 필요 시 같이 해결
    3. 미션 후 **피드백 공유 및 개선**
4. **주차별 미션 제출**
    - 매주 **워크북과 미션을 제출**합니다. (디자인은 개인 보완 가능)
    - 워크북 완료 후 [**워크북 피드백 폼 제출**](https://forms.gle/aXPWVZpDSfYTAiCd6?utm_source=chatgpt.com)
        - 특정 주제에 많은 피드백 요청이 들어올 경우, 피드백 이후 해당 내용을 바탕으로 **추가 강의 영상** 제공 예정 ([유튜브 구독](https://www.youtube.com/@yongcoding?utm_source=chatgpt.com))
    - **🍠 코드 리뷰 제출 기준**
        - 본인이 리뷰한 코드 **최소 1개**
        - 본인이 받은 리뷰를 코드에 **실제 반영한 것 최소 1개**
5. **스터디 인증샷**
    - 매주 대표 사진 **1장** 남기기
    - 이미지 임베드 또는 복사·붙여넣기 가능

# 📸 잠깐 ! 스터디 인증샷은 찍으셨나요?📸

---

* 스터디리더께서 대표로 매 주차마다 한 장 남겨주시면 좋겠습니다!🙆💗
 (사진을 저장해서 이미지 임베드를 하셔도 좋고, 복사+붙여넣기해서 넣어주셔도 좋습니다!)

[]()

# 🎯 핵심 키워드

---

<aside>
🍠 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

🍠 이모지가 달린 부분은, 여러분들이 직접 조사하여, 추가 작성하거나, 실습해보실 부분이니, 꼭 진행해주셔야 합니다!

**- 중앙 웹 파트장 매튜 김용민 -**

</aside>

### 키워드 정리 🍠

- **인증(Authentication)** vs **인가(Authorization)**
    
    <aside>
    🍠
    
    두 용어는 비슷해 보여도 하는 일이 완전히 달라요. 
    **인증(Authentication) “누구인지 확인”**하는 과정이고, 
    **인가는 “무엇을 할 수 있는지 결정”** 하는 과정이에요. 
    
    보통 **인증(Authentication) → 인가(Authorization)** 순서로 흐름이 이어져요.
    
    </aside>
    
    - **인증(Authentication)**
        - **인증(Authentication)**이란 무엇일까요?
            
            # **인증(Authentication)**이란 무엇일까요?
            
            ---
            
            **인증(Authentication)**은 쉽게 말해서 **“너는 누구니?”**를 확인하는 과정이에요.
            
            웹 서비스에 접속하는 사용자가 정말로 자신이 주장하는 사람인지 확인하는 절차죠.
            
            예를 들어, 누군가가 “저는 매튜입니다”라고 말했을 때, 시스템은 “정말 매튜가 맞는지”를 확인해야 해요. 
            
            이 과정을 거치지 않으면, 아무나 관리자 행세를 하거나 다른 사람의 계정을 도용해서 로그인할 수 있겠죠.
            
        - **인증(Authentication)** 방법의 예시
            
            # **인증(Authentication)** 방법의 예시
            
            ---
            
            1. **아이디와 비밀번호**
                - 가장 흔한 방법이에요. 사용자가 입력한 아이디/비밀번호가 DB에 저장된 값과 일치하는지 확인해요.
            2. **소셜 로그인 (OAuth)**
                - “구글로 로그인”, “깃허브로 로그인” 같은 방식이에요. 외부 서비스가 대신 신원을 보증해줘요.
            3. **2단계 인증(2FA, MFA)**
                - 아이디/비밀번호만으로 부족할 때, OTP(인증번호)나 휴대폰 문자, 이메일 인증을 추가로 요구해요.
            4. **생체인증**
                - 지문, 얼굴인식 같은 방식이에요. 요즘 모바일 앱에서 많이 쓰는 기술이에요.
        - **인증(Authentication)**의 위치
            
            # **인증(Authentication)**의 위치
            
            ---
            
            React 같은 프론트엔드에서는 **로그인 화면**을 통해 인증을 시도해요. 
            
            사용자가 아이디/비번을 입력하면 서버가 확인한 후, 인증에 성공하면 **세션(Session)**이나 **JWT 토큰**을 발급해줘요. 
            
            이 발급된 정보가 앞으로 “이 사용자는 **인증(Authentication)**된 사용자입니다”라는 증거가 돼요.
            
    - **인가(Authorization)**
        - **인가(Authorization)**란 무엇일까요?
            
            # **인가(Authorization)**란 무엇일까요?
            
            ---
            
            **인가(Authorization)**는 인증 다음에 나오는 개념이에요.
            
            “너는 무엇을 할 수 있니?”를 결정하는 과정이라고 생각하면 돼요.
            
            즉, **인증(Authentication)**이 “너가 매튜라는 걸 확인했어”라면, 인가는 “그렇다면 매튜는 관리자 페이지에 접근할 수 있어? 
            
            아니면 학생 페이지에만 접근해야 해?”를 판단하는 과정이에요.
            
        - **인가(Authorization)** 방법의 예시
            
            # **인가(Authorization)** 방법의 예시
            
            ---
            
            1. **역할 기반(Role-Based Access Control, RBAC)**
                - 사용자를 역할(role) 단위로 구분해요. 예: `admin`, `teacher`, `student`
                - `admin`은 모든 기능 가능, `student`는 제한된 기능만 가능.
            2. **속성 기반(Attribute-Based Access Control, ABAC)**
                - 나이, 소속, 결제 상태 등 특정 속성에 따라 권한을 줘요.
                - 예: “VIP 등급 사용자만 다운로드 가능”
            3. **정책 기반**
                - 시간, 장소, 기기 같은 조건을 고려해 접근을 제어해요.
                - 예: “회사 내부 네트워크에서만 접근 가능”
        - **인가(Authorization)**의 위치
            
            # **인가(Authorization)**의 위치
            
            ---
            
            React에서 **인가(Authorization)**를 구현할 때는 보통 **라우팅(페이지 접근 제어)** 단계에서 나타나요.
            
            예를 들어 로그인은 했지만, `admin` 권한이 없는 사용자가 관리자 페이지에 접근하려 하면 **403 Forbidden** 화면을 보여주는 거예요.
            
    - **인증(Authentication),** **인가(Authorization)의 차이**
        
        # 인증과 인가의 차이
        
        ---
        
        많은 사람들이 헷갈리는 부분이 바로 이 차이에요.
        
        - **인증(Authentication)**: “너 누구야?”
        - **인가(Authorization)**: “너 뭘 할 수 있어?”
        
        | 구분 | **인증(Authentication)** | **인가(Authorization)** |
        | --- | --- | --- |
        | **질문** | 너는 누구니? | 너는 무엇을 할 수 있니? |
        | **순서** | 항상 먼저 수행됨 | 인증이 끝난 후 수행됨 |
        | **목적** | 사용자의 신원 확인 | 권한을 확인하여 접근 제어 |
        | **실패 시 응답** | `401 Unauthorized` | `403 Forbidden` |
        | **예시** | 로그인 화면에서 ID/PW 확인 | 관리자 페이지 접근 권한 체크 |
    - **인증(Authentication),** **인가(Authorization)의 흐름 도식화**
        
        ```mermaid
        graph TD
            A["사용자 요청<br/>(로그인 시도)"] --> B{"인증<br/>(Authentication)"}
            B -->|로그인 실패| E["401 Unauthorized<br/>로그인 필요"]
            B -->|로그인 성공| C{"인가<br/>(Authorization)"}
            C -->|권한 없음| F["403 Forbidden<br/>접근 거부"]
            C -->|권한 있음| D["정상 처리<br/>리소스 접근"]
        
        ```
        
- **JWT(JSON Web Token)** vs **세션(Session)** 🍠
    
    <aside>
    🍠
    
    로그인 기능을 만든다고 하면 가장 먼저 고민하게 되는 게 **'사용자 인증을 어떻게 처리할까?'** 하는 문제예요. 크게 두 가지 방식이 있어요. 
    
    바로 **JWT(JSON Web Token) 방식과 세션(Session) 방식**입니다.
    
    </aside>
    
    - **JWT(JSON Web Token)**
        - **JWT(JSON Web Token)** 핵심 개념
            
            # **JWT(JSON Web Token)** 핵심 개념
            
            ---
            
            - 사용자가 **로그인 성공**하면 서버가 **서명된 토큰(AccessToken)** 을 발급해요.
            - 클라이언트는 이후 **모든 API 요청**에 이 토큰을 **HTTP 헤더**에 실어 보냅니다.
            
            ```tsx
            Authorization: Bearer <AccessToken>
            ```
            
            - 서버는 **토큰 안에 들어있는 정보**(서명, 만료 시간 등)만 확인해요.
            
            → 별도로 “서버 세션”을 저장하지 않아도 되기 때문에 **무상태(stateless)** 인증 방식이라고 부릅니다.
            
        - **JWT(JSON Web Token)** 장점
            
            # **JWT(JSON Web Token)** 장점
            
            ---
            
            1. **확장성**
                
                서버가 세션을 기억할 필요가 없으니, 서버를 여러 대로 확장하기 쉬워요. (스케일 아웃 구조에 적합)
                
            2. **서비스 간 공유 용이**
                
                마이크로서비스 환경에서도 동일한 토큰을 전달해서 인증을 쉽게 공유할 수 있어요.
                
            3. **클라이언트 친화적**
                
                웹, 모바일, 데스크톱 앱 등 **여러 종류의 클라이언트에서 똑같은 방식**으로 사용할 수 있어요.
                
        - **JWT(JSON Web Token)** 단점과 주의사항
            
            # **JWT(JSON Web Token)** 단점과 주의사항
            
            ---
            
            1. **토큰 유출 위험**
                
                토큰이 탈취되면 만료 전까지는 누구나 쓸 수 있어요.
                
                → 그래서 **어디에 저장할지**(cookie, localStorage 등)와 **보안 설정**이 매우 중요합니다.
                
            2. **즉시 무효화 어려움**
                
                이미 발급된 토큰은 **만료 시간(exp)** 전까지 기본적으로 유효합니다.
                
                → 해결책:
                
                - **짧은 수명의 AccessToken** 발급
                - **RefreshToken**을 함께 발급하고 주기적으로 회전(rotate)
                - 서버에서 **블랙리스트**를 관리해 강제 만료 처리
            3. **보안 설계 필요**
                
                저장 위치, 토큰 만료 정책, 재발급 흐름 등을 제대로 설계하지 않으면 보안 구멍이 생깁니다.
                
        - **JWT(JSON Web Token)** 인증 클라이언트 흐름
            
            # **JWT(JSON Web Token)** 인증 클라이언트 흐름
            
            ---
            
            1. **로그인 요청**
                - 서버가 **AccessToken(짧은 수명)** + **RefreshToken(긴 수명)** 을 발급.
            2. **API 요청**
                - 클라이언트는 `Authorization: Bearer <AccessToken>` 헤더를 붙여 요청.
            3. **토큰 만료 대응**
                - API에서 **401 Unauthorized** 응답이 오면,
                - **RefreshToken**으로 AccessToken을 새로 발급받음.
                - React에서는 보통 **axios interceptor**를 사용해 이 로직을 자동화합니다.
            4. **로그아웃 처리**
                - 서버에 RefreshToken 무효화 요청
                - 클라이언트에서 저장된 토큰 제거
    - **세션(Session)**
        - **세션(Session)** 핵심 개념
            
            # **세션(Session)** 핵심 개념
            
            ---
            
            - 사용자가 **로그인 성공**하면, 서버가 **세션(Session) ID**를 생성하고 **세션(Session) 저장소(메모리, Redis 등)**에 저장해요.
            - 클라이언트(브라우저)에는 이 세션 ID가 **쿠키**로 내려갑니다.
            - 이후 클라이언트가 API 요청을 보낼 때마다 **쿠키에 담긴 세션(Session) ID**가 자동으로 전송돼요.
            - 서버는 **세션(Session)** ID를 확인해 “이 사용자가 로그인한 사용자다”라고 판단합니다.
            
            ➡️ 즉, **서버가 상태(state)를 직접 관리**하는 방식이에요.
            
        - **세션(Session)** 장점
            
            # **세션(Session)** 장점
            
            ---
            
            1. **보안 관리가 용이**
                - **세션(Session)** 데이터가 서버에 저장되므로, 서버가 마음대로 만료시키거나 무효화할 수 있어요.
                - 즉시 강제 로그아웃 같은 제어가 쉬워요.
            2. **쿠키 자동 전송**
                - 브라우저가 같은 도메인 요청에는 자동으로 쿠키를 붙여 주기 때문에, 클라이언트 코드에서 헤더를 직접 조작할 필요가 적어요.
            3. **전통적인 방식**
                - PHP, JSP, Django, Spring 등 오래된 웹 프레임워크부터 지금까지 폭넓게 사용되어 온 안정적인 방법이에요.
        - **세션(Session)** 단점과 주의 사항
            
            # **세션(Session)** 단점과 주의 사항
            
            ---
            
            1. **서버 확장 어려움**
                - **세션(Session)**이 서버에 저장되므로, 서버를 여러 대로 늘릴 경우 **세션(Session) 동기화** 문제가 발생해요.
                - 보통 Redis 같은 중앙 **세션(Session)** 저장소를 도입해야 해결할 수 있어요.
            2. **스케일 아웃에 불리**
                - 무상태(stateless)한 JWT에 비해, 서버 확장성이 떨어져요.
            3. **보안 이슈 (CSRF)**
                - 쿠키가 자동 전송되기 때문에, 다른 사이트에서 의도치 않게 요청을 보내는 **CSRF 공격**에 취약해요.
                - 이를 막기 위해 **CSRF 토큰**이나 **SameSite 쿠키 옵션**을 함께 사용해야 합니다.
        - **세션(Session)** 관리 옵션 (쿠키 기반)
            
            # **세션(Session)** 관리 옵션 (쿠키 기반)
            
            ---
            
            쿠키에는 보안 관련 옵션을 잘 설정하는 것이 중요해요:
            
            - **HttpOnly**: 자바스크립트에서 접근 불가 → XSS 방어 강화
            - **Secure**: HTTPS에서만 전송 → 네트워크 도청 방지
            - **SameSite**: 크로스 사이트 요청에서 쿠키 전송 여부 제어
                - `Strict`: 같은 사이트에서만 전송 (보안 ↑, UX ↓)
                - `Lax`: 대부분 안전, 기본 추천
                - `None; Secure`: 크로스 도메인 환경에서 필요 (단 HTTPS 필수)
        - **세션(Session)** 인증 클라이언트 흐름
            
            ## **세션(Session)** 인증 클라이언트 흐름
            
            ---
            
            1. **로그인 요청**
                - 서버가 사용자 검증 후, **세션(Session)** ID를 생성해 **세션(Session)** 저장소에 저장.
                - **세션(Session)** ID를 담은 **쿠키**를 클라이언트에 내려줌.
            2. **API 요청**
                - 브라우저가 자동으로 쿠키를 붙여 보냄.
                - 서버는 **세션(Session)** 저장소에서 해당 **세션(Session)** ID를 찾아 인증 확인.
            3. **세션(Session) 만료/로그아웃**
                - 서버에서 **세션(Session)**을 삭제하면, 사용자는 더 이상 인증되지 않음.
                - 즉시 강제 로그아웃 가능.
            4. **React에서 주의할 점**
                - `fetch`나 `axios` 요청에 **`withCredentials: true`** 옵션을 줘야, 쿠키가 API 요청에 포함돼요.
            
            ```tsx
            import axios from "axios";
            
            axios.get("http://localhost:4000/user", {
              withCredentials: true, // 쿠키 포함
            });
            ```
            
    - **📚 블로그 읽고 세션과 토큰 정리해보기 🍠**
        
        # 📚 블로그 읽고 세션과 토큰 정리해보기
        
        ---
        
        [[🔐인증] 2. 세션 vs 토큰: 사용자의 상태를 어디에 저장할까](https://velog.io/@cucumtomatobean/dtd9x1yh)
        
        - 세션 방식과 토큰 방식의 가장 큰 차이는 무엇인가요? 🍠
            
            세션(Session)과 토큰(Token)의 핵심적인 차이는 ‘사용자 상태 정보를 어디에 저장하느냐’에 있다.
            
            | 구분 | 세션(Session) | 토큰(Token, JWT) |
            | --- | --- | --- |
            | 상태 정보 저장 위치 | **서버(Server)** | **클라이언트(Client)** |
            | 작동 방식 | 서버가 사용자 정보를 저장하고, 클라이언트에는 해당 정보를 식별할 **세션 ID**만 전달 | 토큰 자체에 사용자 정보(ID, 권한, 만료시간 등)를 담고 클라이언트가 직접 보관 |
            | 장점 | 보안성이 높고, 세션을 강제로 만료시킬 수 있음 | 서버 부하가 적고, 분산 환경(MSA)에서 확장성 우수 |
            | 단점 | 서버에 세션 저장 공간 필요 (확장성 낮음) | 즉시 무효화 어려움, 토큰 크기 커 네트워크 부담 증가 |
        - 세션을 분산 환경에서 관리할 때 사용할 수 있는 세 가지 전략(Sticky Session, Session Replication, Centralized Session Store)의 특징을 정리해주세요. 🍠
            
            서버가 여러 대인 분산 환경에서는 세션을 어디서나 동일하게 관리해야 하는데, 세가지 전략은 다음과 같다. 현재 가장 일반적으로 사용되는 방식은 **Redis 기반 중앙 세션 저장소 방식**이라고 한다.
            
            | 방식 | 개념 | 장점 | 단점 |
            | --- | --- | --- | --- |
            | **① Sticky Session (세션 고정)** | 동일한 사용자의 요청을 항상 같은 서버로 전달 | 구현이 간단 | 특정 서버 장애 시 해당 서버의 세션이 모두 사라짐 |
            | **② Session Replication (세션 복제)** | 모든 서버가 세션 정보를 서로 복제하여 공유 | 어느 서버로 요청이 가도 세션 일관성 유지 | 서버 간 트래픽 증가 → 성능 저하 |
            | **③ Centralized Session Store (중앙 세션 저장소)** | Redis 등 외부 저장소에 모든 세션을 저장 | 세션을 안정적으로 공유하고 서버 확장 용이 | 외부 저장소 관리 필요, 추가 인프라 부담 |
        - JWT(Json Web Token)의 장점과 단점을 각각 설명해주세요. 🍠
            
            **<장점>**
            
            1. **확장성 (Scalability)**
                - 서버가 여러 대여도, 각 서버는 독립적으로 토큰의 서명만 검증하면 됨.
                - MSA(Microservice Architecture)에 적합.
            2. **상태 비저장 (Stateless)**
                - 별도의 세션 저장소가 필요 없음.
            3. **간편한 인증 구조**
                - 클라이언트가 토큰을 포함해 요청을 보내면 서버가 바로 검증 가능.
            
            **<단점>**
            
            1. **즉시 무효화 어려움**
                - 토큰이 발급되면 만료 시간 전까지는 유효.
                - 서버가 토큰을 강제로 만료시키기 어려움.
            2. **보안 관리 복잡성**
                - 탈취 시 만료 전까지 악용될 위험 존재.
            3. **네트워크 부담**
                - 토큰 자체가 크기 때문에 매 요청마다 전송 시 오버헤드 증가.
        - JWT의 즉시 무효화 문제가 생기는 이유와 이를 해결하기 위한 방법은 무엇인가요? 🍠
            
            **<문제가 발생하는 이유>**
            
            - JWT는 **서버가 아닌 클라이언트에 상태 정보가 저장된 구조**이므로,
                
                토큰을 한 번 발급하면 서버에서 이를 “강제로 삭제”할 방법이 없습니다.
                
            - 따라서 사용자가 로그아웃해도, 이미 발급된 토큰은 **만료시간이 끝날 때까지 유효**하게 남습니다.
            
            **<해결 방법>**
            
            - **토큰 만료 시간을 짧게 설정** → 짧은 주기로 새로운 토큰 재발급
            - **블랙리스트(Blacklist) 관리** → 무효화된 토큰의 식별자(JTI)를 서버 저장소에 등록해 검증 시 차단
            
            ⇒ 두가지 방법을 병행하면 즉시 로그아웃 하는 것과 유사 효과 구현 가능해짐
            
        - 세션과 토큰을 결합한 하이브리드 방식(JWT + 저장소 메타데이터)의 동작 원리를 간단히 설명해주세요. 🍠
            - JWT 생성 시 JTI (JWT ID) 라는 고유 ID를 부여
            - 서버는 이 JTI를 저장소(ex. Redis)에 함께 기록
            - 사용자가 로그아웃하면 해당 JTI를 블랙리스트에 등록
            - 이후 요청 시 토큰 검증 시점에 블랙리스트를 확인
                - 등록되어 있으면 **무효 처리**,
                - 없으면 정상적으로 서명 검증 후 통과
        
- **토큰**은 무엇인가?
    
    <aside>
    🍠
    
    **토큰**은 **“인증과 권한을 검증하기 위해 발급되는 문자열”**이에요.
    
    쉽게 말하면, **“나, 인증된 사용자야!”**라는 것을 서버에 증명할 수 있는 
    일종의 **출입증**이라고 보면 됩니다.
    
    </aside>
    
    - **Basic Token**
        
        # **Basic Token**
        
        ---
        
        **방식**:
        
        - `아이디:비밀번호` 문자열을 `Base64`로 인코딩해서 **Authorization 헤더**에 담아 전송.
        - 예:
        
        ```tsx
        Authorization: Basic dXNlcjpwYXNzd29yZA==
        ```
        
        **특징**:
        
        - 단순하지만 보안상 위험해요. (비밀번호가 그대로 노출될 수 있음 → **HTTPS 필수**)
        - 거의 쓰이지 않고, 테스트나 내부 서비스에서만 가볍게 쓰이는 편이에요.
    - **Bearer Token**
        
        # **Bearer Token**
        
        ---
        
        **방식**:
        
        - `Authorization: Bearer <토큰>` 형태로 토큰을 헤더에 담아 전송.
        - 예:
            
            ```tsx
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
            ```
            
        
        **특징**:
        
        - 가장 널리 쓰이는 방식이에요.
        - “Bearer”는 “이 **토큰**을 가진 사람은 자격이 있다(권한을 가진다)”라는 의미예요.
        - 주로 **JWT(JSON Web Token)** 같은 **토큰** 형식이 Bearer 방식으로 전달돼요.
    - **Access Token vs Refresh Token**
        
        # **Access Token vs Refresh Token**
        
        토큰 기반 인증에서 자주 등장하는 두 가지 토큰이에요.
        
        ---
        
        ### (1) Access Token
        
        - **역할**:
            - API 요청 시 **사용자 인증/인가 확인** 용도로 사용.
            - 예: `내가 /users/me 요청할 때, 이 토큰을 보고 내가 누구인지 확인해줘!`
        - **수명**:
            - **짧음 (보통 15분~30분)**
            - 이유: 만약 탈취당하면 위험하니까, 빨리 만료되도록 설계해요.
        - **저장 위치**:
            - 보통 **메모리**, 또는 짧게 쓰는 용도로 `localStorage`/`cookie`.
        
        ---
        
        ### (2) Refresh Token
        
        - **역할**:
            - **AccessToken이 만료되었을 때 새로운 AccessToken을 발급받기 위해 사용**해요.
            - 예: `내 AccessToken 만료됐는데, RefreshToken 있으니 새로운 AccessToken 하나 주세요!`
        - **수명**:
            - **김 (보통 7일 ~ 30일)**
            - 서버가 탈취를 감지하면 바로 폐기할 수도 있어요.
        - **저장 위치**:
            - **HttpOnly 쿠키**에 저장하는 게 권장돼요. (JS에서 접근 불가 → 보안 강화)
        
        ---
        
        ## (3) AccessToken + RefreshToken 동작 흐름
        
        1. **로그인** → 서버가 AccessToken(짧음) + RefreshToken(김)을 발급.
        2. **API 요청** → 클라이언트는 AccessToken을 `Authorization: Bearer` 헤더에 담아 요청.
        3. **AccessToken 만료** → 서버가 “401 Unauthorized” 응답.
        4. **RefreshToken 사용** → 클라이언트가 RefreshToken을 서버에 보내 새 AccessToken을 발급받음.
        5. **재로그인 필요** → RefreshToken마저 만료되면, 다시 로그인해야 함.
        
- **클라이언트 저장소 전략** 🍠
    
    <aside>
    🍠
    
    로그인 후 서버가 발급해준 **토큰(JWT)** 이나 **세션 ID** 같은 민감한 정보를 어디에 저장할지 고민해야 해요.
    
    대표적인 저장소는 **쿠키(Cookie)**, **로컬 스토리지(localStorage)**, **세션 스토리지(sessionStorage)**예요.
    
    </aside>
    
    ---
    
    - 쿠키 (Cookie)
        
        # 쿠키 (Cookie)
        
        ---
        
        ### ✅ 특징
        
        - **브라우저가 자동으로 서버에 전송**
            - 같은 도메인 요청 시 브라우저가 알아서 쿠키를 붙여줘요.
        - **만료일 설정 가능** (`expires`, `max-age`)
        - **도메인/경로 제한 가능**
        - **보안 속성 제공**:
            - `HttpOnly`: JS에서 접근 불가 → XSS 방어
            - `Secure`: HTTPS 환경에서만 전송
            - `SameSite`: 크로스 도메인 요청에서 전송 여부 제어
        
        ---
        
        ### 📌 장점
        
        - 자동 전송 덕분에 편리해요.
        - `HttpOnly` 옵션으로 자바스크립트 접근을 막을 수 있어 **보안성이 높음**.
        
        ---
        
        ### 📌 단점
        
        - 자동 전송이기 때문에 **CSRF(Cross-Site Request Forgery)** 공격 위험이 있어요.
            
            → `SameSite`, CSRF 토큰 같이 써야 안전해요.
            
    - 📚 블로그 읽고 쿠키 정리해보기! 🍠
        
        # 📚 블로그 읽고 쿠키 정리해보기! 🍠
        
        ---
        
        [개발자 매튜 | HTTP 쿠키 이해하기](https://www.yolog.co.kr/post/http-cookie)
        
        [[🔐인증] 1. HTTP는 무상태인데 로그인 상태는 어떻게 유지할까](https://velog.io/@cucumtomatobean/%EC%9D%B8%EC%A6%9D-1.-HTTP%EB%8A%94-%EB%AC%B4%EC%83%81%ED%83%9C%EC%9D%B8%EB%8D%B0-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%83%81%ED%83%9C%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9C%A0%EC%A7%80%ED%95%A0%EA%B9%8C)
        
        - HTTP는 왜 무상태(Stateless)로 설계되었나요? 🍠
            
            HTTP는 1990년대 초, 단순히 **문서를 전송하기 위한 프로토콜**로 설계되었다.
            
            당시 웹은 지금처럼 로그인, 장바구니, 사용자 맞춤 정보 등의 기능이 필요하지 않았기 때문에,
            
            **확장성과 단순성**을 최우선으로 고려하여 설계되었다.
            
            - 서버는 각 요청(Request)을 독립적으로 처리하며,
                
                이전 요청의 상태를 **기억하지 않는 구조**를 채택.
                
            - 이렇게 하면 서버 간 부하 분산이 쉬워지고, 장애 복구도 단순해짐.
        - HTTP의 무상태성이 주는 장점과 단점을 각각 정리해주세요. 🍠
            
            ### ✅ 장점
            
            1. **확장성(Scalability)**
                
                여러 서버가 동시에 요청을 처리할 수 있어 수평 확장이 쉬움.
                
                클라이언트의 상태를 저장하지 않으므로 로드밸런서가 단순히 트래픽만 분산하면 됨.
                
            2. **신뢰성(Reliability)**
                
                특정 서버가 다운되어도 다른 서버가 즉시 대체 가능.
                
            3. **단순성(Simplicity)**
                
                상태 정보를 별도로 관리할 필요가 없어 서버 구현이 간단.
                
            
            ### ❌ 단점
            
            1. **상태 유지 불가능**
                
                사용자의 로그인, 장바구니, 입력값 등 연속된 상태를 유지 불가.
                
            2. **사용자 경험 저하**
                
                페이지를 이동할 때마다 사용자를 “새로운 방문자”로 인식.
                
            3. **복잡한 기능 구현 어려움**
                
                로그인 세션, 회원정보 유지 등 고급 기능을 직접 구현하기 어려움.
                
        - 쿠키의 Domain 디렉티브에 대해 정리해주세요. 🍠
            
            쿠키의 **Domain** 속성은 쿠키가 **어떤 도메인에 전송될 수 있는지**를 정의한다.
            
            - 기본적으로 쿠키는 발급된 도메인에서만 전송됨.
                
                예: `yolog.co.kr`에서 발급된 쿠키는 `login.yolog.co.kr`로 자동 전송되지 않음.
                
            - 하지만 여러 서브도메인 간 쿠키를 공유하고 싶을 때는
                
                서버가 쿠키를 발급할 때 **Domain=yolog.co.kr**로 지정하면 됨.
                
            
            ```jsx
            res.setHeader('Set-Cookie', 'sid=1; Domain=yolog.co.kr');
            ```
            
            ⇒ 이렇게 하면 `yolog.co.kr`, `login.yolog.co.kr`, `blog.yolog.co.kr` 등
            
            같은 메인 도메인을 공유하는 모든 서브도메인에서 쿠키를 사용할 수 있다!
            
        - 쿠키의 Path 디렉티브에 대해 정리해주세요. 🍠
            
            쿠키의 **Path** 속성은 쿠키가 어떤 경로(URL 경로)에 전송될지를 결정한다.
            
            ```jsx
            res.setHeader('Set-Cookie', 'sid=1; Path=/private');
            ```
            
            - `/private` 이하의 요청에서는 쿠키가 전송됨.
            - `/public` 요청에는 쿠키가 포함 x.
            
            ➡️ 즉, Path는 **쿠키의 적용 범위를 세밀하게 제한**하는 도구입니다.
            
        - 세션 쿠키와, 영속 쿠키의 차이점을 정리해주세요. 🍠
            
            
            | 구분 | 세션 쿠키(Session Cookie) | 영속 쿠키(Persistent Cookie) |
            | --- | --- | --- |
            | 저장 위치 | 브라우저 메모리 | 로컬 저장소(디스크) |
            | 만료 시점 | 브라우저 종료 시 자동 삭제 | 지정된 시간이나 날짜까지 유지 |
            | 설정 방법 | 별도 만료 설정 없음 | `Max-Age` 또는 `Expires` 지정 |
            | 예시 | 로그인 중 임시 세션 | "로그인 유지" 옵션 |
            
            ```jsx
            // 10초 뒤 자동 만료
            res.setHeader('Set-Cookie', 'sid=1; Max-Age=10');
            ```
            
        - 쿠키의 보안 속성(HttpOnly, Secure, SameSite)은 각각 어떤 공격을 방어하나요? 🍠
            
            
            | 속성 | 기능 | 방어하는 공격 |
            | --- | --- | --- |
            | **HttpOnly** | JavaScript의 `document.cookie` 접근 차단 | **XSS (Cross-Site Scripting)** 공격으로 쿠키 탈취 방지 |
            | **Secure** | HTTPS 연결에서만 쿠키 전송 | **중간자 공격(Man-in-the-Middle)** 방지 |
            | **SameSite** | 쿠키의 크로스사이트 전송 제한 | **CSRF (Cross-Site Request Forgery)** 공격 방어 |
        - 쿠키의 한계점(용량, 보안, 네트워크, 도메인 제약)을 정리해주세요. 🍠
            
            
            | 구분 | 내용 |
            | --- | --- |
            | **용량 제한** | 쿠키는 4KB 이내로 제한되며, 브라우저당 도메인별 개수 제한이 있음 |
            | **보안 취약성** | 클라이언트에서 수정 가능 (예: role=user → role=admin 변조 위험) |
            | **네트워크 오버헤드** | 같은 도메인 요청마다 쿠키가 자동 전송되어 트래픽 낭비 발생 |
            | **도메인 제약** | 보안을 위해 발급된 도메인 외에서는 접근 불가 (다중 서비스 구조에 제약) |
        - 쿠키만으로 상태 관리를 해결할 수 없는 이유는 무엇인가요? 🍠
            
            쿠키는 단순히 **클라이언트 식별자**를 저장할 뿐, 실제 사용자 상태 정보(세션 데이터)는 저장하지 않기 때문이다!
            
            - 보안 취약성: 클라이언트에서 변조 가능
            - 저장 용량 제한: 대규모 사용자 데이터 저장 불가
            - 다중 도메인 환경 제약: 여러 서비스 간 인증 공유 어려움
            
            ⇒ 실무에서는 쿠키를 **세션(Session Storage)**이나 **토큰(JWT)** 등과 결합하여 사용.
            
            쿠키는 ‘키’ 역할을 하고, 실제 상태는 서버나 토큰에 저장하는 구조로 발전하게 됨.
            
    - 로컬 스토리지 (Local Storage)
        
        # 로컬 스토리지 (localStorage)
        
        ---
        
        ### ✅ 특징
        
        - 브라우저에 **반영구적 저장소** (브라우저 껐다 켜도 유지됨).
        - 저장 용량이 크고 문자열 기반.
        - **직접 꺼내 쓰는 방식** → 요청 시 자동 전송 ❌.
        
        ---
        
        ### 📌 장점
        
        - 사용하기 쉽고 API 간단 (`setItem`, `getItem`).
        - 사용자 설정, 토큰 같은 데이터 유지에 유용.
        
        ---
        
        ### 📌 단점
        
        - **XSS 공격에 취약**
            
            (JS에서 접근 가능하니까, 악성 스크립트가 토큰을 훔칠 수 있어요).
            
        - 수동으로 헤더에 토큰을 넣어야 함. (`Authorization: Bearer <token>`)
    - 📚 블로그 읽고 XSS(Cross-SIte Scripting) 정리해보기! 🍠
        
        # 📚 블로그 읽고 XSS(Cross-SIte Scripting) 정리해보기! 🍠
        
        ---
        
        [개발자 매튜 | XSS(Cross-Site Scripting) 크로스 사이트 스크립팅 공격이란?](https://www.yolog.co.kr/post/security-xss)
        
        - XSS 공격은 무엇인가요?
            
            **정의**
            
            XSS(Cross-Site Scripting)는 공격자가 악성 스크립트를 웹사이트에 삽입하여,
            
            다른 사용자의 브라우저에서 실행되도록 하는 공격이다.
            
            **위험성**
            
            - **쿠키 탈취** → 세션 하이재킹, 계정 도용
            - **피싱** → 가짜 로그인 폼으로 비밀번호 수집
            - **사용자 위장** → 피해자 대신 악성 행위 수행
            - **페이지 변조** → 웹사이트 내용 변경 및 악성 사이트로 redirect
            
            **공격 과정 예시**
            
            1. 공격자가 `<script>alert('해킹')</script>` 입력
            2. 서버가 이 값을 필터링 없이 저장
            3. 페이지 로딩 시 브라우저가 그대로 실행
                
                → 악성 코드가 모든 사용자에게 노출됨 (저장형 XSS)
                
        - XSS 방어 전략에 대해 정리해주세요.
            
            ### 1) **HTML Sanitization (정화)**
            
            - 위험한 태그(`<script>`, `onerror` 등)를 제거하는 방식
            - 라이브러리 예: **DOMPurify**
            
            ```jsx
            const clean = DOMPurify.sanitize(dirtyHTML);
            ```
            
            ### 2) **HTML 이스케이프 처리**
            
            - 입력값을 HTML로 해석하지 못하도록 특수문자 변환
            
            ```jsx
            < → &lt; > → &gt; & → &amp;
            " → &quot; ' → &#39;
            ```
            
            <예시 코드>
            
            ```jsx
            const escaped = input
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;');
            ```
            
            ### 3) **HttpOnly 쿠키 설정**
            
            - JavaScript에서 쿠키 접근 차단 → 쿠키 탈취 방지
            
            ```jsx
            Set-Cookie: sid=1; HttpOnly;
            ```
            
            ### 4) **Secure 속성 사용**
            
            - HTTPS 연결에서만 쿠키 전송 → 중간자 공격 방어
            
            ```jsx
            Set-Cookie: sid=1; Secure;
            ```
            
            ### 5) **안전한 DOM 조작**
            
            - `innerHTML` 대신 `textContent` 사용
            - React/Vue 등 프레임워크의 자동 이스케이프 기능 활용
        
    - 세션 스토리지 (Session Storage)
        
        # 세션 스토리지 (sessionStorage)
        
        ---
        
        ### ✅ 특징
        
        - **브라우저 탭 단위 저장소**.
        - 탭이나 창을 닫으면 자동 삭제됨.
        - API 사용법은 localStorage와 동일.
        
        ---
        
        ### 📌 장점
        
        - 민감한 데이터를 **짧게 유지**할 때 적합.
        - 자동 삭제 → 사용자가 로그아웃하지 않아도 보안성 조금 더 나음.
        
        ---
        
        ### 📌 단점
        
        - 탭 닫으면 데이터 날아감 → **로그인 유지 불가능**.
        - 역시 JS에서 접근 가능 → XSS 취약.
    - 📚 블로그 읽고 세션 하이재킹 정리해보기 🍠
        
        # 📚 블로그 읽고 세션 하이재킹 정리해보기
        
        ---
        
        [개발자 매튜 | 세션 하이재킹 완벽 가이드 - 쿠키 탈취(XSS) 공격과 HttpOnly 방어법](https://www.yolog.co.kr/post/security-session-hijacking/)
        
        - 세션 하이재킹은 무엇인가요? 🍠
        - XSS 공격을 차단하는 방법은 무엇인가요? 🍠
        - 쿠키의 다양한 옵션들에 대해서 정리해주세요. 🍠
        
    - 📚 블로그 읽고 CSRF 공격 정리해보기 🍠
        
        # 📚 블로그 읽고 CSRF 공격 정리해보기
        
        ---
        
        [개발자 매튜 | 프론트엔드·백엔드 개발자라면 꼭 알아야 할 CSRF 공격과 방어법](https://www.yolog.co.kr/post/security-csrf)
        
        - CSRF는 무엇인가요? 🍠
        - CSRF 방어 전략에 대해 정리해주세요. 🍠
        - CSRF 토큰의 장점과 단점에 대해 정리해주세요. 🍠
        - CAPTCHA는 무엇인가요? 🍠
        
        [[🔐인증] 3. 쿠키 vs 헤더: 데이터를 어떻게 전송할까](https://velog.io/@cucumtomatobean/%EC%9D%B8%EC%A6%9D-3.-%EC%BF%A0%ED%82%A4-vs-%ED%97%A4%EB%8D%94-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%A0%84%EC%86%A1%ED%95%A0%EA%B9%8C)
        
        - 쿠키 방식으로 인증 정보를 전송할 때 브라우저가 자동으로 쿠키를 포함하는 조건은 무엇인가요? 🍠
        - 크로스 도메인 환경에서 쿠키를 전송하려면 서버와 클라이언트 측에서 각각 어떤 설정이 필요할까요? 🍠
        - 쿠키 기반 인증에서 CSRF 공격이 발생할 수 있는 원리는 무엇인가요? 🍠
        - 헤더 방식 인증의 주요 장점(예: CSRF 방어, 선택적 전송, CORS 단순화)을 정리해주세요. 🍠
        - 토큰을 클라이언트에 저장할 때 LocalStorage, SessionStorage, 메모리 저장의 장단점을 비교해주세요. 🍠
        - Single Page Application, Mobile Application, Server Side Rendering Application 에서 여러분들이 생각하는 적합한 인증 전략은 무엇이라고 생각하시나요? 🍠
        
    - 저장소 전략 비교
        
        
        | 저장소 | 자동 전송 | 수명 | 보안 옵션 | XSS 취약 | CSRF 취약 | 활용 예시 |
        | --- | --- | --- | --- | --- | --- | --- |
        | **쿠키** | ✅ (자동) | 설정 가능 | ✅ (HttpOnly, Secure, SameSite) | ❌ (HttpOnly면 방어) | ✅ | RefreshToken 저장 |
        | **localStorage** | ❌ (직접 꺼내 써야 함) | 영구적 | ❌ | ✅ | ❌ | AccessToken 저장 |
        | **sessionStorage** | ❌ | 탭 종료 시 삭제 | ❌ | ✅ | ❌ | 임시 세션 데이터 |
- **Custom Hook**을 왜 사용하는가?
    
    <aside>
    🍠
    
    리액트 훅은 **함수형 컴포넌트에서 “상태/생명주기/DOM참조/컨텍스트”를 선언적으로 다루기 위한 표준 도구**에요. (옛날에는, 리액트가 클래스 기반이었어요!)
    
    클래스 없이도 컴포넌트가 “기억”하고, “변화”에 반응하며, “부수효과”를 안전하게 처리할 수 있게 해줘요.
    
    - **상태 관리**: `useState`로 값이 바뀌면 화면이 자동으로 리렌더링돼요.
    - **부수 효과 관리**: `useEffect`로 “언제” API를 호출할지/리스너를 붙였다 뗄지 제어해요.
    - **참조 유지**: `useRef`로 리렌더링과 무관한 값을 기억하거나 DOM을 직접 참조해요.
    - **전역 데이터**: `useContext`로 props 없이 필요한 곳에서 바로 꺼내 써요.
    - **재사용 가능한 로직**: 여러 훅을 조합해 **Custom Hook**으로 묶으면, 화면(UI)과 로직을 깔끔히 분리하고 재사용할 수 있어요.
    
    즉, **Custom Hook(커스텀 훅)**은 **React의 내장 훅(`useState`, `useEffect`, `useRef` 등)을 조합하여 특정 기능을 모듈화하고 재사용할 수 있도록 만든 함수**예요.
    </aside>
    
    - **Custom Hook**을 왜 사용할까?
        
        # **Custom Hook**을 왜 사용할까?
        
        1. **코드 중복 제거**: 여러 컴포넌트에서 쓰는 로직을 한 군데로 모아서 재사용해요.
        2. **관심사 분리**: 화면(UI)과 비즈니스 로직을 분리해 가독성과 유지보수성이 좋아져요.
        3. **유지보수 용이**: 로직을 한 파일에서 관리하니 수정이 쉬워요.
        4. **테스트 용이**: UI 없이도 로직만 독립적으로 테스트하기 좋아요.
        5. **명시적 의존성**: 훅의 의존성 배열을 통해 “언제 실행/정리할지”를 선언적으로 관리해요.
    - **Custom Hook**은 어디에 보관할까?
        
        # **Custom Hook**은 어디에 보관할까?
        
        보통 `src/hooks/` 폴더를 만들어 **재사용 가능한 Custom Hook**을 넣어요.
        
        ```tsx
        📂 src
         ├─ 📂 components
         ├─ 📂 hooks
         │   ├─ useFetch.ts         // 데이터 요청/취소/에러 관리
         │   ├─ useLocalStorage.ts  // 웹 스토리지 동기화
         │   ├─ useDebounce.ts      // 입력 지연 처리
         │   ├─ useAuth.ts          // 로그인/토큰/프로필 상태
         │   └─ useTheme.ts         // 테마(라이트/다크) 전역 상태
         ├─ 📂 pages
         ├─ 📂 utils
         ├─ App.tsx
         └─ main.tsx
        ```
        
        여러분들이 위에 있는 훅들은 저와 앞으로 만들어볼 훅들이에요, 지금 모른다고 너무 걱정하지 않으셔도 됩니다! 
        
    - **Custom Hook** 기본 문법
        
        # **Custom Hook** 기본 문법
        
        ```tsx
        import { useState } from "react";
        
        function useCustomHook() {
          const [value, setValue] = useState("");
        
          const updateValue = (newValue: string) => setValue(newValue);
        
          return { value, updateValue };
        }
        
        export default useCustomHook;
        ```
        
        - **Custom Hook** 이름은 반드시 `use`로 시작해요(리액트 규칙).
        - 내부에서 다른 훅(`useState`, `useEffect` 등)을 “정상적인 순서”로 호출해야 해요.
    - **Custom Hook** 직접 만들어보기 🍠
        
        # **Custom Hook** 직접 만들어보기
        
        ---
        
        처음이니, 한번 같이 엄청나게 간단한 **Custom Hook**을 하나 만들어볼 거예요.
        
        이번에 같이 만들어 볼 **Custom Hook**은 **`useToggle`**이라는 Hook이에요.
        
        토글(toggle)은 값이 **true ↔ false**로 전환되는 기능인데, 다크모드 전환, 모달 열기/닫기, 스위치 버튼 등에 자주 쓰여요.
        
        ---
        
        ## 1. 기존 코드에서 어떤 문제가 있었을까?
        
        보통 토글을 구현할 때는 **`useState`**만 단독으로 사용했어요.
        
        ```tsx
        import { useState } from "react";
        
        const ToggleExample = () => {
          const [isOpen, setIsOpen] = useState(false);
        
          return (
            <div>
              <h1>{isOpen ? "열림" : "닫힘"}</h1>
              <button onClick={() => setIsOpen(!isOpen)}>토글</button>
            </div>
          );
        };
        
        export default ToggleExample;
        ```
        
        위의 코드는 잘 동작하긴 하지만, 이런 문제가 있어요:
        
        1. **토글 로직이 중복됨**
            
            다른 컴포넌트에서도 토글을 만들 때마다 `setState(!state)` 같은 코드를 계속 반복해야 함.
            
        2. **재사용이 어려움**
            
            모달, 다크모드, 드롭다운 등에서 같은 로직을 다시 작성해야 함.
            
        
        <aside>
        🍠
        
        **실무에서는 이런 문제가 많이 발생해요.**
        
        매튜, 저희가 기존에 만들었던 서비스의 UI를 변경하기 위한 지표로 쓰기 위해서 앞으로 유저의 버튼 클릭 빈도수를 알고 싶어서, 모든 토글을 열고 닫는 로직에 사용자의 행동을 추적할 수 있도록 로깅을 해주시면 좋겠어요!
        
        ---
        
        ### 😥 **Custom Hook**을 만들지 않았다면
        
        앱 내의 모든 토글 컴포넌트를 **일일이 찾아다니며** 로깅 코드를 추가해야 해요.
        
        - **비효율적:** 토글이 100개 있다면, 100개 파일을 모두 수정해야 해요.
        - **오류 발생 가능성:** 사람이 직접 하다 보니 실수로 한두 개를 빠뜨리거나 오타를 낼 수 있어요. (휴먼 에러 확률 올라감!)
        - **유지보수 지옥:** 로깅 방식이 변경될 때마다 이 작업을 **계속 반복**해야 하는 문제가 생깁니다. (일하기 싫어짐!)
        
        ---
        
        ### ✨ **Custom Hook**을 만들었다면
        
         **`useToggle` 훅 파일 하나에** 로깅 로직을 추가하면 됩니다.
        
        - **재사용성:** 로직이 한 곳에 모여 있어 코드가 **중복되지 않아요.**
        - **일관성:** `useToggle` 훅을 사용하는 모든 컴포넌트에 변경 사항이 자동으로 반영되어, 코드가 **일관성 있게** 관리되요.
        - **쉬운 유지보수:** 나중에 로깅 방식이 바뀌더라도 **Custom Hook** 내부만 수정하면 되기 때문에 **유지보수가 훨씬 쉬워요.**
        </aside>
        
        ---
        
        ## 2. 그래서 Custom Hook으로 개선해보자!
        
        반복되는 로직을 `useToggle`이라는 Custom Hook으로 분리하면 훨씬 깔끔해져요.
        
        ```tsx
        import { useState } from "react";
        
        function useToggle(initialValue: boolean = false) {
          const [state, setState] = useState(initialValue);
        
          // 토글 로직을 내부에 캡슐화
          const toggle = () => setState((prev) => !prev);
        
          return [state, toggle] as const;
        }
        
        export default useToggle;
        ```
        
        ---
        
        ## 3. 이제 훨씬 깔끔하게 사용 가능!
        
        ```tsx
        import useToggle from "../hooks/useToggle";
        
        const ToggleExample = () => {
          const [isOpen, toggle] = useToggle(false);
        
          return (
            <div>
              <h1>{isOpen ? "열림" : "닫힘"}</h1>
              <button onClick={toggle}>토글</button>
            </div>
          );
        };
        
        export default ToggleExample;
        ```
        
        ---
        
        ## 4. 무엇이 좋아졌을까?
        
        - **중복 코드 제거** → `setState(!state)`를 매번 작성할 필요 없어요.
        - **재사용 가능** → 모달, 다크모드, 드롭다운 등 어디서든 불러다 쓸 수 있어요.
        - **가독성 향상** → `const [isOpen, toggle] = useToggle(false);` 한 줄로 바로 의미 파악 이 가능해요.
        
        ---
        

---

# 🍠 **미션 1 – Custom Hook으로 영화 데이터 불러오기 (useEffect 확장)**

---

<aside>
🍠 이번 미션은 **Chapter 3에서 만든 영화 페이지(목록/상세)**를 그대로 활용하되, **커스텀 훅(Custom Hook)**으로 데이터 패칭, 로딩, 에러까지 **일원화**하는 것이 목표입니다. 

아래 체크리스트와 단계별 가이드를 따라 구현해 보세요.

**- 중앙 웹 파트장 매튜 김용민 -**

</aside>

**🍠 미션 1에서 만들어볼 화면은 아래와 같아요 🍠**

**`영화 전체 페이지`**

![Screenshot 2025-02-23 at 3.32.31 PM.png](attachment:47198e65-cee0-450d-a689-db92f4272a3a:Screenshot_2025-02-23_at_3.32.31_PM.png)

**`영화 상세 페이지` (이미 Chapter 3에서 만들었어요)**

![Screenshot 2025-02-23 at 3.49.20 PM.png](attachment:d9ccb404-4619-4266-a3d0-7e5033f1f41e:Screenshot_2025-02-23_at_3.49.20_PM.png)

---

1. **Custom Hook 설계/구현**
- [ ]  `useCustomFetch` 훅을 만들었나요?
- [ ]  훅에서 **`데이터`**와, **`로딩 상태`**, **`에러 상태`**를 반환하나요?
- [ ]  의존성 변경 시 자동으로 데이터를 재요청하도록 구현했나요? (URL 또는 params가 바뀌면 재호출)

1. **로딩 / 에러 처리**
- [ ]  데이터를 불러오는 동안 **로딩 상태**를 사용자에게 표시했나요? (예: 스피너, 로딩 메시지)
- [ ]  API 호출 중 에러가 발생했을 때, 사용자에게 **친절한 에러 메시지**를 보여주도록 처리했나요?

1. **페이지에 커스텀 훅 적용**
- [ ]  영화 **페이지**에서 커스텀 훅을 사용했나요?
- [ ]  영화 **상세 페이지**에서 커스텀 훅을 사용했나요?

1. **UI 디자인 및 데이터 시각화**
- [ ]  영화 전체 페이지 화면을 **Tailwind CSS**를 활용해 미적인 감각을 살려 상세 페이지를 디자인했나요? 자유롭게 스타일을 꾸며보세요!

---

### 🍠 미션 1. 제출

- 깃허브 주소
- 실행 영상

---

# 🍠 **미션 2 – 로그인 기능 구현 (useForm 커스텀 훅 + 유효성 검증 + 서버 연동)**

---

<aside>
🍠 이번 미션에서는 앞으로 배우게 될 `react-hook-form` 라이브러리의 핵심 기능을 직접 구현해보는 경험을 하게 될 거예요. 

`useForm`이라는 **커스텀 훅**을 직접 만들어보면서 꼼꼼한 유효성 검사까지 더해 **안전하고 견고한 로그인 서비스**를 함께 만들어봅시다.

**- 중앙 웹 파트장 매튜 김용민 -**

</aside>

---

### ⚠️ 미션 2 진행 전 주의사항 ⚠️

- 미션 2 진행 전 주의사항 🍠🍠🍠
    
    앞으로 대부분의 미션은 제가 직접 구성하고 제작한 서버 환경에서 진행 할 예정입니다.
    
    1. 아래 깃허브 `Repository`를 들어가주세요!
    1. 해당 `GitHub Repository`의 URL을 클론해주세요!
    
    ![Screenshot 2025-03-06 at 7.36.17 AM.png](attachment:f66e8a83-0b40-45e3-ad90-b80fee75ff4d:Screenshot_2025-03-06_at_7.36.17_AM.png)
    
    1. Terminal 에서 해당 파일을 보고 싶은 경로에서 `git clone ‘url’`을 진행해주세요.
        
        ![Screenshot 2025-03-06 at 7.37.34 AM.png](attachment:d26a1da2-dc75-4ef8-b7fd-c06149e935c1:Screenshot_2025-03-06_at_7.37.34_AM.png)
        
    2. 그 후 서버 파일을 `VS-Code`로 오픈해주시면 됩니다.
    3. 파일을 여신 후 가장 루트의 경로에 .env 파일을 만들어 (React 와 동일)
        
        ![Screenshot 2025-03-06 at 7.38.48 AM.png](attachment:b4316879-d9fc-445e-9702-d5cce78fb9df:Screenshot_2025-03-06_at_7.38.48_AM.png)
        
        아래 코드를 복사해서 붙여넣어줍니다!
        
        ```tsx
        # Environment variables declared in this file are automatically made available to Prisma.
        # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema
        
        # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
        # See the documentation for all the connection string options: https://pris.ly/d/connection-strings
        
        DATABASE_URL="file:./dev.db"
        
        JWT_SECRET=m7uah9NZsAXlZ/uKiMyzvPL6XJmnxFyR2jr/M4dOAFY=
        JWT_EXPIRES_IN=3600s
        #JWT_EXPIRES_IN=3600s
        
        REFRESH_JWT_SECRET=JoDpot4aMrtCrtj/qGRmwCQu1m76SlSLnCSCnFJ8eMI=
        REFRESH_JWT_EXPIRES_IN=7d
        
        # Google Auth
        GOOGLE_CLIENT_ID=aaa
        GOOGLE_CLIENT_SECRET=aaa
        GOOGLE_CALLBACK_URL=aaa
        ```
        
    4. 그 후 아래 명령어를 순서대로 실행해주세요! 
        
        ```bash
        # Prisma를 설치하지 않은 경우 // npm인 경우 npm install // yarn인 경우 yarn add
        $ pnpm add prisma
        $ pnpm add @prisma/client
        
        $ pnpm install
        ```
        
        ```bash
        $ prisma db push  # Prisma 스키마를 DB에 반영 (마이그레이션 파일 생성 X)
        $ pnpm db seed  # 가상 데이터 삽입
        $ pnpm run start:dev  # 개발 서버 실행
        ```
        
        ![Screenshot 2025-03-16 at 11.54.53 PM.png](attachment:e5bc859f-a606-49c4-b169-2cc3184d2220:Screenshot_2025-03-16_at_11.54.53_PM.png)
        
        이런식으로 터미널이 동작한다면 서버실행에 성공한겁니다!
        
- **Window** 사용시 주의사항 🍠🍠🍠🍠🍠
    
    <aside>
    🍠 [Nest.js Backend 서버 Window 사용 관련 공지]
    
    안녕하세요, 여러분! 이번 주차 부터는 앞으로 여러분께서 Nest.js를 활용하여 Backend 서버와 실제 통신을 경험해 보실 수 있도록 서버를 준비했습니다.
    
    다만, 프로젝트를 클론하여 실행할 때 윈도우 환경에서 특정 오류가 발생할 수 있어 공지드립니다.
    
    **오류 내용: "module 또는 entity를 찾을 수 없다"는 에러가 발생하는 경우가 있습니다.**
    
    해결 방법: 이 문제는 프로젝트 경로에 한글이 포함되어 있는 경우 발생하는 것으로 확인되었습니다.
    이를 방지하기 위해, C드라이브와 같은 영문 경로에 프로젝트를 옮겨서 실행해 주세요.
    
    **- 중앙 웹 파트장 매튜 김용민 -** 
    
    </aside>
    
    향후 있을 워크북에, 제가 제공해드리는 서버는 모두 이와 동일한 설정을 참고하여 작업해 주시기 바랍니다.
    

### 🎥 `Swagger 문서` 활용 방법에 대한 설명 영상

https://www.youtube.com/watch?v=o6fLNGI9Ap8&t=6s

---

### 🎥 강의 영상

<aside>
🍠

만약 미션을 진행하다가 막히는 부분이 생긴다면, 아래 방법을 활용해 문제를 해결해보세요.

1. **공식 문서와 검색을 최우선으로 활용해 주세요.**
    - **가장 빠르고 정확한 해답**을 찾을 수 있는 가장 좋은 방법입니다.
    - 에러 메시지나 궁금한 점을 직접 검색하며 스스로 답을 찾는 연습을 해보세요.
2. **그래도 해결되지 않을 때 AI에게 물어보세요.**
    - AI는 방대한 지식을 바탕으로 여러분이 겪는 문제를 해결하는 데 큰 도움을 줄 수 있습니다.
    - 에러 코드, 원하는 기능, 현재까지 작성한 코드 등을 함께 질문하면 더욱 정확한 답변을 얻을 수 있습니다.
3. **마지막 수단으로 영상을 활용해 주세요.**
    - 영상을 처음부터 끝까지 보기보다는, **필요한 부분만 찾아서** 미션을 해결하는 데 힌트를 얻는 용도로 활용해 보세요.

**- 중앙 웹 파트장 매튜 김용민 -** 

</aside>

https://youtu.be/8sQOyfUbROg?si=n_Pjj48gy5tIg1Jg

---

### 1. 🎨 로그인 화면 구현 & 이전 페이지 이동

이 단계는 사용자가 처음 마주할 로그인 화면을 멋지게 만들고, 편리한 내비게이션 기능을 추가하는 과정입니다.

- [ ]  **로그인 UI 구축:** 아래 이미지와 같은 디자인으로 로그인 화면의 레이아웃을 성공적으로 구현했나요? (폼, 입력 필드, 버튼 등을 포함)
    
    ![스크린샷 2025-09-25 오후 5.11.51.png](attachment:c92cd0db-72f6-47d1-b9d2-4f85ae0a111b:스크린샷_2025-09-25_오후_5.11.51.png)
    
- [ ]  **뒤로 가기 버튼:** 로그인 화면 왼쪽 상단의 `<` 버튼을 클릭했을 때, 사용자가 이전 페이지로 **부드럽게 이동**하도록 `react-router-dom`의 기능을 활용하여 구현했나요?

---

### 2. ✅ 사용자 입력 유효성 검사 & 에러 메시지 표시

실제 서비스에서는 사용자의 잘못된 입력을 친절하게 안내하는 것이 중요해요. 입력된 이메일과 비밀번호가 규칙에 맞는지 확인하고, 문제가 있을 경우 명확한 에러 메시지를 보여주는 기능을 만들어봅시다.

- [ ]  **이메일 유효성 검사:** 유효하지 않은 이메일(예: `@`나 `.`이 없는 형식)을 입력했을 경우, 아래 이미지와 같이 "유효하지 않은 이메일 형식입니다."와 같은 **친절한 에러 메시지**를 입력 필드 아래에 표시했나요?
    
    ![스크린샷 2025-09-25 오후 5.13.43.png](attachment:30a31b6b-af03-4243-8baf-92079ee76e4d:스크린샷_2025-09-25_오후_5.13.43.png)
    
- [ ]  **비밀번호 길이 검사:** 비밀번호를 너무 짧게 입력했을 경우(예: 6자 미만), 아래 이미지와 같이 "비밀번호는 최소 6자 이상이어야 합니다."와 같은 **구체적인 에러 메시지**를 표시했나요?
    
    ![스크린샷 2025-09-25 오후 5.14.02.png](attachment:c425f402-bfa8-4b12-bde3-82f9a325ce19:스크린샷_2025-09-25_오후_5.14.02.png)
    

---

### 3. 💪 로그인 버튼 활성화 조건

사용자가 올바른 정보를 입력했을 때만 로그인을 시도할 수 있도록 버튼 활성화 조건을 설정하는 것은 사용자 경험을 좋게 만듭니다.

- [ ]  **버튼 활성화 로직:** 이메일과 비밀번호가 **모두 유효성 검사를 통과**했을 때만 '로그인' 버튼이 활성화되어 클릭할 수 있도록 구현했나요? (둘 중 하나라도 유효하지 않으면 버튼은 비활성화 상태여야 합니다.)
    
    ![스크린샷 2025-09-25 오후 5.14.49.png](attachment:e36cbec5-fa15-46a0-ade7-3e37be278541:스크린샷_2025-09-25_오후_5.14.49.png)
    

### 4. 🚀 안정적인 폼 관리 (useForm 커스텀 훅 활용)

- [ ]  복잡한 폼을 더 효율적이고 안정적으로 관리하기 위해 useForm 이라는 커스텀 훅을 만들어 활용하셨나요?

---

### 🍠 미션 2. 제출

- 깃허브 주소
- 실행 영상

---

# 🍠 **미션 3 – 회원가입 기능 구현 (react-hook-form + zod 활용)**

---

<aside>
🍠 이번 미션에서는 미션 2에서 익힌 `useForm` 훅을 활용하여 **회원가입 기능**을 만들어 볼 거예요. 

여러 단계에 걸쳐 정보를 입력받고, 강력한 유효성 검사까지 추가하여 완성도 높은 회원가입 플로우를 구축해봅시다!

**- 중앙 웹 파트장 매튜 김용민 -**

</aside>

---

### 🎥 강의 영상

<aside>
🍠 만약 미션을 진행하다가 막히는 부분이 생긴다면, 아래 방법을 활용해 문제를 해결해보세요.

1. **공식 문서와 검색을 최우선으로 활용해 주세요.**
    - **가장 빠르고 정확한 해답**을 찾을 수 있는 가장 좋은 방법입니다.
    - 에러 메시지나 궁금한 점을 직접 검색하며 스스로 답을 찾는 연습을 해보세요.
2. **그래도 해결되지 않을 때 AI에게 물어보세요.**
    - AI는 방대한 지식을 바탕으로 여러분이 겪는 문제를 해결하는 데 큰 도움을 줄 수 있습니다.
    - 에러 코드, 원하는 기능, 현재까지 작성한 코드 등을 함께 질문하면 더욱 정확한 답변을 얻을 수 있습니다.
3. **마지막 수단으로 영상을 활용해 주세요.**
    - 영상을 처음부터 끝까지 보기보다는, **필요한 부분만 찾아서** 미션을 해결하는 데 힌트를 얻는 용도로 활용해 보세요.

**- 중앙 웹 파트장 매튜 김용민 -** 

</aside>

https://youtu.be/8909DM3XLcE?si=KI16tkgXavc0oejq

---

### 1. 🌐 회원가입 페이지 연결 및 이메일 입력

첫 번째 단계에서는 회원가입 페이지를 앱에 연결하고, 사용자가 이메일 주소를 정확하게 입력하도록 유도하는 기능을 구현합니다.

**경로 설정**

- [ ]  `react-router-dom`을 사용하여 `/signup` 경로에 회원가입 페이지 컴포넌트를 성공적으로 연결했나요?
    
    ![스크린샷 2025-09-25 오후 5.24.17.png](attachment:89c2a28d-8227-4735-96a8-8bc8d580723b:스크린샷_2025-09-25_오후_5.24.17.png)
    

**이메일 유효성 검사**

- [ ]  올바르지 않은 이메일 형식(예: `@`나 `.`이 없는 주소)을 입력했을 경우, 아래 이미지와 같이 "올바른 이메일 형식을 입력해주세요."와 같은 **명확한 에러 메시지**를 표시했나요?
    
    ![스크린샷 2025-09-25 오후 5.24.42.png](attachment:f389783a-0a3c-4af5-95cc-fadd9b21e607:스크린샷_2025-09-25_오후_5.24.42.png)
    

**'다음' 버튼 활성화**

- [ ]  이메일이 유효성 검사 조건을 충족했을 때만 '다음' 버튼이 활성화되어 다음 단계로 넘어갈 수 있도록 구현했나요?
    
    ![스크린샷 2025-09-25 오후 5.24.53.png](attachment:fa9113d4-07d7-498e-b313-f56c9c53a935:스크린샷_2025-09-25_오후_5.24.53.png)
    

---

### 2. 🔑 비밀번호 설정 및 확인

두 번째 단계에서는 사용자가 안전한 비밀번호를 설정하고, 입력 오류를 방지하기 위해 비밀번호를 재확인하는 기능을 구현합니다.

**다단계 폼 전환**

- [ ]  이메일 유효성 검사 충족 후 '다음' 버튼 클릭 시, 이전 이메일 정보가 상단에 표시된 채로 아래 이미지 처럼 **비밀번호 입력 컴포넌트**로 전환되도록 구현했나요?
    
    ![스크린샷 2025-09-25 오후 5.27.50.png](attachment:3ab15b60-d95f-4486-b40a-2ca3681a123d:스크린샷_2025-09-25_오후_5.27.50.png)
    

**비밀번호 길이 검사**

- [ ]  비밀번호 길이가 너무 짧을 경우(예: 6자 미만), 아래 이미지와 같이 "비밀번호는 6자 이상이어야 합니다."와 같은 **구체적인 에러 메시지**를 표시했나요?
    
    ![스크린샷 2025-09-25 오후 5.28.03.png](attachment:33a1a757-39b1-4459-b687-9c9184aa3e13:스크린샷_2025-09-25_오후_5.28.03.png)
    

**비밀번호 가시성 토글**

- [ ]  입력 필드 옆의 '눈 감은' 아이콘 버튼을 클릭하면, 입력된 비밀번호가 **보이거나 가려지도록(토글) 구현**하여 사용 편의성을 높였나요? (아래 이미지 참고)
    
    ![스크린샷 2025-09-25 오후 5.28.34.png](attachment:c928d410-9202-4798-b06e-5484882e7beb:스크린샷_2025-09-25_오후_5.28.34.png)
    

**비밀번호 재확인**

- [ ]  '비밀번호 재확인' 칸에 입력된 값이 첫 번째 비밀번호와 다를 경우, 아래 이미지와 같이 "비밀번호가 일치하지 않습니다."와 같은 **경고 메시지**를 표시했나요?
    
    ![스크린샷 2025-09-25 오후 5.28.42.png](attachment:c057221b-9a0b-4f5e-a600-396873145a5e:스크린샷_2025-09-25_오후_5.28.42.png)
    

**'다음' 버튼 활성화**

- [ ]  비밀번호가 유효성 검사를 통과하고 서로 일치할 때만 아래 이미지와 같이 '다음' 버튼이 활성화되도록 구현했나요?
    
    ![스크린샷 2025-09-25 오후 5.29.04.png](attachment:1f064071-de84-4576-b55e-0d30a4b091a7:스크린샷_2025-09-25_오후_5.29.04.png)
    

---

### 3. 👤 닉네임 설정 및 회원가입 완료

마지막 단계에서는 사용자 닉네임을 입력받고, 회원가입 절차를 마무리합니다.

**닉네임 입력**

- [ ]  사용자가 자신을 표현할 닉네임을 입력할 수 있는 필드를 구현했나요?
    
    **프로필 이미지 UI (선택)**
    
    - [ ]  프로필 이미지 업로드 기능은 아직 배우지 않았으므로, UI만 간단하게 구현하여 시각적인 완성도를 높였나요? (실제 기능 구현은 필수가 아닙니다.)
    
    ![스크린샷 2025-09-25 오후 5.33.03.png](attachment:4b0cb592-8181-4bf4-b229-7044c49ca489:스크린샷_2025-09-25_오후_5.33.03.png)
    

**회원가입 완료**

- [ ]  모든 정보를 입력하고 '회원가입 완료' 버튼을 클릭했을 때, 성공적으로 회원가입이 처리되도록 로직을 구현했나요?
- [ ]  회원가입 이후 홈 화면으로 이동하나요?

---

### 4. 🛠️ 고급 폼 관리 및 타입 안정성 강화 (**react-hook-form** & **Zod**)

<aside>
🍠 폼 관리를 더욱 강력하고 안정적으로 만들기 위해 **react-hook-form**과 스키마 유효성 검사 라이브러리 **Zod**를 도입하여 코드를 리팩토링합니다.

**- 중앙 웹 파트장 매튜 김용민 -**

</aside>

**react-hook-form 활용**

[React Hook Form - performant, flexible and extensible form library](https://react-hook-form.com/)

- [ ]  미션2에서 만든 로그인 기능을 포함하여 이번 회원가입 기능 전반에 **react-hook-form** 훅을 활용하여 폼 상태 및 유효성 검사를 관리했나요?
- [ ]  **react-hook-form** 공식문서를 보며 학습한 내용을 정리해주세요.
    - **react-hook-form** 학습 내용 정리

**Zod 활용**

[Release notes | Zod](https://zod.dev/v4)

- [ ]  **Zod** 라이브러리를 사용하여 이메일, 비밀번호, 닉네임 등의 **스키마를 정의**하고, 이를 **react-hook-form**과 연동하여 유효성 검사를 처리했나요?
- [ ]  **Zod** 공식 문서를 보며 학습한 내용을 정리해주세요.
    - **Zod** 학습 내용 정리

**타입 안정성 확보** 

- [ ]  `TypeScript`를 사용하여 회원가입에 필요한 데이터(예: 이메일, 비밀번호, 닉네임)의 타입(interface 또는 type)을 명확하게 정의하고, 이를 활용하여 코드의 **타입 안정성**을 확보했나요?

**커스텀 훅 활용**

- [ ]  `useLocalStorage`와 같은 **커스텀 훅**을 활용하여 사용자의 로그인 정보나 기타 필요한 데이터를 로컬 스토리지에 안전하게 저장하고 관리했나요? (예: 회원가입 성공 후 토큰 저장 등)

---

### 🍠 미션 3. 제출

- 깃허브 주소
- 실행 영상

---

# 🍠 워크북 피드백

---

<aside>
💡

여러분들이 워크북을 학습하며 느낀 **좋았던 점**, **아쉬웠던 점**, **개선이 필요한 부분**을 자유롭게 남겨주세요.

여러분의 솔직한 의견은 다음 기수와 현재 진행하고 있는 웹 파트 스터디를 더 발전시키는 데 큰 힘이 됩니다. 🙌

**📌 설문 안내**

**제출 시점 :** 각 주차 워크북 학습을 마친 뒤 **반드시 제출**해주세요.

(제출하지 않으면 해당 주차 **워크북 미이수**로 간주됩니다.)

</aside>

[](https://forms.gle/PCLJq6NUn1qBd1Ha8)

# 🍠 코드 리뷰

---

<aside>
💡

워크북 하단에 아래 내용을 정리해 제출해 주세요. (제출용 폼은 추후 제공 예정)

1. **내가 리뷰한 내용**
    - 직접 리뷰한 코드 내용을 캡처하여 업로드 (**`GitHub Pull Request`** 캡처 권장)
2. **리뷰 반영 결과**
    - 받은 피드백을 반영한 개선된 코드와 그 캡처를 함께 업로드 (**`GitHub Pull Request`** 캡처 권장)

> 💬 아직 코드 작성을 하지 않은 경우
> 
> 
> 스터디 참여 인증 또는 워크북 피드백을 작성해 제출해 주세요.
> 
</aside>

- 내가 리뷰한 내용을 캡처해 업로드
    
    **예시**
    
    ![스크린샷 2025-09-05 오후 12.46.40.png](attachment:39549968-68c3-4416-b41f-423fd1f7fd79:스크린샷_2025-09-05_오후_12.46.40.png)
    
- 받은 리뷰를 반영하여 개선한 코드와 캡처 업로드
    
    **예시**
    
    ![스크린샷 2025-09-05 오후 12.47.34.png](attachment:01011e3f-c9fd-4041-bdd5-4da72a805955:스크린샷_2025-09-05_오후_12.47.34.png)
    

# 🍠 트러블 슈팅

---

<aside>
🍠 실습을 진행하면서 생긴 문제들 또는 어려웠던 내용에 대해서, 이슈 - 문제 - 해결 순서로 작성해 주세요.

</aside>

- 🍠 이슈 No.1 (예시, 서식만 복사하시고 지워주세요.)
    
    **`이슈`**
    
    👉 React 상태 관리 중 `useState`로 배열을 업데이트할 때, 원본 배열이 변경되지 않는 문제가 발생했다.
    
    ---
    
    **`문제`**
    
    👉 `push()` 메서드를 사용해 상태 배열에 새 요소를 추가했지만, React가 상태 변경을 감지하지 않아 화면이 갱신되지 않았다.
    
    ```jsx
    const [items, setItems] = useState<string[]>([]);
    
    function addItem(newItem: string) {
      items.push(newItem); // 상태 직접 변경
      setItems(items);     // 동일 참조 전달
    }
    ```
    
    React는 상태 변경 여부를 **참조(Reference)** 기준으로 판단하기 때문에, 기존 배열을 직접 변경하면 리렌더링이 일어나지 않는다.
    
    ---
    
    **`해결`**
    
    👉 기존 배열을 복사하여 새로운 배열 객체를 만들어 전달했다.
    
    ```jsx
    function addItem(newItem: string) {
      setItems([...items, newItem]); // 새로운 배열 생성
    }
    ```
    
    이로써 React가 새로운 참조를 감지하여 정상적으로 리렌더링이 발생했다.
    

# 🥕 "유효성 검증, 누가 진짜 주인공인가?”

---

<aside>
🥕

JavaScript와 TypeScript 세계에서 **폼 유효성 검증**은 빠질 수 없는 핵심 요소입니다.

하지만 지금, 이 시장에서는 서로 다른 철학과 전략을 가진 라이브러리들이 치열하게 경쟁하고 있습니다.

- 타입 안전성을 최우선으로 삼은 **Zod**
- 오랜 세월 검증된 안정성을 내세우는 **Yup**
- 가볍고 모듈러한 설계로 떠오르는 신흥 강자 **Valibot**

이 글에서는 단순히 "무엇을 쓸까?"라는 고민이 아니라,

각 라이브러리가 **왜 등장했고 어떤 문제를 해결하려 했는지**, 그리고 지금 **어떤 상황에서 빛을 발하는지**를 집중적으로 살펴봅니다.

참고로, 이 글은 100% **Perplexity**를 활용해 정리했습니다.

</aside>

[ "유효성 검증, 누가 진짜 주인공인가?”](https://www.notion.so/282b57f4596b81d09bcdd9e6b8818310?pvs=21)

# 🍠 학습 회고

---

<aside>
📢 이번 주차 워크북을 해결해보면서 어땠는지 **회고**해봅시다.

- **핵심 키워드**에 대해 완벽하게 이해했는지? 
- **이해한 점 - 어려운 점 (개선 방법) - 회고** 순서로 작성해주세요.
- **참고 자료**가 있다면 아래에 남겨주세요.

</aside>

- 📢 학습 회고 (예시, 서식만 복사하시고 지워주세요.)
    - **프론트엔드 배포, Vercel 활용**
        - **이해한 점**: Vercel은 프론트엔드 프로젝트를 **빠르고 간편하게 배포**할 수 있는 플랫폼입니다.
            
            GitHub 연동, 환경변수 설정, 커스텀 도메인 연결 등 배포 과정 대부분이 GUI와 CLI로 쉽게 처리되며, SPA 환경에서도 라우팅 문제를 `vercel.json` 설정으로 해결할 수 있습니다.
            
            - 예시:
                
                ```bash
                # CLI로 배포
                vercel         # Preview 배포
                vercel --prod  # Production 배포
                ```
                
                ```json
                // SPA 라우팅 문제 해결
                {
                  "routes": [
                    { "src": "/[^.]+", "dest": "/index.html", "status": 200 }
                  ]
                }
                ```
                
        - **어려운 점 (개선 방법)**: SPA 기반 프로젝트는 새로고침 시 404 문제가 발생할 수 있으며, 환경변수 관리, 커스텀 도메인 연결 과정이 처음에는 헷갈렸습니다.
            - 개선 방법: `vercel.json` 설정으로 SPA 라우팅 문제를 해결하고, Vercel Dashboard에서 환경변수와 DNS 설정을 직접 확인하면서 반복적으로 배포 실습을 진행했습니다.
            - 예시:
                
                ```tsx
                // 환경변수 사용
                const api = axios.create({
                  baseURL: import.meta.env.VITE_API_URL,
                  headers: { 'Content-Type': 'application/json' },
                });
                
                ```
                
        - **회고**: 실제 배포 과정을 경험해보니, 로컬 환경과 다른 실제 서비스 환경에서의 테스트 필요성을 이해할 수 있었습니다.
            
            앞으로 프로젝트를 진행할 때, GitHub 연동과 Vercel 배포를 활용해 **즉시 테스트 가능한 환경**을 만들고, SPA 라우팅 문제와 환경변수를 신경 써서 안정적으로 서비스를 운영할 수 있을 것 같습니다.
            
        
        ---
        
        ### 참고 자료
        
        [개발자 매튜 | 우리는 Vercel로 간다! 프론트엔드 배포 가이드](https://www.yolog.co.kr/post/vercel-deployment)
        

# 🤔 참고 자료

---

[개발자 매튜 | HTTP 쿠키 이해하기](https://www.yolog.co.kr/post/http-cookie)

[개발자 매튜 | XSS(Cross-Site Scripting) 크로스 사이트 스크립팅 공격이란?](https://www.yolog.co.kr/post/security-xss)

[개발자 매튜 | 세션 하이재킹 완벽 가이드 - 쿠키 탈취(XSS) 공격과 HttpOnly 방어법](https://www.yolog.co.kr/post/security-session-hijacking)

[개발자 매튜 | 프론트엔드·백엔드 개발자라면 꼭 알아야 할 CSRF 공격과 방어법](https://www.yolog.co.kr/post/security-csrf)

[React Hook Form - performant, flexible and extensible form library](https://react-hook-form.com/)

[Intro | Zod](https://zod.dev/)

[[🔐인증] 1. HTTP는 무상태인데 로그인 상태는 어떻게 유지할까](https://velog.io/@cucumtomatobean/%EC%9D%B8%EC%A6%9D-1.-HTTP%EB%8A%94-%EB%AC%B4%EC%83%81%ED%83%9C%EC%9D%B8%EB%8D%B0-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%83%81%ED%83%9C%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9C%A0%EC%A7%80%ED%95%A0%EA%B9%8C)

[[🔐인증] 2. 세션 vs 토큰: 사용자의 상태를 어디에 저장할까](https://velog.io/@cucumtomatobean/dtd9x1yh)

[[🔐인증] 3. 쿠키 vs 헤더: 데이터를 어떻게 전송할까](https://velog.io/@cucumtomatobean/%EC%9D%B8%EC%A6%9D-3.-%EC%BF%A0%ED%82%A4-vs-%ED%97%A4%EB%8D%94-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%A0%84%EC%86%A1%ED%95%A0%EA%B9%8C)

[React Hook Form - performant, flexible and extensible form library](https://react-hook-form.com/)

[Release notes | Zod](https://zod.dev/v4)

# 🛡️ 저작권

---

**© 2025 [Kim Yongmin (Matthew)](https://www.youtube.com/@yongcoding). All rights reserved.**