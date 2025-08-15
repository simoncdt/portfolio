import React from 'react';
import { MapPin, Phone, Mail, Linkedin, ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-white pt-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 w-32 h-32 bg-blue-50 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-8 w-24 h-24 bg-violet-50 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-orange-50 rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative z-10">
          {/* Elegant Header with Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-8 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Barbara <span className="text-blue-700">Saroukou</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-violet-700 font-semibold mb-6">
            Analyse de données
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            Étudiante en science des données passionnée par le développement web et l'analyse de données. 
            Spécialisée en Python, Machine Learning et développement d'applications innovantes.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-2 text-gray-600 bg-gray-50 rounded-xl py-3 px-4 hover:bg-gray-100 transition-colors">
              <MapPin size={18} className="text-blue-600" />
              <span className="text-sm font-medium">Longueil, QC</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 bg-gray-50 rounded-xl py-3 px-4 hover:bg-gray-100 transition-colors">
              <Phone size={18} className="text-blue-600" />
              <span className="text-sm font-medium">819-701-7402</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 bg-gray-50 rounded-xl py-3 px-4 hover:bg-gray-100 transition-colors">
              <Mail size={18} className="text-blue-600" />
              <span className="text-sm font-medium">Email</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 bg-gray-50 rounded-xl py-3 px-4 hover:bg-gray-100 transition-colors">
              <Linkedin size={18} className="text-blue-600" />
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Me contacter
            </button>
          </div>

          {/* Key Skills Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-1">Python</div>
              <div className="text-xs text-gray-600">Programmation</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-violet-600 mb-1">ML</div>
              <div className="text-xs text-gray-600">Machine Learning</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow col-span-2 sm:col-span-1">
              <div className="text-2xl font-bold text-orange-600 mb-1">React</div>
              <div className="text-xs text-gray-600">Développement</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronDown size={24} className="text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;