"use client";

import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [copied, setCopied] = useState(false);
  const email = "kasperijaa@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
    });
  };

  return (
    <div className="p-5 flex flex-col justify-start border-2 border-foreground rounded-lg h-fit w-full 2xl:w-fit">
      <div className="text-[--primary] font-bold mb-10 text-lg lg:text-xl xl:text-2xl">
        Currently Online
      </div>
      <div className="text-base lg:text-lg mb-5 xl:text-xl">
        Connect with me in:
      </div>
      <div className="flex flex-row 2xl:flex-col gap-5">
        <Link
          className="font-bold text-base lg:text-lg xl:text-xl hover:scale-105 w-fit hover:underline hover:uppercase transition"
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
            className="font-bold text-base lg:text-lg xl:text-xl hover:scale-105 hover:underline hover:uppercase transition"
          >
            {copied ? "Email Copied" : "Email"}
          </button>
        </div>
      </div>
    </div>
  );
}
