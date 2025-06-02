
import React from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cartItemsCount: number;
  onCartClick: () => void;
  onCategoryClick?: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  cartItemsCount,
  onCartClick,
  onCategoryClick
}) => {
  return (
    <header className="bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold">Ecommerce Site</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <User size={20} />
              <span>Account</span>
            </button>
            
            <button
              onClick={onCartClick}
              className="relative flex items-center space-x-1 hover:text-orange-200 transition-colors"
            >
              <ShoppingCart size={24} />
              <span className="hidden md:inline">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 py-3 border-t border-orange-500">
          <button 
            onClick={() => onCategoryClick?.('Electronics')}
            className="hover:text-orange-200 transition-colors"
          >
            Electronics
          </button>
          <button 
            onClick={() => onCategoryClick?.('Furniture')}
            className="hover:text-orange-200 transition-colors"
          >
            Furniture
          </button>
          <button 
            onClick={() => onCategoryClick?.('Food & Beverages')}
            className="hover:text-orange-200 transition-colors"
          >
            Food & Beverages
          </button>
          <button 
            onClick={() => onCategoryClick?.('Pet Supplies')}
            className="hover:text-orange-200 transition-colors"
          >
            Pet Supplies
          </button>
          <button 
            onClick={() => onCategoryClick?.('')}
            className="hover:text-orange-200 transition-colors"
          >
            All Products
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
