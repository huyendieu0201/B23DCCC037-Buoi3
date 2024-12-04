import React, { useState } from 'react';
import { validateProduct } from '../utils/validation';
import { Product } from '../types/Product';  // Đảm bảo import đúng kiểu Product

interface AddProductProps {
  onAddProduct: (product: Product) => void;  // Đảm bảo onAddProduct nhận đối tượng có kiểu Product
}

const AddProduct: React.FC<AddProductProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = () => {
    // Tạo đối tượng newProduct với tất cả các thuộc tính của Product (bao gồm id)
    const newProduct: Product = { 
      id: Date.now(),  // Tạo id tự động khi thêm sản phẩm mới
      name, 
      price, 
      quantity 
    };
    
    const validationErrors = validateProduct(newProduct);  // Kiểm tra với validateProduct
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      onAddProduct(newProduct);  // Truyền đối tượng full Product vào onAddProduct
      setName('');
      setPrice(0);
      setQuantity(0);
    }
  };

  return (
    <div>
      <h2>Thêm Sản Phẩm</h2>
      <input type="text" placeholder="Tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Giá sản phẩm" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <input type="number" placeholder="Số lượng" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      <button onClick={handleSubmit}>Thêm</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} style={{ color: 'red' }}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddProduct;
