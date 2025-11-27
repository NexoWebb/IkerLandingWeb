import React from "react";

export function StickyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-[#1a1a1a] fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-8xl md:mx-35 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Mobile: Hamburger Button (Left) */}
          <div className="flex-none md:hidden flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Logo - Desktop: Left, Mobile: Center */}
          <div className="flex-1 flex justify-center md:justify-start">
            <a href="#" className="flex items-center space-x-2 group">
              <img 
                src="/src/assets/logo.png" 
                alt="IkerWeb Logo" 
                className="h-28 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-12">
            <a
              href="#servicios"
              className="text-principalColor hover:text-white font-medium transition-colors text-lg drop-shadow-sm"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className="text-principalColor hover:text-white font-medium transition-colors text-lg drop-shadow-sm"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-principalColor hover:text-white font-medium transition-colors text-lg drop-shadow-sm"
            >
              Contacto
            </a>
          </div>

          {/* Spacer for mobile to keep logo centered */}
          <div className="w-10 md:hidden flex-none"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/90 backdrop-blur-md ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 border-t border-white/10">
          <a
            href="#servicios"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default StickyNavbar;
