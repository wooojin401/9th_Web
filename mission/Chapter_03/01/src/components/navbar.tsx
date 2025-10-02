import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">홈</Link></li>
          <li><Link to="/popular" className="hover:text-gray-300">인기 영화</Link></li>
          <li><Link to="/now-playing" className="hover:text-gray-300">상영 중</Link></li>
          <li><Link to="/top-rated" className="hover:text-gray-300">평점 높은</Link></li>
          <li><Link to="/upcoming" className="hover:text-gray-300">개봉 예정</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;