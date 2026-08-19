import PageSection from '../components/PageSection/PageSection'

function AboutPage() {
  return (
    <main className="home">
      <PageSection
        id="sobre-mi"
        title="Sobre mi"
        subtitle="Un poco de quien soy y que me gusta."
      >
        <p>
          Me gusta aprender desarrollo web, jugar videojuegos y construir cosas con React.
        </p>
      </PageSection>
    </main>
  )
}

export default AboutPage