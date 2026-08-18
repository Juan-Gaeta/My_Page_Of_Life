import Header from './components/Header/Header'
import TypewriterText from './components/TypewriterText/TypewriterText'
import HeroVisual from './components/HeroVisual/HeroVisual'
import PageSection from './components/PageSection/PageSection'
import fotoPerfil from './assets/fotoPerfil.svg'

function App() {
  return (
    <>
      <Header />

      <main className="home">
        <section className="hero-section" id="inicio">
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

        <PageSection
          id="sobre-mi"
          title="Sobre mi"
          subtitle="Un poco de quien soy y que me gusta."
        >
          <p>
            Me gusta aprender desarrollo web, jugar videojuegos y construir cosas con React.
          </p>
        </PageSection>

        <PageSection
          id="videojuegos"
          title="Videojuegos"
          subtitle="Mis sagas y videojuegos favoritos."
        >
          <p>
            En esta seccion pondre los videojuegos y sagas que me encantan :3
          </p>
        </PageSection>
      </main>
    </>
  )
}

export default App
