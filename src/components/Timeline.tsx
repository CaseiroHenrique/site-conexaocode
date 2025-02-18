import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Trophy, Building2, Badge, Globe2, X, ArrowRight, ChevronRight } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
  image?: string;
  achievements?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2020',
    title: 'Fundação da Conexão Code',
    description: 'Iniciamos nossa jornada com uma pequena equipe apaixonada por tecnologia e inovação, dedicados ao desenvolvimento de soluções sob medida para pequenos negócios.',
    icon: <Rocket className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Equipe inicial de 1 desenvolvedor',
      'Primeiros protótipos e MVPs',
      'Definição dos processos internos'
    ],
    stats: [
      { label: 'Projetos Iniciados', value: '3' },
      { label: 'Clientes Iniciais', value: '2' },
      { label: 'Equipe', value: '1' }
    ]
  },
  {
    year: '2021',
    title: 'Lançamento do Primeiro Produto',
    description: 'Desenvolvemos e lançamos nosso primeiro produto, validando a proposta de valor e obtendo feedbacks importantes do mercado.',
    icon: <Trophy className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Lançamento de uma solução para gestão de pequenas empresas',
      'Primeiros testes e validação do mercado',
      'Feedbacks construtivos para melhorias contínuas'
    ],
    stats: [
      { label: 'Usuários Ativos', value: '50+' },
      { label: 'Feedbacks Positivos', value: '85%' },
      { label: 'Equipe', value: '1' }
    ]
  },
  {
    year: '2022',
    title: 'Crescimento Orgânico e Parcerias Locais',
    description: 'Através de esforços orgânicos e do boca a boca, ampliamos nossa base de clientes e firmamos parcerias estratégicas com empresas locais.',
    icon: <Building2 className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Parcerias com 3 empresas locais',
      'Melhoria contínua do produto com base em feedbacks'
    ],
    stats: [
      { label: 'Parcerias', value: '3' },
      { label: 'Novos Clientes', value: '10+' },
      { label: 'Equipe', value: '1' }
    ]
  },
  {
    year: '2023',
    title: 'Aprimoramento e Reconhecimento Regional',
    description: 'Investimos em melhorias do produto e processos, conquistando reconhecimento em eventos regionais e reforçando nossa marca no mercado local.',
    icon: <Badge className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80',
    achievements: [
      'Certificação de qualidade em processos internos',
      'Melhorias significativas na experiência do usuário'
    ],
    stats: [
      { label: 'Eventos Participados', value: '2' },
      { label: 'Certificações', value: '1' },
      { label: 'Equipe', value: '1' }
    ]
  }
];

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Nossa História</span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Uma{' '}
            <span className="relative">
              <span className="relative z-10 text-blue-600">Trajetória</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-1"></span>
            </span>
            {' '}de Sucesso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma história de inovação e crescimento constante, marcada pela dedicação e busca contínua por excelência.
          </p>
        </div>

        <div className="relative">
          {/* Timeline central line with gradient and animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div className="w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 animate-pulse"></div>
            </div>
          </div>

          <div className="relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-16 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-full md:w-1/2 px-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Card background with gradient border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                      {/* Year badge */}
                      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                        <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                          {item.year}
                        </div>
                      </div>

                      {/* Icon with gradient background */}
                      <div className="mb-6">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl">
                            {item.icon}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {item.description}
                      </p>

                      {/* Achievement tags with hover effect */}
                      <div className="flex flex-wrap gap-2">
                        {item.achievements?.slice(0, 2).map((achievement, i) => (
                          <span
                            key={i}
                            className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full transition-all duration-300 hover:bg-blue-100"
                          >
                            {achievement}
                          </span>
                        ))}
                        {item.achievements && item.achievements.length > 2 && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-sm bg-gray-50 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={() => setSelectedItem(item)}
                          >
                            +{item.achievements.length - 2} mais
                          </motion.button>
                        )}
                      </div>

                      {/* View details button */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedItem(item)}
                        className="mt-4 flex items-center text-blue-600 font-medium group"
                      >
                        Ver detalhes
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      boxShadow: hoveredIndex === index ? "0 0 20px rgba(37, 99, 235, 0.5)" : "0 0 0 rgba(37, 99, 235, 0)"
                    }}
                    className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 relative"
                  >
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] relative"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal header with image */}
                {selectedItem.image && (
                  <div className="relative h-48">
                    <div className="absolute inset-0">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Modal content */}
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl">
                        {selectedItem.icon}
                      </div>
                    </div>
                    <div>
                      <span className="text-blue-600 font-bold text-lg">{selectedItem.year}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{selectedItem.description}</p>

                  {/* Stats grid */}
                  {selectedItem.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {selectedItem.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl text-center group hover:shadow-lg transition-all duration-300"
                        >
                          <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Achievements list */}
                  {selectedItem.achievements && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Principais Conquistas</h4>
                      <div className="space-y-3">
                        {selectedItem.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center bg-blue-50 p-3 rounded-lg group hover:bg-blue-100 transition-colors"
                          >
                            <ChevronRight className="w-5 h-5 text-blue-500 mr-2 group-hover:translate-x-1 transition-transform" />
                            <span className="text-gray-700">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;