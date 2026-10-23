import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import PageSection from '../components/PageSection/PageSection'
import GameCard from '../components/GameCard/GameCard'
import FeaturedGame from '../components/FeaturedGame/FeaturedGame'
import GameCollection from '../components/GameCollection/GameCollection'
import { games, bloodborneFeatured, highOnLifeCard, minecraftFeatured } from '../data/games/gamesData'

function GamesPage() {
  const location = useLocation()
  const restoredRef = useRef(false)

  useLayoutEffect(() => {
    if (restoredRef.current) return
    restoredRef.current = true

    const restoration = location.state
    if (typeof restoration?.restoreScrollY === 'number') {
      window.scrollTo({ top: restoration.restoreScrollY, behavior: 'instant' })
      document.getElementById(restoration.restoreFocusId)?.focus({ preventScroll: true })
    }
  }, [location.state])

  return (
    <main className="home">
      <PageSection
        id="videojuegos"
        title="Videojuegos"
        subtitle="Mis sagas y videojuegos favoritos."
      >
        <div className="game-ideas">
          <p className="game-ideas-intro">
            Cada juego tiene una historia. Abre su página para explorar
            reseñas, recuerdos y lo que lo hace especial.
          </p>

          <div className="game-ideas-grid">
            <GameCard {...highOnLifeCard} />
            <FeaturedGame {...bloodborneFeatured} />
            <FeaturedGame {...minecraftFeatured} />
          </div>
          <GameCollection games={games} />
        </div>
      </PageSection>
    </main>
  )
}

export default GamesPage
