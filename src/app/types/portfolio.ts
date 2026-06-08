import type { StaticImageData } from "next/image";

/** Application theme type */
export type Theme = "light" | "dark";

/** Icon names available for skill categories */
export type SkillIconName =
  | "Globe"
  | "Server"
  | "Database"
  | "Smartphone"
  | "Palette"
  | "Code";

/** Skill category with associated technologies */
export interface Skill {
  name: string;
  iconName: SkillIconName;
  techs: string[];
}

/** Project entry for the portfolio */
export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  tech: string[];
  github: string;
  demo: string;
}
