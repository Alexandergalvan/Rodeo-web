export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    discount: string;
};

export interface ProductDetailProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
};
  
export interface ProductCardProps {
    product: Product;
};
  
export interface CartScreenProps {
    isOpen: boolean;
    onClose: () => void;
};

export interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
};

export interface HeaderProps {
  isScrolled: boolean;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: Date;
  location: string;
  image: string;
  time: string;
}

export interface Category {
  name: string;
  color: string;
}