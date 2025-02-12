'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex mx-10 py-10 gap-10 font-bold font-[family-name:var(--font-geist-mono)] ">
      <Link href="#profile" className="text-3xl hover:scale-105 hover:underline hover:uppercase transition">
        profile
      </Link>
      <Link href="#about" className="text-3xl hover:scale-105 hover:underline hover:uppercase transition">
        about
      </Link>
      <Link href="#skills" className="text-3xl hover:scale-105 hover:underline hover:uppercase transition">
        skills
      </Link>
      <Link href="#contact" className="text-3xl hover:scale-105 hover:underline hover:uppercase transition">
        contact
      </Link>
    </nav>
  );
}