import React from 'react';
import danca from '../assets/danca1.jpg';
import GrandPrix from '../assets/seniorGrandPrix.jpg';
import encontro from '../assets/encontro.jpg';


const events = [
  {
    title: "Grand Prix de Vôlei Sênior",
    date: "31 de janeiro, 2025",
    location: "Ginásio Municipal - São Caetano do Sul",
    image: GrandPrix
  },
  {
    title: "Festival de Dança Sênior",
    date: "20 de Janeiro, 2025",
    location: "Teatro Municipal - Santo André",
    image: danca
  },
  {
    title: "Encontro de Integração",
    date: "5 de Fevereiro, 2025",
    location: "Parque Central - Santo André",
    image: encontro
  }
];

export default function Events() {
  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#1A2B5F] mb-12">Próximos Eventos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1A2B5F] mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <button className="w-full bg-[#F7B32B] text-[#1A2B5F] py-2 rounded-full font-medium hover:bg-[#e5a527] transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}