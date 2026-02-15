import { AvailableIntakesSection } from "@/components/AvailableIntakesSection";
import { CommonConcernsSection } from "@/components/CommonConcernsSection";
import { CoursePathwaysSection } from "@/components/CoursePathwaysSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { HowWeHelpSection } from "@/components/HowWeHelpSection";
import { StudentFinanceSection } from "@/components/StudentFinanceSection";
import { UKHomeStudentsHero } from "@/components/UKHomeStudentsHero";
import { UniversitiesSection } from "@/components/UniversitiesSection";
import { WhoQualifiesSection } from "@/components/WhoQualifiesSection";

const UKHomeStudentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* UK Home Students Hero Section */}
      <UKHomeStudentsHero />

      {/* Who Qualifies Section */}
      <WhoQualifiesSection />

      {/* Common Concerns Section */}
      <CommonConcernsSection />

      {/* How We Help Section */}
      <HowWeHelpSection />

      {/* Student Finance Section */}
      <StudentFinanceSection />

      {/* Course Pathways Section */}
      <CoursePathwaysSection />

      {/* Universities Section */}
      <UniversitiesSection />

      {/* Available Intakes Section */}
      <AvailableIntakesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
};

export default UKHomeStudentsPage;
