import TypewriterText from '../components/TypewriterText/TypewriterText'
import HeroVisual from '../components/HeroVisual/HeroVisual'
import fotoPerfil from '../assets/fotoPerfil.svg'

function HomePage() {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-layout">
          <div className="intro">
            <p className="intro-label">Hola, soy</p>
            <TypewriterText text="Sharlos" />
            <p className="intro-description">
              Estoy aprendiendo React mientras construyo mi pagina personal.
            </p>
          </div>

          <HeroVisual
            image={fotoPerfil}
            alt="Foto de perfil de Sharlos"
            caption="Mi espacio personal"
          />
        </div>
      </section>
    </main>
  )
}

export default HomePage