'use client';

const About = () => {
  const experiences = [
    {
      period: '2022 - Atual',
      company: 'Cia Hering',
      position: 'Desenvolvedora Front End',
      description: 'Desenvolvimento de interfaces modernas e responsivas com React e TypeScript, Node.js'
    },
    {
      period: '2024 - Atual',
      company: 'Freelancer',
      position: 'Desenvolvedora de Software',
      description: 'De forma independente, atuo com o desenvolvimento de software de ponta a ponta, desde o levantamento de requisitos com as partes envolvidas no projeto, prototipação, codificação no lado do cliente, documentação, implementação, até a apresentação para o cliente final, utilizando linguagens fortes no mercado, sempre atualizado e a nível de exigência internacional, trabalhando com metodologias ágeis.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvedora apaixonada por tecnologia e inovação, sempre em busca 
            de novos desafios e oportunidades de aprendizado.
          </p>
        </div>

        {/* Seção Principal - Duas Colunas */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Texto sobre */}
          <div className="animate-slide-up">
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Sou uma desenvolvedora front-end <strong className="text-gray-900">formada em Analise Desenvolvimento de Sistemas</strong>, movida pela 
                paixão de criar interfaces responsivas e interativas que encantam os usuários. 
                Meu objetivo é desenvolver soluções que não apenas atendam às necessidades 
                funcionais, mas que também proporcionem experiências memoráveis e excepcionais.
              </p>
              <p>
                Estou constantemente me atualizando sobre as últimas tendências e melhores 
                práticas do mercado, buscando sempre inovar e melhorar minhas criações. 
                Acredito que a tecnologia tem o poder de transformar ideias em realidade 
                e criar conexões significativas entre pessoas e produtos digitais.
              </p>
              <p>
                Estou ansiosa para conectar-me com pessoas que compartilham da mesma paixão 
                e explorar oportunidades incríveis juntos! Se você tem um projeto em mente 
                ou quer apenas trocar ideias sobre desenvolvimento, ficarei feliz em conversar.
              </p>
            </div>

            {/* Estatísticas - Ajustadas */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
                <div className="text-sm text-gray-600 font-medium">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-sm text-gray-600 font-medium">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Clientes</div>
              </div>
            </div>
          </div>

          {/* Ilustração Animada */}
          <div className="animate-slide-up lg:order-last">
            <div className="relative h-96 flex items-center justify-center">
              {/* Círculos animados de fundo */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-80 animate-ping"></div>
                <div className="absolute bottom-32 right-8 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-50 animate-pulse"></div>
              </div>

              {/* Elemento central */}
              <div className="relative z-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="space-y-4">
                    {/* Simulação de código */}
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-2 bg-primary-200 rounded w-3/4 animate-pulse"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      <div className="h-2 bg-primary-200 rounded w-5/6 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos flutuantes */}
              <div className="absolute top-0 right-0 text-4xl animate-bounce">💻</div>
              <div className="absolute bottom-0 left-0 text-3xl animate-pulse">⚡</div>
              <div className="absolute top-1/2 left-0 text-2xl animate-ping">🚀</div>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Experiência Profissional
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {exp.position}
                  </h4>
                  <p className="text-primary-600 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;