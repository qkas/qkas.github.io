import Comment from "@/components/ui/comment"
import Link from "next/link";

export default function CommentSection() {
  return (
    <div id="comments" className="flex flex-col justify-start border-2 border-foreground divide-y-2 divide-foreground rounded-sm">
      <div className="flex justify-between items-center px-5 py-2 gap-10 font-bold text-base md:text-lg">
        <span>Comments</span>
        <span>2 comments</span>
      </div>
      <div>
        <Comment
          username="qkas"
          profilePicSrc="/bear.png"
          comment={
            <>
              Feel free to{" "}
              <Link href="mailto:kasperijaa@gmail.com" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
                reach out to me
              </Link>
              {" "}for work! I'm actively looking to join interesting projects!
            </>
          }
          datePosted="21 Dec, 2025 @ 12:46pm"
        />
        <Comment
          username="qkas"
          profilePicSrc="/bear.png"
          comment={
            <>
              Also, check out my{" "}
              <Link href="https://github.com/qkas" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
                GitHub
              </Link>
              {" "}page at{" "}
              <Link href="https://github.com/qkas" className="hover:underline hover:uppercase" rel="noopener noreferrer" target="_blank">
                https://github.com/qkas
              </Link>
              .
            </>
          }
          datePosted="21 Dec, 2025 @ 12:51pm"
        />
      </div>
    </div>
  );
}