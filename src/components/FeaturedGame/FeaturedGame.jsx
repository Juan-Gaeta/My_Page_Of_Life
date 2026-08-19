import './FeaturedGame.css'

function FeaturedGame({ image, imageAlt, title, description, genre }) {
  return (
    <article className="featured-game">
      <div className="featured-game-copy">
        <p className="featured-game-kicker">Juego destacado</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="featured-game-meta">
          <span>Genero</span>
          <strong>{genre}</strong>
        </div>
      </div>
      <img src={image} alt={imageAlt} />
    </article>
  )
}

export default FeaturedGame