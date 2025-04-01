
export interface Place {
  id: string;
  name: string;
  description: string;
  address: string;
  categories: string[];
  priceRange: 1 | 2 | 3 | 4; // 1-4 representing $ to $$$$
  rating: number;
  images: string[];
  openHours: string;
  ambience: string[];
  features: string[];
}

export const places: Place[] = [
  {
    id: '1',
    name: 'Café Sereno',
    description: 'Un espacio tranquilo perfecto para trabajar o estudiar, con excelente café y Wi-Fi rápido.',
    address: 'Calle Primavera 123, Ciudad Ejemplo',
    categories: ['work', 'coffee', 'reading'],
    priceRange: 2,
    rating: 4.7,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Lun-Dom: 8:00 - 22:00',
    ambience: ['tranquilo', 'acogedor', 'moderno'],
    features: ['Wi-Fi', 'enchufes', 'mesas grandes']
  },
  {
    id: '2',
    name: 'La Terraza Romántica',
    description: 'Restaurante con hermosas vistas y ambiente íntimo, perfecto para una cena romántica.',
    address: 'Av. del Atardecer 456, Ciudad Ejemplo',
    categories: ['romantic', 'dining'],
    priceRange: 3,
    rating: 4.8,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Mar-Dom: 18:00 - 00:00',
    ambience: ['romántico', 'íntimo', 'elegante'],
    features: ['terraza', 'vistas', 'velas']
  },
  {
    id: '3',
    name: 'El Parque de Diversiones',
    description: 'Un lugar divertido para toda la familia, con juegos para todas las edades.',
    address: 'Parque Central 789, Ciudad Ejemplo',
    categories: ['family', 'friends'],
    priceRange: 2,
    rating: 4.5,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Lun-Dom: 10:00 - 20:00',
    ambience: ['divertido', 'animado', 'colorido'],
    features: ['juegos', 'comida', 'eventos']
  },
  {
    id: '4',
    name: 'Biblioteca Moderna',
    description: 'Un espacio silencioso con gran selección de libros y cómodos asientos para leer o estudiar.',
    address: 'Calle del Conocimiento 101, Ciudad Ejemplo',
    categories: ['reading', 'work'],
    priceRange: 1,
    rating: 4.6,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Lun-Sáb: 9:00 - 21:00',
    ambience: ['silencioso', 'acogedor', 'tranquilo'],
    features: ['libros', 'Wi-Fi', 'café']
  },
  {
    id: '5',
    name: 'La Pizzería Familiar',
    description: 'Restaurante familiar con deliciosas pizzas y área de juegos para niños.',
    address: 'Av. Principal 202, Ciudad Ejemplo',
    categories: ['family', 'dining'],
    priceRange: 2,
    rating: 4.3,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Lun-Dom: 12:00 - 22:00',
    ambience: ['familiar', 'animado', 'casual'],
    features: ['área de juegos', 'menú infantil', 'eventos']
  },
  {
    id: '6',
    name: 'Club Nocturno Estrella',
    description: 'El mejor lugar para bailar y divertirse con amigos hasta el amanecer.',
    address: 'Calle de la Fiesta 303, Ciudad Ejemplo',
    categories: ['friends', 'events'],
    priceRange: 3,
    rating: 4.4,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Jue-Sáb: 22:00 - 5:00',
    ambience: ['animado', 'moderno', 'divertido'],
    features: ['DJ', 'pista de baile', 'cócteles']
  },
  {
    id: '7',
    name: 'Coworking Creativo',
    description: 'Espacio de coworking con ambiente creativo y todas las comodidades para trabajar.',
    address: 'Calle Innovación 404, Ciudad Ejemplo',
    categories: ['work'],
    priceRange: 2,
    rating: 4.9,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Lun-Vie: 7:00 - 21:00',
    ambience: ['profesional', 'creativo', 'moderno'],
    features: ['Wi-Fi de alta velocidad', 'salas de reuniones', 'café ilimitado']
  },
  {
    id: '8',
    name: 'Restaurante Vista Mar',
    description: 'Elegante restaurante con vistas al mar y mariscos frescos.',
    address: 'Paseo Marítimo 505, Ciudad Ejemplo',
    categories: ['romantic', 'dining'],
    priceRange: 4,
    rating: 4.7,
    images: ['/placeholder.svg', '/placeholder.svg'],
    openHours: 'Mar-Dom: 13:00 - 23:00',
    ambience: ['elegante', 'romántico', 'vistas al mar'],
    features: ['terraza', 'vinos selectos', 'mariscos frescos']
  }
];
