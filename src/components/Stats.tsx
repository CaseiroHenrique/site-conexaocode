import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Globe, CheckCircle2, Users, Star, Clock, Code, Award, Coffee } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Projetos Concluídos',
    value: 89,
    icon: CheckCircle2,
    suffix: '+',
    description: 'Projetos entregues com sucesso'
  },
  {
    id: 2,
    name: 'Clientes Satisfeitos',
    value: 85,
    icon: Users,
    suffix: '',
    description: 'Empresas transformadas digitalmente'
  },
  {
    id: 3,
    name: 'Presença Global',
    value: 4,
    icon: Globe,
    suffix: ' países',
    description: 'Alcance internacional'
  },
  {
    id: 4,
    name: 'Anos de Experiência',
    value: 4,
    icon: Clock,
    suffix: '+',
    description: 'Expertise acumulada'
  },
  {
    id: 5,
    name: 'Tecnologias Dominadas',
    value: 20,
    icon: Code,
    suffix: '+',
    description: 'Stack tecnológico diversificado'
  },
  {
    id: 7,
    name: 'Sprints Completadas',
    value: 250,
    icon: Coffee,
    suffix: '+',
    description: 'Ciclos de desenvolvimento'
  },
  {
    id: 8,
    name: 'Avaliação Média',
    value: 4.9,
    icon: Star,
    suffix: '/5',
    description: 'Satisfação dos clientes'
  }
];

const techStack = [
  { name: 'Frontend', techs: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript'] },
  { name: 'Backend', techs: ['Node.js', 'Python', 'Java', 'PHP', 'Go'] },
  { name: 'Mobile', techs: ['React Native', 'Flutter', 'iOS', 'Android'] },
  { name: 'Database', techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { name: 'Cloud', techs: ['AWS', 'Google Cloud', 'Azure', 'Digital Ocean'] },
  { name: 'DevOps', techs: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins'] }
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nossos{' '}
            <span className="relative">
              <span className="relative z-10 text-blue-600">números</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-2"></span>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Resultados que demonstram nossa experiência e alcance no mercado de tecnologia
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <dt className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors duration-300">
                  <stat.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {stat.name}
                </p>
              </dt>
              <dd className="mt-4">
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                      suffix={stat.suffix}
                    />
                  )}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {stat.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nossa{' '}
            <span className="relative">
              <span className="relative z-10 text-blue-600">Stack Tecnológica</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-1"></span>
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category) => (
              <div
                key={category.name}
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
          
          <h3 className="text-3xl font-bold text-center mb-12 relative z-10">
            Nossa{' '}
            <span className="text-blue-600">Metodologia</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: '01',
                title: 'Descoberta',
                description: 'Entendemos profundamente suas necessidades e objetivos de negócio'
              },
              {
                step: '02',
                title: 'Planejamento',
                description: 'Definimos a melhor estratégia e arquitetura para seu projeto'
              },
              {
                step: '03',
                title: 'Desenvolvimento',
                description: 'Implementamos sua solução com as melhores práticas do mercado'
              },
              {
                step: '04',
                title: 'Entrega Contínua',
                description: 'Mantemos e evoluímos seu projeto constantemente'
              }
            ].map((phase) => (
              <div
                key={phase.step}
                className="group text-center p-6 rounded-xl hover:bg-blue-50/50 transition-colors duration-300"
              >
                <div className="inline-block mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {phase.step}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {phase.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-12">
            Certificações e{' '}
            <span className="relative">
              <span className="relative z-10 text-blue-600">Parcerias</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-1"></span>
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'AWS Partner',
              'Microsoft Gold',
              'Google Cloud',
              'ISO 27001'
            ].map((cert) => (
              <div
                key={cert}
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <span className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}