
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pathwayCards = [
  {
    title: 'UK Home Students',
    description: 'Courses suitable for students with UK residency status, including access to Student Finance subject to eligibility.',
    bulletPoints: [
      'Undergraduate and postgraduate pathways',
      'Foundation and access routes available',
      'Course availability depends on eligibility'
    ],
    ctaText: 'Explore UK Home Student Options',
    ctaLink: '/uk-home-students'
  },
  {
    title: 'International Students',
    description: 'Courses available for students applying from abroad or already in the UK on a temporary visa.',
    bulletPoints: [
      'Undergraduate and postgraduate pathways',
      'Conversion and foundation routes available',
      'Visa and intake considerations apply'
    ],
    ctaText: 'Explore International Student Options',
    ctaLink: '/international-students'
  }
];

export function CoursesByStudentPath() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-2">
              Student Path
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              Choose Courses Based on Your Student Path
            </h2>

            {/* Subheading */}
            <p className="text-base text-[#475569] leading-[1.6] max-w-[720px] mx-auto mt-3">
              Course availability and eligibility depend on your residency status and background.
            </p>
          </div>

          {/* Pathway Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathwayCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-[20px] p-8 transition-all duration-300 hover:border-[#E63946] hover:shadow-lg group"
              >
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[15px] text-[#475569] leading-[1.7] mb-6">
                  {card.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {card.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E6D] flex-shrink-0 mt-2"></span>
                      <span className="text-[15px] text-[#475569] leading-[1.6]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={card.ctaLink}>
                  <button className="w-full flex items-center justify-center gap-2 text-[#E63946] font-semibold text-[15px] transition-all duration-200 group-hover:gap-3">
                    {card.ctaText}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
