"use client";

import { Calculator } from "lucide-react";
import { useState } from "react";
import FoodCalculatorModal from "../sections/FoodCalculator";

const FloatingCalculator = () => {
  const [isOpen] = useState(false);
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);
  const [cartItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className={`absolute bottom-full right-0 mb-2 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-sky-200 min-w-[250px]">
            {cartItems.length === 0 ? (
              <p className="text-sky-800 text-center">Tu carrito está vacío</p>
            ) : (
              <div className="space-y-2"></div>
            )}
          </div>
        </div>

        <button
          onClick={() => setShowCalculatorModal(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`bg-sky-800 p-4 rounded-full shadow-lg transition-all duration-300 relative group
            ${isHovered ? "bg-[#e8c05c]/90 scale-110" : ""}
            hover:shadow-[#e8c05c]/20 hover:shadow-xl`}
        >
          <Calculator className="w-6 h-6 text-white" />

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm animate-bounce">
              {cartItems.length}
            </span>
          )}

          <span
            className={`absolute whitespace-nowrap right-full mr-2 bg-sky-800 text-white px-3 py-1 rounded-lg text-sm transition-all duration-300
          ${
            isHovered
              ? "opacity-100 -translate-x-2"
              : "opacity-0 translate-x-2 pointer-events-none"
          }
        `}
          >
            Abrir Calculadora
          </span>
        </button>
      </div>

      <FoodCalculatorModal
        isOpen={showCalculatorModal}
        onClose={() => setShowCalculatorModal(false)}
      />
    </>
  );
};

export default FloatingCalculator;
