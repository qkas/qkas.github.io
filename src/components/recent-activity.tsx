import GameShowcase from "@/components/ui/game-showcase"

export default function RecentActivity() {
  return (
    <div className="flex flex-col justify-start border-2 divide-y-2 divide-foreground rounded-lg font-[family-name:var(--font-geist-mono)]">
      <div className="flex justify-between items-center p-5 gap-10 font-bold text-base md:text-lg">
        <span>Recent Activity</span>
        <span>4 noteworthy projects past 6 months</span>
      </div>
      <GameShowcase
        title="Dungeon Deathmatch"
        description="A multiplayer retro shooter made with Godot, inspired by games like Counter Strike 1.6 and Doom. Currently working 
          on missing animations and broken ragdoll physics but after that I want to move on to the next project. I've loved making new
          features and playtesting them with my friends."
        progress={85}
        skills="Godot, Networking, UI menus"
        gifSrc="/dungeon.gif"
        imgSrc="/dungeon.png"
        altText="Dungeon deathmatch gameplay"
      />
      <GameShowcase
        title="VR Sampling Equipment"
        description="A VR sampling equipment identification game made in Unity for Biomedical students. Worked as the main Unity developer
          together with an awesome team of nice people. Completed in two months as a Capstone project and delivered the game to the client."
        progress={100}
        skills="Unity, VR, team collaboration"
        gifSrc="/vr-sampling.gif"
        imgSrc="/vr-sampling.png"
        altText="VR Sampling Equipment gameplay"
      />
    </div>
  );
}