import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  const navOptions = [
    { name: "TECHNOLOGY", url: "/technology" },
    { name: "ABOUT", url: "/about" },
    { name: "NEWS", url: "/news" },
    { name: "CAREERS", url: "/careers" },
    { name: "CONTACT", url: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar if scrolling down and past threshold
        setIsNavVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    const willOpen = !isMenuOpen;
    setIsMenuOpen(willOpen);
    document.body.style.overflow = willOpen ? "hidden" : "";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  /* ────────────────────── GLASS-MORPHIC CLASSES ────────────────────── */
  const glassBase =
    "bg-transparent bg-gradient-to-b from-black/50 to-black/10 text-white transition-all duration-300 will-change-[background-color] ";

  const glassScrolled = cn(glassBase, "shadow-lg");

  const isHomePage = currentPath === "/";
  const glassTop = isHomePage ? "text-white transition-all duration-300 will-change-[background-color]" : cn(glassBase, "shadow-lg");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-center transition-all duration-300 will-change-transform overflow-hidden",
        isScrolled ? glassScrolled : glassTop,
        !isNavVisible && "-translate-y-full"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ───── LOGO ───── */}
        <a
          href="/"
          className="flex items-center"
          aria-label="8Robotics"
        >
          <div
            className="flex items-center space-x-2"
          >
            <img
              src="/logo.svg"
              alt="8Robotics Logo"
              className="h-14 w-auto"
            />
            <span
              className="font-extrabold text-base sm:text-lg tracking-tight font-machina"
              style={{letterSpacing: '-1px' }}
            >
              8Robotics
            </span>
          </div>
        </a>

        {/* ───── DESKTOP NAV ───── */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navOptions.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              className={cn(
                "rounded-md px-4 py-2 text-base font-medium transition-all duration-200 font-machina",
                "hover:bg-white/10"
              )}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* ───── MOBILE TOGGLE ───── */}
        <button
          onClick={toggleMenu}
          className={cn(
            "md:hidden rounded-full p-2 transition-all",
            isScrolled ? "bg-white/10" : "bg-white/20"
          )}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ───── MOBILE MENU (PREMIUM ANIMATED GLASS PANEL) ───── */}
{isMenuOpen && (
  <>
    {/* Animated Backdrop */}
    <div
      className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xl transition-opacity duration-300 md:hidden"
      onClick={toggleMenu}
    />

    {/* Sliding Menu Panel with Staggered Animations */}
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-40 flex flex-col overflow-hidden",
        "bg-gradient-to-b from-zinc-900/95 via-black/90 to-black/85",
        "backdrop-blur-2xl shadow-2xl",
        "border-b border-white/5",
        "transition-all duration-500 ease-out md:hidden",
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
      style={{
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingTop: "max(env(safe-area-inset-top, 1.5rem), 2rem)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Header: Logo + Close */}
      <div className="flex items-center justify-between px-6 pt-4 pb-6">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
            toggleMenu();
          }}
          className="flex items-center"
        >
          <img src="/logo.svg" alt="8Robotics" className="h-10 w-auto" />
        </a>
        <button
          onClick={toggleMenu}
          className="rounded-full bg-white/10 p-3 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
          aria-label="Close menu"
        >
          <X size={26} className="text-white" />
        </button>
      </div>

      {/* Animated Nav Links */}
      <nav className="flex flex-col px-6 pb-12 space-y-3">
        {navOptions.map(({ name, url }, index) => (
          <a
            key={name}
            href={url}
            onClick={(e) => {
              if (url === "/") {
                e.preventDefault();
                scrollToTop();
              }
              toggleMenu();
            }}
            className={cn(
              "block rounded-2xl py-5 text-center text-lg font-semibold tracking-wide transition-all duration-300",
              "bg-white/5 hover:bg-white/10 backdrop-blur-sm",
              "border border-white/10",
              "transform transition-transform duration-500 ease-out",
              currentPath === url &&
                "bg-white/20 shadow-xl ring-2 ring-white/40 scale-105",
              isMenuOpen
                ? `translate-y-0 opacity-100`
                : `-translate-y-4 opacity-0`
            )}
            style={{
              animationDelay: `${index * 100 + 200}ms`,
              animation: isMenuOpen
                ? `slideDown 0.5s ease-out forwards`
                : undefined,
            }}
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  </>
)}
    </header>
  );
};

export default Navbar;