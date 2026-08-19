import './GameCollection.css'

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
          <div className={`game-list-item game-list-item--${game.accent}`} key={game.title}>
            <span className="game-list-number">0{index + 1}</span>
            <span className="game-list-icon"><img src={game.image} alt={game.imageAlt} /></span>
            <span className="game-list-copy">
              <strong>{game.title}</strong>
              <small>{game.detail}</small>
            </span>
            <span className="game-list-arrow" aria-hidden="true">→</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export default GameCollection