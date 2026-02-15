import { ContactCTA } from "@/components/ContactCTA";
import { ContactForm } from "@/components/ContactForm";
import { ContactHero } from "@/components/ContactHero";
import { ContactInformation } from "@/components/ContactInformation";

import { OurOffice } from "@/components/OurOffice";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Hero Section */}
      <ContactHero />

      {/* Contact Information Section */}
      <ContactInformation />

      {/* Send Us a Message Form */}
      <ContactForm />

      {/* Our Office Section */}
      <OurOffice />

      {/* Final CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
