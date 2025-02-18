import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

type LayoutProps = {
  headerTitle: string;
  headerSubtitle: string;
  headerButtonText: string;
  headerButtonLink: string;
  children: React.ReactNode;
};

const Layout = ({
  headerTitle,
  headerSubtitle,
  headerButtonText,
  headerButtonLink,
  children
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">

      <header className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {headerTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {headerSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={headerButtonLink}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              {headerButtonText}
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center bg-blue-500/20 text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-blue-500/30 transition-colors backdrop-blur-sm"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Conteúdo específico da página */}
      {children}
    </div>
  );
};

export default Layout;
