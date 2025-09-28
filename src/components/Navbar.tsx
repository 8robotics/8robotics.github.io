
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // Get current path for active tab highlight
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const navOptions = [
  { name: 'Home', url: '/' },
  { name: 'Technology', url: '/technology' },
  { name: 'About', url: '/about' },
  { name: 'News', url: '/news' },
  { name: 'Careers', url: '/careers' },
  { name: 'Contact', url: '/contact' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Pulse Robot"
        >
          <span
            className="flex items-center space-x-2 px-2 py-1 rounded-lg"
            style={{
              background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.12) 100%)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <img 
              src="/logo.svg" 
              alt="8Robotics Logo" 
              className="h-8 sm:h-10 w-auto transition-all duration-300" 
              style={{ minWidth: 32 }}
            />
            <span
              className="font-extrabold text-base sm:text-lg tracking-tight text-pulse-500"
              style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', letterSpacing: '-1px' }}
            >
              8Robotics
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navOptions.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              className={cn(
                "nav-link px-2 py-1 rounded-lg font-semibold text-base flex items-center",
                currentPath === url && "ring-2 ring-pulse-500 ring-offset-2 ring-offset-white shadow-pulse"
              )}
              style={{
                minHeight: 36,
                marginLeft: 8,
                background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.12) 100%)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: currentPath === url ? '0 0 16px 4px #FE5C02, 0 2px 8px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.06)',
                color: '#222',
              }}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-white p-3 focus:outline-none rounded-full bg-gray-800 shadow-lg border border-gray-700 backdrop-blur-lg" 
          style={{ minWidth: 48, minHeight: 48, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}
          aria-label="Close menu backdrop"
        />
      )}

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-40 bg-white flex flex-col pt-6 px-4 md:hidden transition-transform duration-300 ease-in-out shadow-lg",
        isMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
      )}
        style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
      >
        <div className="flex justify-end">
          <button
            className="p-3 rounded-full text-gray-700 focus:outline-none bg-gray-100 hover:bg-gray-200"
            onClick={toggleMenu}
            aria-label="Close menu"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 items-center mt-4 mb-8">
          {navOptions.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              className={cn(
                "text-lg font-medium py-3 px-6 w-full text-center rounded-lg bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 active:bg-gray-700 transition-colors",
                currentPath === url && "ring-2 ring-pulse-500 ring-offset-2 ring-offset-white shadow-pulse"
              )}
              style={{ minHeight: 48, boxShadow: currentPath === url ? '0 0 16px 4px #FE5C02, 0 4px 24px rgba(0,0,0,0.08)' : undefined }}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
