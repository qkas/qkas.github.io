import GameShowcase from "@/components/ui/game-showcase"

export default function RecentActivity() {
  return (
    <div id="projects" className="flex flex-col justify-start border-2 border-foreground divide-y-2 divide-foreground rounded-lg">
      <div className="flex justify-between items-center px-5 py-2 gap-10 font-bold text-base md:text-lg">
        <span>Recent Activity</span>
        <span>4+ projects past 12 months</span>
      </div>
      <GameShowcase
        title="Dungeon Deathmatch Game"
        description="A multiplayer retro shooter made with Godot, inspired by games like Counter Strike 1.6 and Doom. Currently working 
          on missing animations. Next up I'm planning on adding procedural map generation. I've loved making new features and playtesting
          them with my friends. Note: The GIF is a slightly outdated gameplay clip."
        skills="Godot, networking, inverse kinematics"
        gifSrc="/dungeon.gif"
        imgSrc="/dungeon.png"
        altText="Dungeon deathmatch gameplay"
      />
      <GameShowcase
        title="VR Sampling Equipment Game"
        description="A VR sampling equipment identification game for an innovative and hands-on learning experience for Biomedical students.
          Worked as the main game designer and Unity developer together with an awesome team of nice people. Completed in two months as a 
          Capstone project and delivered the game to the client."
        skills="Unity, VR, team collaboration"
        gifSrc="/vr-sampling.gif"
        imgSrc="/vr-sampling.png"
        altText="VR Sampling Equipment gameplay"
      />
      <GameShowcase
        title="Obenseuer Card Game System"
        description="A reusable and expandable card game system in Unity, integrated to the game Obenseuer as part of an 8 week internship.
          The game includes two games; Shittypants (China Hand/Paskahousu) and Crosseven (Sevens/Ristiseiska), both playable for in-game money
          as part of the upcoming gambling update."
        skills="Unity, C# OOP, game architecture"
        gifSrc="cardgames.gif"
        imgSrc="cardgames.png"
        altText="Card games gameplay"
      />
      <GameShowcase
        title="Web Development Projects"
        description="Recently I've been working on multiple web projects, mostly using Next.js and Supabase with Tailwind CSS. This portfolio
          page is also one of them. The others are two micro SaaS projects called EcoBit and Arvokas, which i've been developing for experience.
          I have also been learning intensively about DevOps and infrastructure."
        skills="Next.js, TypeScript, DevOps, SaaS"
        gifSrc="/in-progress.gif"
        imgSrc="/in-progress.png"
        altText="Gears spinning"
      />
    </div>
  );
}