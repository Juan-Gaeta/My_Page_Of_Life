import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '80px' }}> {/* margen para que el header no tape el contenido */}
        <Card title="Card 1" content="Contenido de la primera card" />
        <Card title="Card 2" content="Contenido de la segunda card" />
        <Card title="Card 3" content="Contenido de la tercera card" />
      </main>
    </>
  );
}

export default App
