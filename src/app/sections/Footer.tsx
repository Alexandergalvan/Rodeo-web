import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const ExpandedFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Columna 1: Sobre Nosotros */}
        <div>
          <h3 className="text-xl font-bold mb-4">El Rodeo</h3>
          <p className="text-stone-300 mb-4">
            Ofrecemos los mejores productos para el cuidado y alimentación de
            tus animales desde 2003, con calidad y servicio garantizado.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#productos"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="#aboutus"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="#calendario"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Calendario RSE
              </Link>
            </li>
            <li>
              <Link
                href="#horarios"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Horarios
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <MapPin size={18} className="mr-2 text-sky-400" />
              <span className="text-stone-300">
                Flores Magón, 87506 Valle Hermoso, Tamps.
              </span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-2 text-sky-400" />
              <span className="text-stone-300">+54 11 5555-1234</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-2 text-sky-400" />
              <span className="text-stone-300">contacto@elrodeo.com</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Legal */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/términos"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link
                href="/privacidad"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/envíos"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Política de Envíos
              </Link>
            </li>
            <li>
              <Link
                href="/devoluciones"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                Devoluciones
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-700 mt-12 pt-8 text-center">
        <p className="text-stone-400">
          © {currentYear} El Rodeo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default ExpandedFooter;
