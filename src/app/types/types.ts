
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    discount: string;
}

export interface ProductDetailProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
  }
  
export interface ProductCardProps {
    product: Product;
  }

  
export interface CartScreenProps {
    isOpen: boolean;
    onClose: () => void;
  }