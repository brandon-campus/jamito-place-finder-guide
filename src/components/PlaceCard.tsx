
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Clock, Heart } from 'lucide-react';
import { Place } from '@/data/places';
import { useToast } from '@/components/ui/use-toast';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  const { toast } = useToast();
  
  const handleFavorite = () => {
    toast({
      title: "¡Añadido a favoritos!",
      description: `${place.name} ha sido añadido a tu lista de favoritos.`,
    });
  };

  // Helper function to display price range as dollar signs
  const renderPriceRange = (range: number) => {
    return '💰'.repeat(range);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-jamito-purple/10 h-full flex flex-col">
      <div className="aspect-video relative bg-gray-100 overflow-hidden">
        <img 
          src={place.images[0]} 
          alt={place.name} 
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-jamito-teal hover:bg-jamito-teal/90">
            {renderPriceRange(place.priceRange)}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-bold text-lg line-clamp-1">{place.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-jamito-amber fill-jamito-amber mr-1" />
            <span className="text-sm font-medium">{place.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{place.description}</p>
        
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-xs line-clamp-1">{place.address}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-xs">{place.openHours}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {place.ambience.slice(0, 2).map((amb, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {amb}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs border-jamito-teal text-jamito-teal hover:bg-jamito-teal hover:text-white"
        >
          Ver detalles
        </Button>
        <Button 
          onClick={handleFavorite}
          size="icon" 
          variant="ghost" 
          className="h-8 w-8 text-gray-400 hover:text-jamito-coral"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlaceCard;
