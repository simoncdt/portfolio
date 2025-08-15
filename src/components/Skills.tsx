import React from 'react';
import { Code, BarChart3, Database, Brain, Monitor, Network } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Langages de programmation',
      skills: ['Python', 'Java', 'C', 'C++', 'PHP'],
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Analyse de données',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Excel'],
      color: 'violet'
    },
    {
      icon: Monitor,
      title: 'Visualisation de données',
      skills: ['Power BI', 'Tableau'],
      color: 'orange'
    },
    {
      icon: Code,
      title: 'Développement d\'applications',
      skills: ['Flask', 'API REST', 'PHP', 'Applications mobiles'],
      color: 'green'
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: ['MySQL', 'PostgreSQL', 'SQL'],
      color: 'red'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['Modélisation', 'Clustering (K-Means, DBSCAN, Hiérarchique)', 'Sélection de variables'],
      color: 'purple'
    },
    {
      icon: Network,
      title: 'Outils de virtualisation & réseaux',
      skills: ['VMware', 'Cisco Packet Tracer'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      violet: 'bg-violet-100 text-violet-600 border-violet-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  const getIconBg = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      violet: 'bg-violet-100 text-violet-600',
      orange: 'bg-orange-100 text-orange-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Compétences techniques</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getIconBg(category.color)} group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 text-sm font-medium rounded-full border transition-all hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;