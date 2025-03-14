import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const OfferSection = () => {
  const [, setActiveOffer] = useState<number | null>(null);

  const offers = [
    {
      id: 1,
      title: "2x1 en Alimento para Perros",
      description: "Lleva dos bolsas y paga una en marcas seleccionadas",
      validUntil: "31/03/2025",
      discount: "50%",
      image: "/products/perro.png",
    },
    {
      id: 2,
      title: "Descuento en Accesorios",
      description: "Todos los accesorios con 25% de descuento",
      validUntil: "25/03/2025",
      discount: "25%",
      image: "/products/accesorios.webp",
    },
  ];

  return (
    <section
      id="ofertas"
      className="py-20 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-sky-800">
          Ofertas Especiales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative group"
              onMouseEnter={() => setActiveOffer(offer.id)}
              onMouseLeave={() => setActiveOffer(null)}
            >
              <div className="h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl h-full transform group-hover:-translate-y-2">
                  <div className="relative">
                    <Image
                      width={1000}
                      height={1000}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
