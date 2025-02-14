import TopSection from "@/components/top-section";
import RecentActivity from "@/components/recent-activity";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <TopSection/>
      <div>
        <RecentActivity/>
        {/*  */}
      </div>
      <div className="my-20 font-[family-name:var(--font-geist-mono)]">WEBSITE IN PROGRESS, MORE CONTENT COMING SOON</div>
    </div>
  );
}
