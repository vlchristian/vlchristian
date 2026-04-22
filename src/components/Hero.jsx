"use client";

import { BoxesCore } from "./ui/background-boxes";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      <BoxesCore className="absolute top-0 left-0 r-0 w-screen h-full pointer-events-auto opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          VL Christian M. Castroverde
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-white">
          Web Developer | UI/UX Designer
        </p>
      </div>
    </section>
  );
}
