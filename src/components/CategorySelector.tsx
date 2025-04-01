
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/categories';

interface CategorySelectorProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string | null;
}

const CategorySelector = ({ onSelectCategory, selectedCategory }: CategorySelectorProps) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedCategory === category.id 
                  ? 'border-jamito-teal ring-2 ring-jamito-teal/20' 
                  : 'hover:border-jamito-teal/30'
              }`}
              onClick={() => onSelectCategory(category.id)}
            >
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <div 
                  className={`p-3 rounded-full mb-2 ${
                    selectedCategory === category.id 
                      ? 'bg-jamito-teal text-white' 
                      : 'bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-sm">{category.name}</span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
