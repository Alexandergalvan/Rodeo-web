import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

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

const Hero = () => (
  <section id="inicio" className="relative h-screen overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 opacity-10 bg-grid-pattern animate-grid"></div>
    </div>

    <FloatingParticles />

    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#e8c05c]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div className="relative h-full flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl px-6 py-12 mx-4 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/20 shadow-2xl">
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

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          <span
            className="inline-block animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            style={{ animationDelay: "0.2s" }}
          >
            El
          </span>{" "}
          <span
            className="inline-block animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-[#e8c05c] to-yellow-300"
            style={{ animationDelay: "0.4s" }}
          >
            Rodeo
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up font-light"
          style={{ animationDelay: "0.6s" }}
        >
          Tu mejor opción en{" "}
          <span className="font-semibold text-[#e8c05c]">
            alimentación animal
          </span>
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={30} color="white" />
      </div>
    </div>
  </section>
);

export default Hero;
