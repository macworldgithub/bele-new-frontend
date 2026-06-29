import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interactive Demos | Bele.ai",
};

export default function DemoPage() {
  return (
    <main className="w-full h-screen bg-[#020b18] overflow-hidden relative">
      {/* 
        Invisible overlay over the iframe's native top-left back button.
        This captures the click and navigates back to our main page.
      */}
      <Link 
        href="/" 
        className="absolute top-0 left-0 w-40 h-32 z-[9999] block cursor-pointer"
        title="Back to Home"
      >
        <span className="sr-only">Back to Home</span>
      </Link>

      <div className="w-full h-full">
        <iframe
          src="https://beleaiagcy-hwqu9muv.manus.space/demos"
          className="w-full h-full border-none"
          title="Interactive Demos"
          allowFullScreen
        />
      </div>
    </main>
  );
}
