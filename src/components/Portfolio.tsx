import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { ExternalLink, Trophy, Users, BarChart } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Nexly from '../imagens/site7.png';
import ListaVip from '../imagens/listavip.png';

const projects = [
  {
    id: 1,
    title: 'Nexly Members',
    image: Nexly,
    description: 'Plataforma completa de cursos, conectando você ao seu aluno.',
    impact: 'Mais de 5.000 alunos impactados',
    achievement: 'Crescimento de 300% em 6 meses',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 2,
    title: 'ListaVip',
    image: ListaVip,
    description: 'Sistema completo com controle total de ingressos, participantes e análise preditiva de resultados',
    impact: 'Mais de 10 mil ingressos vendidos',
    achievement: 'ROI de 200% para clientes',
    tags: ['React', 'TypeScript', 'Mysql', 'Node.js'],
    link: '#'
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Trophy className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">Cases de Sucesso</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Nossos{' '}
            <span className="relative">
              <span className="relative z-10 text-blue-600">principais projetos</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Conheça dois dos nossos maiores cases de sucesso que transformaram o mercado e geraram resultados extraordinários
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="w-[320px] sm:w-[500px]">
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Case de Sucesso
                    </div>
                  </div>
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2 mb-4 flex-wrap">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm font-medium backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{project.impact}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{project.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}