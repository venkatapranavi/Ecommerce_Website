
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones Premium Noise Cancelling",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 1284,
      description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium comfort padding",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smartphone with 128GB Storage - Latest Model",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 2567,
      description: "Latest smartphone with advanced triple-camera system, all-day battery life, and lightning-fast performance",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Premium Colombian Coffee Beans - Single Origin",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 892,
      description: "Freshly roasted premium coffee beans from the mountains of Colombia. Rich, smooth flavor with notes of chocolate and caramel",
      category: "Food & Beverages"
    },
    {
      id: 4,
      name: "High-Performance Laptop Computer - 16GB RAM",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 3421,
      description: "Professional laptop perfect for work and gaming. Features Intel i7 processor, 16GB RAM, and dedicated graphics card",
      category: "Electronics"
    },
    {
      id: 5,
      name: "Modern 3-Seater Living Room Sofa - Fabric",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 756,
      description: "Elegant and comfortable 3-seater sofa with premium fabric upholstery. Perfect centerpiece for any modern living room",
      category: "Furniture"
    },
    {
      id: 6,
      name: "Complete Pet Care Essentials Kit",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 1674,
      description: "Everything you need for your pet's health and happiness. Includes grooming tools, toys, treats, and care accessories",
      category: "Pet Supplies"
    },
    {
      id: 7,
      name: "Professional Wireless Gaming Mouse",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 945,
      description: "High-precision wireless gaming mouse with customizable RGB lighting and 12000 DPI sensor",
      category: "Electronics"
    },
    {
      id: 8,
      name: "Organic Green Tea Collection - 50 Bags",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      rating: 4.2,
      reviews: 623,
      description: "Premium organic green tea collection with antioxidants. Perfect for daily wellness and relaxation",
      category: "Food & Beverages"
    }
  ];

  const addToCart = (product: any) => {
    console.log('Adding to cart:', product);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/product/:id" 
              element={
                <ProductDetail 
                  products={sampleProducts} 
                  onAddToCart={addToCart}
                />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
