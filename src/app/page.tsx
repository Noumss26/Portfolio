"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Poppins } from "next/font/google";
import type { Theme } from "@/app/types/portfolio";

import VantaTopologyBackground from "@/app/ui/VantaTopologyBackground";
import { BackgroundLines } from "@/app/ui/background-lines";
import { BackgroundBeamsWithCollision } from "@/app/ui/background-beams-with-collision";

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";
import WaveDivider from "@/app/components/WaveDivider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSection, setActiveSection] = useState("accueil");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  // Suppress harmless Spline runtime "Missing property" error
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (typeof args[0] === "string" && args[0].includes("Missing property")) {
        return;
      }
      originalConsoleError.apply(console, args);
    };
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev: Theme) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  }, []);

  return (
    <div
      data-theme={theme}
      id="your-element-selector"
      className={poppins.className}
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavigate={scrollToSection}
      />

      <VantaTopologyBackground theme={theme}>
        <HeroSection onNavigate={scrollToSection} />
      </VantaTopologyBackground>

      <BackgroundLines className="relative z-0" svgOptions={{ duration: 10 }}>
        <AboutSection />
      </BackgroundLines>

      <BackgroundBeamsWithCollision className="relative">
        <SkillsSection theme={theme} />
        <ProjectsSection />
      </BackgroundBeamsWithCollision>

      <WaveDivider />
      <ContactSection />
    </div>
  );
}
