'use client';
import Link from "next/link";
import { Copyright } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="flex items-center font-[family-name:var(--font-geist-mono)] mt-20 p-8">
      <Copyright fontSize="inherit" className="mr-1" />
      <span>2025, Kasperi Jaakkola.
        Made with <Link href="https://nextjs.org/" className="hover:underline">Next.js</Link>
      </span>
    </footer>
  )
}