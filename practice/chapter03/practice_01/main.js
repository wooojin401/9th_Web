const routes ={
    "/":"<h1>HomePage</h1><p>Welcome to SPA!</p>",
    "/about":"<h1>About Page</h1><p>This is the about page.</p>",
    "/contact":"<h1>Contact PAge</h1><p>Contact us at abc@abc.com</p>",
};

function render(){
    const path = window.location.pathname;
    document.getElementById("app").innerHTML=
    routes[path] || "<h1>404 Not Found</h1>";
}

function navigate(to){
    history.pushState({},"",to);
    render();
}

window.addEventListener("popstate",render);

document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.getAttribute("href"));
    }
});

render();