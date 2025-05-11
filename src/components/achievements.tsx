function Skill({
  name,
}: Readonly<{
  name: string;
}>) {
	return (
		<div className="flex flex-col p-2 border-2 border-foreground divide-y-2 divide-foreground rounded-lg">
			{name}
		</div>
	)
}

export default function Achievements() {
	return (
		<div id="skills" className="flex flex-col border-2 border-foreground divide-y-2 divide-foreground rounded-lg">
			<h1 className="items-center text-center w-full px-5 py-2 font-bold text-base md:text-lg">Achievement Showcase</h1>
			<div className="flex gap-4 flex-wrap p-10 text-xl">
				<Skill name="GitHub" />
				<Skill name="Node.js" />
				<Skill name="JavaScript" />
				<Skill name="TypeScript" />
				<Skill name="React" />
				<Skill name="Next.js" />
				<Skill name="HTML" />
				<Skill name="CSS" />
				<Skill name="TailwindCSS" />
				<Skill name="React Native" />
				<Skill name="C#" />
				<Skill name="Python" />
				<Skill name="Java" />
				<Skill name="Unity" />
				<Skill name="Godot" />
				<Skill name="Blender" />
			</div>
		</div>
	)
}