"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "@/app/lib/data";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");
      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: 10 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projets"
      className="projet py-20 px-6 text-center"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-[#a1ae66] bg-clip-text text-transparent">
          Projets Récents
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-items-center">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card">
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
