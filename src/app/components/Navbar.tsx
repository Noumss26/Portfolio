"use client";
import React, { useState } from "react";
import type { Theme } from "@/app/types/portfolio";
import { NAV_ITEMS } from "@/app/lib/data";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  activeSection: string;
  isScrolled: boolean;
  onNavigate: (sectionId: string) => void;
}

/** Sun icon SVG for the theme toggle */
function SunIcon() {
  return (
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
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </g>
    </svg>
  );
}

/** Moon icon SVG for the theme toggle */
function MoonIcon() {
  return (
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
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </g>
    </svg>
  );
}

/** Theme toggle checkbox with sun/moon icons */
function ThemeToggle({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  return (
    <label className="toggle text-base-content">
      <input
        type="checkbox"
        value="dark"
        className="theme-controller"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <SunIcon />
      <MoonIcon />
    </label>
  );
}

export default function Navbar({
  theme,
  toggleTheme,
  activeSection,
  isScrolled,
  onNavigate,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="title-portfolio text-lg sm:text-xl md:text-2xl font-bold truncate">
              Noumss&apos;s Portfolio
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`btn-nav capitalize transition-colors duration-200 font-semibold text-sm lg:text-base ${
                    activeSection === item
                      ? "text-[#e3c177] text-lg font-bold"
                      : ""
                  }`}
                >
                  {item.replace("-", " ")}
                </button>
              ))}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            {/* Mobile hamburger */}
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

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mobile-nav bg-[#0c1711]/95 backdrop-blur-sm border-t border-gray-700/50">
            <div className="px-4 sm:px-6 py-4">
              <div className="flex flex-col space-y-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigate(item)}
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
                  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
