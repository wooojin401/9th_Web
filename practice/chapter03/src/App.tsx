import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './assets/pages/AboutPage';
import HomePage from './assets/pages/HomePage';
import ProfilePage from './assets/pages/ProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;