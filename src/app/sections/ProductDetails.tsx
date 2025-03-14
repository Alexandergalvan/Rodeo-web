import Image from "next/image";
import { ShoppingCart, Star, X } from "lucide-react";
import { ProductDetailProps } from "../types/types";

const ProductDetail: React.FC<ProductDetailProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl transform transition-all">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-[#e8c05c] text-stone-800 px-3 py-1 rounded-full font-medium">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src={product.image}
                      alt={`${product.name} vista ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-stone-800">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4
                            ? "text-[#e8c05c] fill-[#e8c05c]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.0)</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="border-t border-b border-gray-100 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Precio:</span>
                    <span className="text-3xl font-bold text-[#e8c05c]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">Stock:</span>
                    <span className="text-green-600 font-medium">
                      Disponible
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Cantidad:</span>
                    <div className="flex items-center border rounded-lg">
                      <button className="p-2 hover:bg-gray-100 transition-colors">
                        -
                      </button>
                      <span className="px-4 py-2 border-x">1</span>
                      <button className="p-2 hover:bg-gray-100 transition-colors">
                        +
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-[#e8c05c] text-stone-800 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#e8c05c]/90 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Agregar al carrito</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
