import "./App.css";
import { Link } from "./router/Link";
import { Route } from "./router/Route";
import { Routes } from "./router/Router";

const SeoroPage = () => (
  <h1 className="text-6xl font-bold text-center mt-80 text-blue-500">
    서로 페이지
  </h1>
);
const DongRoPage = () => (
  <h1 className="text-6xl font-bold text-center mt-80 text-yellow-400 ">
    동로 페이지
  </h1>
);
const BukroPage = () => (
  <h1 className="text-6xl font-bold text-center mt-80 text-red-400">
    북로 페이지
  </h1>
);
const NotFoundPage = () => (
  <h1 className="text-6xl font-bold text-center mt-80 text-purple-400 ">404</h1>
);

const Header = () => {
  return (
    <nav className="flex justify-center gap-6 bg-amber-800 p-5">
      <Link to="/seoro">SEORO</Link>
      <Link to="/dongro">DONGRO</Link>
      <Link to="/bukro">BUKRO</Link>
      <Link to="/not-found">NOT FOUND</Link>
    </nav>
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/seoro" component={SeoroPage} />
        <Route path="/dongro" component={DongRoPage} />
        <Route path="/bukro" component={BukroPage} />
        <Route path="/not-found" component={NotFoundPage} />
      </Routes>
    </>
  );
}

export default App;
