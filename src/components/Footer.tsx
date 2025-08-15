import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors mb-6 inline-block"
          >
            Barbara Saroukou
          </button>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Étudiante passionnée en science des données, spécialisée dans le développement web 
            et l'analyse de données. Toujours prête pour de nouveaux défis technologiques.
          </p>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>Développé avec</span>
                <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
                <span>et</span>
                <Code className="w-4 h-4 text-blue-400" />
                <span>par Barbara Saroukou</span>
              </div>
              
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Barbara Saroukou. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;