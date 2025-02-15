'use client';

import Link from 'next/link';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export default function Header() {
  return (
    <nav className="flex flex-wrap md:justify-normal justify-center text-lg sm:text-2xl md:text-3xl py-5 sm:py-10 gap-4 sm:gap-6 md:gap-10 font-bold">
      <Link href="#" onClick={() => scrollToTop()} className="hover:scale-105 hover:underline hover:uppercase transition">
        profile
      </Link>
      <Link href="#" onClick={() => scrollToSection("skills")} className="hover:scale-105 hover:underline hover:uppercase transition">
        skills
      </Link>
      <Link href="#" onClick={() => scrollToSection("projects")} className="hover:scale-105 hover:underline hover:uppercase transition">
        projects
      </Link>
    </nav>
  );
}