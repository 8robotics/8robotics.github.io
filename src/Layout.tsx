import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
  noMainPadding?: boolean;
};

const Layout = ({ children, noMainPadding = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className={
          noMainPadding
            ? "flex-1 w-full" // FULL BLEED
            : "flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8" // DEFAULT
        }
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
