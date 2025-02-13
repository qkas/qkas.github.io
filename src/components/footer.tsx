"use client";
import Link from "next/link";
import { Copyright } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center text-xs sm:text-sm md:text-base font-[family-name:var(--font-geist-mono)] mt-20 px-10 py-8">
      <Copyright fontSize="inherit" className="mr-1" />
      <span>
        2025,{" "}
        <Link href="https://www.linkedin.com/in/kasperi-jaakkola/" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
          Kasperi Jaakkola
        </Link>
        . Made with{" "}
        <Link href="https://nextjs.org/" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
          Next.js
        </Link>
      </span>
    </footer>
  );
}
