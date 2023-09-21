import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import Link from "next/link";

const credit = "<SammyLeths />";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <div className="text-center flex justify-center items-center text-sm text-white py-10">
        A project by &nbsp;
        <Link
          className="font-bold hover:text-blue-500"
          href="https://www.sammyleths.com"
          target="_blank"
        >
          {credit}
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
