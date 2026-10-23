import './GameCollection.css'
import GameDetailLink from '../GameDetailLink/GameDetailLink'

function GameCollection({ games }) {
  return (
    <article className="game-collection" id="coleccion">
      <div className="game-collection-heading">
        <div>
          <p className="game-collection-kicker">Coleccion</p>
          <h3>Una biblioteca personal</h3>
        </div>
        <span className="game-collection-count">{games.length} juegos</span>
      </div>
      <div className="game-list">
        {games.map((game, index) => (
          <GameDetailLink
            className={`game-list-item game-list-item--${game.accent}`}
            key={game.slug}
            slug={game.slug}
            source="collection"
            label={`Ver detalle de ${game.title}`}
          >
            <span className="game-list-number">0{index + 1}</span>
            <span className="game-list-icon"><img src={game.image} alt={game.imageAlt} /></span>
            <span className="game-list-copy">
              <strong>{game.title}</strong>
              <small>{game.detail}</small>
            </span>
            <span className="game-list-arrow" aria-hidden="true">→</span>
          </GameDetailLink>
        ))}
      </div>
    </article>
  )
}

export default GameCollection
