import gamesLogo from '../../assets/logo_juegos.svg'
import bloodborneImage from '../../assets/FC-Bloodborne.svg'
import minecraftImage from '../../assets/FC-Minecraft.svg'
import highOnLifeimage from '../../assets/FC-HighonLife.svg'

export const games = [
  {
    title: 'Hollow Knight',
    detail: 'Exploracion y misterio',
    accent: 'lilac',
    image: gamesLogo,
    imageAlt: 'Ilustracion de Hollow Knight',
  },
  {
    title: 'The Legend of Zelda',
    detail: 'Aventuras que inspiran',
    accent: 'mint',
    image: gamesLogo,
    imageAlt: 'Ilustracion de The Legend of Zelda',
  },
  {
    title: 'Minecraft',
    detail: 'Crear sin limites',
    accent: 'peach',
    image: gamesLogo,
    imageAlt: 'Ilustracion de Minecraft',
  },
]

export const highOnLifeCard = {
  image: highOnLifeimage,
  imageAlt: 'Ilustracion de High On Life',
  title: 'High on Life',
  description: 'Buen juego bien fumao pero ta chido.',
  href: '#coleccion',
}

export const bloodborneFeatured = {
  image: bloodborneImage,
  imageAlt: 'Ilustracion destacada de Bloodborne',
  title: 'Bloodborne',
  description: 'La variante destacada puede explicar con mas espacio por que este juego es especial para ti.',
  genre: 'Accion / RPG',
  href: '#coleccion',
}

export const minecraftFeatured = {
  image: minecraftImage,
  imageAlt: 'Ilustracion de obra magna en Minecraft',
  title: 'Minecraft',
  description: 'Uno de mis juegos favoritos y de la infancia tantos buenos momentos en un solo juego...',
  genre: 'Sandbox / Aventura',
  href: '#coleccion',
}