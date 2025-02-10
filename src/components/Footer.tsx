import React from 'react';
import { Activity, Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">AESCULT</span>
            </div>
            <p className="text-gray-400">
              Promovendo saúde, cultura e diversão para a terceira idade no Grande ABC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Início</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
              <li><a href="#grandprix" className="text-gray-400 hover:text-white">Grand Prix</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white">Eventos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-gray-400">(11) 91529-6182</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-gray-400">aescultabc@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-gray-400">R. Pinheiro Machado, 202 - Santa Paula, São Caetano do Sul - SP</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61571062959251&locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/aescultabc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/5511915296182" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AESCULT. Todos os direitos reservados. Associação Esportiva e Cultural do Grande ABC - CNPJ: 59.345.266/0001-19</p>
        </div>
      </div>
    </footer>
  );
}