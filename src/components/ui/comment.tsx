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
          className="border-foreground border-2 rounded-sm w-16 md:w-20 xl:w-24"
          src={profilePicSrc}
          alt={"Profile picture of the commenting user"}
          width={24}
          height={24}
          priority
        />
      </div>
      <div className="gap-5 px-2 w-full text-left">
        <div className="flex items-center gap-2 md:gap-4">
          <h1 className="text-lg md:text-2xl font-bold">{username}</h1>
          <h2 className="text-xs md:text-lg text-gray-400">{datePosted}</h2>
        </div>
        <p className="text-sm md:text-base max-w-5xl">{comment}</p>
      </div>
    </div>
  );
}
