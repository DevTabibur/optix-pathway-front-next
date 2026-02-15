import { CoreStudentServices } from "@/components/CoreStudentServices";
import { HowSupportWorks } from "@/components/HowSupportWorks";
import { ServicesByStudentPath } from "@/components/ServicesByStudentPath";
import { ServicesCTA } from "@/components/ServicesCTA";
import { ServicesFAQs } from "@/components/ServicesFAQs";
import { ServicesHero } from "@/components/ServicesHero";
import { UKArrivalSupport } from "@/components/UKArrivalSupport";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServicesHero />

      {/* Core Student Services Section */}
      <CoreStudentServices />

      {/* UK Arrival & Onboarding Support Section */}
      <UKArrivalSupport />

      {/* Services by Student Path Section */}
      <ServicesByStudentPath />

      {/* How Our Support Works Section */}
      <HowSupportWorks />

      {/* Services FAQs Section */}
      <ServicesFAQs />

      {/* Call to Action Section */}
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
