import TypewriterText from './components/TypewriterText/TypewriterText'
import HeroVisual from './components/HeroVisual/HeroVisual'
import fotoPerfil from './assets/fotoPerfil.svg'

function App() {
  return (
    <main className="home">
      <div className="hero-layout">
        <section className="intro">
          <p className="intro-label">Hola, soy</p>
          <TypewriterText text="Sharlos" />
          <p className="intro-description">
            Estoy aprendiendo React mientras construyo mi pagina personal.
          </p>
        </section>

        <HeroVisual
          image={fotoPerfil}
          alt="Logo principal de Sharlos"
          caption="Mi espacio personal"
        />
      </div>
    </main>
  );
}

export default App
