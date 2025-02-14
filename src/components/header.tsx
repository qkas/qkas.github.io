'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex flex-wrap md:justify-normal justify-center text-lg sm:text-2xl md:text-3xl py-5 sm:py-10 gap-4 sm:gap-6 md:gap-10 font-bold font-[family-name:var(--font-geist-mono)] ">
      <Link href="#profile" className="hover:scale-105 hover:underline hover:uppercase transition">
        profile
      </Link>
      <Link href="#about" className="hover:scale-105 hover:underline hover:uppercase transition">
        about
      </Link>
      <Link href="#skills" className="hover:scale-105 hover:underline hover:uppercase transition">
        skills
      </Link>
      <Link href="#contact" className="hover:scale-105 hover:underline hover:uppercase transition">
        contact
      </Link>
    </nav>
  );
}