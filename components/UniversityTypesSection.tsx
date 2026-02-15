export function UniversityTypesSection() {
  const universityTypes = [
    {
      title: "Research-Intensive Universities",
      description: "Universities focused on research-led teaching, offering a wide range of undergraduate and postgraduate programmes.",
      examples: "Often include long-established institutions"
    },
    {
      title: "Teaching-Focused Universities",
      description: "Institutions that prioritise practical learning, student support, and career-oriented education.",
      examples: "Strong focus on employability and student experience"
    },
    {
      title: "Specialist & Modern Universities",
      description: "Universities specialising in specific subject areas or offering flexible, modern study routes.",
      examples: "Often strong in business, computing, and applied subjects"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              UK University System
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mt-2">
              Understanding Types of UK Universities
            </h2>

            {/* Subheading */}
            <p className="text-base leading-[1.6] text-[#475569] max-w-[760px] mx-auto mt-3">
              UK universities differ in focus, teaching style, and entry requirements. Understanding these differences helps you make better choices.
            </p>
          </div>

          {/* University Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universityTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] p-7 border border-[#E2E8F0] transition-all duration-300 hover:border-[#E63946] hover:shadow-lg hover:-translate-y-1 group"
              >
                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 transition-colors duration-300 group-hover:text-[#1F4E6D]">
                  {type.title}
                </h3>

                {/* Card Description */}
                <p className="text-[15px] leading-[1.6] text-[#475569] mb-4">
                  {type.description}
                </p>

                {/* Card Examples (small text) */}
                <p className="text-sm text-[#64748B] italic">
                  {type.examples}
                </p>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-[#64748B] max-w-[900px] mx-auto">
              There is no single 'best' university. The right choice depends on your course, background, eligibility, and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
