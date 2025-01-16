import React from 'react';
import volei1 from '../assets/volei1.jpg'
import capa from '../assets/capa.jpg'
import cruzeiro1 from '../assets/cruzeiro1.jpg'
import cruzeiro2 from '../assets/cruzeiro2.jpg'
import danca2 from '../assets/danca2.jpg'
import baralho2 from '../assets/baralho2.jpg'

const images = [
  volei1, 
  capa, 
  cruzeiro1, 
  cruzeiro2, 
  danca2, 
  baralho2  
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#1A2B5F] mb-12">Galeria de Fotos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img 
                src={image} 
                alt={`Galeria AESCULT ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}