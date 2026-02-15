import { ClipboardCheck, MessageSquare, HandHelping, Heart, GraduationCap, ListChecks } from 'lucide-react';

export function AboutDifferentiators() {
  const differentiators = [
    {
      icon: ClipboardCheck,
      title: "Eligibility-First Guidance",
      description: "We assess eligibility before recommending courses or universities, helping students avoid unrealistic choices."
    },
    {
      icon: MessageSquare,
      title: "Clear & Honest Advice",
      description: "We explain requirements, limitations, and next steps transparently so students can plan confidently."
    },
    {
      icon: HandHelping,
      title: "Support Beyond Admission",
      description: "Our guidance extends beyond applications to include visa preparation and arrival readiness."
    },
    {
      icon: Heart,
      title: "Student-Focused, Not Sales-Driven",
      description: "We prioritise suitable pathways over volume-based placements."
    },
    {
      icon: GraduationCap,
      title: "UK-Focused Expertise",
      description: "Our services are tailored specifically to UK higher education systems and requirements."
    },
    {
      icon: ListChecks,
      title: "Structured, Step-by-Step Process",
      description: "Students are guided through each stage with clarity and consistency."
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
              Our Difference
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-4xl font-bold text-[#0F172A] mt-2">
              What Makes Optix Pathway Different
            </h2>
          </div>

          {/* Differentiation Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div 
                  key={index} 
                  className="bg-[#F8FAFC] rounded-[20px] p-8 border border-[#E2E8F0] hover:shadow-md transition-shadow duration-200"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-[#1F4E6D]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] leading-[1.6] text-[#475569]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
