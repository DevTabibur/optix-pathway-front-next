import { EnglishLanguageSupport } from "@/components/EnglishLanguageSupport";
import { InternationalConcernsSection } from "@/components/InternationalConcernsSection";
import { InternationalFAQSection } from "@/components/InternationalFAQSection";
import { InternationalFinalCTA } from "@/components/InternationalFinalCTA";
import { InternationalIntakesSection } from "@/components/InternationalIntakesSection";
import { InternationalOnboardingSection } from "@/components/InternationalOnboardingSection";
import { InternationalStudentsHero } from "@/components/InternationalStudentsHero";
import { InternationalSupportSection } from "@/components/InternationalSupportSection";
import { InternationalUniversitiesSection } from "@/components/InternationalUniversitiesSection";
import { UKStudyBenefitsSection } from "@/components/UKStudyBenefitsSection";
import { UKStudyTimelineSection } from "@/components/UKStudyTimelineSection";
import { WhoPathwayForSection } from "@/components/WhoPathwayForSection";

const InternationalStudentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* International Students Hero Section */}
      <InternationalStudentsHero />

      {/* Who This Pathway Is For Section */}
      <WhoPathwayForSection />

      {/* UK Study Benefits & Key Guidance */}
      <UKStudyBenefitsSection />

      {/* Your UK Study Timeline */}
      <UKStudyTimelineSection />

      {/* Common Concerns Section */}
      <InternationalConcernsSection />

      {/* How We Help Section */}
      <InternationalSupportSection />

      {/* Universities Section */}
      <InternationalUniversitiesSection />

      {/* Available Intakes Section */}
      <InternationalIntakesSection />

      {/* FAQ Section */}
      <InternationalFAQSection />

      {/* English Language Support Section */}
      <EnglishLanguageSupport />

      {/* UK Arrival & Student Onboarding Support */}
      <InternationalOnboardingSection />

      {/* Final Call to Action */}
      <InternationalFinalCTA />
    </div>
  );
};

export default InternationalStudentsPage;
