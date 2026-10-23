import highOnLifeImage from '../../assets/FC-HighOnLife.svg'
import bloodborneImage from '../../assets/FC-Bloodborne.svg'
import minecraftImage from '../../assets/FC-Minecraft.svg'
import gamesLogo from '../../assets/logo_juegos.svg'

// These sample reviews preview the layout; replace them with your own stories.
export const gameDetails = [
  {
    slug: 'high-on-life',
    title: 'High on Life',
    image: highOnLifeImage,
    imageAlt: 'Imagen de High on Life de la colección',
    genre: 'Acción / Aventura',
    accent: 'cyan',
    tags: ['Humor absurdo', 'Mundos extraños', 'Acción'],
    lead: 'Hay juegos a los que entras por la acción y te quedas porque nunca sabes qué locura viene después. Esta sería mi pequeña bitácora de ese viaje.',
    quote: 'A veces el mejor plan es dejarte llevar por lo absurdo.',
    sections: [
      {
        title: 'La primera impresión',
        text: 'Desde su manera de hablar hasta sus escenarios, todo invita a bajar la guardia y aceptar el caos. Aquí contaría qué fue lo primero que me hizo reír y cómo se sintieron esas primeras horas.',
      },
      {
        title: 'Lo que me llevo del viaje',
        text: 'Más allá de avanzar, me interesa guardar esos detalles pequeños: una conversación inesperada, un rincón raro o una situación que terminó completamente fuera de control. Ese sería el corazón de mi reseña.',
      },
      {
        title: '¿Lo volvería a jugar?',
        text: 'Este espacio sería para mi conclusión, con lo que más disfruté y aquello que no terminó de convencerme. Sin buscar una respuesta universal: simplemente cómo encajó este juego conmigo.',
      },
    ],
  },
  {
    slug: 'bloodborne',
    title: 'Bloodborne',
    image: bloodborneImage,
    imageAlt: 'Imagen de Bloodborne de la colección',
    genre: 'Acción / RPG',
    accent: 'lilac',
    tags: ['Atmósfera', 'Exploración', 'Desafío'],
    favoriteNote: 'Aquí puedes contar por qué Bloodborne merece un lugar especial en tu colección: un combate, su atmósfera o un recuerdo que todavía te acompaña.',
    lead: 'Una ciudad que inquieta antes de dar el primer paso. Esta reseña de ejemplo deja espacio para contar cómo se transforma el miedo en curiosidad y, poco a poco, en ganas de seguir.',
    quote: 'Ese instante en el que dejas de huir y decides intentarlo una vez más.',
    sections: [
      {
        title: 'Una ciudad que se queda contigo',
        text: 'La arquitectura, los sonidos y lo que apenas alcanzas a distinguir pueden contar tanto como una conversación. Aquí hablaría de esa primera impresión al recorrer Yharnam y de los detalles que me hicieron detenerme a mirar.',
      },
      {
        title: 'Aprender a insistir',
        text: 'Esta parte sería para una historia propia: el encuentro que se complicó, lo que aprendí en cada intento y la sensación de finalmente superarlo. Una experiencia personal dice mucho más que una lista de características.',
      },
      {
        title: 'Lo que permanece después',
        text: '¿Fue el misterio, un lugar o la satisfacción de haber seguido adelante? Aquí cerraría mi reseña con aquello que más recuerdo y con las razones por las que recomendaría vivir esta experiencia.',
      },
    ],
  },
  {
    slug: 'minecraft',
    title: 'Minecraft',
    image: minecraftImage,
    imageAlt: 'Construcción de Minecraft de la colección',
    genre: 'Sandbox / Aventura',
    accent: 'mint',
    tags: ['Creatividad', 'Exploración', 'A tu ritmo'],
    favoriteNote: 'Este espacio puede guardar ese primer mundo, una construcción con amigos o la historia de por qué sigues regresando. Las capturas y los recuerdos tienen un lugar aquí.',
    lead: 'Un mundo vacío nunca está realmente vacío: puede ser el principio de una casa, una aventura o una historia con amigos. Aquí empezaría mi manera de contar Minecraft.',
    quote: 'A veces una casita sencilla termina guardando un montón de recuerdos.',
    sections: [
      {
        title: 'El comienzo de un mundo',
        text: 'Aquí contaría cómo empezó una partida especial: dónde apareció el primer refugio, qué quería construir y cómo aquel pequeño plan terminó convirtiéndose en algo mucho más grande.',
      },
      {
        title: 'Crear también es jugar',
        text: 'No todo tiene que ser llegar a una meta. Este sería el lugar para mostrar una construcción, explicar de dónde salió la idea y recordar las vueltas que dio antes de quedar como la imaginaba.',
      },
      {
        title: 'La razón para regresar',
        text: 'Tal vez es un mundo pendiente, una nueva idea o pasar tiempo con alguien. Aquí pondría mi conclusión personal y los recuerdos que hacen que este juego tenga su propio rincón en la colección.',
      },
    ],
  },
  {
    slug: 'hollow-knight',
    title: 'Hollow Knight',
    image: gamesLogo,
    imageAlt: 'Ilustración general de videojuegos',
    imageKind: 'placeholder',
    genre: 'Acción / Exploración',
    accent: 'lilac',
    tags: ['Descubrimiento', 'Misterio', 'Atmósfera'],
    lead: 'Un camino desconocido, un sonido lejano y la curiosidad de saber qué hay al otro lado. Esta sería una reseña sobre perderse y disfrutar el descubrimiento.',
    quote: 'Perder el camino también puede ser una forma de encontrar algo especial.',
    sections: [
      {
        title: 'Dejarse llevar por la curiosidad',
        text: 'Aquí contaría qué me llamó la atención de Hallownest y cómo fue encontrar sus primeros secretos. Más que explicar cada ruta, buscaría transmitir esa sensación de querer explorar un poco más.',
      },
      {
        title: 'Pequeñas victorias',
        text: 'Este espacio puede guardar un encuentro difícil, una zona favorita o ese momento en que todo comenzó a sentirse más natural. Una historia concreta ayudaría a darle mi voz a la reseña.',
      },
      {
        title: 'Lo que me gustaría recordar',
        text: 'Aquí cerraría con la música, el arte o el descubrimiento que más se quedó conmigo, y con una recomendación personal para quien disfrute explorar a su propio ritmo.',
      },
    ],
  },
  {
    slug: 'the-legend-of-zelda',
    title: 'The Legend of Zelda',
    image: gamesLogo,
    imageAlt: 'Ilustración general de videojuegos',
    imageKind: 'placeholder',
    genre: 'Acción / Aventura',
    accent: 'mint',
    tags: ['Aventura', 'Descubrimiento', 'Ingenio'],
    lead: 'Toda aventura empieza con una pregunta: ¿qué habrá más allá? Este espacio sería para elegir una entrega de la saga y contar la historia de mi encuentro con ella.',
    quote: 'Las aventuras que recuerdo son las que me dan ganas de mirar un poco más lejos.',
    sections: [
      {
        title: 'Mi puerta de entrada a la aventura',
        text: 'Aquí elegiría el juego concreto del que quiero hablar y contaría cómo llegó a mis manos. Así la reseña tendría un punto de partida propio y dejaría claro qué aventura estoy recordando.',
      },
      {
        title: 'Ese momento de descubrimiento',
        text: 'Un acertijo que finalmente hizo clic, un paisaje o un personaje pueden convertirse en el centro de esta historia. Este sería el lugar para describir ese momento sin revelar las sorpresas a quien todavía no lo juega.',
      },
      {
        title: 'Lo que hace especial el viaje',
        text: 'Para cerrar, contaría qué me dejó esa entrega y qué tipo de jugador podría disfrutarla. Una opinión con espacio para lo que funcionó y para lo que yo habría cambiado.',
      },
    ],
  },
]

export function getGameDetail(slug) {
  return gameDetails.find((game) => game.slug === slug)
}
