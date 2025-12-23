import Image from "next/image";
import Link from "next/link";

export default function TopSection() {
  return (
    <main id="profile" className="flex flex-wrap justify-center items-center md:justify-start sm:gap-10 gap-5">
      <Link
        href="https://www.linkedin.com/in/kasperi-jaakkola/"
        className="hover:scale-105 transition min-w-32"
        rel="noopener noreferrer" target="_blank"
      >
        <Image
          className="border-foreground border-2 rounded-sm"
          src="/bear.png"
          alt="Profile"
          width={200}
          height={200}
        />
      </Link>
      <div className="flex flex-col min-w-[250px] xs:min-w-[400px] gap-2 md:gap-4 max-w-xl flex-1 text-center sm:text-start">
        <Link
          href="https://www.linkedin.com/in/kasperi-jaakkola/"
          className="font-bold text-3xl md:text-4xl xl:text-5xl hover:scale-105 hover:underline hover:uppercase transition"
          rel="noopener noreferrer" target="_blank"
        > Kasperi Jaakkola
        </Link>
        <section className="text-sm md:text-base xl:text-lg flex-wrap">
          Hey, welcome to my profile. I'm a software developer from {" "}
          <Link
            href="https://www.google.com/search?q=turku+finland"
            className="hover:underline hover:uppercase"
            rel="noopener noreferrer" target="_blank"
          > Turku, Finland
          </Link>, passionate about creating games and applications for others to enjoy.
          This is my personal website where I'll be sharing my projects.
        </section>
      </div>
      <section className="flex flex-col items-center xl:items-start self-start gap-2 xl:ml-auto w-full xl:w-auto">
        <h1 className="text-xl flex gap-2 items-center md:text-2xl lg:text-3xl">
          <span className="font-bold">Level</span>
          <span className="text-lg md:text-xl border-2 w-10 h-10 flex items-center justify-center rounded-full border-[--primary]">
            10
          </span>
        </h1>
        <div className="border-2 border-foreground rounded-sm flex items-center p-2 md:p-5 gap-2 md:gap-4">
          <div className="px-2 text-2xl md:text-3xl lg:text-4xl">
            3
          </div>
          <div className="flex flex-col pr-2">
            <h1 className="text-base md:text-md lg:text-lg font-bold">Years of webxperience</h1>
            <h2 className="text-xs md:text-sm lg:text-base">150 XP</h2>
          </div>
        </div>
        <Link
          className="xl:place-self-end"
          href="mailto:kasperijaa@gmail.com"
          rel="noopener noreferrer" target="_blank"
        >
          <div className="border-2 border-foreground rounded-sm flex items-center py-2 px-10 text-base md:text-lg lg:text-xl hover:scale-105 hover:underline hover:uppercase transition">
            Message
          </div>
        </Link>
      </section>
    </main>
  );
}
