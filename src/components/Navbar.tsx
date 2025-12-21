import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const currentPath = pathname;

  const navOptions = [
    { name: "ABOUT", url: "/about" },
    { name: "CONTACT", url: "/contact" },
  ];

  const productOptions = [
    { name: "ACTUATOR", url: "/products/actuator" },
    { name: "DRIVER", url: "/products/driver" },
    // { name: "ILIYA", url: "/products/iliya" },
  ];

  const isProductsActive =
    currentPath === "/products" || currentPath.startsWith("/products/");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ desktop dropdown open state
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);

  // ✅ mobile accordion open state
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavVisible(false);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // close dropdown on route change
  useEffect(() => {
    setProductsOpen(false);
  }, [currentPath]);

  // close dropdown on outside click / ESC
  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!productsRef.current) return;
      if (!productsRef.current.contains(target)) setProductsOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductsOpen(false);
    };

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    const willOpen = !isMenuOpen;
    setIsMenuOpen(willOpen);
    document.body.style.overflow = willOpen ? "hidden" : "";
    if (!willOpen) setMobileProductsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
    setMobileProductsOpen(false);
  };

  const glassBase =
    "bg-transparent bg-gradient-to-b from-black/50 to-black/10 text-white transition-all duration-300 will-change-[background-color] ";
  const glassScrolled = cn(glassBase, "shadow-lg");

  const isHomePage = currentPath === "/";
  const glassTop = isHomePage
    ? "text-white transition-all duration-300 will-change-[background-color]"
    : cn(glassBase, "shadow-lg");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-center transition-all duration-300 will-change-transform overflow-visible",
        isScrolled ? glassScrolled : glassTop,
        !isNavVisible && "-translate-y-full"
      )}
    >
    
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link to="/" className="flex items-center" aria-label="8Robotics">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="8Robotics Logo" className="h-14 w-auto" />
            <span
              className="font-extrabold text-base sm:text-lg tracking-tight font-machina"
              style={{ letterSpacing: "-1px" }}
            >
              8Robotics
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center space-x-1 md:flex">
          {/* Other links */}
          {navOptions.map(({ name, url }) => (
            <Link
              key={name}
              to={url}
              className={cn(
                "rounded-md px-4 py-2 text-base font-medium transition-all duration-200 font-machina",
                "hover:bg-white/10",
                currentPath === url && "bg-white/10"
              )}
            >
              {name}
            </Link>
          ))}
          {/* ✅ PRODUCTS dropdown - click + hover */}
          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className={cn(
                "rounded-md px-4 py-2 text-base font-medium transition-all duration-200 font-machina inline-flex items-center gap-2",
                "hover:bg-white/10",
                isProductsActive && "bg-white/10"
              )}
              aria-haspopup="menu"
              aria-expanded={productsOpen}
            >
              PRODUCTS
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  productsOpen ? "rotate-180" : ""
                )}
              />
            </button>

            {/* panel */}
            <div
              className={cn(
                "absolute left-0 top-full pt-3 transition-all duration-150",
                productsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              )}
            >
              <div className="min-w-[220px] rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                {productOptions.map((item) => {
                  const active = currentPath === item.url;
                  return (
                    <Link
                      key={item.name}
                      to={item.url}
                      className={cn(
                        "block px-5 py-3 text-sm font-machina transition-all",
                        "hover:bg-white/10",
                        active && "bg-white/15"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>


        </nav>

        {/* MOBILE TOGGLE */}
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

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xl transition-opacity duration-300 md:hidden"
            onClick={closeMobileMenu}
          />

          <div
            className={cn(
              "fixed left-0 right-0 top-0 z-40 flex flex-col overflow-hidden md:hidden",
              "bg-gradient-to-b from-zinc-900/95 via-black/90 to-black/85",
              "backdrop-blur-2xl shadow-2xl border-b border-white/5",
              "transition-all duration-500 ease-out",
              "translate-y-0 opacity-100"
            )}
            style={{
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              paddingTop: "max(env(safe-area-inset-top, 1.5rem), 2rem)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex items-center justify-between px-6 pt-4 pb-6">
              <Link to="/" onClick={closeMobileMenu} className="flex items-center">
                <img src="/logo.svg" alt="8Robotics" className="h-10 w-auto" />
              </Link>

              <button
                onClick={closeMobileMenu}
                className="rounded-full bg-white/10 p-3 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
                aria-label="Close menu"
              >
                <X size={26} className="text-white" />
              </button>
            </div>

            <nav className="flex flex-col px-6 pb-12 space-y-3">
              {/* PRODUCTS accordion */}
              <button
                type="button"
                onClick={() => setMobileProductsOpen((v) => !v)}
                className={cn(
                  "w-full rounded-2xl py-5 text-center text-lg font-semibold tracking-wide transition-all duration-300",
                  "bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10",
                  isProductsActive && "bg-white/15 ring-2 ring-white/25"
                )}
              >
                <span className="inline-flex items-center justify-center gap-2 font-machina">
                  PRODUCTS
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      mobileProductsOpen ? "rotate-180" : ""
                    )}
                  />
                </span>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  mobileProductsOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="pt-2 space-y-2">
                    {productOptions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        onClick={closeMobileMenu}
                        className={cn(
                          "block rounded-2xl py-4 text-center text-base font-semibold tracking-wide transition-all duration-300",
                          "bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10",
                          currentPath === item.url && "bg-white/15 ring-2 ring-white/25",
                          "font-machina"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* other nav */}
              {navOptions.map(({ name, url }) => (
                <Link
                  key={name}
                  to={url}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block rounded-2xl py-5 text-center text-lg font-semibold tracking-wide transition-all duration-300",
                    "bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10",
                    currentPath === url &&
                      "bg-white/20 shadow-xl ring-2 ring-white/40 scale-[1.02]",
                    "font-machina"
                  )}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
