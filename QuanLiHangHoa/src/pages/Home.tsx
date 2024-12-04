import React from 'react';
import { Product } from '../types/Product';

interface HomeProps {
  products: Product[];  // Nhận products từ App.tsx
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price} - {product.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
