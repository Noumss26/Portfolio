"use client";
import React from "react";
import SplineClient from "@/app/ui/SplineClient";

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#0c1711]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 bg-[#a1ae66] bg-clip-text text-transparent">
          À Propos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Spline 3D Component */}
          <div className="lg:col-span-4 xl:col-span-5 order-2 lg:order-1">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none">
              <SplineClient />
            </div>
          </div>

          {/* Content */}
          <div className="apropos lg:col-span-8 xl:col-span-7 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-1 lg:order-2">
            <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Développeur Full Stack, actuellement étudiant en Master 1 à
              l&apos;École Nationale de l&apos;Informatique, avec une expérience
              professionnelle dans la conception et la réalisation
              d&apos;applications web et mobiles modernes.
            </p>

            <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              J&apos;ai eu l&apos;opportunité d&apos;effectuer des stages au sein
              d&apos;entreprises durant ma deuxième et ma troisième année
              professionnelle, ce qui m&apos;a permis de confronter mes
              compétences aux exigences du monde réel et de renforcer ma
              capacité à travailler en équipe sur des projets concrets.
            </p>

            <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Passionné par les nouvelles technologies et l&apos;innovation, je
              me distingue par une soif constante d&apos;apprentissage et une
              volonté d&apos;améliorer continuellement mes compétences dans le
              domaine du développement.
            </p>

            <p className="text-apropos text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              J&apos;ai à cœur de transformer des idées complexes en solutions
              simples, élégantes et efficaces, en m&apos;appuyant sur les
              meilleures pratiques du développement moderne et en plaçant
              l&apos;expérience utilisateur au centre de chaque projet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-4 md:pt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
