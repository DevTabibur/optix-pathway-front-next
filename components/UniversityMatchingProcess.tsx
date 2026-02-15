import { ClipboardCheck, Calendar, FileCheck, FileText } from 'lucide-react';

export function UniversityMatchingProcess() {
  const processSteps = [
    {
      icon: ClipboardCheck,
      title: "Profile & Eligibility Review",
      description: "We review academic background, residency status, visa conditions, and study goals."
    },
    {
      icon: Calendar,
      title: "Course & Intake Alignment",
      description: "We identify courses and intakes that align with your eligibility and timeline."
    },
    {
      icon: FileCheck,
      title: "University Shortlisting",
      description: "We shortlist suitable universities based on course availability and requirements."
    },
    {
      icon: FileText,
      title: "Application Guidance",
      description: "We guide you through applications, documentation, and next steps."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              Our Approach
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              How We Match Students to the Right Universities
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[760px] mx-auto mt-3">
              We assess each student individually to recommend universities aligned with eligibility, course choice, and long-term goals.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent 
                      className="w-8 h-8 text-[#1F4E6D]" 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[15px] leading-[1.6] text-[#475569]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Supporting Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B] max-w-[900px] mx-auto">
              Final admission decisions are made by universities. Our role is to guide and support you through the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
