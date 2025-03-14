"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpCircle } from "lucide-react";
import { Product, ScrollAnimationProps } from "./types/types";
import CalendarRSE from "./sections/CalendarRSE";
import AboutUs from "./sections/AboutUs";
import BusinessHours from "./sections/BusinessHours";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ProductCard from "./components/ProductCard";
import OfferSection from "./sections/Offer";
import ExpandedFooter from "./sections/Footer";
import FloatingCalculator from "./components/FloatingCalculator";

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(ref?.current);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={ref}
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

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "Alimento Premium para Perros",
      description: "Nutrición completa y balanceada",
      price: 1999,
      image: "/products/perro.png",
      discount: "0%",
    },
    {
      id: 2,
      name: "Alimento para Gatos",
      description: "Con proteínas de alta calidad",
      price: 1599,
      image: "/products/gato.webp",
      discount: "0%",
    },
    {
      id: 3,
      name: "Forraje para Caballos",
      description: "Mezcla especial de heno",
      price: 2499,
      image: "/products/caballo.jpg",
      discount: "0%",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <style>{styles}</style>
      <Header isScrolled={isScrolled} />

      <Hero />

      <section
        id="productos"
        className="py-20 px-4 bg-gradient-to-b from-white to-sky-50"
      >
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

      <ScrollAnimation>
        <OfferSection />
        <AboutUs />
      </ScrollAnimation>
      <CalendarRSE />
      <BusinessHours />
      <FloatingCalculator />
      <ScrollToTop />
      <ExpandedFooter />
    </div>
  );
};

export default App;
