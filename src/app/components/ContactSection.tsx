"use client";
import React, { useState, useCallback } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { EMAIL_ADDRESS } from "@/app/lib/data";
import Toast from "@/app/components/Toast";

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      navigator.clipboard
        .writeText(EMAIL_ADDRESS)
        .then(() => {
          setShowToast(true);

          // Open Gmail after a short delay
          setTimeout(() => {
            window.open(
              `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`,
              "_blank"
            );
          }, 2500);
        })
        .catch((err) => {
          console.error("Erreur lors de la copie:", err);
        });
    },
    []
  );

  const handleCloseToast = useCallback(() => {
    setShowToast(false);
  }, []);

  return (
    <section
      id="contact"
      className="footer py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      <Toast
        message="Adresse e-mail copiée !"
        isVisible={showToast}
        onClose={handleCloseToast}
      />

      <div className="max-w-7xl mx-auto text-center z-5 relative flex flex-col items-center">
        <h2 className="fotter-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 mb-1 sm:mb-2 text-[#a1ae66] bg-[#a1ae66] bg-clip-text text-transparent text-center">
          Travaillons Ensemble
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl px-2">
          Vous avez un projet ou une idée ? Discutons de la façon dont nous
          pouvons créer quelque chose d&apos;impactant ensemble.
        </p>

        {/* Contact cards */}
        <div className="Cartes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full max-w-6xl">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleEmailClick}
            className="group p-4 sm:p-5 md:p-6 backdrop-blur-md bg-white/5 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-[#e3c177]/60 transition-all duration-300 hover:scale-105 cursor-pointer block"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e3c177] mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
              Email
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              {EMAIL_ADDRESS}
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

        {/* CTA button */}
        <div className="flex justify-center mb-6 sm:mb-8 w-full">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-[#e3c177] font-medium sm:font-semibold text-sm sm:text-base rounded-lg backdrop-blur-md text-white hover:bg-[#e3c177] hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/15 w-full max-w-xs sm:max-w-sm md:w-auto">
            Commencer un projet
          </button>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-px bg-gray-400 mb-4 sm:mb-6" />

        <p className="text-center text-xs sm:text-sm md:text-base text-gray-300 px-2">
          © 2025 Noumss Portfolio – Tous droits réservés
        </p>
      </div>
    </section>
  );
}
