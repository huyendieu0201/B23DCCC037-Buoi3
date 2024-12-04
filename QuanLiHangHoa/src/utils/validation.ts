import { Product } from '../types/Product';  // Đảm bảo đường dẫn tới file Product.ts đúng

// Hàm kiểm tra tính hợp lệ của sản phẩm
export const validateProduct = (product: Product): string[] => {
  const errors: string[] = [];

  // Kiểm tra tên sản phẩm
  if (!product.name) {
    errors.push('Tên sản phẩm là bắt buộc');
  }

  // Kiểm tra giá sản phẩm
  if (product.price <= 0) {
    errors.push('Giá sản phẩm phải lớn hơn 0');
  }

  // Kiểm tra số lượng sản phẩm
  if (product.quantity < 0) {
    errors.push('Số lượng sản phẩm không thể nhỏ hơn 0');
  }

  return errors;
};
