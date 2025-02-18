import React, { useEffect, useRef, useState } from 'react';
import {
    ChevronRight,
    Code2,
    Smartphone,
    Globe,
    Database,
    Cloud,
    Users,
    MessageSquare,
    CheckCircle2,
    ArrowRight,
    Laptop,
    Braces,
    Server,
    Mail,
    Clock,
    HeadphonesIcon,
    Menu,
    X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import TechProcess from '../components/TechProcess';
import Timeline from '../components/Timeline';

function App() {
    const servicesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const services = [
        {
            icon: Laptop,
            title: 'Sistemas Web',
            description: 'Desenvolvimento de aplicações web modernas, responsivas e escaláveis com as últimas tecnologias.',
            features: ['Single Page Applications', 'Progressive Web Apps', 'Microsserviços', 'APIs RESTful']
        },
        {
            icon: Smartphone,
            title: 'Apps Mobile',
            description: 'Criação de aplicativos nativos e multiplataforma para iOS e Android com experiência excepcional.',
            features: ['React Native', 'iOS Nativo', 'Android Nativo', 'Flutter']
        },
        {
            icon: Server,
            title: 'Sistemas Empresariais',
            description: 'Soluções corporativas sob medida para otimizar processos e aumentar a produtividade.',
            features: ['ERP', 'CRM', 'Business Intelligence', 'Automação']
        },
        {
            icon: Cloud,
            title: 'Cloud & DevOps',
            description: 'Implementação e gestão de infraestrutura em nuvem com práticas modernas de DevOps.',
            features: ['AWS', 'Azure', 'Docker', 'Kubernetes']
        },
        {
            icon: Braces,
            title: 'APIs & Integrações',
            description: 'Desenvolvimento de APIs robustas e integração com sistemas existentes.',
            features: ['REST', 'GraphQL', 'WebSockets', 'Microservices']
        },
        {
            icon: Users,
            title: 'Consultoria Tech',
            description: 'Assessoria especializada em tecnologia para impulsionar sua transformação digital.',
            features: ['Arquitetura', 'Performance', 'Segurança', 'Escalabilidade']
        }
    ];


    return (
        <div className="min-h-screen bg-white">
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <div className="flex items-center group">
                                <div className="relative">
                                    <div className={`relative flex items-center px-4 py-2 rounded-lg ${isScrolled ? 'bg-white/0' : 'bg-white/0'
                                        } transition-all duration-300`}>
                                        <Code2 className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-white'
                                            }`} />
                                        <span className={`ml-2 text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                                            }`}>
                                            Conexão Code
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-2">
                            {['Sobre', 'Serviços'].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (item === 'Sobre') scrollToSection(aboutRef);
                                        else if (item === 'Serviços') scrollToSection(servicesRef);
                                    }}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${isScrolled
                                        ? 'text-gray-600 hover:text-blue-600'
                                        : 'text-white/90 hover:text-white'
                                        }`}
                                >
                                    <span className="relative z-10">{item}</span>
                                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 -z-0 ${isScrolled
                                        ? 'group-hover:bg-blue-50'
                                        : 'group-hover:bg-white/10'
                                        }`}></div>
                                </button>
                            ))}
                            <a
                                href="#contact"
                                className="relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                                <div className={`relative px-5 py-2 rounded-lg transition-all duration-300 ${isScrolled
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-white text-blue-600 hover:bg-blue-50'
                                    }`}>
                                    Contato
                                </div>
                            </a>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative group p-2"
                            >
                                <div className={`absolute inset-0 rounded-lg transition-colors duration-300 ${isScrolled ? 'group-hover:bg-gray-100' : 'group-hover:bg-white/10'
                                    }`}></div>
                                {isMenuOpen
                                    ? <X className={`relative h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'
                                        }`} />
                                    : <Menu className={`relative h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'
                                        }`} />
                                }
                            </button>
                        </div>
                    </div>

                    <div className={`md:hidden absolute left-0 right-0 px-4 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}>
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl"></div>
                            <div className="relative bg-white rounded-xl shadow-xl border border-gray-100/50 backdrop-blur-sm overflow-hidden">
                                <div className="divide-y divide-gray-100">
                                    {['Sobre',  'Serviços'].map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (item === 'Sobre') scrollToSection(aboutRef);
                                                else if (item === 'Serviços') scrollToSection(servicesRef);
                                                setIsMenuOpen(false);
                                            }}
                                            className="block w-full text-left px-6 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                    <div className="p-4">
                                        <a
                                            href="#contact"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="relative group block"
                                        >
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                                            <div className="relative w-full px-6 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                                Contato
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="min-h-screen relative flex items-center justify-center overflow-hidden">

                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-code-running-42924-large.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/95 to-black"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60"></div>
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-100">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-3xl blur-3xl"></div>
                            <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
                            <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-indigo-500/5 rounded-full filter blur-3xl animate-pulse delay-700"></div>

                            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="relative z-10 mb-8">
                                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg px-4 py-2 rounded-full mb-6 border border-white/10">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                                            <span className="text-blue-200 text-sm font-medium">Inovação em Desenvolvimento</span>
                                        </div>
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                                            Transformando ideias em
                                            <span className="relative mt-2 block">
                                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 animate-gradient-x">
                                                    realidade digital
                                                </span>
                                                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 opacity-50 blur-sm"></span>
                                            </span>
                                        </h1>
                                        <p className="text-xl text-blue-100/80 mb-12 leading-relaxed max-w-xl">
                                            Desenvolvemos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio e transformam a experiência dos seus usuários.
                                        </p>

                                        <div className="flex flex-wrap gap-6">
                                            <a
                                                href="#contact"
                                                className="group relative inline-flex items-center"
                                            >
                                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
                                                <div className="relative inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg group-hover:bg-blue-50 transition-all duration-200 shadow-2xl">
                                                    <span className="font-semibold">Iniciar Projeto</span>
                                                    <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </a>
                                            <a
                                                href="#services"
                                                className="group relative inline-flex items-center"
                                            >
                                                <div className="absolute -inset-px bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-200"></div>
                                                <div className="relative inline-flex items-center bg-white/5 text-white border border-white/10 px-8 py-4 rounded-lg group-hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                                                    <span className="font-semibold">Explorar Soluções</span>
                                                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Stats */}
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 to-blue-400/5 rounded-3xl blur-2xl"></div>
                                    <div className="relative bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                                        <div className="grid grid-cols-2 gap-8">
                                            {[
                                                { value: '100+', label: 'Projetos Entregues', icon: CheckCircle2 },
                                                { value: '95%', label: 'Clientes Satisfeitos', icon: Users },
                                                { value: '4+', label: 'Anos de Experiência', icon: Clock },
                                                { value: '24/7', label: 'Suporte Técnico', icon: HeadphonesIcon }
                                            ].map((stat, index) => (
                                                <div key={index} className="group p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                                                    <stat.icon className="h-8 w-8 text-blue-400 mb-4" />
                                                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-blue-200/70 text-sm">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2 group-hover:border-white/40 transition-all duration-300">
                            <div className="w-1 h-3 bg-white/40 rounded-full group-hover:bg-white/60 transition-all duration-300 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </header>

            <section ref={servicesRef} id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="animate-on-scroll opacity-0 transition-all duration-1000">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                                Nossas{' '}
                                <span className="relative">
                                    <span className="relative z-10 text-blue-600">Soluções</span>
                                    <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-1"></span>
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Oferecemos um conjunto completo de serviços de desenvolvimento para transformar suas ideias em realidade
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="p-8">
                                        <div className="relative mb-6">
                                            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                            <div className="relative bg-gradient-to-br from-blue-50 to-white w-16 h-16 rounded-2xl flex items-center justify-center">
                                                <service.icon className="h-8 w-8 text-blue-600" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <div className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-600">
                                                    <ArrowRight className="h-4 w-4 text-blue-500" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Portfolio />
            <Timeline />

            <Stats />
            <TechProcess />
            <Testimonials />

            <section ref={aboutRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="animate-on-scroll opacity-0 transition-all duration-1000">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative order-2 lg:order-1">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl"></div>
                                <div className="relative">
                                    <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <img
                                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                                            alt="Equipe Conexão Code"
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center shadow-lg">
                                        <Code2 className="w-12 h-12 text-blue-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="relative">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                        Por que escolher a{' '}
                                        <span className="relative">
                                            <span className="relative z-10 text-blue-600">Conexão Code</span>
                                            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 transform -rotate-2"></span>
                                        </span>
                                        ?
                                    </h2>
                                    <div className="space-y-8">
                                        {[
                                            {
                                                title: 'Expertise Técnica',
                                                description: 'Equipe altamente especializada com ampla experiência em desenvolvimento de software.'
                                            },
                                            {
                                                title: 'Metodologia Ágil',
                                                description: 'Processos ágeis que garantem entregas rápidas e resultados consistentes.'
                                            },
                                            {
                                                title: 'Suporte Contínuo',
                                                description: 'Acompanhamento próximo e suporte dedicado em todas as etapas do projeto.'
                                            },
                                            {
                                                title: 'Tecnologias Modernas',
                                                description: 'Utilizamos as mais recentes tecnologias para criar soluções inovadoras e escaláveis.'
                                            }
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                                            >
                                                <div className="rounded-lg bg-blue-50 p-2 group-hover:bg-blue-100 transition-colors duration-300">
                                                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl text-gray-900 font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="relative py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCA2MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

                {/* Content Container */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-on-scroll opacity-0 transition-all duration-1000">
                        {/* Main Content */}
                        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.07] to-transparent"></div>
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/30 rounded-full filter blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl"></div>

                            <div className="relative">
                                {/* Header */}
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                        Vamos criar algo
                                        <span className="relative ml-2">
                                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">
                                                extraordinário
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 to-blue-100 opacity-50 blur-sm"></span>
                                        </span>
                                    </h2>
                                    <p className="text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
                                        Transforme suas ideias em realidade com nossa consultoria gratuita e expertise em desenvolvimento
                                    </p>
                                </div>

                                {/* Contact Options */}
                                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                    {/* WhatsApp Contact */}
                                    <a
                                        href="https://wa.me/19987272715?text=Olá, gostaria de saber mais sobre os serviços de desenvolvimento oferecidos pela Conexão Code. Poderia me ajudar?"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative block"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                                        <div className="relative flex items-center justify-between bg-white p-6 rounded-xl transition-all duration-200 hover:shadow-lg">
                                            <div className="flex items-center gap-4">
                                                <MessageSquare className="h-8 w-8 text-emerald-500" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                                                    <p className="text-sm text-gray-600">Resposta em até 30 minutos</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-emerald-500 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>

                                    {/* Email Contact */}
                                    <a
                                        href="mailto:contato@conexaocode.com"
                                        className="group relative block"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                                        <div className="relative flex items-center justify-between bg-white p-6 rounded-xl transition-all duration-200 hover:shadow-lg">
                                            <div className="flex items-center gap-4">
                                                <Mail className="h-8 w-8 text-blue-500" />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                                    <p className="text-sm text-gray-600">Resposta em até 24 horas</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-blue-500 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
