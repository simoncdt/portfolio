import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      period: '2023 – 2026',
      degree: 'Baccalauréat en informatique – Science des données',
      institution: 'Université du Québec à Trois-Rivières',
      location: 'Trois-Rivières, QC',
      type: 'formation'
    },
    {
      period: '2020 – 2022',
      degree: 'Bac+2 en informatique',
      institution: 'Université EPITECH',
      location: 'Cotonou',
      type: 'formation'
    },
    {
      period: '2018 – 2019',
      degree: 'Diplôme fin collégial, série scientifique',
      institution: 'Complexe Scolaire La Rose – Rosette',
      location: 'Cotonou',
      type: 'formation'
    },
    {
      period: '2025',
      degree: 'Attestation – Premium Micro-WIL en Blockchain avancée',
      institution: '',
      location: '',
      type: 'certification'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Formation & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formations */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-7 h-7 text-blue-600 mr-3" />
                Formations
              </h3>
              <div className="space-y-6">
                {education.filter(item => item.type === 'formation').map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-2 text-blue-600 mb-3">
                      <Calendar size={16} />
                      <span className="font-semibold">{item.period}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.degree}</h4>
                    
                    <div className="flex items-center space-x-4 text-gray-600 text-sm">
                      <span className="font-medium">{item.institution}</span>
                      {item.location && (
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Award className="w-7 h-7 text-violet-600 mr-3" />
                Certifications
              </h3>
              <div className="space-y-6">
                {education.filter(item => item.type === 'certification').map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-2 text-violet-600 mb-3">
                      <Calendar size={16} />
                      <span className="font-semibold">{item.period}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.degree}</h4>
                    
                    <div className="bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      Blockchain avancée
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Certifications Section */}
              <div className="mt-8 p-6 bg-gradient-to-br from-violet-50 to-blue-50 rounded-xl border border-violet-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Formation continue</h4>
                <p className="text-gray-700 text-sm">
                  En constante évolution dans les domaines de l'analyse de données, 
                  du machine learning et des technologies blockchain. 
                  Participation régulière à des formations spécialisées et webinaires techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;