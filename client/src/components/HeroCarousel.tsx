import { useState, useEffect } from "react";
import heroImage3 from "../assets/hero-image-3.jpg";

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Array de imágenes - puedes reemplazar estas URLs con tus propias imágenes
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image 1",
      title: "Transforma tu cuerpo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "image 2",
      title: "Alcanza tus metas",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      src: heroImage3,
      alt: "Weightlifting competition",
      title: "Entrenamiento profesional",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_90%,50%_100%,0_90%)] md:[clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay oscuro para legibilidad */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
            
            {/* Contenido de texto */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center pl-0 md:items-start md:text-left md:pl-20 z-20 max-w-2xl text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg transform transition-all duration-700 translate-y-0 opacity-100">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 drop-shadow-md opacity-90">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Obtener Ebook - Posicionado encima de los indicadores */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center z-30">
        <button className="bg-principalColor text-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 transform">
          Obtener Ebook
        </button>
      </div>

      {/* Indicators */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
