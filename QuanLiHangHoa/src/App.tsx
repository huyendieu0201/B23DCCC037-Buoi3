import React, { useState } from 'react';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import { Product } from './types/Product';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Hàm thêm sản phẩm với id
  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const newProductWithId: Product = { 
      ...newProduct, 
      id: products.length + 1  // Tự động thêm id
    };
    setProducts((prevProducts) => [...prevProducts, newProductWithId]);
  };

  return (
    <div className="App">
      <Home products={products} /> {/* Truyền sản phẩm vào Home */}
      <AddProduct onAddProduct={handleAddProduct} />
    </div>
  );
};

export default App;
