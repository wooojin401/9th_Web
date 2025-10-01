import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MovieList from './pages/MovieList'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
