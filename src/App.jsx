import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GamesPage from './pages/GamesPage'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/videojuegos" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
