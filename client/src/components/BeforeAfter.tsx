import { useState, useEffect } from "react";
import beforeImage from "../assets/before.jpg";
import afterImage from "../assets/after.jpg";

export function BeforeAfter() {
  const [currentPhase, setCurrentPhase] = useState(0); // 0: Before, 1: After

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const content = [
    {
      title: "ANTES",
      description: "Sentía falta de energía y estancamiento en mis entrenamientos. No lograba ver los resultados que quería a pesar del esfuerzo.",
      image: beforeImage,
      alt: "Estado físico anterior",
    },
    {
      title: "DESPUÉS",
      description: "Con el plan personalizado, logré definir mi musculatura y aumentar mi fuerza considerablemente. ¡Me siento mejor que nunca!",
      image: afterImage,
      alt: "Estado físico actual",
    },
  ];

  const current = content[currentPhase];

  return (
    <>
      <style>{`
        .before-after-section {
          clip-path: polygon(0 0, 50% 5%, 100% 0, 100% 100%, 0 95%);
        }
        @media (min-width: 768px) {
          .before-after-section {
            clip-path: polygon(0 0, 50% 13%, 100% 0, 100% 100%, 0 90%);
          }
        }
      `}</style>
      <section className="before-after-section relative bg-[#111] overflow-hidden -mt-13 md:-mt-48 lg:-mt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 md:pt-48 lg:pt-56 pb-24 md:pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content - Left */}
            <div className="flex-1 text-center md:text-left z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-500 ease-in-out transform">
                <span className="text-principalColor">{current.title}</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 transition-all duration-500 ease-in-out">
                {current.description}
              </p>
            </div>

            {/* Image Content - Right */}
            <div className="flex-1 relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_0_50px_10px_rgba(146,243,248,0.4)] border-4 border-principalColor/40 transition-all duration-500 ease-in-out transform hover:scale-105">
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BeforeAfter;
