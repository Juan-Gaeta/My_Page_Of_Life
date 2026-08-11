import './Header.css';
import logo_sobre_mi from '@/assets/logo_sobre_mi.svg'
import logo_principal from '@/assets/logo_principal.svg'
import logo_juegos from '@/assets/logo_juegos.svg'
import logo_movies from '@/assets/logo_movies.svg'

function Header() {
  return (
    <header className="header">
      <nav>
        <img src={logo_principal} alt="Logo_Principal" width={50} className='logos'/>
        <a href="#inicio">Inicio</a>
        <img src={logo_sobre_mi} alt="Logo_Sobre_Mi" width={50} className='logos'/>
        <a href="#sobre_mi">Sobre mi :3</a>
        <img src={logo_juegos} alt="Logo_Juegos" width={50} className='logos'/>
        <a href="#juegos">Juegazos</a>
        <img src={logo_movies} alt='Logo_Movies' width={50} className='logos'/>
        <a href="#peliculas">Entre Mundos y Pantallas</a>
        <a href="#series">SeriesGod</a>
      </nav>
    </header>
  );
}

export default Header;