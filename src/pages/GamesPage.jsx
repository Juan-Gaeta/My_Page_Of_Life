import PageSection from '../components/PageSection/PageSection'
import GameCard from '../components/GameCard/GameCard'
import FeaturedGame from '../components/FeaturedGame/FeaturedGame'
import GameCollection from '../components/GameCollection/GameCollection'
import { games, bloodborneFeatured, highOnLifeCard, minecraftFeatured } from '../data/games/gamesData'

function GamesPage() {
  return (
    <main className="home">
      <PageSection
        id="videojuegos"
        title="Videojuegos"
        subtitle="Mis sagas y videojuegos favoritos."
      >
        <div className="game-ideas">
          <p className="game-ideas-intro">
            Por ahora veremos un ejemplo de cada componente. Despues podremos agregar
            muchos juegos reutilizando estas mismas piezas.
          </p>

          <div className="game-ideas-grid">
            <GameCard
              {...highOnLifeCard}
            />

            <FeaturedGame
              {...bloodborneFeatured}
            />

            <FeaturedGame
              {...minecraftFeatured}
            />

            <GameCollection games={games} />
          </div>
        </div>
      </PageSection>
    </main>
  )
}

export default GamesPage