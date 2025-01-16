import React from 'react';
import vitoria1 from '../assets/vitoria1.jpg';
import vitoria2 from '../assets/baralho.jpg';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-5xl font-bold text-center text-[#1A2B5F] mb-12">
          Conheça a <span className="text-[#F7B32B]">AESCULT</span>
        </h2>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8">
            {/* História */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#1A2B5F] mb-4 flex items-center">
                <span className="bg-[#F7B32B] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Nossa História
              </h3>
              <p className="text-gray-600">
                A AESCULT nasceu da paixão por transformar a vida da terceira idade no Grande ABC. Desde nossa fundação, 
                temos sido pioneiros em criar experiências únicas que unem esporte, cultura e diversão. Nosso objetivo é 
                proporcionar momentos inesquecíveis, onde nossos associados possam se conectar, se divertir e celebrar a 
                vida com energia e vitalidade.
              </p>
            </div>

            {/* Missão */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#1A2B5F] mb-4 flex items-center">
                <span className="bg-[#F7B32B] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Nossa Missão
              </h3>
              <p className="text-gray-600">
                Na AESCULT, nossa missão vai além de promover competições esportivas. Organizamos viagens emocionantes, 
                festas animadas, eventos culturais e atividades que fortalecem a interação social. Tudo isso com um único 
                propósito: melhorar a qualidade de vida do público sênior, oferecendo um ambiente acolhedor, seguro e cheio 
                de oportunidades para viver cada dia com alegria e propósito.
              </p>
            </div>
          </div>

          {/* Imagens */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={vitoria2}
              alt="Seniores dançando juntos" 
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={vitoria1}
              alt="Atividades em grupo para seniores" 
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}