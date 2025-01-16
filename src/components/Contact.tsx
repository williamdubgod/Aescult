import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#1A2B5F] mb-12">Fale Conosco</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#1A2B5F] mb-6">Entre em Contato</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea className="w-full p-2 border rounded h-32"></textarea>
              </div>
              <button className="w-full bg-[#F7B32B] text-[#1A2B5F] py-2 rounded-full font-medium hover:bg-[#e5a527] transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#1A2B5F] mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#F7B32B]" />
                  <span className="text-gray-600">(11) 91529-6182</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#F7B32B]" />
                  <span className="text-gray-600">aescultabc@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#F7B32B]" />
                  <span className="text-gray-600">R. Pinheiro Machado, 202 - Santa Paula, São Caetano do Sul - SP, 09541-180</span>
                </div>
                <a 
                  href="https://wa.me/5511915296182" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Fale conosco pelo WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#1A2B5F] mb-6">Horário de Atendimento</h3>
              <p className="text-gray-600">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}