import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  Code2,
  Smartphone,
  Cloud,
  Users,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center px-3 py-2">
              <Code2
                className={`h-8 w-8 transition-colors duration-300 ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                }`}
              />
              <span
                className={`ml-2 text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Conexão Code
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => navigate('/codnexus')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              CodeNexus
            </button>
            <button
              onClick={() => navigate('/')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </button>
            <a
              href="#contact"
              className={`relative group px-5 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <span className="relative">Contato</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute left-0 right-0 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="mx-4 mb-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="block w-full text-left px-6 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => navigate('/codnexus')}
                className="block w-full text-left px-6 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                CodeNexus
              </button>
              <button
                onClick={() => navigate('/')}
                className="block w-full text-left px-6 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Home
              </button>
              <div className="p-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-6 py-3 text-center bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
