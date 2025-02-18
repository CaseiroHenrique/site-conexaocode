import React from 'react';
import { Code2, Cpu, Database, Cloud, Lock, Zap, BarChart, Phone } from 'lucide-react';

export default function TechProcess() {
  const processes = [
    {
      icon: Code2,
      title: 'Desenvolvimento Web',
      description: 'Criamos aplicações web modernas e responsivas utilizando as mais recentes tecnologias do mercado.',
      features: ['React', 'Vue.js', 'Node.js', 'TypeScript']
    },
    {
      icon: Phone,
      title: 'Desenvolvimento Mobile',
      description: 'Desenvolvemos aplicativos nativos e multiplataforma para iOS e Android com foco em performance.',
      features: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      description: 'Projetamos e implementamos estruturas de dados escaláveis e seguras.',
      features: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL']
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Oferecemos soluções em nuvem para garantir escalabilidade e disponibilidade.',
      features: ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean']
    },
    {
      icon: Lock,
      title: 'Segurança',
      description: 'Implementamos as melhores práticas de segurança em todas as etapas do desenvolvimento.',
      features: ['OAuth 2.0', 'JWT', 'HTTPS', 'Criptografia']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimizamos o desempenho das aplicações para garantir a melhor experiência.',
      features: ['Caching', 'CDN', 'Lazy Loading', 'Compressão']
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Implementamos soluções de análise de dados para tomada de decisões.',
      features: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Custom Analytics']
    },
    {
      icon: Cpu,
      title: 'DevOps',
      description: 'Automatizamos processos de desenvolvimento e implantação.',
      features: ['Docker', 'Kubernetes', 'CI/CD', 'Monitoramento']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Code2 className="w-16 h-16 text-blue-100" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nosso{' '}
            <span className="relative">
              <span className="relative z-10 text-blue-600">Processo Tecnológico</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos as melhores práticas e tecnologias para entregar soluções de alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <process.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{process.description}</p>
              <div className="flex flex-wrap gap-2">
                {process.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
          
          <h3 className="text-3xl font-bold text-center mb-12 relative z-10">
            Nosso Compromisso com a{' '}
            <span className="text-blue-600">Qualidade</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: 'Código Limpo',
                description: 'Seguimos os princípios SOLID e as melhores práticas de programação'
              },
              {
                title: 'Testes Automatizados',
                description: 'Garantimos a qualidade com testes unitários, integração e E2E'
              },
              {
                title: 'Documentação',
                description: 'Mantemos documentação detalhada e atualizada de todos os projetos'
              },
              {
                title: 'Code Review',
                description: 'Realizamos revisões de código para garantir qualidade e padronização'
              },
              {
                title: 'Integração Contínua',
                description: 'Automatizamos processos de build, teste e deploy'
              },
              {
                title: 'Monitoramento',
                description: 'Acompanhamos performance e estabilidade em tempo real'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}