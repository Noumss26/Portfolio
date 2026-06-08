"use client";
import React, { useEffect, useRef } from "react";
import {
  Globe,
  Server,
  Database,
  Smartphone,
  Palette,
  Code,
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { Theme, SkillIconName } from "@/app/types/portfolio";
import { skills } from "@/app/lib/data";
import { CardSpotlight } from "@/app/ui/card-spotlight";

/** Maps icon name strings to their Lucide React components */
const iconMap: Record<SkillIconName, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
};

interface SkillsSectionProps {
  theme: Theme;
}

export default function SkillsSection({ theme }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate skill cards
      const skillCards = gsap.utils.toArray<HTMLElement>(".card-skill");
      skillCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
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
              toggleActions: "play none none reverse",
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
            },
          }
        );
      });

      // Animate section title
      gsap.fromTo(
        ".skills-title",
        { opacity: 0, y: 30 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="competences" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="skills-title text-4xl font-bold text-center mb-16 bg-[#a1ae66] bg-clip-text text-transparent">
          Compétences
        </h2>
        <div className="skils-cont grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <CardSpotlight
              key={skill.name}
              className="card-skill group relative transition-all duration-300 hover:transform hover:scale-105"
              theme={theme}
            >
              <div className="flex items-center mb-6">
                <div className="icon_skils bg-[#e3bd6b] w-12 h-12 flex items-center justify-center rounded-full mr-4 group-hover:bg-[#e3bd6b] transition-colors duration-300">
                  {iconMap[skill.iconName]}
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
  );
}
