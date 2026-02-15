"use client";

import { ContactCTA } from "@/components/ContactCTA";
import { ContactForm } from "@/components/ContactForm";
import { ContactHero } from "@/components/ContactHero";
import { ContactInformation } from "@/components/ContactInformation";
import { Footer } from "@/components/Footer";
import { MainHeader } from "@/components/MainHeader";
import { OurOffice } from "@/components/OurOffice";
import { TopBar } from "@/components/TopBar";
import { useEffect, useState } from "react";
const ContactPage = () => {
  //   const [isScrolled, setIsScrolled] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setIsScrolled(window.scrollY > 20);
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      {/* <MainHeader isScrolled={isScrolled} /> */}

      {/* Contact Hero Section */}
      {/* <ContactHero /> */}

      {/* Contact Information Section */}
      {/* <ContactInformation /> */}

      {/* Send Us a Message Form */}
      {/* <ContactForm /> */}

      {/* Our Office Section */}
      {/* <OurOffice /> */}

      {/* Final CTA Section */}
      {/* <ContactCTA /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
