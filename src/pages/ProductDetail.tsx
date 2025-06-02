
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Product } from './Index';
import ProductRecommendations from '../components/ProductRecommendations';

interface ProductDetailProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const sampleReviews = [
  { id: 1, author: "John D.", rating: 5, text: "Excellent product! Exceeded my expectations.", date: "December 15, 2024" },
  { id: 2, author: "Sarah M.", rating: 4, text: "Good quality, fast shipping. Would recommend.", date: "December 10, 2024" },
  { id: 3, author: "Mike R.", rating: 5, text: "Perfect for my needs. Great value for money.", date: "December 5, 2024" }
];

const ProductDetail: React.FC<ProductDetailProps> = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>

                <p className="text-gray-600 text-lg mb-6">{product.description}</p>
              </div>

              <div className="border-t pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-6">${product.price}</div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                      Quantity:
                    </label>
                    <select 
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="border border-gray-300 rounded-md px-3 py-1"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex space-x-4">
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center space-x-2 font-semibold"
                    >
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </button>
                    
                    <button className="border border-gray-300 hover:bg-gray-50 px-4 py-3 rounded-md">
                      <Heart size={20} />
                    </button>
                    
                    <button className="border border-gray-300 hover:bg-gray-50 px-4 py-3 rounded-md">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t bg-gray-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {sampleReviews.map(review => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900">{review.author}</span>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Recommendations */}
        <ProductRecommendations 
          products={relatedProducts}
          onAddToCart={onAddToCart}
          title="Customers who viewed this item also viewed"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
