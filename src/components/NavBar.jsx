"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Certification", href: "#certification" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">&lt;/&gt; vlchristian</div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-500 hover:underline transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-foreground"></span>
              <span className="block w-6 h-0.5 bg-foreground"></span>
              <span className="block w-6 h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background] px-6 py-4 space-y-3 shadow-md">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block hover:text-blue-500 hover:underline transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}