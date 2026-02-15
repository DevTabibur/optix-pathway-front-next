import Link from "next/link";


export function UniversitiesByStudentPath() {
  const pathwayCards = [
    {
      title: "UK Home Students",
      description: "Universities available for students with UK residency status, including access to Student Finance subject to eligibility.",
      bulletPoints: [
        "Undergraduate and postgraduate universities",
        "Wide range of institutions across the UK",
        "Eligibility depends on course and background"
      ],
      ctaText: "Explore UK Home Student Options →",
      ctaLink: "/uk-home-students"
    },
    {
      title: "International Students",
      description: "Universities offering courses for students applying from abroad or already in the UK on a temporary visa.",
      bulletPoints: [
        "Visa-compliant institutions",
        "Course and intake-dependent availability",
        "Additional documentation may apply"
      ],
      ctaText: "Explore International Student Options →",
      ctaLink: "/international-students"
    }
  ];

  return (
    <section className="bg-white py-24">
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
              Universities Based on Your Student Path
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[760px] mx-auto mt-3">
              University availability and entry criteria vary depending on your residency and visa status.
            </p>
          </div>

          {/* Pathway Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pathwayCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-[20px] p-8 border border-[#E2E8F0] transition-all duration-300 hover:border-[#E63946] hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Card Title */}
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[15px] leading-[1.6] text-[#475569] mb-6">
                  {card.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {card.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E63946] mt-2"></span>
                      <span className="text-[15px] leading-[1.6] text-[#475569]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Primary CTA */}
                <Link
                  href={card.ctaLink}
                  className="text-base font-semibold text-[#E63946] transition-colors duration-200 hover:text-[#D32F3C] inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 rounded-sm"
                >
                  {card.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
