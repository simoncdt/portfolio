import React from 'react';
import { Brain, Users, MessageCircle, Globe, BookOpen, Utensils } from 'lucide-react';

const About: React.FC = () => {
  const softSkills = [
    { icon: Brain, title: 'Esprit analytique', description: 'Capacité à analyser et résoudre des problèmes complexes' },
    { icon: Users, title: 'Travail d\'équipe', description: 'Collaboration efficace et harmonieuse en équipe' },
    { icon: MessageCircle, title: 'Communication', description: 'Communication claire et professionnelle' }
  ];

  const languages = [
    { lang: 'Français', level: 'C1 – Professionnel', percentage: 90 },
    { lang: 'Anglais', level: 'B1 – Intermédiaire', percentage: 70 }
  ];

  const interests = [
    { icon: Globe, title: 'Voyages', description: 'Découverte de nouvelles cultures' },
    { icon: Utensils, title: 'Cuisine', description: 'Art culinaire et gastronomie' },
    { icon: BookOpen, title: 'Lecture', description: 'Développement personnel et technique' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">À propos de moi</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Main Profile */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Étudiante en science des données avec un intérêt marqué pour le développement web et l'analyse de données. 
            Mon parcours combine l'expérience pratique du développement web avec des compétences solides en analyse de données, 
            me permettant de concevoir des solutions innovantes et d'optimiser les performances des applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expérience clé</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conception et optimisation de fonctionnalités applicatives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automatisation de tâches et amélioration SEO</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Programmation Python, PHP, Java</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Objectif</h3>
              <p className="text-gray-700">
                Contribuer à des projets innovants mêlant développement web et analyse de données, 
                en apportant ma rigueur, ma curiosité et ma polyvalence au service d'équipes dynamiques.
              </p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compétences relationnelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Langues</h3>
          <div className="max-w-2xl mx-auto">
            {languages.map((language, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">{language.lang}</span>
                  <span className="text-sm text-gray-600">{language.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-violet-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${language.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Centres d'intérêt</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors">
                  <interest.icon className="w-7 h-7 text-violet-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h4>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;