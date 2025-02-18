import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import Testimonial1 from '../imagens/Carlos Almeida.jpeg';
import Testimonial3 from '../imagens/Fernanda Sampaio.png';
import Testimonial2 from '../imagens/Mariana Costa.png';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Almeida',
    role: 'CEO',
    content: 'O site ficou excelente! O design responsivo ficou perfeito em todos os dispositivos e a equipe foi muito atenciosa.',
    rating: 4,
    location: 'Campinas, SP',
    image: Testimonial1
  },
  {
    id: '2',
    name: 'Mariana Costa',
    role: 'Empreendedora',
    content: 'Profissionalismo define essa equipe! Meu e-commerce foi entregue com todas as funcionalidades que eu queria e mais.',
    rating: 5,
    location: 'Valinhos, SP',
    image: Testimonial2
  },
  {
    id: '3',
    name: 'Fernanda Sampaio',
    role: 'Diretora de Marketing',
    content: 'Equipe criativa e dedicada. Eles entenderam exatamente o que minha marca precisava e entregaram um projeto incrível.',
    rating: 5,
    location: 'Indaiatuba, SP',
    image: Testimonial3
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(current => (current + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Quote className="w-12 h-12 text-blue-100" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Feedback dos nossos{' '}
            <span className="text-blue-600 relative">
              clientes
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 transform -skew-x-12"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Descubra o que nossos clientes dizem sobre nossas soluções e atendimento
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-6 transition-transform group-hover:rotate-8"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className={`h-[500px] w-full object-cover transition-all duration-500 transform ${
                  isAnimating ? 'scale-110 blur-sm' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-lg font-medium">{testimonials[activeIndex].name}</p>
                  <p className="text-sm opacity-80">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`rounded-xl bg-white p-6 shadow-lg transition-all duration-500 cursor-pointer hover:shadow-xl ${
                  idx === activeIndex
                    ? 'scale-105 ring-2 ring-blue-500 bg-blue-50'
                    : 'opacity-60 hover:opacity-80'
                }`}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(idx);
                    setIsAnimating(false);
                  }, 300);
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-200 rounded-full transform -rotate-6"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative h-14 w-14 rounded-full object-cover ring-2 ring-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">{testimonial.content}</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        idx === activeIndex
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-yellow-300 text-yellow-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}