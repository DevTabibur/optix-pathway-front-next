import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';


export function ServicesByStudentPath() {
  const pathways = [
    {
      title: "UK Home Students",
      description: "Support for students with UK residency status planning to study at UK universities.",
      features: [
        "Course and university guidance",
        "Application support",
        "Student Finance guidance (subject to eligibility)",
        "Foundation and access route advice"
      ],
      ctaText: "UK Home Student Services →",
      ctaLink: "/uk-home-students"
    },
    {
      title: "International Students",
      description: "Guidance for students applying from abroad or already in the UK on a temporary visa.",
      features: [
        "Course and university guidance",
        "Application, CAS & visa guidance",
        "Intake and timeline planning",
        "UK arrival and onboarding support"
      ],
      ctaText: "International Student Services →",
      ctaLink: "/international-students"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              Student Path
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              Support Based on Your Student Path
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[720px] mx-auto mt-3">
              Our services are tailored based on your residency status, eligibility, and study goals.
            </p>
          </div>

          {/* Pathway Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] transition-all duration-300 hover:border-[#E63946] hover:-translate-y-1 hover:shadow-lg flex flex-col"
              >
                {/* Pathway Title */}
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {pathway.title}
                </h3>

                {/* Pathway Description */}
                <p className="text-base leading-[1.6] text-[#475569] mb-6">
                  {pathway.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pathway.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check 
                        className="w-5 h-5 text-[#1F4E6D] mt-0.5 mr-3 flex-shrink-0" 
                        strokeWidth={2}
                      />
                      <span className="text-[15px] leading-[1.6] text-[#475569]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={pathway.ctaLink}
                  className="inline-flex items-center text-base font-semibold text-[#E63946] hover:text-[#d32f3c] transition-colors duration-200 focus:outline-none focus:underline group"
                >
                  {pathway.ctaText}
                  <ArrowRight 
                    className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" 
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
