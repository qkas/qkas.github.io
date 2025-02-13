import Header from "@/components/header";
import TopSection from "@/components/top-section";

export default function Home() {
  return (
    <div>
      <Header/>
      <TopSection/>
      <div className="my-20 font-[family-name:var(--font-geist-mono)]">WEBSITE IN PROGRESS, MORE CONTENT COMING SOON</div>
      <div className="my-96">{/* temporary space for footer */}</div>
    </div>
  );
}
