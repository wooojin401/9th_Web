// 1. 라우트 및 뷰 데이터 정의
const routes = {
  "/": {
    title: "홈",
    view: "<h2>홈 페이지입니다!</h2><p>환영합니다.</p>",
  },
  "/about": {
    title: "소개",
    view: "<h2>소개 페이지입니다!</h2><p>이것은 History API로 만든 SPA입니다.</p>",
  },
  "/contact": {
    title: "연락처",
    view: "<h2>연락처 페이지입니다!</h2><p>문의사항은 이메일로 보내주세요.</p>",
  },
  // 404 페이지는 default로 처리
};

// 2. 뷰 렌더링 함수
const app = document.getElementById("app");

const router = () => {
  const path = window.location.pathname;
  const route = routes[path] || {
    title: "404 - 찾을 수 없음",
    view: "<h2>404 Error</h2><p>페이지를 찾을 수 없습니다.</p>",
  };

  // 뷰 렌더링
  app.innerHTML = route.view;

  // 문서 제목(Title) 업데이트
  document.title = route.title;
};

// 3. 페이지 이동 함수 (History API 사용)
const navigateTo = (url) => {
  // History API: URL을 변경하고 히스토리에 새 항목을 추가 (새로고침 없음)
  history.pushState(null, null, url);

  // URL 변경 후 새로운 뷰 렌더링
  router();
};

// 4. 이벤트 리스너 등록

// 페이지 로드 시 초기 라우트 렌더링
document.addEventListener("DOMContentLoaded", () => {
  // 모든 내부 링크 클릭을 가로채서 navigateTo를 호출
  document.body.addEventListener("click", (e) => {
    // data-link 속성이 있는 <a> 태그인지 확인
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // 기본 <a> 태그 동작(새로고침) 방지
      navigateTo(e.target.href);
    }
  });

  router(); // 최초 로딩 시 현재 URL에 맞는 뷰 렌더링
});

// 브라우저 뒤로가기/앞으로가기 버튼 처리
window.addEventListener("popstate", router);
