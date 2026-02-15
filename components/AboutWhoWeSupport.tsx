import { Home, Globe, Users } from 'lucide-react';

export function AboutWhoWeSupport() {
  const supportGroups = [
    {
      icon: Home,
      title: "UK Home Students",
      description: "Students with UK residency status exploring undergraduate, postgraduate, or alternative study routes."
    },
    {
      icon: Globe,
      title: "International Students",
      description: "Students applying from abroad or currently in the UK on a temporary visa."
    },
    {
      icon: Users,
      title: "Mature & Non-Traditional Students",
      description: "Individuals returning to education, changing careers, or exploring alternative entry pathways."
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
              Our Students
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-4xl font-bold text-[#0F172A] mt-2">
              Who We Support
            </h2>
          </div>

          {/* Support Group Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportGroups.map((group, index) => {
              const Icon = group.icon;
              
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
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] leading-[1.6] text-[#475569]">
                    {group.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Supporting Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#64748B]">
              Support is provided based on individual eligibility, course availability, and UK study regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
