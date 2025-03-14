"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Info,
  MapPin,
  Share,
  X,
} from "lucide-react";
import { useState } from "react";
import { Category, Event } from "../types/types";
import Image from "next/image";

const CalendarRSE = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  // Categorías de actividades
  const categories: Record<string, Category> = {
    capacitacion: { name: "Capacitación Comunitaria", color: "bg-blue-500" },
    sostenibilidad: {
      name: "Sostenibilidad y Cuidado Ambiental",
      color: "bg-green-500",
    },
    apoyo: { name: "Apoyo a Pequeños Productores", color: "bg-amber-500" },
  };

  // Eventos para la demostración
  const events: Event[] = [
    {
      id: 1,
      title: "Taller de Alimentación Animal",
      description:
        "Taller gratuito sobre el manejo de la alimentación animal y su impacto en la salud y productividad.",
      category: "capacitacion",
      date: new Date("2025-03-05T05:00:00.000"),
      location: "Centro Comunitario",
      image: "/events/Designer.webp",
      time: "10:00 - 12:00",
    },
    {
      id: 2,
      title: "Charla con Expertos",
      description:
        "Charla sobre la importancia del bienestar animal y su relación con la producción sostenible.",
      category: "capacitacion",
      date: new Date("2025-04-07T05:00:00.000"),
      location: "Auditorio Principal",
      image: "/events/expertos.webp",
      time: "15:00 - 17:00",
    },
    {
      id: 3,
      title: "Programa de Reciclaje",
      description:
        "Lanzamiento del programa de reciclaje de empaques de alimentos y bolsas plásticas.",
      category: "sostenibilidad",
      date: new Date("2025-03-08T05:00:00.000"),
      location: "Plaza Central",
      image: "/events/reciclaje.webp",
      time: "09:00 - 18:00",
    },
    {
      id: 4,
      title: "Capacitación en Insumos Ecológicos",
      description:
        "Fomento del uso de empaques biodegradables y productos naturales para el cuidado animal.",
      category: "sostenibilidad",
      date: new Date("2025-03-10T05:00:00.000"),
      location: "Salón Verde",
      image: "/events/ecologico.webp",
      time: "14:00 - 16:00",
    },
    {
      id: 5,
      title: "Descuentos para Productores",
      description:
        "Inicio del programa de descuentos y facilidades de pago para productores locales.",
      category: "apoyo",
      date: new Date("2025-04-16T05:00:00.000"),
      location: "Tienda Principal",
      image: "/events/descuentos.webp",
      time: "Todo el día",
    },
    {
      id: 6,
      title: "Taller de Comercialización Digital",
      description:
        "Taller sobre el uso de la plataforma digital para ofrecer productos y servicios en línea.",
      category: "apoyo",
      date: new Date("2025-03-20T05:00:00.000"),
      location: "Centro de Capacitación",
      image: "/events/marketing.webp",
      time: "11:00 - 13:00",
    },
    {
      id: 7,
      title: "Colaboración con Agricultores",
      description:
        "Reunión para promover la rotación de cultivos y el uso de fertilizantes orgánicos.",
      category: "sostenibilidad",
      date: new Date("2025-03-29T05:00:00.000"),
      location: "Granja Modelo",
      image: "/events/agricultores.webp",
      time: "09:00 - 12:00",
    },
    {
      id: 8,
      title: "Asesoramiento Financiero",
      description:
        "Alianzas con instituciones locales para brindar asesoramiento y financiamiento a pequeños ganaderos.",
      category: "apoyo",
      date: new Date("2025-04-23T05:00:00.000"),
      location: "Sala de Conferencias",
      image: "/events/asesoramiento.webp",
      time: "16:00 - 18:00",
    },
  ];

  // Nombres de los meses
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
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
    setSlideDirection("left");
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
    setSlideDirection("right");
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
    return events.filter(
      (event) =>
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
          className={`h-24 border border-gray-400 p-1 overflow-hidden ${
            isSelected ? "bg-[#e8c05c] opacity-80" : ""
          }`}
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
                className={`text-xs p-1 rounded cursor-pointer text-white truncate ${
                  categories[event.category].color
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  showEventDetails(event);
                }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: delay + 0.1 + index * 0.1 }}
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

  const addToCalendar = (event: Event) => {
    // Implementar lógica para agregar al calendario
    const startTime = new Date(event.date);
    const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // 2 horas por defecto

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}&dates=${startTime
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}/${endTime
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}`;

    window.open(calendarUrl, "_blank");
  };

  const shareEvent = (event: Event) => {
    // Implementar lógica para compartir
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        })
        .catch(console.error);
    }
  };
  // Modal para mostrar los detalles del evento
  // Modal para mostrar los detalles del evento
  const EventModal = () => {
    if (!selectedEvent) return null;

    return (
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto min-h-screen">
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            ></motion.div>

            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl transform transition-all"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2 gap-8 p-6">
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                      <Image
                        src={selectedEvent.image}
                        alt={selectedEvent.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute top-4 right-4 ${
                          categories[selectedEvent.category].color
                        } text-white px-3 py-1 rounded-full font-medium`}
                      >
                        {categories[selectedEvent.category].name}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-stone-600">
                          <Calendar className="w-5 h-5" />
                          <span>
                            {selectedEvent.date.toLocaleDateString("es-ES", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-600">
                          <Clock className="w-5 h-5" />
                          <span>{selectedEvent.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-stone-600">
                          <MapPin className="w-5 h-5" />
                          <span>{selectedEvent.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-stone-800 mb-2">
                        {selectedEvent.title}
                      </h2>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm text-white ${
                          categories[selectedEvent.category].color
                        }`}
                      >
                        {categories[selectedEvent.category].name}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        {selectedEvent.description}
                      </p>

                      <div className="border-t border-b border-gray-100 py-4">
                        <div className="flex items-center gap-2">
                          <Info className="w-5 h-5 text-[#e8c05c]" />
                          <span className="text-stone-600">
                            Información adicional del evento
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <button
                          onClick={() => addToCalendar(selectedEvent)}
                          className="w-full bg-[#e8c05c] text-stone-800 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#e8c05c]/90 transition-colors"
                        >
                          <Calendar className="w-5 h-5" />
                          <span>Agregar a mi calendario</span>
                        </button>

                        <button
                          onClick={() => shareEvent(selectedEvent)}
                          className="w-full border-2 border-[#e8c05c] text-stone-800 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#e8c05c]/10 transition-colors"
                        >
                          <Share className="w-5 h-5" />
                          <span>Compartir evento</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  const EventsList = () => {
    if (!selectedDay) return null;

    const dayEvents = getEventsForDay(selectedDay);

    return (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
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
            <p className="text-center text-gray-600">
              No hay eventos programados para este día.
            </p>
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
                Eventos para el {selectedDay} de {monthNames[currentMonth]} de{" "}
                {currentYear}
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
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sky-800">
                        {event.title}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs text-white ${
                          categories[event.category].color
                        }`}
                      >
                        {categories[event.category].name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.time} - {event.location}
                    </p>
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
    <section
      id="calendario"
      className="py-20 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-4 text-stone-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Calendario de Actividades
          </motion.h2>
          <motion.p
            className="text-xl text-stone-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Responsabilidad Social Empresarial
          </motion.p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <motion.div
            className="flex justify-between items-center mb-6"
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
              <h3 className="text-lg sm:text-xl font-semibold text-stone-800">
                {monthNames[currentMonth]} {currentYear}
              </h3>
            </div>
            <div className="flex space-x-2">
              <motion.button
                onClick={prevMonth}
                className="p-2 rounded-lg hover:bg-[#e8c05c]/10 text-[#e8c05c] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={nextMonth}
                className="p-2 rounded-lg hover:bg-[#e8c05c]/10 text-[#e8c05c] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-7 mb-2">
                {dayNames.map((day, index) => (
                  <motion.div
                    key={day}
                    className="text-center p-2 font-medium text-stone-600 text-sm sm:text-base"
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
                  className="grid grid-cols-7 gap-1 sm:gap-2"
                  initial={{
                    x: slideDirection === "right" ? 100 : -100,
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: slideDirection === "right" ? -100 : 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {renderCalendarDays()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedDay && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EventsList />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-stone-800">
            Categorías
          </h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(categories).map(([key, category], index) => (
              <motion.div
                key={key}
                className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${category.color} mr-2`}
                ></div>
                <span className="text-sm text-stone-600">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <EventModal />
      </div>
    </section>
  );
};

export default CalendarRSE;
