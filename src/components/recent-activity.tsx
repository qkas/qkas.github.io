"use client"; // This tells Next.js to treat this as a client component

import { useState } from "react";
import Image from "next/image";

export default function RecentActivity() {
  const [is1Playing, setIs1Playing] = useState(true);
  const [is2Playing, setIs2Playing] = useState(true);

  function toggle1Gif() {
    setIs1Playing((prev) => !prev);
  }

  function toggle2Gif() {
    setIs2Playing((prev) => !prev);
  }

  return (
    <div className="flex flex-col justify-start border-2 rounded-lg font-[family-name:var(--font-geist-mono)]">
      <div className="flex justify-between items-center border-b-2 p-5 gap-10 font-bold text-base md:text-lg">
        <span>Recent Activity</span>
        <span>4 noteworthy projects past 6 months</span>
      </div>
      <div className="p-5 flex flex-col md:flex-row gap-5">
        <button onClick={toggle1Gif} className="w-full md:w-auto">
          <Image
            className="border-foreground border-2 rounded-lg w-full md:w-auto"
            src={is1Playing ? "/dungeon.gif" : "/dungeon.png"}
            alt="Dungeon deathmatch gameplay"
            width={400}
            height={225}
          />
        </button>
        <div className="gap-5 px-2 w-full text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-bold">Dungeon Deathmatch</h1>
          <p className="text-sm md:text-lg max-w-5xl">
            A multiplayer retro shooter made with Godot, inspired by games like Counter Strike 1.6 and Doom.
            Currently working on missing animations and broken ragdoll physics.
          </p>
          <div className="flex justify-between items-center text-center mt-5 text-sm md:text-lg">
            <div>
              <span className="font-bold block">Current progress</span>
              <span className="font-light">{"[ 85% ]"}</span>
            </div>
            <p className="">Godot, Networking, UI menus</p>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col md:flex-row gap-5">
        <button onClick={toggle2Gif} className="w-full md:w-auto">
          <Image
            className="border-foreground border-2 rounded-lg w-full md:w-auto"
            src={is2Playing ? "/vr-sampling.gif" : "/vr-sampling.png"}
            alt="VR Sampling Equiptment gameplay"
            width={400}
            height={225}
          />
        </button>
        <div className="gap-5 px-2 w-full text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-bold">VR Sampling Equipment</h1>
          <p className="text-sm md:text-lg max-w-5xl">
            A VR sampling equipment identification game made in Unity for Biomedical students.
            Developed as a part of the Capstone project, finished and installed on the biomedical labs' computers.
          </p>
          <div className="flex justify-between items-center text-center mt-5 text-sm md:text-lg">
            <div>
              <span className="font-bold block">Current progress</span>
              <span className="font-light">{"[ 100% ]"}</span>
            </div>
            <p className="">Unity, VR, team collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
