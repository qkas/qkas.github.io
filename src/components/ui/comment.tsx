"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface CommentProps {
  username: string;
  comment: ReactNode;
  profilePicSrc: string;
  datePosted: string;
}

export default function Comment({
  username,
  comment,
  profilePicSrc,
  datePosted,
}: CommentProps) {
  return (
    <div className="p-5 flex flex-row gap-2 lg:gap-4">
      <div>
        <Image
          className="border-foreground border-2 rounded-lg w-16 lg:w-24 hover:scale-105 transition-transform"
          src={profilePicSrc}
          alt={"Profile picture of the commenting user"}
          width={24}
          height={24}
          priority
        />
      </div>
      <div className="gap-5 px-2 w-full text-left">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-3xl font-bold">{username}</h1>
          <h2 className="text-base md:text-lg text-gray-400">{datePosted}</h2>
        </div>
        <p className="text-sm md:text-lg max-w-5xl">{comment}</p>
      </div>
    </div>
  );
}
