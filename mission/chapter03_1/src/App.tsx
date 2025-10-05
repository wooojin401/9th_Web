import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MovieList from './pages/MovieList'
import ErrorPage from './pages/ErrorPage'
import MovieDetailModal from './components/MovieDetailModal'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="movies/:category" element={<MovieList />}>
          <Route path=":movieId" element={<MovieDetailModal />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
