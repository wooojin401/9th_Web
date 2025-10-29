# OAuth 2.0

## OAuth 2.0의 주요 역할자 (Roles)

1. 리소스 소유자: 사용자
2. 클라이언트: 앱
3. 권한 서버: 사용자의 신원 확인, 토큰 발급 서버
4. 리소스 서버: 사용자 데이터를 가지고 있는 서버에 토큰이 유효하면 정보 제공

## OAuth 2.0 인증 및 권한 부여 프로세스

다음과 같은 순서로 인증 및 권한이 이루어집니다.

1. 사용자 인증 및 권한 부여 요청
2. 인가 코드 발급 (Authorization Code Grant)
3. 액세스 토큰 발급
4. 리소스 접근

## OAuth 2.0의 권한 부여 흐름 (Grant Types)

1. PKCE 준비

- React 앱이 먼저 code_verifier라는 랜덤 문자열을 생성합니다.
- 이 문자열을 해시(SHA256) 처리하여 code_challenge를 만듭니다. 이 code_challenge는 이후 권한 서버로 보내는 인증 요청에 포함됩니다.

2. 권한 요청

- React 앱이 사용자 브라우저를 권한 서버로 리다이렉트합니다.

3. 코드 발급

- 서버는 Authorization Code를 생성하고 redirect_uri로 리다이렉트하며 이 코드를 전달합니다.

4. 토큰 교환
   React 프론트엔드는 이 Authorization Code를 직접 Access Token으로 교환하면 안 됩니다.
   대신 프론트엔드는 코드를 **백엔드 서버(BFF, API Gateway)**로 전달합니다.
   프론트엔드 → 백엔드: Authorization Code, code_verifier 전송
   백엔드 → 권한 서버: 토큰 발급 요청
   권한 서버: code_verifier 검증 후 Access Token 발급
   백엔드: Access Token을 저장 후 클라이언트에 전달 (필요시 세션 관리)
5. 리소스 접근

- 백엔드는 받은 Access Token을 사용하여 리소스 서버(API)에 접근합니다.
  데이터를 가져와 필요한 정보만 프론트엔드로 반환합니다.

## OAuth 2.0과 OpenID

OAuth 2.0: 주로 권한 부여에 초점을 맞추어, 리소스 접근 권한을 관리합니다.
OpenID Connect (OIDC): OAuth 2.0 위에 구축된 인증 계층으로, 사용자 인증 및 프로필 정보를 제공하여 단일 로그인을 구현

## OAuth 2.0 장점 및 단점

장점부터 알아보면

1. 보안성 강화

- 사용자의 아이디·비밀번호를 제3자 서비스가 직접 다루지 않습니다.대신 Access Token을 통해 제한된 권한만 위임합니다.

2. 유연성
   | 플로우 | 특징 | 사용 사례 |
   | ------------------------- | ---------------- | ---------- |
   | Authorization Code + PKCE | 보안 강화 | SPA, 모바일 앱 |
   | Client Credentials | 서버 간 통신 | 백엔드-백엔드 통신 |
   | Implicit | 과거 브라우저 앱용 (비권장) | 예전 SPA |
   | Device Code | IoT, TV 로그인 | 기기 코드 입력 |

3. 표준화

- OpenID Connect(OIDC)와 결합하면 인증(Authentication) 기능까지 구현 가능. 즉, “누구인지”와 “무엇을 할 수 있는지”를 동시에 다룰 수 있습니다.

4. 사용자 경험(UX) 개선

- 한 번 로그인하면 여러 서비스에서 동일 계정으로 로그인 가능(SSO, Single Sign-On). 예를 들어, Google 계정으로 다양한 외부 앱에 쉽게 로그인할 수 있습니다.
  단점은

1. 구현 복잡성

- OAuth 2.0은 플로우, 스코프, 리다이렉트, PKCE 등 구성 요소가 많아 처음 구현 시 복잡도와 실수 가능성이 높습니다.

2. 보안 취약점 가능성 -잘못된 리다이렉트 URI, 토큰 저장 위치, PKCE 미사용 등은 보안 취약점을 초래할 수 있습니다.

# CORS

## CORS란 무엇인가요?

- CORS는 교차 출처 리소스 공유(Cross-Origin Resource Sharing)의 약자입니다. 다른 출처(Origin)에 있는 자원(리소스, 즉 API 데이터)을 공유할 수 있도록 허용하는 메커니즘입니다.
- 먼저 sop(동일 출처 정책)에 대해 알아야합니다.
- SOP의 원칙: 웹 브라우저는 기본적으로 같은 출처에서 온 리소스만 접근하도록 허용합니다.(프로토콜 (Protocol) + 도메인 (Domain) + 포트 (Port))
- 하지만 현대에는 다른 사이트의 정보도 필요하기때문에, 이 통신을 허용하기 위해 나온것이 CORS입니다.

## CORS 작동 방식: 요청의 종류

1. Simple Request (단순 요청)
   메소드,허용헤더, 콘텐츠 타입을 모두 만족하는 요청입니다.
   흐름: 요청 전송 → 응답 수신 → 브라우저가 CORS 헤더 확인 → 통과 시 데이터 전달
2. Preflight Request (프리플라이트 요청)
   Simple Request 조건을 만족하지 못하는 경우의 요청에 대해 처리하는 방식입니다.
   메소드: OPTIONS
   흐름: OPTIONS 요청 전송 → 서버가 허용 헤더로 응답 → 브라우저가 통과 확인 → 본 요청 전송

## CORS 해결책

CORS 에러는 클라이언트(브라우저)가 띄우지만, 사실상 이 문제를 해결할 책임은 서버(백엔드) 측에 있습니다. 해결방법으로는

1. 서버 개발팀에 요청할 헤더 설정
   서버가 응답 헤더에 명시적으로 클라이언트의 접근을 허용하는 정보를 담아주는 거예요.
2. React 환경에서 임시 해결책: Proxy 설정
   package.json 파일에 간단하게 proxy 속성을 추가합니다.
   `"proxy": "http://api.myservice.com:8080"`
   이제 React 코드에서 fetch('/api/data')를 호출하면, 개발 서버가 http://api.myservice.com:8080/api/data로 대신 요청을 보내줍니다.
3. 인증 정보 전달 시 유의사항
   쿠키 사용 시credentials: 'include' 옵션(또는 withCredentials: true)을 설정하고, 서버는 반드시 Access-Control-Allow-Credentials: true를 응답해야합니다. Authorization 헤더는 Preflight 응답에 Access-Control-Allow-Headers 목록에 Authorization이 반드시 포함되어야 합니다.

# RBAC vs ABAC

## RBAC (Role-Based Access Control) : 역할 기반 접근 제어

- RBAC (Role-Based Access Control) : 역할 기반 접근 제어
- 역할에 권한을 부여하고 그 권한을 사용자에게 부여함으로써 기능을 할 수 있다.
- 이런 방식을 사용하면 관리가 수월해지고, 단순하며, 정적으로 사용할 수 있다.

## ABAC (Attribute-Based Access Control) : 속성 기반 접근 제어

- 속성(Attribute)'과 '조건'을 기반으로 권한을 동적으로 결정하는 방식입니다. RBAC보다 훨씬 더 세밀하고 유연한 통제가 필요할 때 사용합니다.
- 주체 속성, 객체 속성, 작업 속성, 환경 속성이라는 속성을 사용할 수 있습니다.
- 주체 속성은 권한과 비슷한 접근을 요청하는 사용자의 특성입니다.
- 객체(리소스) 속성은 접근하려는 대상(파일, 데이터)의 특성입니다.
- 작업 속성은 사용자가 하려는 행동입니다. 읽기,쓰기 등을 예로 들 수 있습니다.
- 환경 속성은 접근이 요청되는 외부 상황(컨텍스트)입니다.시간: 업무 시간(09:00~18:00), 네트워크: 내부망, 장치: 회사 지급 노트북를 예로 들 수 있습니다.
  장점으로는
  세분화된 제어,동적(Dynamic) 모델,유연성이 있습니다.

## RBAC vs ABAC 한눈에 비교하기

🔸 RBAC (역할 기반 접근 제어)
사용자는 “역할(Role)”을 부여받습니다.
각 역할에는 미리 정의된 권한(Permission)이 연결됩니다.
즉, **“누가 어떤 역할을 가지고 있느냐”**로 접근이 결정됩니다.
예시
role: Admin → 모든 데이터 접근 가능
role: User → 자신의 데이터만 접근 가능
장점
단순하고 관리가 쉬움
대규모 조직에서 효율적
단점
상황별, 조건별 접근 제어 어려움
역할(Role)이 너무 많아지면 관리 복잡도 증가
-ABAC (속성 기반 접근 제어)
접근 제어를 “속성(Attribute)”에 기반해 수행합니다.
속성은 다음 네 가지로 구성됩니다:
사용자 속성 (User attributes)
리소스 속성 (Resource attributes)
환경 속성 (Environment attributes)
행동 속성 (Action attributes)
예시
{
"Effect": "Allow",
"Condition": {
"StringEquals": {
"user.department": "Finance",
"resource.type": "Invoice"
},
"TimeLessThan": "18:00"
}
}
장점
세밀하고 동적인 접근 제어 가능
조건부, 맥락(Context) 기반 정책 구현 가능
단점
설계 및 정책 작성이 복잡
관리 시스템 구축이 어려움

# Token Refresh 흐름

1. 사용자가 로그인
2. 서버에서 AccessToken과 RefreshToken 발급
3. 토큰들을 로컬 스토리지에 저장
4. AccessToken 만료됨->RefreshToken으로 새로운 AccessToken 요청
5. 서버: RefreshToken 확인(만약 RefreshToken이 정상 → 새 AccessToken 발급 , 만약 RefreshToken이 문제 있거나 블랙리스트에 있으면 → 새 토큰 발급 거부)
6. 새로운 AccessToken을 로컬 스토리지에 저장

# OAuth 2.0 흐름

[1] Client → Authorization Server : 인가 요청 (Authorization Request)
[2] Authorization Server → Resource Owner : 로그인 및 동의 화면
[3] Resource Owner → Authorization Server : 접근 허용
[4] Authorization Server → Client : Authorization Code 발급
[5] Client → Authorization Server : Authorization Code로 Access Token 요청
[6] Authorization Server → Client : Access Token (및 Refresh Token) 발급
[7] Client → Resource Server : Access Token으로 API 요청
[8] Resource Server → Client : 보호된 리소스 응답

# Web에서의 Google OAuth 로그인 흐름

1. 로그인 버튼 클릭
2. 로그인 요청
3. Google 로그인 페이지로 이동
4. Google 로그인 및 동의
5. 콜백 및 토큰 수신
6. 토큰 저장 및 로그인 완료
