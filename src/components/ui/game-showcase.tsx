"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface GameShowcaseProps {
  title: string;
  description: string;
  skills: string;
  gifSrc: string;
  imgSrc: string;
  altText: string;
}

export default function GameShowcase({
  title,
  description,
  skills,
  gifSrc,
  imgSrc,
  altText,
}: GameShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = gifSrc;
    img.onload = () => setGifLoaded(true);
  }, [gifSrc]);

  function toggleGif() {
    setIsPlaying((prev) => !prev);
  }

  const shouldShowGif = isPlaying && gifLoaded;

  return (
    <div className="p-5 flex flex-col lg:flex-row gap-5">
      <button onClick={toggleGif} className="w-full lg:w-auto">
        <Image
          className="border-foreground border-2 rounded-sm w-full lg:w-auto hover:scale-105 transition-transform"
          src={shouldShowGif ? gifSrc : imgSrc}
          alt={altText}
          width={400}
          height={225}
          priority
        />
      </button>

      <div className="gap-5 px-2 w-full text-center lg:text-left">
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <p className="text-sm md:text-lg max-w-5xl">{description}</p>
        <div className="justify-self-end text-end mt-5 text-sm md:text-lg">
          {skills}
        </div>
      </div>
    </div>
  );
}
