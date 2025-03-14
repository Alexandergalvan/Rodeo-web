"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { CartScreenProps } from "../types/types";
import { AnimatePresence, motion } from "framer-motion";

const CartScreen: React.FC<CartScreenProps> = ({ isOpen, onClose }) => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Alimento Premium para Perros",
      price: 1999,
      quantity: 2,
      image: "/products/perro.png",
    },
  ]);

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl m-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="flex flex-col max-h-[90vh]">
              <div className="p-6 border-b sticky top-0 bg-white rounded-t-2xl z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-[#e8c05c]" />
                    <h2 className="text-2xl font-bold text-stone-800">
                      Carrito de Compras
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <ShoppingCart className="w-16 h-16 mx-auto" />
                    </div>
                    <p className="text-xl text-gray-600 font-medium">
                      Tu carrito está vacío
                    </p>
                    <p className="text-gray-500 mt-2">
                      ¡Agrega algunos productos!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex gap-4 p-4 bg-white rounded-xl border hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            width={1000}
                            height={1000}
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg text-stone-800">
                            {item.name}
                          </h3>
                          <p className="text-[#e8c05c] text-xl font-bold mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center border rounded-lg bg-gray-50">
                              <button className="p-2 hover:bg-gray-100 rounded-l-lg text-gray-600 hover:text-gray-800">
                                -
                              </button>
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button className="p-2 hover:bg-gray-100 rounded-r-lg text-gray-600 hover:text-gray-800">
                                +
                              </button>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors">
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t p-6 bg-gray-50 rounded-b-2xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-[#e8c05c]">${total.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#e8c05c] text-stone-800 py-4 rounded-xl font-semibold text-lg hover:bg-[#e8c05c]/90 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Proceder al pago
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartScreen;
