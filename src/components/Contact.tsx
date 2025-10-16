'use client';

import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      value: '+55 (41) 98355-9193',
      link: 'https://wa.me/5541984559193?text=Olá%20Gabrielly!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      value: 'gaby.sendeski@hotmail.com',
      link: 'mailto:gaby.sendeski@hotmail.com?subject=Contato%20via%20Portfolio',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Localização',
      value: 'Curitiba, PR',
      link: '#',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso 
            ajudar a transformar suas ideias em realidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cards de Contato */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className={cn(
                  "card p-8 text-center hover:scale-105 transition-all duration-300 animate-slide-up",
                  method.bgColor
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={cn(
                  "w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r flex items-center justify-center text-white shadow-lg",
                  method.color
                )}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                
                {method.link !== '#' ? (
                  <a
                    href={method.link}
                    target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                    rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                    className={cn(
                      "font-semibold hover:underline transition-colors break-words",
                      // 👈 AJUSTE: Fonte menor para o email
                      method.title === 'Email' ? 'text-sm' : 'text-base',
                      method.textColor
                    )}
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-gray-700">
                    {method.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action - VERSÃO AZUL */}
<div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
  {/* Elementos decorativos de fundo */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full -translate-x-20 -translate-y-20"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full translate-x-16 translate-y-16"></div>
  
  <div className="relative z-10">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      Pronta para o Próximo Passo?
    </h3>
    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
      Estou sempre aberta a discutir novos projetos e oportunidades. 
      Escolha a forma de contato que preferir!
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://wa.me/5541984559193?text=Olá%20Gabrielly!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <MessageCircle size={20} />
        Chamar no WhatsApp
      </a>
      <a
        href="mailto:gaby.sendeski@hotmail.com?subject=Proposta%20de%20Projeto&body=Olá%20Gabrielly,%0A%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre..."
        className="inline-flex items-center justify-center gap-3 bg-white text-slate-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
      >
        <Mail size={20} />
        Enviar Email
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;