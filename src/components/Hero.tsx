'use client';

import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gabysendeski',
      icon: <Github size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gabrielly-sendeski/',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:gaby.sendeski@hotmail.com',
      icon: <Mail size={24} />,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5541984559193?text=Olá%20Gabrielly!%20Vi%20seu%20portfólio.',
      icon: <MessageCircle size={24} />,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Textual */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Olá, eu sou{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                Gabrielly
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              Desenvolvedora Front-end
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Transformo ideias em experiências digitais incríveis usando as 
              tecnologias mais modernas do mercado.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                Ver Projetos
                <ArrowDown className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Entre em Contato
              </a>
            </div>

            {/* Links Sociais */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name === 'Email' ? '_self' : '_blank'}
                  rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                  className="text-gray-600 hover:text-primary-600 transition-colors p-2 hover:bg-primary-50 rounded-lg"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-slide-up animation-delay-300">
            <div className="relative">
              {/* Container da imagem de perfil */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Círculo de fundo com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full"></div>
                
                <div className="absolute inset-4 rounded-full overflow-hidden bg-white shadow-xl">
                  <img
                    src="./images/profile.jpg"
                    alt="Gabrielly Sendeski - Desenvolvedora Front-end"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Elementos decorativos minimalistas */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-pink-500 rounded-full opacity-70 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;