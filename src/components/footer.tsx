"use client";
import Link from "next/link";
import { Copyright } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="flex justify-center text-center items-center text-xs sm:text-sm md:text-base mt-20 px-10 py-8">
      <span>
        <span className="justify-start">
          <Copyright fontSize="inherit" className="mr-1" />
          2025,{" "}
        </span>
        <Link href="https://www.linkedin.com/in/kasperi-jaakkola/" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
          Kasperi Jaakkola
        </Link>
        . Created with{" "}
        <Link href="https://nextjs.org/" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
          Next.js
        </Link>
        {" "}and{" "}
        <Link href="https://tailwindcss.com/" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
          Tailwind CSS
        </Link>
      </span>
    </footer>
  );
}
