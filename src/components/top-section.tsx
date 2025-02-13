import Image from "next/image";
import Link from "next/link";

export default function TopSection() {
  return (
    <main className="px-10 md:px-20 md:mt-10 font-[family-name:var(--font-geist-mono)]">
      <div className="flex">
      <Image
        className="border-foreground border-2"
        src="/bear.png"
        alt="Profile"
        objectFit="contain"
        width={200}
        height={200}
        />
      <div className="sm:mx-10 mx-5">
        <Link href="#contact" className="font-bold text-4xl md:text-5xl lg:text-6xl hover:scale-105 hover:underline hover:uppercase transition">
          Kasperi Jaakkola
        </Link>
        <section className="text-sm md:text-base lg:text-lg mt-4 md:mt-6 flex-wrap max-w-lg">
          Hey, welcome to my profile. I'm a software developer from {" "}
          <Link
            href="https://www.google.com/search?q=turku+finland"
            className="hover:underline hover:uppercase"
            rel="noopener noreferrer" target="_blank"
            >
            Turku, Finland
          </Link>, passionate about creating games and applications for others to enjoy.
          This is my personal website where I'll be sharing my projects.
        </section>
      </div>
      {/* <div className="ml-20 mt-4">
        <h1 className="font-bold text-3xl">Level <span className="border-foreground text-xl font-light border-2 p-1 text-md rounded-full">10</span></h1>
        <p className="mt-5">Still learning...</p>
        </div> */}
      </div>
      <div className="my-96">{/* temporary space for footer */}</div>
    </main>
  )
}