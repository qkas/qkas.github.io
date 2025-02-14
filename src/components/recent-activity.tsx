"use client"; // This tells Next.js to treat this as a client component

import { useState } from "react";
import Image from "next/image";

export default function RecentActivity() {
  const [isPlaying, setIsPlaying] = useState(true);

  function toggleGif() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <div className="flex flex-col justify-start border-2 rounded-lg font-[family-name:var(--font-geist-mono)]">
      <div className="flex justify-between items-center border-b-2 p-5 gap-10 font-bold text-base md:text-lg">
        <span>Recent Activity</span>
        <span>4 noteworthy projects past 6 months</span>
      </div>
      {/* Change layout to flex-col on small screens, flex-row on medium+ screens */}
      <div className="p-5 flex flex-col md:flex-row gap-5">
        {/* GIF on its own row for small screens */}
        <button onClick={toggleGif} className="w-full md:w-auto">
          <Image
            className="border-foreground border-2 rounded-lg w-full md:w-auto"
            src={isPlaying ? "/dungeon.gif" : "/dungeon.png"}
            alt="Dungeon deathmatch gameplay"
            width={400}
            height={225}
          />
        </button>
        {/* Text content */}
        <div className="gap-5 px-2 w-full text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-bold">Dungeon Deathmatch</h1>
          <p className="text-sm md:text-lg max-w-5xl">
            A multiplayer retro shooter inspired by games like Counter Strike 1.6 and Doom.
            Currently working on missing animations and broken ragdoll physics.
          </p>
          <div className="flex justify-between mt-5 text-sm md:text-lg"> {/*  */}
            <div className="font-bold">
              Current progress <span className="px-2 font-light flex-nowrap">{"[ 85% ]"}</span>
            </div>
            <p className="">Networking, Matchmaking, UI Menus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
