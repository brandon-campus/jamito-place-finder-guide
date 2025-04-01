
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import JamitoChat from '@/components/JamitoChat';
import CategorySelector from '@/components/CategorySelector';
import FilterSection, { FilterValues } from '@/components/FilterSection';
import PlaceList from '@/components/PlaceList';
import { places } from '@/data/places';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [filters, setFilters] = useState<FilterValues>({
    searchTerm: '',
    priceRange: [1, 4],
    ambience: [],
    location: ''
  });
  const { toast } = useToast();
  
  // Filter places based on selected category and filters
  useEffect(() => {
    let result = places;
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(place => place.categories.includes(selectedCategory));
    }
    
    // Filter by search term
    if (filters.searchTerm) {
      const searchTermLower = filters.searchTerm.toLowerCase();
      result = result.filter(place => 
        place.name.toLowerCase().includes(searchTermLower) || 
        place.description.toLowerCase().includes(searchTermLower)
      );
    }
    
    // Filter by price range
    result = result.filter(place => 
      place.priceRange >= filters.priceRange[0] && 
      place.priceRange <= filters.priceRange[1]
    );
    
    // Filter by ambience
    if (filters.ambience.length > 0) {
      result = result.filter(place => 
        filters.ambience.some(amb => place.ambience.includes(amb))
      );
    }
    
    // Filter by location (simplified for demo)
    if (filters.location) {
      // In a real app, this would check the actual location
      // For now, we'll just filter randomly based on the location name
      const locationHash = filters.location.charCodeAt(0);
      result = result.filter(place => place.id.charCodeAt(0) % locationHash !== 0);
    }
    
    setFilteredPlaces(result);
  }, [selectedCategory, filters]);
  
  const handleCategorySelect = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      toast({
        title: "Filtro removido",
        description: "Mostrando todos los lugares disponibles.",
      });
    } else {
      setSelectedCategory(categoryId);
      toast({
        title: "Categoría seleccionada",
        description: `Filtrando lugares por categoría.`,
      });
    }
  };
  
  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">Encuentra tu lugar ideal</h1>
            <p className="text-gray-600 mb-6">
              Bienvenido a Jamito Place Finder, tu asistente personal para descubrir los mejores lugares según tu estado de ánimo y necesidades.
            </p>
            
            <FilterSection onFilterChange={handleFilterChange} />
            
            <CategorySelector 
              onSelectCategory={handleCategorySelect} 
              selectedCategory={selectedCategory} 
            />
          </div>
          
          <div className="col-span-1">
            <JamitoChat />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Lugares recomendados para ti</h2>
        
        <PlaceList places={filteredPlaces} />
      </main>
      
      <footer className="bg-jamito-darkGray text-white p-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2023 Jamito Place Finder - Tu guía de lugares personalizados</p>
          <p className="text-sm text-gray-400">Desarrollado con ♥ usando Lovable</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
