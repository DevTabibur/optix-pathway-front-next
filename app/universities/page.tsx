
import { RepresentativeUniversities } from "@/components/RepresentativeUniversities";
import { UniversitiesByStudentPath } from "@/components/UniversitiesByStudentPath";
import { UniversitiesCTA } from "@/components/UniversitiesCTA";
import { UniversitiesFAQs } from "@/components/UniversitiesFAQs";
import { UniversitiesHero } from "@/components/UniversitiesHero";
import { UniversityMatchingProcess } from "@/components/UniversityMatchingProcess";
import { UniversityTypesSection } from "@/components/UniversityTypesSection";

const UniversitiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Universities Hero Section */}
      <UniversitiesHero />

      {/* Types of UK Universities Section */}
      <UniversityTypesSection />

      {/* Universities by Student Path Section */}
      <UniversitiesByStudentPath />

      {/* Representative UK Universities Section */}
      <RepresentativeUniversities />

      {/* How We Match Students to Universities Section */}
      <UniversityMatchingProcess />

      {/* Universities FAQs Section */}
      <UniversitiesFAQs />

      {/* Final Call to Action */}
      <UniversitiesCTA />
    </div>
  );
};

export default UniversitiesPage;
