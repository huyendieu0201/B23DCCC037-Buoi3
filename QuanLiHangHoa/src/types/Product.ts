export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

  
  export const sampleProducts: Product[] = [
    {
      id: 1,
      name: 'Sản phẩm A',
      price: 100000,
      quantity: 10,
    },
    {
      id: 2,
      name: 'Sản phẩm B',
      price: 200000,
      quantity: 5,
    },
    {
      id: 3,
      name: 'Sản phẩm C',
      price: 150000,
      quantity: 20,
    },
  ];
  