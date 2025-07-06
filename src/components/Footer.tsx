import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-cyan-400 text-lg font-medium mb-4">
            Made with ❤️ for the Future of Robotics
          </p>
          <a
            href="mailto:info@8robotics.tech"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            <Mail className="h-5 w-5" />
            <span>info@8robotics.tech</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;