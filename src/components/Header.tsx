import React from 'react';
import logo from '../../dist/assets/logo2.png'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="AESCULT Logo" 
              className="h-24 w-auto" 
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-700 font-medium">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-700 font-medium">Sobre Nós</a>
            <a href="#grandprix" className="text-gray-700 hover:text-blue-700 font-medium">Grand Prix</a>
            <a href="#eventos" className="text-gray-700 hover:text-blue-700 font-medium">Eventos</a>
            <a href="#galeria" className="text-gray-700 hover:text-blue-700 font-medium">Galeria</a>
            <a href="#premiacoes" className="text-gray-700 hover:text-blue-700 font-medium">Premiações</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-700 font-medium">Contato</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#F7B32B] text-[#1A2B5F] px-6 py-2 rounded-full font-medium hover:bg-[#e5a527] transition-colors">
              Inscreva-se no Grand Prix
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}