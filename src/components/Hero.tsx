import React from 'react';
import capa from '../assets/capa.jpg';

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={capa}
          alt="Seniors playing volleyball"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Viva uma vida ativa e saudável com a AESCULT!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Junte-se ao maior evento esportivo para a terceira idade de São Paulo
          </p>
          <div className="space-x-4">
            <a 
              href="#grandprix"
              className="inline-block bg-[#F7B32B] text-[#1A2B5F] px-8 py-3 rounded-full font-medium hover:bg-[#e5a527] transition-colors"
            >
              Participe do Grand Prix
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}