import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <Outlet />

      {location.pathname === "/" && (
        <div className="flex-grow flex items-center justify-center">
          <h1
            className={`text-5xl text-center bg-clip-text font-semibold text-transparent bg-gradient-to-r
              transform transition-all duration-800 ease-in-out from-black/55 via-gray-500 to-white/55 slide-Up`}
            style={{ fontFamily: "sans-serif" }}
          >
            Welcome To MovieWorld
          </h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
