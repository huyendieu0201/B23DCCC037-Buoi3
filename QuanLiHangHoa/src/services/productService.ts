// src/services/productService.ts

import { Product } from '../types/Product';

// Giả sử có một mảng sản phẩm mẫu
let products: Product[] = [
  { id: 1, name: 'Sản phẩm A', price: 100, quantity: 10 },
  { id: 2, name: 'Sản phẩm B', price: 200, quantity: 5 },
  { id: 3, name: 'Sản phẩm C', price: 150, quantity: 15 },
];

// Lấy danh sách tất cả sản phẩm
export const getProducts = (): Product[] => {
  return products;
};

// Thêm một sản phẩm mới
export const addProduct = (newProduct: Product): void => {
  products.push(newProduct);
};

// Cập nhật thông tin sản phẩm
export const updateProduct = (updatedProduct: Product): boolean => {
  const index = products.findIndex((product) => product.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = updatedProduct;
    return true;
  }
  return false;
};

// Xóa một sản phẩm theo ID
export const deleteProduct = (id: number): boolean => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
};

export {}; // Đảm bảo file này là module (để tránh lỗi trong TypeScript)
