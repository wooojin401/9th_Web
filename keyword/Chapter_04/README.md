인증(Authentication) vs 인가(Authorization)

인증(Authentication): “너는 누구야?”
→ 사용자의 신원 확인 과정
(ID/PW, 소셜 로그인, 2FA, 생체인증 등)

인가(Authorization): “너는 무엇을 할 수 있어?”
→ 인증 후 권한을 판단하는 과정
(관리자 접근 제한, 역할별 접근 제어 등)

구분	인증(Authentication)	인가(Authorization)
질문	너는 누구니?	뭘 할 수 있니?
순서	항상 먼저 수행	인증 후 수행
실패 응답	401 Unauthorized	403 Forbidden
예시	로그인	관리자 페이지 접근 제어
🧾 JWT(JSON Web Token) vs 세션(Session)
🔹 JWT (무상태 인증)

서버는 로그인 성공 시 AccessToken + RefreshToken 발급

이후 모든 요청은 Authorization 헤더에 토큰을 담아 전송

서버는 토큰의 서명과 만료만 검증 (상태 저장 X)

장점

서버 확장 용이 (스케일 아웃에 유리)

모바일·웹 등 환경 독립적

빠른 검증 가능 (서명 포함)

단점

유출 시 만료 전까지 무효화 어려움

재발급 로직 필요 (RefreshToken)

보안 설계 복잡 (저장 위치 중요)

흐름

로그인 성공 → Access + Refresh 발급

요청 시 AccessToken 전송

만료 시 Refresh로 재발급

로그아웃 시 서버 블랙리스트 등록 + 토큰 삭제

🔹 세션(Session) (유상태 인증)

로그인 시 서버가 세션 ID 생성 및 저장소에 등록

브라우저는 세션ID를 쿠키로 저장, 요청 시 자동 전송

서버는 해당 세션ID로 사용자를 식별

장점

서버 제어 용이 (즉시 무효화 가능)

쿠키 자동 전송으로 구현 간단

단점

서버 확장 시 세션 동기화 필요

CSRF 공격에 취약

흐름

로그인 → 세션 ID 생성, 쿠키로 전달

요청 시 쿠키 자동 전송

서버에서 세션ID 검증

로그아웃/만료 시 세션 삭제

🎟️ 토큰(Token)

인증/인가 정보를 담은 문자열
→ “나 인증된 사용자야”라는 증거

종류

Basic Token: ID:PW Base64 인코딩 (보안 취약)

Bearer Token: Authorization: Bearer <token> (일반적)

Access Token: 짧은 수명, API 요청 시 인증용

Refresh Token: 긴 수명, AccessToken 재발급용 (HttpOnly 쿠키 저장 권장)

흐름

로그인 → Access+Refresh 발급
→ Access로 요청
→ 만료 시 Refresh로 재발급
→ Refresh 만료 시 재로그인

🧠 클라이언트 저장소 전략
저장소	자동 전송	수명	보안 옵션	XSS 취약	CSRF 취약	활용 예시
쿠키	✅	설정 가능	HttpOnly, Secure, SameSite	❌	✅	RefreshToken
localStorage	❌	영구적	❌	✅	❌	AccessToken
sessionStorage	❌	탭 종료 시 삭제	❌	✅	❌	임시 데이터
🍪 쿠키

브라우저가 자동 전송 (같은 도메인/경로)

보안 옵션:

HttpOnly: JS 접근 불가 → XSS 방어

Secure: HTTPS 전용 → 도청 방지

SameSite: CSRF 완화

단점

자동 전송으로 CSRF 위험 존재

💾 LocalStorage / SessionStorage

직접 접근 필요 (setItem, getItem)

localStorage: 브라우저 종료 후에도 유지

sessionStorage: 탭 종료 시 삭제

둘 다 XSS 취약 (JS 접근 가능)

⚔️ 보안 공격 정리
🦠 XSS (Cross-Site Scripting)

악성 스크립트 삽입으로 쿠키/토큰 탈취

방어: 입력 검증, 출력 인코딩, HttpOnly, CSP 설정

🕵️ 세션 하이재킹

공격자가 세션ID 탈취 후 로그인 세션 도용

방어: HttpOnly + Secure 쿠키, HTTPS 통신

🎯 CSRF (Cross-Site Request Forgery)

인증된 사용자의 세션을 악용해 위조 요청 전송

방어

CSRF 토큰 사용

SameSite 쿠키 설정

Origin/Referer 검증

CAPTCHA

중요 요청 시 재인증

⚙️ 인증 정보 전송 방식
방식	특징	보안
쿠키 기반	브라우저가 자동 전송	CSRF 취약
헤더 기반 (Bearer)	직접 헤더에 첨부	CSRF 안전 (단, XSS 주의)
🌐 환경별 추천 인증 방식
환경	인증 방식	이유
SPA (React 등)	Access + Refresh 토큰 (헤더 방식)	상태 관리 유리, CSRF 방어
Mobile App	JWT 헤더 인증	쿠키 의존도 낮음, 보안성 높음
SSR (Next.js 등)	쿠키 기반 세션 인증	쿠키 자동 전송으로 편리, SEO 대응
⚛️ React의 Custom Hook

React Hook은 상태·부수효과·참조 관리를 선언적으로 처리하는 도구

Custom Hook은 여러 Hook을 조합해 로직을 재사용하기 위한 함수

사용 이유

중복 제거 – 반복 로직을 한 곳에서 관리

관심사 분리 – UI와 로직 분리

유지보수 용이 – 수정 시 한 곳만 변경

테스트 쉬움 – 로직 단위로 검증 가능

예시: useToggle
function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle] as const;
}


사용:

const [isOpen, toggle] = useToggle(false);


장점

코드 중복 감소

일관된 로직 관리

로깅·분석 등 추가 로직도 한 곳에서 통합 가능