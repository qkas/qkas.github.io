"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SideBar() {
  const [copied, setCopied] = useState(false);
  const email = "kasperijaa@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
    });
  };

  return (
    <main className="p-5 flex flex-col border-2 border-foreground rounded-lg h-fit w-full 2xl:w-fit">
      <div className="text-[--primary] font-bold mb-5 text-lg lg:text-xl xl:text-2xl">
        Currently Online
      </div>
      <section className="flex flex-row flex-wrap 2xl:flex-nowrap 2xl:flex-col gap-10 2xl:gap-5">
        <div className="text-base lg:text-lg xl:text-xl">
          <div className="flex mb-1 gap-4">
            <h1>Badges</h1>
            <h2 className="font-thin">1</h2>
          </div>
          <div className="flex gap-4">
            <Image
              className="max-w-20 rounded-sm"
              src="/fgj25.png"
              alt="Finnish Game Jam 2025 badge"
              width={400}
              height={225}
            />
          </div>
        </div>
        <div className="text-base lg:text-lg xl:text-xl">
          <div className="flex gap-4">
            <h1>Websites</h1>
            <h2 className="font-thin">11</h2>
          </div>
        </div>
        <div className="text-base lg:text-lg xl:text-xl">
          <div className="flex gap-4">
            <h1>Games</h1>
            <h2 className="font-thin">5</h2>
          </div>
        </div>
        <div className="text-base lg:text-lg xl:text-xl">
          <div className="flex gap-4">
            <h1>Mods</h1>
            <h2 className="font-thin">4</h2>
          </div>
        </div>
        <div>
          <div className="text-base lg:text-lg xl:text-xl font-bold">
            Contact me:
          </div>
          <div className="flex flex-row 2xl:flex-col gap-5 2xl:gap-0">
            <Link
              className="text-base lg:text-lg xl:text-xl hover:scale-105 w-fit hover:font-bold hover:underline hover:uppercase transition"
              href="https://www.linkedin.com/in/kasperi-jaakkola"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
            <div>
              <button
                onClick={copyEmail}
                onMouseLeave={() => setCopied(false)}
                className="text-base lg:text-lg xl:text-xl hover:scale-105 hover:font-bold hover:underline hover:uppercase transition"
              >
                {copied ? "Email Copied" : "Email"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
