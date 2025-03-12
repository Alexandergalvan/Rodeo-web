
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface ProductDetailProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
  }