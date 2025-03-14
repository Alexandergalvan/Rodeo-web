import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="nosotros"
      className="py-20 bg-gradient-to-b from-sky-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">
          Sobre Nosotros
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <Image
              width={500}
              height={500}
              src="/cover.jpg"
              alt="Nuestra tienda"
              className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                Más de 15 años sirviendo a la comunidad
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Nuestra Historia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desde 2003, El Rodeo ha sido el referente en alimentación animal
                en Valle Hermoso. Comenzamos como una pequeña tienda familiar y
                hoy nos enorgullece ser el proveedor de confianza para miles de
                familias que cuidan de sus animales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
                Nuestro Compromiso
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nos dedicamos a ofrecer productos de la más alta calidad para la
                nutrición y el bienestar de todos los animales. Trabajamos
                directamente con los mejores proveedores para garantizar precios
                justos y productos premium.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-indigo-500 p-4 rounded-lg text-center text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-1">15+</div>
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
            </div>
          </div>
        </div>

        <div className="mt-16">
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
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
