"use client";

import Image from "next/image";
import { useState } from "react";
import ProductDetail from "../sections/ProductDetails";
import { ProductCardProps } from "../types/types";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button className="w-full bg-[#e8c05c] text-stone-800 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#e8c05c]/90 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Agregar al carrito</span>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-stone-800 group-hover:text-[#e8c05c] transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-[#e8c05c] text-[#e8c05c]" />
              <span className="text-stone-600">4.8</span>
            </div>
          </div>
          <p className="text-stone-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold text-[#e8c05c]">
                ${product.price.toFixed(2)}
              </p>
              <span className="text-sm text-stone-500">Stock disponible</span>
            </div>
            <button
              onClick={() => setShowDetails(true)}
              className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              Ver detalles
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <span className="bg-[#e8c05c] text-stone-800 px-3 py-1 rounded-full text-sm font-medium">
            Nuevo
          </span>
        </div>
      </div>

      <ProductDetail
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
