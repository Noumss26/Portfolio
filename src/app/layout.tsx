import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RALY Andrinomena – Portfolio Développeur Full Stack",
  description:
    "Portfolio de RALY Andrinomena Vatsy Jeiel, développeur Full Stack passionné. Découvrez mes projets en React, Next.js, Spring Boot, Flutter et plus encore.",
  keywords: [
    "développeur full stack",
    "portfolio",
    "React",
    "Next.js",
    "Spring Boot",
    "Flutter",
    "RALY Andrinomena",
  ],
  authors: [{ name: "RALY Andrinomena Vatsy Jeiel" }],
  openGraph: {
    title: "RALY Andrinomena – Portfolio Développeur Full Stack",
    description:
      "Découvrez mes projets et compétences en développement web et mobile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
