import React from 'react';
import { Notebook as Robot, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Technology', id: 'technology' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Robot className="w-8 h-8 text-sky-500" />
              <span className="text-2xl font-bold">8Robotics</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Leading the future of humanoid robotics with innovative AI solutions 
              for healthcare, education, and industry applications.
            </p>
            <div className="text-sm text-slate-400">
              <p>© {currentYear} 8Robotics. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>contact@8robotics.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the future of robotics</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;