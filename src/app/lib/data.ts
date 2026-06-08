import type { Skill, Project } from "@/app/types/portfolio";

import paie from "@/app/image/gestion de paye.png";
import portfolio from "@/app/image/portfolio.png";
import RO from "@/app/image/RO.png";
import AI from "@/app/image/AI.png";
import MS from "@/app/image/MS.png";
import DeliveriesApp from "@/app/image/DeliveriesApp.png";

/** Navigation items displayed in the navbar */
export const NAV_ITEMS = [
  "accueil",
  "a-propos",
  "competences",
  "projets",
  "contact",
] as const;

/** Contact email address */
export const EMAIL_ADDRESS = "nomenajeiel@gmail.com";

/** Skill categories with associated technologies */
export const skills: Skill[] = [
  {
    name: "Frontend",
    iconName: "Globe",
    techs: ["React", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    name: "Backend",
    iconName: "Server",
    techs: ["Node.js", "Python", "Express", "Spring boot"],
  },
  {
    name: "Database",
    iconName: "Database",
    techs: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
  },
  {
    name: "Mobile",
    iconName: "Smartphone",
    techs: ["React Native", "Flutter"],
  },
  {
    name: "Design",
    iconName: "Palette",
    techs: ["Tailwind", "CSS", "Framer Motion", "Daisi ui", "Aceternity"],
  },
  {
    name: "Conception",
    iconName: "Code",
    techs: ["MERISE", "UML"],
  },
  {
    name: "Cloud & DevOps",
    iconName: "Code",
    techs: [
      "Docker",
      "Kubernetes",
      "GCP",
      "Jenkins",
      "SonarQube",
      "Nexus"
  ],
},
];

/** Portfolio projects list */
export const projects: Project[] = [
  {
    title: "Deployement d'une application web avec Docker, kubernetes dans GCP",
    description:
      "Application web de gestion de suivie de livraison de colis avec docker, kubernetes dans GCP, avec des fonctionnalités de suivi en temps réel, de gestion des livraisons et de communication entre les clients et les livreurs.",
    image: DeliveriesApp,
    tech: ["ReactJS", "MongoDB", "NodeJS", "Express", "Docker", "Kubernetes", "GCP"],
    github: "https://github.com/Noumss26/Livraison-project.git",
    demo: "https://deliverpro.duckdns.org/login",
  },
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
    title: "Mon portfolio",
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
    title: "Création d'un modèle d'IA de détection de besoins",
    description:
      "Application web de détection des besoins fonctionnels et non fonctionnels à partir de conversations vidéo et audio, en utilisant Whisper, Pyannote et BERT.",
    image: AI,
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Whisper",
      "Pyannote",
      "BERT",
      "FastAPI",
    ],
    github: "https://github.com/Noumss26/ProjetM1-Front",
    demo: "#",
  },
  {
    title: "Application mobile de recueil de chansons",
    description:
      "Application mobile de recueil de chansons avec des fonctionnalités de lecture, de recherche de chansons et de notation des clés de chaque chanson, avec la musique appropriée associée.",
    image: MS,
    tech: ["Flutter", "Dart", "Java", "SQLite"],
    github: "https://github.com/Noumss26/Fihirana.git",
    demo: "#",
  },
];
