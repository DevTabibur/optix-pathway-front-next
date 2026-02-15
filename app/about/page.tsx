import { AboutCTA } from "@/components/AboutCTA";
import { AboutDifferentiators } from "@/components/AboutDifferentiators";
import { AboutHero } from "@/components/AboutHero";
import { AboutLegal } from "@/components/AboutLegal";
import { AboutMission } from "@/components/AboutMission";
import { AboutWhoWeSupport } from "@/components/AboutWhoWeSupport";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* About Hero Section */}
      <AboutHero />

      {/* Our Mission & Approach Section */}
      <AboutMission />

      {/* Who We Support Section */}
      <AboutWhoWeSupport />

      {/* What Makes Us Different Section */}
      <AboutDifferentiators />

      {/* Legal & Company Information Section */}
      <AboutLegal />

      {/* Call to Action Section */}
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
