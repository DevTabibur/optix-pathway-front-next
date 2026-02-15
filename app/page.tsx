import { BlogSection } from "@/components/BlogSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { HeroSection } from "@/components/HeroSection";
import { IntakeAnnouncement } from "@/components/IntakeAnnouncement";
import { PopularCoursesSection } from "@/components/PopularCoursesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StudentCategoriesSection } from "@/components/StudentCategoriesSection";
import { TrustCredibilitySection } from "@/components/TrustCredibilitySection";
import { UniversitiesByPathSection } from "@/components/UniversitiesByPathSection";
import { UpcomingIntakesSection } from "@/components/UpcomingIntakesSection";
import { ValuePillarsSection } from "@/components/ValuePillarsSection";
import { WhyOptixSection } from "@/components/WhyOptixSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <HeroSection />

      {/* Intake Announcement */}
      <IntakeAnnouncement />

      {/* Student Categories Section */}
      <StudentCategoriesSection />

      {/* Core Value Pillars Section */}
      <ValuePillarsSection />

      {/* Why Optix Pathway Section */}
      <WhyOptixSection />

      {/* How Your Journey Works Section */}
      <ProcessSection />

      {/* Upcoming Intakes Section */}
      <UpcomingIntakesSection />

      {/* Our Services Section */}
      <ServicesSection />

      {/* Popular Courses Section */}
      <PopularCoursesSection />

      {/* Universities by Path Section */}
      <UniversitiesByPathSection />

      {/* Trust & Credibility Section */}
      <TrustCredibilitySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Final Call to Action Section */}
      <FinalCTASection />
    </div>
  );
}
