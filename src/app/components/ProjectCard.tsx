'use client';
import { Github, ExternalLink } from 'lucide-react';
import React from 'react';
import './ProjectCard.css';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type ProjectProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  tech: string[];
  github: string;
  demo: string;
  index: number;
};

export default function ProjectCard({ title, description, image, tech, github, demo, index }: ProjectProps) {
  return (
    <div
      className="parent"
      style={{
        animationDelay: `${index * 120}ms`,
        animation: 'fadeInUp 0.6s ease both',
      }}
    >
      <div className="card relative bg-base-100 dark:bg-neutral">
        {/* Logo animé */}
        <div className="logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            <svg viewBox="0 0 29.667 31.69" className="svg" xmlns="http://www.w3.org/2000/svg">
              <path d="..." />
            </svg>
          </span>
        </div>

        <div className="glass"></div>

        {/* Image */}
        

        {/* Contenu */}
        <div className="content px-4 py-2">
          <Image
            src={image}
            alt={title}
            width={320}
            height={200}
            className="rounded-2xl object-cover w-full h-auto"
          />

          <span className="title text-primary text-lg font-bold">{title}</span>
          <p className="descr-text text-sm mt-2">{description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-primary text-white dark:bg-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Liens */}
        <div className="bottom gap-6 ml-4 pb-4 px-4 py-3 flex ">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="social-button">
              <Github className="w-5 h-5 text-white hover:text-[#e3c177]" />
            </button>
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="social-button">
              <ExternalLink className="w-5 h-5 text-white hover:text-[#e3c177]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
