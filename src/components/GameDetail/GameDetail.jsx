import './GameDetail.css'

function GameDetail({ game, titleId = 'game-detail-title' }) {
  if (!game) return null

  return (
    <article className={`game-detail game-detail--${game.accent}`} aria-labelledby={titleId}>
      <header className={`game-detail-hero${game.imageKind === 'placeholder' ? ' game-detail-hero--placeholder' : ''}`}>
        <img className="game-detail-image" src={game.image} alt={game.imageAlt} />
        <div className="game-detail-hero-shade" />
        <div className="game-detail-hero-copy">
          <p className="game-detail-eyebrow">
            <span className="game-detail-dot" aria-hidden="true" />
            Mi colección / Reseña de ejemplo
          </p>
          <h1 className="game-detail-title" id={titleId}>{game.title}</h1>
          <p className="game-detail-genre">{game.genre}</p>
          <div className="game-detail-tags" aria-label="Temas de la reseña">
            {game.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </header>

      <div className="game-detail-content">
        <div className="game-detail-story">
          <p className="game-detail-sample-note">Texto de muestra para imaginar tu reseña.</p>
          <p className="game-detail-lead">{game.lead}</p>
          <blockquote className="game-detail-quote">
            <span aria-hidden="true">“</span>
            <p>{game.quote}</p>
          </blockquote>

          <div className="game-detail-sections">
            {game.sections.map((section, index) => (
              <section className="game-detail-section" key={section.title}>
                <span className="game-detail-section-number" aria-hidden="true">0{index + 1}</span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="game-detail-aside" aria-label="Acerca de esta reseña">
          <div className="game-detail-outline">
            <p className="game-detail-aside-label">Dentro de esta historia</p>
            <ol>
              {game.sections.map((section) => <li key={section.title}>{section.title}</li>)}
            </ol>
          </div>
          <div className={`game-detail-personal-note${game.favoriteNote ? ' game-detail-personal-note--favorite' : ''}`}>
            <span className="game-detail-note-symbol" aria-hidden="true">{game.favoriteNote ? '✦' : '↗'}</span>
            <p className="game-detail-aside-label">{game.favoriteNote ? 'Un lugar especial' : 'Tu historia, a tu manera'}</p>
            <p>{game.favoriteNote || 'Aquí caben tus recuerdos, capturas y opiniones. Puedes darle a cada juego tanto espacio como quieras.'}</p>
          </div>
        </aside>
      </div>

      <footer className="game-detail-footer">
        <span aria-hidden="true">✦</span>
        Una colección de juegos. Un montón de historias por contar.
      </footer>
    </article>
  )
}

export default GameDetail
