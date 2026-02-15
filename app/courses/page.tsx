import { BrowseCourseCategories } from "@/components/BrowseCourseCategories";
import { BusinessManagementSection } from "@/components/BusinessManagementSection";
import { ComputingITSection } from "@/components/ComputingITSection";
import { CoursesByStudentPath } from "@/components/CoursesByStudentPath";
import { CoursesFAQs } from "@/components/CoursesFAQs";
import { CoursesFinalCTA } from "@/components/CoursesFinalCTA";
import { CoursesHero } from "@/components/CoursesHero";
import { EducationTeachingSection } from "@/components/EducationTeachingSection";
import { EngineeringBuiltEnvironmentSection } from "@/components/EngineeringBuiltEnvironmentSection";
import { FoundationAccessSection } from "@/components/FoundationAccessSection";
import { HealthSocialCareSection } from "@/components/HealthSocialCareSection";
import { HowToChooseCourse } from "@/components/HowToChooseCourse";
import { LawLegalStudiesSection } from "@/components/LawLegalStudiesSection";

const CoursesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Courses Hero Section */}
      <CoursesHero />

      {/* Browse Course Categories Section */}
      <BrowseCourseCategories />

      {/* Business & Management Section */}
      <BusinessManagementSection />

      {/* Health & Social Care Section */}
      <HealthSocialCareSection />

      {/* Computing & IT Section */}
      <ComputingITSection />

      {/* Engineering & Built Environment Section */}
      <EngineeringBuiltEnvironmentSection />

      {/* Law & Legal Studies Section */}
      <LawLegalStudiesSection />

      {/* Education & Teaching Pathways Section */}
      <EducationTeachingSection />

      {/* Foundation & Access Routes Section */}
      <FoundationAccessSection />

      {/* Courses by Student Path Section */}
      <CoursesByStudentPath />

      {/* How to Choose the Right Course Section */}
      <HowToChooseCourse />

      {/* Courses FAQs Section */}
      <CoursesFAQs />

      {/* Courses Final CTA Section */}
      <CoursesFinalCTA />
    </div>
  );
};

export default CoursesPage;
