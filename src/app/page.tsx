"use client";

import React, { useState, useEffect } from "react";
import {
  MenuIcon,
  X,
  ChevronRight,
  MapPin,
  CalendarCheck,
  Clock,
  ArrowRight,
  ArrowUpCircle,
  ShoppingCart,
  Star,
  Calendar,
  ChevronLeft,
  Info,
} from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const ScrollAnimation = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#e8c05c]/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Inicio",
    "Productos",
    "Nosotros",
    "Calendario",
    "Contacto",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${isScrolled || isMenuOpen
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="group flex items-center space-x-3 z-50">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="/logo.png"
                alt="El Rodeo Logo"
                width={64}
                height={64}
                className="transform transition-transform group-hover:scale-110 duration-300 object-contain bg-white/80 p-1 rounded-full w-full h-full"
              />
            </div>
            <span className={`text-xl sm:text-2xl font-bold tracking-wider ${
              isScrolled || isMenuOpen ? 'text-sky-800' : 'text-white'
            }`}>
              El Rodeo
            </span>
          </a>

          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 transition-all duration-300 group
                  ${isScrolled 
                    ? 'text-stone-700 hover:text-[#e8c05c]' 
                    : 'text-white hover:text-[#e8c05c]'}`}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-[#e8c05c]/10 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300"></div>
              </a>
            ))}
          </nav>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative transform transition-all duration-300">
              {isMenuOpen ? (
                <X className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled || isMenuOpen ? 'text-stone-700' : 'text-white'
                }`} />
              ) : (
                <MenuIcon className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled || isMenuOpen ? 'text-stone-700' : 'text-white'
                }`} />
              )}
            </div>
          </button>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-white transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          style={{ top: '0', zIndex: 40 }}
        >
          <div className="pt-24 px-4 pb-6">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-lg font-medium text-stone-700 hover:text-[#e8c05c] border-b border-gray-100 transition-all duration-300"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="relative h-screen overflow-hidden">
    {/* Fondo con imagen */}
    <div className="absolute inset-0">
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        priority
      />
      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Patrón de fondo animado */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern animate-grid"></div>
    </div>

    <FloatingParticles />

    {/* Círculos decorativos con opacidad reducida */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#e8c05c]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div className="relative h-full flex flex-col items-center justify-center text-center">
      {/* Contenedor principal con efecto de cristal */}
      <div className="max-w-4xl px-6 py-12 mx-4 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/20 shadow-2xl">
        {/* Logo animado */}
        <div className="mb-12 animate-bounce-slow">
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="/logo.png"
              alt="El Rodeo Logo"
              width={128}
              height={128}
              className="object-contain bg-white/90 p-2 rounded-full"
              priority
            />
            <div className="absolute -inset-6 bg-[#e8c05c]/20 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>

        {/* Título con animación de escritura */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="inline-block animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            style={{ animationDelay: "0.2s" }}>
            El
          </span>{" "}
          <span className="inline-block animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-[#e8c05c] to-yellow-300"
            style={{ animationDelay: "0.4s" }}>
            Rodeo
          </span>
        </h1>

        {/* Subtítulo con efecto de desvanecimiento */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up font-light"
          style={{ animationDelay: "0.6s" }}>
          Tu mejor opción en{" "}
          <span className="font-semibold text-[#e8c05c]">alimentación animal</span>
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}>
          <a
            href="#productos"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
          >
            <span className="relative z-10">Ver Productos</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
          >
            <span className="relative z-10">Contáctanos</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll"></div>
    </div>
      </div>
    </div>
  </section>
);

const ProductDetail = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
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
                <img
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
                  <div key={i} className="aspect-square rounded-lg overflow-hidden">
                    <img
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
                <h2 className="text-3xl font-bold text-stone-800">{product.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "text-[#e8c05c] fill-[#e8c05c]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.0)</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                <div className="border-t border-b border-gray-100 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Precio:</span>
                    <span className="text-3xl font-bold text-[#e8c05c]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">Stock:</span>
                    <span className="text-green-600 font-medium">Disponible</span>
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

const CartScreen = ({ isOpen, onClose }) => {
  const [cartItems] = useState([
    // Ejemplo de items en el carrito
    {
      id: 1,
      name: "Alimento Premium para Perros",
      price: 1999,
      quantity: 2,
      image: "/api/placeholder/400/300",
    },
    // ... más items
  ]);

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex justify-end">
        <div className="relative bg-white w-full max-w-md h-full shadow-2xl">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-stone-800">
                  Carrito de Compras
                </h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <ShoppingCart className="w-12 h-12 mx-auto" />
                  </div>
                  <p className="text-gray-600">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-stone-800">{item.name}</h3>
                        <p className="text-[#e8c05c] font-bold">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            +
                          </button>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-500">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-[#e8c05c]">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#e8c05c] text-stone-800 py-3 rounded-lg font-semibold hover:bg-[#e8c05c]/90 transition-colors">
                Proceder al pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
    <div
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
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

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) }
    50% { transform: translateY(-20px) }
  }

  @keyframes ken-burns {
    0% { transform: scale(1) }
    100% { transform: scale(1.1) }
  }

  @keyframes fade-in-up {
    0% { 
      opacity: 0;
      transform: translateY(20px)
    }
    100% { 
      opacity: 1;
      transform: translateY(0)
    }
  }

  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1) }
    25% { transform: translate(20px, -20px) scale(1.1) }
    50% { transform: translate(-20px, 20px) scale(0.9) }
    75% { transform: translate(20px, 20px) scale(1.05) }
  }

  @keyframes grid {
    0% { transform: translateX(0) }
    100% { transform: translateX(20px) }
  }

  @keyframes scroll {
    0%, 100% { transform: translateY(0) }
    50% { transform: translateY(6px) }
  }

  .animate-float {
    animation: float linear infinite;
  }

  .animate-ken-burns {
    animation: ken-burns 20s linear infinite alternate;
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animate-bounce-slow {
    animation: bounce 2s infinite;
  }

  .animate-scroll {
    animation: scroll 1.5s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

const OfferSection = () => {
  const [, setActiveOffer] = useState<number | null>(null);

  const offers = [
    {
      id: 1,
      title: "2x1 en Alimento para Perros",
      description: "Lleva dos bolsas y paga una en marcas seleccionadas",
      validUntil: "31/02/2025",
      discount: "50%",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Pack Económico Mensual",
      description: "30% de descuento en el pack de alimentos para todo el mes",
      validUntil: "31/02/2025",
      discount: "30%",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Descuento en Accesorios",
      description: "Todos los accesorios con 25% de descuento",
      validUntil: "31/02/2025",
      discount: "25%",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section
      id="ofertas"
      className="py-20 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-16 text-sky-800">
            Ofertas Especiales
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative group"
              onMouseEnter={() => setActiveOffer(offer.id)}
              onMouseLeave={() => setActiveOffer(null)}
            >
              <ScrollAnimation className="h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl h-full transform group-hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-[#e8c05c] text-stone-800 font-bold px-4 py-2 rounded-full transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      {offer.discount} OFF
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-stone-600 mb-4">{offer.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-500">
                        Válido hasta: {offer.validUntil}
                      </span>
                      <button className="bg-stone-800 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors duration-300 flex items-center gap-2">
                        <span>Ver más</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessHours = () => {
  const schedule = [
    { day: "Lunes a Viernes", hours: "8:30 - 18:00" },
    { day: "Sábados", hours: "9:00 - 13:00" },
    { day: "Domingos", hours: "Cerrado" },
  ];

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-16 text-sky-800">
            Horarios y Ubicación
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Horarios */}
          <ScrollAnimation className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-sky-100 hover:border-[#e8c05c] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#e8c05c] w-6 h-6 animate-spin-slow" />
                <h3 className="text-2xl font-semibold text-sky-700">
                  Horarios de Atención
                </h3>
              </div>

              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <ScrollAnimation
                    key={index}
                    className="flex justify-between items-center border-b border-sky-100 pb-3 hover:bg-sky-50 p-2 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="text-sky-600 w-5 h-5" />
                      <span className="font-medium text-sky-900">
                        {item.day}
                      </span>
                    </div>
                    <span
                      className={`font-semibold ${
                        item.hours === "Cerrado"
                          ? "text-red-500"
                          : "text-sky-600"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Ubicación */}
          <ScrollAnimation className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-sky-100 hover:border-[#e8c05c] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-sky-600 w-6 h-6 animate-bounce" />
                <h3 className="text-2xl font-semibold text-sky-800">
                  Nuestra Ubicación
                </h3>
              </div>

              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 transform transition-all duration-500 hover:scale-105">
                <iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1741735974080!5m2!1ses-419!2smx!6m8!1m7!1s2m6PEWrc1jaCv2Cy9UEYrg!2m2!1d25.6667844364426!2d-97.83366767312474!3f167.31260196024982!4f1.7127119688666994!5f0.7820865974627469" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <ScrollAnimation className="space-y-2">
                  <p className="flex items-center gap-2 text-sky-900">
                    <MapPin className="text-sky-600 w-5 h-5" />
                    <span>Av. Principal 123, Buenos Aires</span>
                  </p>
                  <p className="text-sky-700 pl-7">Entre calle A y calle B</p>
                  <p className="text-sky-700 pl-7">Barrio Centro</p>
                </ScrollAnimation>

                <ScrollAnimation>
                  <a
                    href="https://maps.app.goo.gl/TSSqfGNPqwfi7JBe8"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium mt-4 group"
                  >
                    <span>Cómo llegar</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Información adicional */}
        <ScrollAnimation className="mt-12">
          <div className="text-center bg-sky-800 text-white p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
            <p className="text-lg">
              ¿Tienes dudas sobre nuestros horarios o ubicación?
              <span className="block mt-2">
                Llámanos al{" "}
                <span className="font-semibold">+54 11 1234-5678</span> o
                escríbenos a{" "}
                <span className="font-semibold">info@elrodeo.com</span>
              </span>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCartScreen, setShowCartScreen] = useState(false);
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
            <div className="space-y-2">
              {/* Aquí irían los items del carrito */}
            </div>
          )}
        </div>
      </div>

      <button
          onClick={() => setShowCartScreen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
          className={`bg-[#e8c05c] p-4 rounded-full shadow-lg transition-all duration-300 relative group
            ${isHovered ? "bg-[#e8c05c]/90 scale-110" : ""}
            hover:shadow-[#e8c05c]/20 hover:shadow-xl`}
        >
          <ShoppingCart className="w-6 h-6 text-white" />

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
          Ver carrito
        </span>
      </button>
    </div>

      <CartScreen
        isOpen={showCartScreen}
        onClose={() => setShowCartScreen(false)}
      />
    </>
  );
};

// Componente Scroll To Top
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-sky-500 p-3 rounded-full shadow-lg hover:bg-sky-600 transition-colors duration-300 text-white transform hover:scale-110"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

const AboutUs = () => {
  return (
    <section
      id="nosotros"
      className="py-20 bg-gradient-to-b from-sky-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">
            Sobre Nosotros
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <Image
                width={10}
                height={10}
                src="/api/placeholder/600/400"
                alt="Nuestra tienda"
                className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  Más de 15 años sirviendo a la comunidad
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            <ScrollAnimation className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Nuestra Historia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desde 2003, El Rodeo ha sido el referente en alimentación animal
                en Buenos Aires. Comenzamos como una pequeña tienda familiar y
                hoy nos enorgullece ser el proveedor de confianza para miles de
                familias que cuidan de sus animales.
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Nuestro Compromiso
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nos dedicamos a ofrecer productos de la más alta calidad para la
                nutrición y el bienestar de todos los animales. Trabajamos
                directamente con los mejores proveedores para garantizar precios
                justos y productos premium.
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-indigo-500 p-4 rounded-lg text-center text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm">Años de Experiencia</div>
              </div>
              <div className="bg-sky-400 p-4 rounded-lg text-center text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm">Clientes Felices</div>
              </div>
              <div className="bg-[#e8c05c] p-4 rounded-lg text-center text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">300+</div>
                <div className="text-sm">Productos</div>
              </div>
              <div className="bg-sky-400 p-4 rounded-lg text-center text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm">Satisfacción</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation className="mt-16">
          <div className="bg-indigo-800 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-indigo-700/50 p-6 rounded-lg h-full">
                  <div className="text-indigo-300 text-4xl mb-4">🏆</div>
                  <h4 className="text-xl font-semibold mb-2">
                    Calidad Premium
                  </h4>
                  <p className="text-indigo-100">
                    Solo trabajamos con las mejores marcas y productos del
                    mercado
                  </p>
                </div>
              </div>
              <div className="transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-indigo-700/50 p-6 rounded-lg h-full">
                  <div className="text-indigo-300 text-4xl mb-4">💰</div>
                  <h4 className="text-xl font-semibold mb-2">Precios Justos</h4>
                  <p className="text-indigo-100">
                    Garantizamos el mejor precio del mercado en todos nuestros
                    productos
                  </p>
                </div>
              </div>
              <div className="transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-indigo-700/50 p-6 rounded-lg h-full">
                  <div className="text-indigo-300 text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-semibold mb-2">Asesoramiento</h4>
                  <p className="text-indigo-100">
                    Expertos listos para ayudarte a elegir lo mejor para tus
                    animales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

// interface Event {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   date: Date;
//   location: string;
//   time: string;
// }

// interface Category {
//   name: string;
//   color: string;
// }

// const CalendarRSE = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [selectedDay, setSelectedDay] = useState<number | null>(null);
//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

//   // Categorías de actividades
//   const categories: Record<string, Category> = {
//     capacitacion: { name: "Capacitación Comunitaria", color: "bg-blue-500" },
//     sostenibilidad: { name: "Sostenibilidad y Cuidado Ambiental", color: "bg-green-500" },
//     apoyo: { name: "Apoyo a Pequeños Productores", color: "bg-amber-500" }
//   };

//   // Eventos para la demostración
//   const events: Event[]= [
//     {
//       id: 1,
//       title: "Taller de Alimentación Animal",
//       description: "Taller gratuito sobre el manejo de la alimentación animal y su impacto en la salud y productividad.",
//       category: "capacitacion",
//       date: new Date("2025-03-05T05:00:00.000"),
//       location: "Centro Comunitario",
//       time: "10:00 - 12:00"
//     },
//     {
//       id: 2,
//       title: "Charla con Expertos",
//       description: "Charla sobre la importancia del bienestar animal y su relación con la producción sostenible.",
//       category: "capacitacion",
//       date: new Date("2025-03-12T05:00:00.000"),
//       location: "Auditorio Principal",
//       time: "15:00 - 17:00"
//     },
//     {
//       id: 3,
//       title: "Programa de Reciclaje",
//       description: "Lanzamiento del programa de reciclaje de empaques de alimentos y bolsas plásticas.",
//       category: "sostenibilidad",
//       date: new Date("2025-03-08T05:00:00.000"),
//       location: "Plaza Central",
//       time: "09:00 - 18:00"
//     },
//     {
//       id: 4,
//       title: "Capacitación en Insumos Ecológicos",
//       description: "Fomento del uso de empaques biodegradables y productos naturales para el cuidado animal.",
//       category: "sostenibilidad",
//       date: new Date("2025-03-15T05:00:00.000"),
//       location: "Salón Verde",
//       time: "14:00 - 16:00"
//     },
//     {
//       id: 5,
//       title: "Descuentos para Productores",
//       description: "Inicio del programa de descuentos y facilidades de pago para productores locales.",
//       category: "apoyo",
//       date: new Date("2025-03-20T05:00:00.000"),
//       location: "Tienda Principal",
//       time: "Todo el día"
//     },
//     {
//       id: 6,
//       title: "Taller de Comercialización Digital",
//       description: "Taller sobre el uso de la plataforma digital para ofrecer productos y servicios en línea.",
//       category: "apoyo",
//       date: new Date("2025-03-22T05:00:00.000"),
//       location: "Centro de Capacitación",
//       time: "11:00 - 13:00"
//     },
//     {
//       id: 7,
//       title: "Colaboración con Agricultores",
//       description: "Reunión para promover la rotación de cultivos y el uso de fertilizantes orgánicos.",
//       category: "sostenibilidad",
//       date: new Date("2025-03-28T05:00:00.000"),
//       location: "Granja Modelo",
//       time: "09:00 - 12:00"
//     },
//     {
//       id: 8,
//       title: "Asesoramiento Financiero",
//       description: "Alianzas con instituciones locales para brindar asesoramiento y financiamiento a pequeños ganaderos.",
//       category: "apoyo",
//       date: new Date("2025-03-25T05:00:00.000"),
//       location: "Sala de Conferencias",
//       time: "16:00 - 18:00"
//     }
//   ];

//   // Nombres de los meses
//   const monthNames = [
//     "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//   ];

//   // Nombres de los días
//   const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

//   // Obtener el número de días en el mes
//   const getDaysInMonth = (month: number, year: number) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   // Obtener el día de la semana del primer día del mes
//   const getFirstDayOfMonth = (month: number, year: number) => {
//     return new Date(year, month, 1).getDay();
//   };

//   // Cambiar al mes anterior
//   const prevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   // Cambiar al mes siguiente
//   const nextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   // Obtener eventos para un día específico
//   const getEventsForDay = (day: number) => {
//     return events.filter(event => 
//       event.date.getDate() === day && 
//       event.date.getMonth() === currentMonth && 
//       event.date.getFullYear() === currentYear
//     );
//   };

//   // Mostrar detalles del evento
//   const showEventDetails = (event: Event) => {
//     setSelectedEvent(event);
//     setShowModal(true);
//   };

//   // Renderizar los días del calendario
//   const renderCalendarDays = () => {
//     const daysInMonth = getDaysInMonth(currentMonth, currentYear);
//     const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
    
//     const days = [];
    
//     // Días vacíos al inicio
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       days.push(<div key={`empty-${i}`} className="h-24 border border-gray-400"></div>);
//     }
    
//     // Días del mes
//     for (let day = 1; day <= daysInMonth; day++) {
//       const dayEvents = getEventsForDay(day);
//       const isSelected = selectedDay === day;
      
//       days.push(
//         <div 
//           key={day} 
//           className={`h-24 border border-gray-400 p-1 overflow-hidden ${isSelected ? 'bg-[#e8c05c] opacity-80' : ''}`}
//           onClick={() => setSelectedDay(day)}
//         >
//           <div className="font-semibold text-gray-800">{day}</div>
//           <div className="space-y-1 mt-1">
//             {dayEvents.slice(0, 2).map(event => (
//               <div 
//                 key={event.id}
//                 className={`text-xs p-1 rounded cursor-pointer text-white truncate ${categories[event.category].color}`}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   showEventDetails(event);
//                 }}
//               >
//                 {event.title}
//               </div>
//             ))}
//             {dayEvents.length > 2 && (
//               <div 
//                 className="text-xs text-gray-700 cursor-pointer flex items-center"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setSelectedDay(day);
//                 }}
//               >
//                 <span className="mr-1">+{dayEvents.length - 2} más</span>
//                 <Info size={12} />
//               </div>
//             )}
//           </div>
//         </div>
//       );
//     }
    
//     return days;
//   };

//   // Modal para mostrar los detalles del evento
//   const EventModal = () => {
//     if (!selectedEvent) return null;
    
//     return (
//       <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#c2c2c290]">
//         <div className="bg-white rounded-lg p-6 max-w-md w-full">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold text-sky-800">{selectedEvent.title}</h2>
//             <button 
//               className="text-gray-500 hover:text-gray-700"
//               onClick={() => setShowModal(false)}
//             >
//               ✕
//             </button>
//           </div>
          
//           <div className="mb-4">
//             <span className={`px-2 py-1 rounded text-xs text-white ${categories[selectedEvent.category].color}`}>
//               {categories[selectedEvent.category].name}
//             </span>
//           </div>
          
//           <p className="mb-4 text-gray-700">{selectedEvent.description}</p>
          
//           <div className="grid grid-cols-2 gap-2 text-sm">
//             <div>
//               <strong className="block text-gray-500">Fecha:</strong>
//               <span className="text-gray-800">{selectedEvent.date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
//             </div>
//             <div>
//               <strong className="block text-gray-500">Hora:</strong>
//               <span className="text-gray-800">{selectedEvent.time}</span>
//             </div>
//             <div>
//               <strong className="block text-gray-500">Ubicación:</strong>
//               <span className="text-gray-800">{selectedEvent.location}</span>
//             </div>
//           </div>
          
//           <button 
//             className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowModal(false)}
//           >
//             Cerrar
//           </button>
//         </div>
//       </div>
//     );
//   };

//   // Lista de eventos para el día seleccionado
//   const EventsList = () => {
//     if (!selectedDay) return null;
    
//     const dayEvents = getEventsForDay(selectedDay);
    
//     if (dayEvents.length === 0) {
//       return (
//         <div className="p-4 bg-gray-50 rounded-lg">
//           <p className="text-center text-gray-600">No hay eventos programados para este día.</p>
//         </div>
//       );
//     }
    
//     return (
//       <div className="bg-gray-50 rounded-lg overflow-hidden">
//         <div className="p-3 bg-amber-700">
//           <h3 className="font-semibold text-white">
//             Eventos para el {selectedDay} de {monthNames[currentMonth]} de {currentYear}
//           </h3>
//         </div>
//         <div className="divide-y divide-gray-200">
//           {dayEvents.map(event => (
//             <div 
//               key={event.id} 
//               className="p-3 hover:bg-gray-100 cursor-pointer"
//               onClick={() => showEventDetails(event)}
//             >
//               <div className="flex items-center justify-between">
//                 <h4 className="font-medium text-sky-800">{event.title}</h4>
//                 <span className={`px-2 py-1 rounded-full text-xs text-white ${categories[event.category].color}`}>
//                   {categories[event.category].name}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-600 mt-1">{event.time} - {event.location}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <ScrollAnimation>
//     <section id="calendario" className="py-20 bg-gradient-to-b from-sky-50 to-white mx-auto p-20 w-screen">
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-center mb-8 text-sky-800">Calendario de Actividades RSE</h1>
//         <p className="text-gray-600">Responsabilidad Social Empresarial</p>
//       </div>
      
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center">
//           <Calendar className="mr-2" size={20} />
//           <h2 className="text-xl font-semibold">
//             {monthNames[currentMonth]} {currentYear}
//           </h2>
//         </div>
//         <div className="flex space-x-2">
//           <button 
//             onClick={prevMonth}
//             className="p-2 rounded hover:bg-[#e8c05c]"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button 
//             onClick={nextMonth}
//             className="p-2 rounded hover:bg-[#e8c05c]"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
      
//       <div className="mb-6">
//         <div className="grid grid-cols-7">
//           {dayNames.map(day => (
//             <div key={day} className="text-center p-2 font-semibold text-gray-800">
//               {day}
//             </div>
//           ))}
//         </div>
//         <div className="grid grid-cols-7">
//           {renderCalendarDays()}
//         </div>
//       </div>
      
//       {selectedDay && <EventsList />}
      
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2 text-sky-800">Categorías</h3>
//         <div className="flex flex-wrap gap-2">
//           {Object.entries(categories).map(([key, category]) => (
//             <div key={key} className="flex items-center">
//               <div className={`w-4 h-4 rounded ${category.color} mr-2`}></div>
//               <span className="text-sm text-gray-800 mr-5">{category.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {showModal && <EventModal />}
//     </section>
//     </ScrollAnimation>
//   );
// };

interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: Date;
  location: string;
  time: string;
}

interface Category {
  name: string;
  color: string;
}

const CalendarRSE = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  // Categorías de actividades
  const categories: Record<string, Category> = {
    capacitacion: { name: "Capacitación Comunitaria", color: "bg-blue-500" },
    sostenibilidad: { name: "Sostenibilidad y Cuidado Ambiental", color: "bg-green-500" },
    apoyo: { name: "Apoyo a Pequeños Productores", color: "bg-amber-500" }
  };

  // Eventos para la demostración
  const events: Event[]= [
    {
      id: 1,
      title: "Taller de Alimentación Animal",
      description: "Taller gratuito sobre el manejo de la alimentación animal y su impacto en la salud y productividad.",
      category: "capacitacion",
      date: new Date("2025-03-05T05:00:00.000"),
      location: "Centro Comunitario",
      time: "10:00 - 12:00"
    },
    {
      id: 2,
      title: "Charla con Expertos",
      description: "Charla sobre la importancia del bienestar animal y su relación con la producción sostenible.",
      category: "capacitacion",
      date: new Date("2025-04-07T05:00:00.000"),
      location: "Auditorio Principal",
      time: "15:00 - 17:00"
    },
    {
      id: 3,
      title: "Programa de Reciclaje",
      description: "Lanzamiento del programa de reciclaje de empaques de alimentos y bolsas plásticas.",
      category: "sostenibilidad",
      date: new Date("2025-03-08T05:00:00.000"),
      location: "Plaza Central",
      time: "09:00 - 18:00"
    },
    {
      id: 4,
      title: "Capacitación en Insumos Ecológicos",
      description: "Fomento del uso de empaques biodegradables y productos naturales para el cuidado animal.",
      category: "sostenibilidad",
      date: new Date("2025-03-10T05:00:00.000"),
      location: "Salón Verde",
      time: "14:00 - 16:00"
    },
    {
      id: 5,
      title: "Descuentos para Productores",
      description: "Inicio del programa de descuentos y facilidades de pago para productores locales.",
      category: "apoyo",
      date: new Date("2025-04-16T05:00:00.000"),
      location: "Tienda Principal",
      time: "Todo el día"
    },
    {
      id: 6,
      title: "Taller de Comercialización Digital",
      description: "Taller sobre el uso de la plataforma digital para ofrecer productos y servicios en línea.",
      category: "apoyo",
      date: new Date("2025-03-20T05:00:00.000"),
      location: "Centro de Capacitación",
      time: "11:00 - 13:00"
    },
    {
      id: 7,
      title: "Colaboración con Agricultores",
      description: "Reunión para promover la rotación de cultivos y el uso de fertilizantes orgánicos.",
      category: "sostenibilidad",
      date: new Date("2025-03-29T05:00:00.000"),
      location: "Granja Modelo",
      time: "09:00 - 12:00"
    },
    {
      id: 8,
      title: "Asesoramiento Financiero",
      description: "Alianzas con instituciones locales para brindar asesoramiento y financiamiento a pequeños ganaderos.",
      category: "apoyo",
      date: new Date("2025-04-23T05:00:00.000"),
      location: "Sala de Conferencias",
      time: "16:00 - 18:00"
    }
  ];

  // Nombres de los meses
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  // Nombres de los días
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  // Obtener el número de días en el mes
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Obtener el día de la semana del primer día del mes
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Cambiar al mes anterior
  const prevMonth = () => {
    setSlideDirection('left');
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
  };

  // Cambiar al mes siguiente
  const nextMonth = () => {
    setSlideDirection('right');
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
  };

  // Obtener eventos para un día específico
  const getEventsForDay = (day: number) => {
    return events.filter(event => 
      event.date.getDate() === day && 
      event.date.getMonth() === currentMonth && 
      event.date.getFullYear() === currentYear
    );
  };

  // Mostrar detalles del evento
  const showEventDetails = (event: Event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  // Renderizar los días del calendario
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
    
    const days = [];
    
    // Días vacíos al inicio
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <motion.div 
          key={`empty-${i}`} 
          className="h-24 border border-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.02 }}
        ></motion.div>
      );
    }
    
    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDay(day);
      const isSelected = selectedDay === day;
      const delay = (firstDayOfMonth + day) * 0.02;
      
      days.push(
        <motion.div 
          key={day} 
          className={`h-24 border border-gray-400 p-1 overflow-hidden ${isSelected ? 'bg-[#e8c05c] opacity-80' : ''}`}
          onClick={() => setSelectedDay(day)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <div className="font-semibold text-gray-800">{day}</div>
          <div className="space-y-1 mt-1">
            {dayEvents.slice(0, 2).map((event, index) => (
              <motion.div 
                key={event.id}
                className={`text-xs p-1 rounded cursor-pointer text-white truncate ${categories[event.category].color}`}
                onClick={(e) => {
                  e.stopPropagation();
                  showEventDetails(event);
                }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: delay + 0.1 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                {event.title}
              </motion.div>
            ))}
            {dayEvents.length > 2 && (
              <motion.div 
                className="text-xs text-gray-700 cursor-pointer flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDay(day);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-1">+{dayEvents.length - 2} más</span>
                <Info size={12} />
              </motion.div>
            )}
          </div>
        </motion.div>
      );
    }
    
    return days;
  };

  // Modal para mostrar los detalles del evento
  const EventModal = () => {
    if (!selectedEvent) return null;
    
    return (
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-[#c2c2c290]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <motion.h2 
                  className="text-xl font-bold text-sky-800"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedEvent.title}
                </motion.h2>
                <motion.button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  ✕
                </motion.button>
              </div>
              
              <motion.div 
                className="mb-4"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className={`px-2 py-1 rounded text-xs text-white ${categories[selectedEvent.category].color}`}>
                  {categories[selectedEvent.category].name}
                </span>
              </motion.div>
              
              <motion.p 
                className="mb-4 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedEvent.description}
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-2 text-sm"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div>
                  <strong className="block text-gray-500">Fecha:</strong>
                  <span className="text-gray-800">{selectedEvent.date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div>
                  <strong className="block text-gray-500">Hora:</strong>
                  <span className="text-gray-800">{selectedEvent.time}</span>
                </div>
                <div>
                  <strong className="block text-gray-500">Ubicación:</strong>
                  <span className="text-gray-800">{selectedEvent.location}</span>
                </div>
              </motion.div>
              
              <motion.button 
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={() => setShowModal(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // Lista de eventos para el día seleccionado
  const EventsList = () => {
    if (!selectedDay) return null;
    
    const dayEvents = getEventsForDay(selectedDay);
    
    return (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {dayEvents.length === 0 ? (
          <motion.div 
            className="p-4 bg-gray-50 rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-center text-gray-600">No hay eventos programados para este día.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="bg-gray-50 rounded-lg overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="p-3 bg-amber-700"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold text-white">
                Eventos para el {selectedDay} de {monthNames[currentMonth]} de {currentYear}
              </h3>
            </motion.div>
            <div className="divide-y divide-gray-200">
              <AnimatePresence>
                {dayEvents.map((event, index) => (
                  <motion.div 
                    key={event.id} 
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => showEventDetails(event)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05) }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sky-800">{event.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs text-white ${categories[event.category].color}`}>
                        {categories[event.category].name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{event.time} - {event.location}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <ScrollAnimation>
      <section id="calendario" className="py-20 bg-gradient-to-b from-sky-50 to-white mx-auto px-80 w-screen">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-center mb-8 text-sky-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Calendario de Actividades RSE
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Responsabilidad Social Empresarial
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="mr-2 text-[#e8c05c]" size={20} />
            </motion.div>
            <h2 className="text-xl font-semibold text-gray-800">
              {monthNames[currentMonth]} {currentYear}
            </h2>
          </div>
          <div className="flex space-x-2">
            <motion.button 
              onClick={prevMonth}
              className="p-2 rounded hover:bg-[#e8c05c]"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} className="text-gray-800"/>
            </motion.button>
            <motion.button 
              onClick={nextMonth}
              className="p-2 rounded hover:bg-[#e8c05c]"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} className="text-gray-800"/>
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div className="mb-6">
          <div className="grid grid-cols-7">
            {dayNames.map((day, index) => (
              <motion.div 
                key={day} 
                className="text-center p-2 font-semibold text-gray-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {day}
              </motion.div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${currentMonth}-${currentYear}`}
              className="grid grid-cols-7"
              initial={{ 
                x: slideDirection === 'right' ? 100 : -100, 
                opacity: 0 
              }}
              animate={{ 
                x: 0, 
                opacity: 1 
              }}
              exit={{ 
                x: slideDirection === 'right' ? -100 : 100, 
                opacity: 0 
              }}
              transition={{ duration: 0.3 }}
            >
              {renderCalendarDays()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        <AnimatePresence>
          {selectedDay && <EventsList />}
        </AnimatePresence>
        
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-sky-800">Categorías</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(categories).map(([key, category], index) => (
              <motion.div 
                key={key} 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className={`w-4 h-4 rounded ${category.color} mr-2`}></div>
                <span className="text-sm text-gray-800 mr-5">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {showModal && <EventModal />}
      </section>
    </ScrollAnimation>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Alimento Premium para Perros",
      description: "Nutrición completa y balanceada",
      price: 1999,
      image: "/perro.png",
    },
    {
      id: 2,
      name: "Alimento para Gatos",
      description: "Con proteínas de alta calidad",
      price: 1599,
      image: "/gato.png",
    },
    {
      id: 3,
      name: "Forraje para Caballos",
      description: "Mezcla especial de heno",
      price: 2499,
      image: "/caballo.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <style>{styles}</style>
      <Header isScrolled={isScrolled} />

      <Hero />

      <section id="productos" className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-800 mb-4">
              Nuestros Productos
            </h2>
            <p className="text-xl text-stone-600">
              Descubre nuestra selección premium de alimentos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <OfferSection />
      
      <AboutUs />
      <CalendarRSE />
      <BusinessHours />
      <FloatingCart />
      <ScrollToTop />
    </div>
  );
};

export default App;