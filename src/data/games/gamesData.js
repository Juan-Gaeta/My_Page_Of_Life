import gamesLogo from '../../assets/logo_juegos.svg'
import bloodborneImage from '../../assets/FC-Bloodborne.svg'

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
  {
    title: 'Bloodborne',
    detail: 'Gothico y desafiante',
    accent: 'peach',
    image: bloodborneImage,
    imageAlt: 'Ilustracion de Bloodborne',
  },
]

export const bloodborneCard = {
  image: bloodborneImage,
  imageAlt: 'Ilustracion de Bloodborne',
  title: 'Bloodborne',
  description: 'Una card normal para presentar rapidamente uno de tus juegos favoritos.',
  href: '#coleccion',
}

export const bloodborneFeatured = {
  image: bloodborneImage,
  imageAlt: 'Ilustracion destacada de Bloodborne',
  title: 'Bloodborne',
  description: 'La variante destacada puede explicar con mas espacio por que este juego es especial para ti.',
  genre: 'Accion / RPG',
}