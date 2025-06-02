
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../pages/Index';

interface ProductRecommendationsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  title: string;
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ 
  products, 
  onAddToCart, 
  title 
}) => {
  if (products.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
