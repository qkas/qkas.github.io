import TopSection from "@/components/top-section";
import RecentActivity from "@/components/recent-activity";
import SideBar from "@/components/side-bar";
import TextBox from "@/components/text-box";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <TopSection/>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col min-w-[250px] lg:min-w-[800px] flex-1 gap-5 lg:gap-10">
          <TextBox/>
          <RecentActivity/>
        </div>
        <SideBar/>
      </div>
      <div className="my-20 font-[family-name:var(--font-geist-mono)]">WEBSITE IN PROGRESS, MORE CONTENT COMING SOON</div>
    </div>
  );
}
