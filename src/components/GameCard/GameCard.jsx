import './GameCard.css'
import GameDetailLink from '../GameDetailLink/GameDetailLink'

function GameCard({ slug, image, imageAlt, title, description }) {
  return (
    <article className="game-card">
      <div className="game-card-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="game-card-body">
        <p className="game-card-kicker">Card de juego</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <GameDetailLink slug={slug} source="card" label={`Ver detalle de ${title}`}>
          Ver detalle <span aria-hidden="true">↗</span>
        </GameDetailLink>
      </div>
    </article>
  )
}

export default GameCard
