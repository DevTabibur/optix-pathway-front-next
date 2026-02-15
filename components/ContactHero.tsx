"use client"
import Link from "next/link";


export function ContactHero() {
  const scrollToContactForm = () => {
    // Smooth scroll to contact form section
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Eyebrow */}
          <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
            Contact Us
          </div>

          {/* Heading */}
          <h1 className="text-[32px] md:text-5xl font-bold text-[#0F172A] mt-4">
            Get in Touch With Optix Pathway
          </h1>

          {/* Subheading */}
          <p className="text-lg text-[#475569] mt-4 max-w-[580px]">
            Have questions about studying in the UK? Reach out to our team for guidance and next steps.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            {/* Primary CTA */}
            <Link
              href="/uk-home-students"
              className="inline-flex items-center justify-center bg-[#E63946] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#d32f3c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#E63946]/30"
            >
              Check Your Eligibility
            </Link>

            {/* Secondary Link */}
            <button
              onClick={scrollToContactForm}
              className="inline-flex items-center text-[#E63946] font-semibold hover:text-[#d32f3c] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 rounded px-2 py-1"
            >
              Send us a message ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
