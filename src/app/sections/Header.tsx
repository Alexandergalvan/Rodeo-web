import Image from "next/image";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { HeaderProps } from "../types/types";

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
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
      ${isScrolled || isMenuOpen ? "bg-white shadow-lg" : "bg-transparent"}`}
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
            <span
              className={`text-xl sm:text-2xl font-bold tracking-wider ${
                isScrolled || isMenuOpen ? "text-sky-800" : "text-white"
              }`}
            >
              El Rodeo
            </span>
          </a>

          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 transition-all duration-300 group
                  ${
                    isScrolled
                      ? "text-stone-700 hover:text-[#e8c05c]"
                      : "text-white hover:text-[#e8c05c]"
                  }`}
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
                <X
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isScrolled || isMenuOpen ? "text-stone-700" : "text-white"
                  }`}
                />
              ) : (
                <MenuIcon
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isScrolled || isMenuOpen ? "text-stone-700" : "text-white"
                  }`}
                />
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
          style={{ top: "0", zIndex: 40 }}
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

export default Header;
