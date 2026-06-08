"use client";
import React from "react";

/** Animated wave divider between the projects and contact sections */
export default function WaveDivider() {
  return (
    <section className="contener-waves relative overflow-hidden md:min-h-[20px] lg:min-h-[30px]">
      <div className="wave" id="wave1" />
      <div className="wave" id="wave2" />
      <div className="wave" id="wave3" />
      <div className="wave" id="wave4" />
    </section>
  );
}
