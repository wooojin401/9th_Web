// 라우트 정의 (path → HTML 템플릿)
const routes = {
    "/": "<h1>Home</h1><p>Welcome to the Home page!</p>",
    "/about": "<h1>About</h1><p>This is the About page!</p>",
    "/contact": "<h1>Contact</h1><p>Contact us at contact@example.com</p>",
  };
  
  // 현재 경로에 맞는 화면 렌더링
  function render(path) {
    document.getElementById("app").innerHTML =
      routes[path] || "<h1>404 - Not Found</h1>";
  }
  
  // pushState로 이동
  function navigate(event) {
    event.preventDefault(); 
    const path = "/" + event.target.getAttribute("href");
    history.pushState({}, "", path);
    render(path);
  }
  
  // popstate 이벤트 → 뒤로/앞으로 가기 대응
  window.addEventListener("popstate", () => {
    render(location.pathname);
  });
  
  // 초기 실행
  document.addEventListener("DOMContentLoaded", () => {
    // 라우팅 처리
    document.querySelectorAll("a[data-link]").forEach((link) => {
      link.addEventListener("click", navigate);
    });
  
    // 현재 경로 렌더링
    render(location.pathname);
  });
  