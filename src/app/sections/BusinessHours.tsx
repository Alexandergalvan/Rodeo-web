import { CalendarCheck, ChevronRight, Clock, MapPin } from "lucide-react";

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
        <h2 className="text-4xl font-bold text-center mb-16 text-sky-800">
          Horarios y Ubicación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-sky-100 hover:border-[#e8c05c] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#e8c05c] w-6 h-6 animate-spin-slow" />
                <h3 className="text-2xl font-semibold text-sky-700">
                  Horarios de Atención
                </h3>
              </div>

              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-sky-100 hover:border-[#e8c05c] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-sky-600 w-6 h-6 animate-bounce" />
                <h3 className="text-2xl font-semibold text-sky-800">
                  Nuestra Ubicación
                </h3>
              </div>

              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 transform transition-all duration-500 hover:scale-105">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1741735974080!5m2!1ses-419!2smx!6m8!1m7!1s2m6PEWrc1jaCv2Cy9UEYrg!2m2!1d25.6667844364426!2d-97.83366767312474!3f167.31260196024982!4f1.7127119688666994!5f0.7820865974627469"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-sky-900">
                    <MapPin className="text-sky-600 w-5 h-5" />
                    <span>Flores Magón, 87506 Valle Hermoso, Tamps.</span>
                  </p>
                  <p className="text-sky-700 pl-7">
                    Entre Lucio Blanco y 18 de Marzo
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/TSSqfGNPqwfi7JBe8"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium mt-4 group"
                >
                  <span>Cómo llegar</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
