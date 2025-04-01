
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FilterSectionProps {
  onFilterChange: (filters: FilterValues) => void;
}

export interface FilterValues {
  searchTerm: string;
  priceRange: [number, number];
  ambience: string[];
  location: string;
}

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({
    searchTerm: '',
    priceRange: [1, 4],
    ambience: [],
    location: '',
  });
  
  const [activeAmbiences, setActiveAmbiences] = useState<string[]>([]);
  
  const ambienceOptions = [
    'tranquilo', 'animado', 'romántico', 'familiar', 
    'moderno', 'clásico', 'casual', 'elegante'
  ];
  
  const locationOptions = [
    'Centro Ciudad', 'Zona Norte', 'Zona Sur', 'Zona Este', 'Zona Oeste'
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, searchTerm: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handlePriceChange = (value: number[]) => {
    // Ensure we always have two values for the price range tuple
    const safeValues: [number, number] = [
      value[0] || filters.priceRange[0], 
      value[1] || filters.priceRange[1]
    ];
    
    const newFilters = { ...filters, priceRange: safeValues };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleAmbienceToggle = (ambience: string) => {
    let newAmbiences: string[];
    
    if (activeAmbiences.includes(ambience)) {
      newAmbiences = activeAmbiences.filter(a => a !== ambience);
    } else {
      newAmbiences = [...activeAmbiences, ambience];
    }
    
    setActiveAmbiences(newAmbiences);
    const newFilters = { ...filters, ambience: newAmbiences };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleLocationChange = (value: string) => {
    const newFilters = { ...filters, location: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const clearFilters = () => {
    const resetFilters: FilterValues = {
      searchTerm: '',
      priceRange: [1, 4],
      ambience: [],
      location: ''
    };
    setFilters(resetFilters);
    setActiveAmbiences([]);
    onFilterChange(resetFilters);
  };

  return (
    <div className="mb-8 bg-white rounded-lg border shadow-sm p-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar lugares..."
              className="pl-9"
              value={filters.searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="h-4 w-4 mr-1" />
              <span>Filtros</span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 ml-1" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-1" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="pt-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Rango de Precio</label>
              <Slider
                defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                min={1}
                max={4}
                step={1}
                value={[filters.priceRange[0], filters.priceRange[1]]}
                onValueChange={handlePriceChange}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>💰 Económico</span>
                <span>💰💰💰💰 Exclusivo</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Ambiente</label>
              <div className="flex flex-wrap gap-2">
                {ambienceOptions.map(ambience => (
                  <Badge
                    key={ambience}
                    variant={activeAmbiences.includes(ambience) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      activeAmbiences.includes(ambience) 
                        ? 'bg-jamito-teal hover:bg-jamito-teal/80' 
                        : 'hover:bg-jamito-teal/10'
                    }`}
                    onClick={() => handleAmbienceToggle(ambience)}
                  >
                    {ambience}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Ubicación</label>
              <Select 
                value={filters.location} 
                onValueChange={handleLocationChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una zona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas las zonas</SelectItem>
                  {locationOptions.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-end">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
              >
                Limpiar filtros
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FilterSection;
