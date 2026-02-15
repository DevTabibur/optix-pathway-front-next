import { GraduationCap, Target, CheckCircle, Calendar } from 'lucide-react';

const guidanceSteps = [
  {
    icon: GraduationCap,
    title: 'Your Academic Background',
    description: 'Previous qualifications, subject relevance, and study gaps all influence course suitability.'
  },
  {
    icon: Target,
    title: 'Career Goals',
    description: 'Short-term goals and long-term plans help narrow down the right academic pathway.'
  },
  {
    icon: CheckCircle,
    title: 'Eligibility & Status',
    description: 'Residency status, visa conditions, and eligibility criteria affect available options.'
  },
  {
    icon: Calendar,
    title: 'Timing & Intakes',
    description: 'Choosing the right intake ensures smoother application and preparation.'
  }
];

export function HowToChooseCourse() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D] mb-2">
              Course Guidance
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              How to Choose the Right Course
            </h2>

            {/* Subheading */}
            <p className="text-base text-[#475569] leading-[1.6] max-w-[720px] mx-auto mt-3">
              Choosing the right course depends on more than interest alone. These factors help guide better decisions.
            </p>
          </div>

          {/* Guidance Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidanceSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-[#1F4E6D]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-[#475569] leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Supporting Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B] max-w-[800px] mx-auto">
              There is no one-size-fits-all pathway. Our advisors assess these factors together before making recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
