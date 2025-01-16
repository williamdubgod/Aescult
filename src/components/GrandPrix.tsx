import React from 'react';
import { FaTshirt, FaShoppingBag } from 'react-icons/fa';
import { FaBottleWater } from "react-icons/fa6";
import { BsFillBackpackFill } from "react-icons/bs";
import GrandPrixLogo from '../Assets/GrandPrixLogo.png'

export default function GrandPrix() {
  return (
    <section id="grandprix" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fillOpacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Championship Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={GrandPrixLogo}
            alt="Logo do Grand Prix de Vôlei Sênior"
            className="max-w-xs w-auto object-contain" // Largura máxima e proporções mantidas
          />
        </div>

        <h2 className="text-5xl font-bold text-center text-[#1A2B5F] mb-4">Grand Prix de Vôlei Sênior</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          O maior evento esportivo para a terceira idade do Grande ABC
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <h3 className="text-2xl font-semibold text-[#1A2B5F] mb-4 flex items-center">
                <span className="bg-[#F7B32B] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2B5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Sobre o Evento
              </h3>
              <p className="text-gray-600 mb-6 pl-13">
                O Grand Prix de Vôlei Sênior é o maior evento esportivo para a terceira idade do Grande ABC.
                Com diversas categorias e times participantes, o torneio promove a integração e a prática
                esportiva em um ambiente competitivo e saudável.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#1A2B5F] to-[#2A3B6F] p-6 rounded-xl text-white">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 26 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Datas Importantes
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F7B32B] rounded-full mr-2"></span>
                  <span>Inscrições até: <strong>31 de janeiro de 2025</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F7B32B] rounded-full mr-2"></span>
                  <span>Fase classificatória: <strong>Fevereiro a Julho de 2025</strong> (7 etapas)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F7B32B] rounded-full mr-2"></span>
                  <span>Fase final: <strong>23 a 25 de Junho de 2025</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-semibold text-[#1A2B5F] mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#F7B32B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kit do Atleta
              </h4>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {/* Ícone de Camiseta */}
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <FaTshirt className="h-12 w-12 mx-auto mb-2 text-[#1A2B5F]" />
                  <p className="font-medium text-gray-700">Camiseta</p>
                </div>

                {/* Ícone de Garrafinha */}
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <FaBottleWater className="h-12 w-12 mx-auto mb-2 text-[#1A2B5F]" />
                  <p className="font-medium text-gray-700">Garrafinha</p>
                </div>

                {/* Ícone de Mochila */}
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <BsFillBackpackFill className="h-12 w-12 mx-auto mb-2 text-[#1A2B5F]" />
                  <p className="font-medium text-gray-700">Mochila</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-[#1A2B5F] mb-4">Feminino</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    50 a 59 anos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    60 a 69 anos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    + 70 anos
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-[#1A2B5F] mb-4">Masculino</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    50 a 59 anos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    60 a 69 anos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    + 70 anos
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F7B32B] to-[#F5A623] p-6 rounded-xl text-[#1A2B5F]">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Premiações
              </h4>
              <div className="space-y-4">
                <div className="flex items-center bg-white/90 p-3 rounded-lg">
                  <span className="text-2xl mr-3">🥇</span>
                  <div>
                    <p className="font-semibold">1º lugar</p>
                    <p className="text-lg font-bold">R$ 1.000,00</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/90 p-3 rounded-lg">
                  <span className="text-2xl mr-3">🥈</span>
                  <div>
                    <p className="font-semibold">2º lugar</p>
                    <p className="text-lg font-bold">R$ 500,00</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/90 p-3 rounded-lg">
                  <span className="text-2xl mr-3">🥉</span>
                  <div>
                    <p className="font-semibold">3º lugar</p>
                    <p className="text-lg font-bold">R$ 250,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1A2B5F] mb-6">Inscrição</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nome da Equipe</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent transition-all"
                  placeholder="Digite o nome da sua equipe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Categoria</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent transition-all">
                  <option>50-59 anos - Feminino</option>
                  <option>50-59 anos - Masculino</option>
                  <option>60-69 anos - Feminino</option>
                  <option>60-69 anos - Masculino</option>
                  <option>+70 anos - Feminino</option>
                  <option>+70 anos - Masculino</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email para contato</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mensagem (opcional)</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B32B] focus:border-transparent transition-all h-32"
                  placeholder="Alguma observação adicional?"
                ></textarea>
              </div>
              <button className="w-full bg-[#F7B32B] text-[#1A2B5F] py-3 rounded-lg font-medium hover:bg-[#e5a527] transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Enviar Inscrição
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}