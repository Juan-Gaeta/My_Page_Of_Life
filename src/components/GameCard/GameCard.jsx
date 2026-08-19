import './GameCard.css'

function GameCard({ image, imageAlt, title, description, href }) {
  return (
    <article className="game-card">
      <div className="game-card-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="game-card-body">
        <p className="game-card-kicker">Card de juego</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href}>Ver detalle <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  )
}

export default GameCard