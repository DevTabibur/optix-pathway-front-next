import { ClipboardCheck, Search, FilePenLine, FileCheck, Plane } from 'lucide-react';

export function HowSupportWorks() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Eligibility Assessment",
      description: "We review your academic background, residency status, and study goals."
    },
    {
      number: "02",
      icon: Search,
      title: "Course & University Guidance",
      description: "We identify suitable courses and universities aligned with your profile."
    },
    {
      number: "03",
      icon: FilePenLine,
      title: "Application Support",
      description: "We assist with applications, documents, and submission processes."
    },
    {
      number: "04",
      icon: FileCheck,
      title: "CAS & Visa Guidance",
      description: "We provide guidance on CAS issuance and student visa requirements."
    },
    {
      number: "05",
      icon: Plane,
      title: "Arrival & Onboarding Support",
      description: "We help you prepare for arrival and settling into life in the UK."
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
              Our Process
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              How Our Student Support Process Works
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[760px] mx-auto mt-3">
              We guide students step by step, from initial assessment to preparing for arrival in the UK.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0]"
                >
                  {/* Step Number Badge */}
                  <div className="inline-block bg-[#1F4E6D] text-white text-xs font-bold px-2.5 py-1 rounded-md mb-4">
                    {step.number}
                  </div>

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
                  <p className="text-[14px] leading-[1.7] text-[#475569]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Supporting Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B] max-w-[900px] mx-auto">
              Each student journey is different. Our advisors provide guidance based on individual eligibility and circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
