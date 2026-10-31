import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GamesPage from './pages/GamesPage'
import GameDetailPage from './pages/GameDetailPage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/videojuegos" element={<GamesPage />} />
        <Route path="/videojuegos/:slug" element={<GameDetailPage />} />
      </Routes>

      <Footer author="Sharlos" year={2026}/>
    </BrowserRouter>
  )
}

export default App
