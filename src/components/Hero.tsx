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
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-up animation-delay-300">
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full"></div>
                  
                  <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden bg-white shadow-xl">
                    <img
                      src="./images/profile.jpg"
                      alt="Gabrielly Sendeski - Desenvolvedora Front-end"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-purple-500 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 -right-6 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-pink-500 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1 text-center lg:text-left animate-slide-up w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Olá, eu sou{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                  Gabrielly
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 font-medium">
                Desenvolvedora Front-end
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Transformo ideias em experiências digitais incríveis usando as 
                tecnologias mais modernas do mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <a
                  href="#projects"
                  className="btn-primary inline-flex items-center justify-center whitespace-nowrap"
                >
                  Ver Projetos
                  <ArrowDown className="ml-2 w-5 h-5 hidden md:inline" />
                </a>
                <a
                  href="#contact"
                  className="btn-secondary inline-flex items-center justify-center whitespace-nowrap"
                >
                  Entre em Contato
                </a>
              </div>

              {/* LINKS SOCIAIS */}
              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
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

          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;