import TopSection from "@/components/top-section";
import RecentActivity from "@/components/recent-activity";
import CommentSection from "@/components/comment-section";
import SideBar from "@/components/side-bar";
import TextBox from "@/components/text-box";
import Achievements from "@/components/achievements";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 xl:gap-10">
      <TopSection/>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col min-w-[250px] lg:min-w-[800px] flex-1 gap-5 lg:gap-10">
          {/* <TextBox/> */}
          <Achievements/>
          <RecentActivity/>
          <CommentSection/>
        </div>
        <SideBar/>
      </div>
    </div>
  );
}
