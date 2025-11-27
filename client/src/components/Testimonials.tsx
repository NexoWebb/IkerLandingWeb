import { useState, useEffect } from "react";
import transformationBefore1 from "../assets/transformation-before1.jpg";
import transformationAfter1 from "../assets/transformation-after1.jpg";
import transformationBefore2 from "../assets/transformation-before2.jpg";
import transformationAfter2 from "../assets/transformation-after2.jpg";
import whatsapp1 from "../assets/whatsapp1.jpg";
import whatsapp2 from "../assets/whatsapp2.jpg";
import whatsapp3 from "../assets/whatsapp3.jpg";
import whatsapp4 from "../assets/whatsapp4.jpg";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWhatsapp, setCurrentWhatsapp] = useState(0);

  // Before/After transformations data
  const transformations = [
    {
      id: 1,
      before: transformationBefore1,
      after: transformationAfter2,
      name: "Cliente 1",
    },
    {
      id: 2,
      before: transformationBefore2,
      after: transformationAfter1,
      name: "Cliente 2",
    },
  ];

  // WhatsApp testimonials
  const whatsappMessages = [whatsapp1, whatsapp2, whatsapp3, whatsapp4];

  // Auto-play carousel for before/after
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [transformations.length]);

  // Auto-play carousel for WhatsApp (mobile)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWhatsapp((prev) => (prev + 1) % whatsappMessages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [whatsappMessages.length]);

  const currentTransformation = transformations[currentSlide];

  return (
    <section className="relative bg-gradient-to-b from-colorFondoWeb to-colorFondoWeb/80 py-20 overflow-hidden -mt-20 md:-mt-32" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-principalColor">Testimonios</span> Reales
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Resultados comprobados de personas que confiaron en el proceso
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Central Before/After - Only 1 pair visible */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="flex gap-4 transition-all duration-700 ease-in-out">
              {/* Before Image */}
              <div className="relative group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                  ANTES
                </div>
                <div className="w-80 h-[30rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={currentTransformation.before}
                    alt={`${currentTransformation.name} - Antes`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* After Image */}
              <div className="relative group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-principalColor text-black px-4 py-1 rounded-full text-sm font-bold z-10">
                  DESPUÉS
                </div>
                <div className="w-80 h-[30rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-principalColor/50 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={currentTransformation.after}
                    alt={`${currentTransformation.name} - Después`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating WhatsApp Screenshots - Adjusted positions */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left - Higher and more to the left */}
            <div className="absolute top-10 left-4 w-56 transform -rotate-6 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <img
                src={whatsappMessages[0]}
                alt="Testimonio WhatsApp 1"
                className="rounded-2xl shadow-xl border-2 border-principalColor/30"
              />
            </div>

            {/* Top Right - Higher and more to the right */}
            <div className="absolute top-10 right-4 w-56 transform rotate-6 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <img
                src={whatsappMessages[1]}
                alt="Testimonio WhatsApp 2"
                className="rounded-2xl shadow-xl border-2 border-principalColor/30"
              />
            </div>

            {/* Bottom Left - Lower and more to the left */}
            <div className="absolute bottom-10 left-4 w-56 transform rotate-3 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <img
                src={whatsappMessages[2]}
                alt="Testimonio WhatsApp 3"
                className="rounded-2xl shadow-xl border-2 border-principalColor/30"
              />
            </div>

            {/* Bottom Right - Lower and more to the right */}
            <div className="absolute bottom-10 right-4 w-56 transform -rotate-3 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
              <img
                src={whatsappMessages[3]}
                alt="Testimonio WhatsApp 4"
                className="rounded-2xl shadow-xl border-2 border-principalColor/30"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Before/After Side by Side - 90% width */}
          <div className="flex gap-3 mb-8 justify-center w-[90%] mx-auto">
            {/* Before */}
            <div className="relative flex-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                ANTES
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                <img
                  src={currentTransformation.before}
                  alt="Antes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* After */}
            <div className="relative flex-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-principalColor text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                DESPUÉS
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-principalColor/50">
                <img
                  src={currentTransformation.after}
                  alt="Después"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* WhatsApp Carousel */}
          <div className="relative w-[90%] mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentWhatsapp * 100}%)` }}
              >
                {whatsappMessages.map((message, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <img
                      src={message}
                      alt={`Testimonio ${index + 1}`}
                      className="w-full rounded-xl shadow-lg border-2 border-principalColor/30"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {whatsappMessages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentWhatsapp(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentWhatsapp
                      ? "bg-principalColor w-6"
                      : "bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
