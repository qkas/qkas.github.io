"use client";

import { useState } from "react";
import Image from "next/image";

interface GameShowcaseProps {
  title: string;
  description: string;
  progress: number;
  skills: string;
  gifSrc: string;
  imgSrc: string;
  altText: string;
}

export default function GameShowcase({ title, description, progress, skills, gifSrc, imgSrc, altText }: GameShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  function toggleGif() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <div className="p-5 flex flex-col md:flex-row gap-5">
      <button onClick={toggleGif} className="w-full md:w-auto">
        <Image
          className="border-foreground border-2 rounded-lg w-full md:w-auto"
          src={isPlaying ? gifSrc : imgSrc}
          alt={altText}
          width={400}
          height={225}
        />
      </button>
      <div className="gap-5 px-2 w-full text-center md:text-left">
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <p className="text-sm md:text-lg max-w-5xl">{description}</p>
        <div className="flex justify-between items-center text-center mt-5 text-sm md:text-lg">
          <div>
            <span className="font-bold block">Current progress</span>
            <span className="font-light">{`[ ${progress}% ]`}</span>
          </div>
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
}