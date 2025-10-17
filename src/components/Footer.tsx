'use client';

import { Github, Linkedin, Mail, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gabysendeski',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gabrielly-sendeski/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Email',
      url: 'mailto:gaby.sendeski@hotmail.com',
      icon: <Mail size={20} />,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511999999999?text=Olá%20Gabrielly!%20Vi%20seu%20portfólio.',
      icon: <MessageCircle size={20} />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <div className="text-center">
          {/* Links Sociais */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-gray-800 rounded-lg"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright e Informações */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span> por Gabrielly Sendeski.© {currentYear}</span>              
            </div>
            
            
            
            <div className="text-center text-xs text-gray-500 mb-2">
              Este site foi desenvolvido com foco em performance e experiência do usuário.
            </div>
            
            <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
              <span>⚡ 100% Performance</span>
              <span>📱 Responsivo</span>
              <span>🔒 Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;