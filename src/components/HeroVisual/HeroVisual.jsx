import './HeroVisual.css'

function HeroVisual({ image, alt, caption }) {
  return (
    <figure className="hero-visual">
      <div className="hero-visual-frame">
        <img className="hero-visual-image" src={image} alt={alt} />
      </div>

      {caption && <figcaption className="hero-visual-caption">{caption}</figcaption>}
    </figure>
  )
}

export default HeroVisual
