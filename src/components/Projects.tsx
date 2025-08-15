import React from 'react';
import { ExternalLink, Code, ShoppingCart, Calculator, BookOpen, Music, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Culture Tour',
      url: 'https://culturetour.vercel.app/',
      description: 'Site web dédié aux voyages et au tourisme, développé avec React et hébergé sur Vercel. Interface moderne et intuitive pour découvrir des destinations.',
      icon: Code,
      tech: ['React', 'Vercel', 'CSS3'],
      category: 'Tourisme'
    },
    {
      title: 'Boutique Pro',
      url: 'https://boutiquepro.vercel.app',
      description: 'Boutique en ligne complète avec plusieurs rubriques, fonctionnalité de panier dynamique utilisant le localStorage. Expérience e-commerce moderne.',
      icon: ShoppingCart,
      tech: ['React', 'LocalStorage', 'JavaScript'],
      category: 'E-commerce'
    },
    {
      title: 'Budget Smart',
      url: 'https://budgetsmart-woad.vercel.app/',
      description: 'Application intelligente de gestion budgétaire. Aide les utilisateurs à suivre et optimiser leurs dépenses avec des fonctionnalités analytiques avancées.',
      icon: Calculator,
      tech: ['React', 'LocalStorage', 'Analytics'],
      category: 'Finance'
    },
    {
      title: 'QCM Exams',
      url: 'https://qcmexams.vercel.app/',
      description: 'Préparateur d\'examens personnalisé selon la filière et le niveau d\'études. QCM prédéfinis dans le code pour une préparation efficace.',
      icon: BookOpen,
      tech: ['React', 'JavaScript', 'Educational'],
      category: 'Éducation'
    },
    {
      title: 'Seydina Music',
      url: 'https://seydina.com',
      description: 'Boutique en ligne spécialisée dans la vente de musique. Interface élégante pour découvrir et acheter des contenus musicaux.',
      icon: Music,
      tech: ['E-commerce', 'Music', 'Web'],
      category: 'Musique'
    },
    {
      title: 'Afro Women Workshop',
      url: 'https://siteaww.wixsite.com/afro-women-workshop',
      description: 'Plateforme dédiée aux femmes afrodescendantes avec calendrier d\'événements, inscriptions, profils personnalisés et ressources de développement. Créé avec Wix.',
      icon: Users,
      tech: ['Wix', 'Community', 'Events'],
      category: 'Communauté'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colorMap = {
      'Tourisme': 'bg-blue-100 text-blue-700',
      'E-commerce': 'bg-green-100 text-green-700',
      'Finance': 'bg-orange-100 text-orange-700',
      'Éducation': 'bg-purple-100 text-purple-700',
      'Musique': 'bg-pink-100 text-pink-700',
      'Communauté': 'bg-indigo-100 text-indigo-700'
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mes Projets</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations web, allant des applications e-commerce 
            aux outils de gestion, en passant par des plateformes éducatives et communautaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <project.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors group/link"
                >
                  <span>Voir le projet</span>
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Approche de développement</h3>
            <p className="text-gray-700 leading-relaxed">
              Chaque projet reflète ma passion pour créer des expériences utilisateur intuitives et performantes. 
              J'accorde une attention particulière à l'optimisation des performances, à la responsivité mobile-first, 
              et à l'implémentation de fonctionnalités innovantes qui répondent aux besoins réels des utilisateurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;