import { GraduationCap, PoundSterling, FileCheck } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Benefits of Studying in the UK',
    description: 'Globally recognised qualifications, shorter course durations, diverse campuses, and strong career pathways.'
  },
  {
    icon: PoundSterling,
    title: 'Tuition Fees & Scholarship Guidance',
    description: 'Clear guidance on tuition fee structures and available scholarship opportunities based on your profile.'
  },
  {
    icon: FileCheck,
    title: 'CAS & Student Visa Guidance',
    description: 'Step-by-step advisory support on Confirmation of Acceptance for Studies (CAS) and the UK student visa process.'
  }
];

export function UKStudyBenefitsSection() {
  return (
    <section className="bg-white py-14 md:py-[72px] lg:py-24">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14 lg:mb-16">
          <div className="text-[13px] font-semibold tracking-[0.12em] text-[#1F4E6D] uppercase mb-3">
            Why Study in the UK
          </div>
          <h2 className="text-[28px] md:text-[32px] lg:text-4xl font-bold text-[#0F172A] mb-3">
            UK Study Benefits & Essential Guidance for International Students
          </h2>
          <p className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto">
            We help international students understand the UK education system and plan each step with clarity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="mb-5">
                  <Icon className="w-10 h-10 text-[#1F4E6D] stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-[19px] font-semibold text-[#0F172A] mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#475569] leading-[1.6]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#64748B] max-w-[900px] mx-auto">
            Tuition fees, scholarships, and visa outcomes depend on individual eligibility, universities, and official regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
