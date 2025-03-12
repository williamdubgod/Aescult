import React from 'react';
import { Trophy } from 'lucide-react';

const awards = [
  {
    year: "2025",
    title: "Campeão Grand Prix 50+ Masculino",
    team: "A definir"
  },
  {
    year: "2025",
    title: "Campeão Grand Prix 50+ Feminino",
    team: "A definir"
  },
  {
    year: "2025",
    title: "Campeão Grand Prix 60+ Masculino",
    team: "A definir"
  },
  {
    year: "2025",
    title: "Prêmio Melhor Iniciativa Social",
    team: "AESCULT"
  }
];

export default function Awards() {
  return (
    <section id="premiacoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#1A2B5F] mb-12">Premiações</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Trophy className="h-12 w-12 text-[#F7B32B]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{award.year}</p>
                <h3 className="text-xl font-semibold text-[#1A2B5F]">{award.title}</h3>
                <p className="text-gray-600">{award.team}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}