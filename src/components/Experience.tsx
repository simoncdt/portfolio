import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Stagiaire Analyste de données',
      company: 'Loriginal.org / Artur.art',
      location: 'Montréal, QC',
      achievements: [
        'Estimation de la taille de marchés (cadeau, décoration, art) sur Amérique et Europe à partir de données sectorielles et benchmarks',
        'Calcul du prix moyen par produit et proportions selon le marché',
        'Analyse du trafic inbound (mots-clés transactionnels/informationnels) via SEMrush, avec hypothèses de conversion (1% info, 5% transactionnel)',
        'Modélisation de scénarios de ventes incluant CAC et canaux publicitaires (Facebook, Instagram, Pinterest)',
        'Élaboration d\'un rapport de prévisions financières avec hypothèses et scénarios multiples'
      ]
    },
    {
      year: '2025',
      title: 'Stagiaire en développement web',
      company: 'Cheleil',
      location: 'Montréal, QC',
      note: 'Stage bénévole via le site officiel de la Ville de Montréal',
      achievements: [
        'Réalisation de tests A/B pour optimiser l\'expérience utilisateur et augmenter le taux de conversion',
        'Intégration dynamique de contenus (textes, images, événements) pour enrichir les pages web et améliorer l\'engagement utilisateur',
        'Mise en place d\'un suivi des performances avec Google Analytics et Data Studio',
        'Optimisation de la structure de base de données (accès 30% plus rapide)',
        'Développement d\'un module d\'import/export de données CSV et JSON',
        'Optimisation des requêtes SQL (temps de réponse réduit de 35%)'
      ]
    },
    {
      year: '2022',
      title: 'Stagiaire développeuse d\'applications',
      company: 'ASIN',
      location: 'Cotonou',
      achievements: []
    },
    {
      year: '2021',
      title: 'Stagiaire en réseaux',
      company: 'HESSYSTEM',
      location: 'Cotonou',
      achievements: [
        'Intégration de protocoles de sécurité avancés (VPN, firewall)',
        'Tests de performance et de charge sur équipements réseau',
        'Optimisation de l\'architecture réseau pour sécurité et performance accrues'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expérience professionnelle</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 md:left-8 top-16 w-0.5 h-full bg-gray-300"></div>
              )}

              <div className="flex items-start space-x-4 md:space-x-8">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-2 text-blue-600 mb-2 md:mb-0">
                      <Calendar size={16} />
                      <span className="font-semibold">{exp.year}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 text-sm">
                      <div className="flex items-center space-x-1">
                        <Building2 size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  
                  {exp.note && (
                    <p className="text-sm text-violet-600 font-medium mb-4">{exp.note}</p>
                  )}

                  {exp.achievements.length > 0 && (
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;