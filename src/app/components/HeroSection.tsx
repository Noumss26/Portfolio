"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ColourfulText } from "@/app/ui/ColourfulText";
import profil from "@/app/image/profil.png";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen pt-16 sm:pt-20 md:pt-24 z-0">
      <section
        id="accueil"
        className="flex-1 flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="absolute bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000" />
        </div>

        <div className="w-full">
          <div className="text-center z-10 max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 px-4 sm:px-6 md:px-8">
              <h1 className="name-portfolio text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#e3c177] font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-center sm:text-left">
                <ColourfulText text="RALY Andrinomena Vatsy Jeiel" />
              </h1>
              <p className="text-p-menu text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
                Passionné par la création d&apos;expériences numériques
                innovantes avec des technologies modernes
              </p>
            </div>

            <div className="navige-button flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <button
                onClick={() => onNavigate("projets")}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-[#e3c177] backdrop-blur-sm border-gray-600 rounded-lg font-semibold hover:border-gray-600 hover:bg-[#e3c177] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/15 text-sm sm:text-base"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-[#e3c177] backdrop-blur-sm border-gray-600 rounded-lg font-semibold hover:border-gray-600 hover:bg-[#e3c177] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/15 text-sm sm:text-base"
              >
                Me contacter
              </button>
              <button
                onClick={() =>
                  window.open("/documents/Raly_CV.pdf", "_blank")
                }
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-[#e3c177] backdrop-blur-sm border-gray-600 rounded-lg font-semibold hover:border-gray-600 hover:bg-[#e3c177] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/15 text-sm sm:text-base"
              >
                Télécharger mon CV
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Noumss26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/andrinomena-vatsy-jeïel-raly-53b875386"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:nomenajeiel@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" />
      </section>

      <section className="flex-1 lg:flex-initial lg:w-1/3 flex items-center justify-center p-4 sm:p-6">
        <div className="relative">
          <img
            src={profil.src}
            alt="Photo de profil de RALY Andrinomena Vatsy Jeiel"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-[#e3c177]/30"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e3c177]/20 to-transparent" />
        </div>
      </section>
    </div>
  );
}
