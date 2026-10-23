import { useLayoutEffect, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import GameDetail from '../components/GameDetail/GameDetail'
import { getGameDetail } from '../data/games/gameDetails'
import './GameDetailPage.css'

function GameDetailPage() {
  const { slug } = useParams()
  const location = useLocation()
  const mainRef = useRef(null)
  const game = getGameDetail(slug)
  const returnState = {
    restoreScrollY: location.state?.returnScrollY,
    restoreFocusId: location.state?.returnFocusId,
  }

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    mainRef.current?.focus({ preventScroll: true })
  }, [slug])

  return (
    <main className="home game-detail-page" ref={mainRef} tabIndex={-1} aria-labelledby="game-page-title">
      <div className="game-detail-page-inner">
        <div className="game-detail-page-navigation">
          <Link to="/videojuegos" state={returnState}>
            <span aria-hidden="true">←</span> Volver a videojuegos
          </Link>
          <span>Mi biblioteca</span>
        </div>
        {game ? (
          <GameDetail game={game} titleId="game-page-title" />
        ) : (
          <section className="game-detail-page-empty">
            <p>Esta historia todavía no está en la colección</p>
            <h1 id="game-page-title">Juego no encontrado</h1>
            <p>Vuelve a la biblioteca y elige uno de los juegos disponibles.</p>
          </section>
        )}
        <Link className="game-detail-page-back" to="/videojuegos" state={returnState}>
          <span aria-hidden="true">←</span> Seguir explorando mi colección
        </Link>
      </div>
    </main>
  )
}

export default GameDetailPage
