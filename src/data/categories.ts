
import { Coffee, Utensils, Users, HeartIcon, Book, Laptop, CalendarIcon, Star } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'work',
    name: 'Trabajo',
    icon: Laptop,
    description: 'Lugares tranquilos para trabajar o estudiar'
  },
  {
    id: 'romantic',
    name: 'Citas',
    icon: HeartIcon,
    description: 'Restaurantes y lugares para una cita romántica'
  },
  {
    id: 'family',
    name: 'Familia',
    icon: Users,
    description: 'Lugares para disfrutar con toda la familia'
  },
  {
    id: 'friends',
    name: 'Amigos',
    icon: Users,
    description: 'Lugares divertidos para salir con amigos'
  },
  {
    id: 'coffee',
    name: 'Cafeterías',
    icon: Coffee,
    description: 'Las mejores cafeterías para relajarte'
  },
  {
    id: 'dining',
    name: 'Restaurantes',
    icon: Utensils,
    description: 'Restaurantes con diversos tipos de cocina'
  },
  {
    id: 'reading',
    name: 'Lectura',
    icon: Book,
    description: 'Espacios tranquilos para leer o estudiar'
  },
  {
    id: 'events',
    name: 'Eventos',
    icon: CalendarIcon,
    description: 'Lugares con eventos especiales'
  }
];
