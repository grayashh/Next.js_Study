import Link from "next/link";
import { RiAlarmWarningFill } from "react-icons/ri";

export default function PageNotFound() {
  return (
    <section className="bg-grey">
      <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
        <RiAlarmWarningFill
          size={60}
          className="hover:drop-shadow-glow animate-flicker text-red-500"
    />
        <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
        <Link className="mt-4 md:text-lg" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
