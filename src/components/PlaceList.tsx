
import React from 'react';
import PlaceCard from './PlaceCard';
import { Place } from '@/data/places';

interface PlaceListProps {
  places: Place[];
}

const PlaceList = ({ places }: PlaceListProps) => {
  if (places.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">No hay lugares que coincidan con tus criterios</h3>
        <p className="text-gray-500">Intenta ajustar tus filtros o prueba con otra categoría</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default PlaceList;
