import Image from "next/image";
import Link from "next/link";

export default function TopSection() {
  return (
    <main className="flex flex-wrap justify-center items-center md:justify-start sm:gap-10 gap-5">
      <Link
        href="https://www.linkedin.com/in/kasperi-jaakkola/"
        className="hover:scale-105 transition min-w-32"
        rel="noopener noreferrer" target="_blank"
      >
        <Image
          className="border-foreground border-2 rounded-lg"
          src="/bear.png"
          alt="Profile"
          width={200}
          height={200}
        />
      </Link>
      <div className="flex flex-col min-w-[250px] xs:min-w-[400px] flex-1 md:text-start text-center">
        <Link
          href="https://www.linkedin.com/in/kasperi-jaakkola/"
          className="font-bold text-3xl xl:w-fit md:text-5xl lg:text-6xl hover:scale-105 hover:underline hover:uppercase transition"
          rel="noopener noreferrer" target="_blank"
        > Kasperi Jaakkola
        </Link>
        <div className="grid md:grid-cols-[1fr_auto] gap-2 sm:gap-6 items-center mt-4 md:mt-6 max-w-xl">
          <section className="text-sm md:text-base lg:text-lg flex-wrap">
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
      </div>
      <section className="flex flex-col items-center 2xl:items-start self-start gap-5 py-5 2xl:mx-auto w-full 2xl:w-auto">
        <h1 className="font-bold text-2xl md:text-3xl">
          Level <span className="border-foreground text-lg md:text-xl font-light border-2 p-1 rounded-full">10</span>
        </h1>
        <div className="border-2 rounded-lg flex items-center p-2 md:p-5 gap-2 md:gap-4">
          <div className="px-2 text-2xl md:text-5xl">
            3
          </div>
          <div className="flex flex-col pr-2">
            <h1 className="text-md md:text-lg font-bold">Years of webxperience</h1>
            <h2 className="text-sm md:text-base">150 XP</h2>
          </div>
        </div>
        <Link
          className="2xl:place-self-end"
          href="mailto:kasperijaa@gmail.com"
          rel="noopener noreferrer" target="_blank"
        >
          <div className="border-2 rounded-lg flex items-center py-2 px-10 text-lg md:text-2xl hover:scale-105 hover:underline hover:uppercase transition">
            Message
          </div>
        </Link>
        
      </section>
    </main>
  );
}
