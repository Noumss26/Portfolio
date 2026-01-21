"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";
import * as FROM from "three";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import VantaTopologyBackground from "./ui/VantaTopologyBackground";
import ProjectCard from "./components/ProjectCard";
import EmailPopup from "./components/emailpopup";
// @ts-ignore
import { BackgroundLines } from "./ui/background-lines";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import SplineClient from "./ui/SplineClient";
import { CardSpotlight } from "@/app/ui/card-spotlight";
import { Observer } from "gsap/Observer";
import { ColourfulText } from "./ui/ColourfulText";
import paie from "./image/gestion de paye.png";
import portfolio from "./image/portfolio.png";
import RO from "./image/RO.png";
import AI from "./image/AI.png";
import MS from "./image/MS.png";
import profil from "./image/profil.png";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(Observer);

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("accueil");
  const [isScrolled, setIsScrolled] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const emailAddress = "nomenajeiel@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      techs: ["React", "Next.js", "Vue.js", "TypeScript"],
    },
    {
      name: "Backend",
      icon: <Server className="w-6 h-6" />,
      techs: ["Node.js", "Python", "Express", "Spring boot"],
    },
    {
      name: "Database",
      icon: <Database className="w-6 h-6" />,
      techs: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      techs: ["React Native", "Flutter"],
    },
    {
      name: "Design",
      icon: <Palette className="w-6 h-6" />,
      techs: ["Tailwind", "CSS", "Framer Motion", "Daisi ui", "Aceternity"],
    },
    {
      name: "Conception",
      icon: <Code className="w-6 h-6" />,
      techs: ["MERISE", "UML"],
    },
    {
      name: "CI/CD",
      icon: <Code className="w-6 h-6" />,
      techs: ["Jenkins", "SonarQube", "Nexus"],
    },
  ];

  const projects = [
    {
      title: "Gestion de paie de salaire",
      description:
        "Plateforme de gestion complète avec Next.js et springBoot avec dashboard admin et MySql comme SGBD.",
      image: paie,
      tech: ["Next.js", "TypeScript", "SpringBoot", "MySQL", "JPA"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mon porfolio",
      description:
        "Portfolio personnel mettant en valeur mes projets, avec une interface moderne et des animations fluides.",
      image: portfolio,
      tech: ["NextJs", "Tailwind", "framer Motion", "css"],
      github: "https://github.com/Noumss26/Portfolio",
      demo: "#",
    },
    {
      title: "Optimisation Transport RO",
      description:
        "Application web de recherche opérationnelle d'optimisation de transport avec les méthodes Coin Nord-Ouest et Balas-Hammer, incluant visualisation dynamique et graphe interactif.",
      image: RO,
      tech: ["React", "TypeScript", "Next.js", "Algorithmique", "Graphes"],
      github: "#",
      demo: "#",
    },
    {
      title: "Creation D' un modele d ' IA de detection de besoins",
      description:
        "Application web de détection des besoins fonctionnels et non fonctionnels à partir de conversations vidéo et audio, en utilisant Whisper, Pyannote et BERT.",
      image: AI,
      tech: ["React", "TypeScript", "Next.js", "Whisper", "Pyannote", "BERT", "FastAPI"],
      github: "https://github.com/Noumss26/ProjetM1-Front",
      demo: "#",
    },
    {
      title: "Application mobile de receuil de chansons",
      description:
        "Application mobile de recueil de chansons avec des fonctionnalités de lecture, de recherche de chansons et de notation des clés de chaque chanson, avec la musique appropriée associée.",
      image: MS,
      tech: ["Flutter", "Dart", "Java", "SQLite"],
      github: "#",
      demo: "#",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (typeof args[0] === "string" && args[0].includes("Missing property")) {
        return;
      }
      originalConsoleError(...args);
    };
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  useEffect(() => {
    // Animation pour la section compétences
    const skillCards = gsap.utils.toArray(".card-skill");

    skillCards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 20%",
            toggleActions: "play none none reverse", // Animation reverse quand on remonte
            markers: false, // Supprimez cette ligne en production
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out",
              });
            },
            onLeave: () => {
              gsap.to(card, {
                opacity: 0.3,
                y: -20,
                scale: 0.95,
                duration: 0.6,
                ease: "power2.in",
              });
            },
            onEnterBack: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.05,
                ease: "power2.out",
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 0.6,
                ease: "power2.in",
              });
            },
          },
        }
      );
    });

    // Animation pour le titre de la section
    gsap.fromTo(
      ".skills-title",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-title",
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation pour les projets
    const projectCards = gsap.utils.toArray(".project-card");

    projectCards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          rotateY: 10,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      data-theme={theme}
      id="your-element-selector"
      className={poppins.className}
    >
      <nav
        className={`fixed top-0 w-full z-10 transition-all duration-300 ${
          isScrolled ? " backdrop-blur-sm  " : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="title-portfolio text-lg sm:text-xl md:text-2xl font-bold truncate">
              Noumss's Portfolio
            </div>
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {["accueil", "a-propos", "competences", "projets", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`btn-nav capitalize transition-colors duration-200 font-semibold text-sm lg:text-base ${
                      activeSection === item
                        ? "text-[#e3c177] text-lg font-bold"
                        : "#e3c177"
                    }`}
                  >
                    {item.replace("-", " ")}
                  </button>
                )
              )}
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  value="dark"
                  className="theme-controller"
                  onChange={toggleTheme}
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
            <div className="md:hidden flex items-center">
              <label className="hamburger">
                <input
                  type="checkbox"
                  checked={isMenuOpen}
                  onChange={() => setIsMenuOpen(!isMenuOpen)}
                />
                <svg viewBox="0 0 32 32" className="w-6 h-6">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  />
                  <path className="line" d="M7 16 27 16" />
                </svg>
              </label>
            </div>
          </div>
        </div>
        {/* Menu mobile avec transition */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mobile-nav bg-[#0c1711]/95 backdrop-blur-sm border-t border-gray-700/50">
            <div className="px-4 sm:px-6 py-4">
              <div className="flex flex-col space-y-3">
                {[
                  "accueil",
                  "a-propos",
                  "competences",
                  "projets",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false);
                    }}
                    className={`capitalize font-semibold text-left py-2 px-2 rounded transition-colors ${
                      activeSection === item
                        ? "text-[#e3c177] text-lg font-bold bg-[#e3c177]/10"
                        : "hover:text-[#e3c177] hover:bg-white/5"
                    }`}
                  >
                    {item.replace("-", " ")}
                  </button>
                ))}
                <div className="pt-2 border-t border-gray-700/50">
                  <label className="toggle text-base-content">
                    <input
                      type="checkbox"
                      value="dark"
                      className="theme-controller"
                      onChange={toggleTheme}
                    />

                    <svg
                      aria-label="sun"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                      </g>
                    </svg>

                    <svg
                      aria-label="moon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                      </g>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay pour fermer le menu mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <VantaTopologyBackground theme={theme}>
        <div className="flex flex-col lg:flex-row min-h-screen pt-16 sm:pt-20 md:pt-24 z-0">
          <section
            id="accueil"
            className="flex-1 flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
          >
            <div className="absolute bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="absolute">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
            </div>

            <div className="w-full">
              <div className="text-center z-10 max-w-4xl mx-auto">
                <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 px-4 sm:px-6 md:px-8">
                  <h1 className="name-portfolio text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#e3c177] font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-center sm:text-left">
                    <ColourfulText text="RALY Andrinomena Vatsy Jeiel" />
                  </h1>
                  <p className="text-p-menu text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
                    Passionné par la création d'expériences numériques
                    innovantes avec des technologies modernes
                  </p>
                </div>

                <div className="navige-button flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
                  <button
                    onClick={() => scrollToSection("projets")}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-[#e3c177] backdrop-blur-sm border-gray-600 rounded-lg font-semibold hover:border-gray-600 hover:bg-[#e3c177] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/15 text-sm sm:text-base"
                  >
                    Voir mes projets
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-[#e3c177] backdrop-blur-sm border-gray-600 rounded-lg font-semibold hover:border-gray-600 hover:bg-[#e3c177] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/15 text-sm sm:text-base"
                  >
                    Me contacter
                  </button>
                  <button
                    onClick={() => window.open('/documents/Raly_CV.pdf', '_blank')}
                   className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-[#e3c177] backdrop-blur-sm border-gray-600 rounded-lg font-semibold hover:border-gray-600 hover:bg-[#e3c177] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/15 text-sm sm:text-base">
                    Télécharger mon CV
                  </button>
                </div>

                <div className="flex justify-center space-x-6">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
          </section>

          <section className="flex-1 lg:flex-initial lg:w-1/3 flex items-center justify-center p-4 sm:p-6">
            <div className="relative">
              <img
                src={profil.src}
                alt="Photo profil"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-[#e3c177]/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e3c177]/20 to-transparent"></div>
            </div>
          </section>
        </div>
      </VantaTopologyBackground>
      <BackgroundLines className="relative z-0" svgOptions={{ duration: 10 }}>
        {/* About Section */}
        <section
          id="a-propos"
          className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#0c1711]"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 bg-[#a1ae66] bg-clip-text text-transparent">
              À Propos
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
              {/* Spline Component */}
              <div className="lg:col-span-4 xl:col-span-5 order-2 lg:order-1">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none">
                  <SplineClient />
                </div>
              </div>

              {/* Content */}
              <div className="apropos lg:col-span-8 xl:col-span-7 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-1 lg:order-2">
                <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Développeur Full Stack, actuellement étudiant en Master 1 à
                  l'École Nationale de l'Informatique, avec une expérience
                  professionnelle dans la conception et la réalisation
                  d'applications web et mobiles modernes.
                </p>

                <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  J'ai eu l'opportunité d'effectuer des stages au sein
                  d'entreprises durant ma deuxième et ma troisième année
                  professionnelle, ce qui m'a permis de confronter mes
                  compétences aux exigences du monde réel et de renforcer ma
                  capacité à travailler en équipe sur des projets concrets.
                </p>

                <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Passionné par les nouvelles technologies et l'innovation, je
                  me distingue par une soif constante d'apprentissage et une
                  volonté d'améliorer continuellement mes compétences dans le
                  domaine du développement.
                </p>

                <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  J'ai à cœur de transformer des idées complexes en solutions
                  simples, élégantes et efficaces, en m'appuyant sur les
                  meilleures pratiques du développement moderne et en plaçant
                  l'expérience utilisateur au centre de chaque projet.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-4 md:pt-6">
                  {/* Ajoutez ici d'autres éléments si nécessaire */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      <BackgroundBeamsWithCollision className="relative ">
        <section id="competences" className="py-20 px-6 " ref={skillsRef}>
          <div className="max-w-6xl mx-auto">
            <h2 className="skills-title text-4xl font-bold text-center mb-16 bg-[#a1ae66] bg-clip-text text-transparent">
              Compétences
            </h2>
            <div className="skils-cont grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <CardSpotlight
                  key={skill.name}
                  className="card-skill group relative transition-all duration-300 hover:transform hover:scale-105"
                  theme={theme}
                >
                  <div className="flex items-center mb-6">
                    <div className="icon_skils bg-[#e3bd6b] w-12 h-12 flex items-center justify-center rounded-full mr-4 group-hover:bg-[#e3bd6b] transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="Skils-name text-xl font-semibold">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="Skils-tech flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <span
                        key={tech}
                        className="Skils-tech-name px-3 py-1 bg-[#a1ae66] text-sm rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardSpotlight>
              ))}
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projets" className="projet py-20 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-[#a1ae66] bg-clip-text text-transparent">
              Projets Récents
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-items-center">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
      <section className="contener-waves relative overflow-hidden  md:min-h-[20px] lg:min-h-[30px]">
        {/* Vagues animées */}
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </section>
      <section
        id="contact"
        className="footer py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      >
        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto text-center z-5 relative flex flex-col items-center">
          <h2 className="fotter-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 mb-1 sm:mb-2 text-[#a1ae66] bg-[#a1ae66] bg-clip-text text-transparent text-center">
            Travaillons Ensemble
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl px-2">
            Vous avez un projet ou une idée ? Discutons de la façon dont nous
            pouvons créer quelque chose d'impactant ensemble.
          </p>

          {/* Cartes */}
          <div className="Cartes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full max-w-6xl">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                // Copier l'email dans le presse-papiers
                navigator.clipboard
                  .writeText(emailAddress)
                  .then(() => {
                    // Afficher une notification temporaire
                    const notification = document.createElement("div");
                    notification.textContent = "Adresse e-mail copiée !";
                    notification.className =
                      "fixed top-20 right-5 bg-[#e3c177]/90 text-white px-6 py-3 rounded-lg font-medium z-[9999] animate-[slideIn_0.3s_ease] shadow-lg";
                    document.body.appendChild(notification);

                    // Retirer la notification après 2 secondes
                    setTimeout(() => {
                      notification.className =
                        "fixed top-20 right-5 bg-[#e3c177]/90 text-white px-6 py-3 rounded-lg font-medium z-[9999] animate-[slideOut_0.3s_ease] shadow-lg";
                      setTimeout(() => notification.remove(), 300);
                    }, 2000);

                    // Ouvrir Gmail après un court délai
                    setTimeout(() => {
                      window.open(
                        `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`,
                        "_blank"
                      );
                    }, 3000);
                  })
                  .catch((err) => {
                    console.error("Erreur lors de la copie:", err);
                  });
              }}
              className="group p-4 sm:p-5 md:p-6 backdrop-blur-md bg-white/5 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-[#e3c177]/60 transition-all duration-300 hover:scale-105 cursor-pointer block"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e3c177] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                Email
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                {emailAddress}
              </p>
            </a>
            <a
              href="https://linkedin.com/in/andrinomena-vatsy-jeïel-raly-53b875386"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-5 md:p-6 backdrop-blur-md bg-white/5 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-[#e3c177]/60 transition-all duration-300 hover:scale-105 cursor-pointer block"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e3c177] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                LinkedIn
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                @Nomena jeïel RALY
              </p>
            </a>
            <a
              href="https://github.com/Noumss26"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-5 md:p-6 backdrop-blur-md bg-white/5 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-[#e3c177]/60 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1 cursor-pointer block"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e3c177] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                GitHub
              </h3>
              <p className="text-sm sm:text-base text-gray-200">@Noumss26</p>
            </a>
          </div>

          {/* CTA bouton - centré */}
          <div className="flex justify-center mb-6 sm:mb-8 w-full">
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-[#e3c177] font-medium sm:font-semibold text-sm sm:text-base rounded-lg backdrop-blur-md text-white hover:bg-[#e3c177] hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/15 w-full max-w-xs sm:max-w-sm md:w-auto">
              Commencer un projet
            </button>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-px bg-gray-400 mb-4 sm:mb-6"></div>

          <p className="text-center text-xs sm:text-sm md:text-base text-gray-300 px-2">
            © 2025 Noumss Portfolio – Tous droits réservés
          </p>
        </div>
      </section>
    </div>
  );
}
