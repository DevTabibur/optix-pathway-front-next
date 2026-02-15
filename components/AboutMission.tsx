export function AboutMission() {
  const approachItems = [
    {
      title: "Student-Centred Guidance",
      text: "We focus on understanding each student's background, goals, and eligibility before recommending courses or universities."
    },
    {
      title: "Transparency & Clarity",
      text: "We clearly explain requirements, processes, and limitations so students can plan with confidence."
    },
    {
      title: "Long-Term Perspective",
      text: "Our approach prioritises sustainable academic and career pathways rather than short-term outcomes."
    },
    {
      title: "Support Beyond Application",
      text: "We guide students through application, visa preparation, and arrival readiness."
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px]">
        <div className="max-w-[1000px] mx-auto">
          {/* Section Header */}
          <div className="text-center">
            {/* Eyebrow */}
            <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1F4E6D]">
              Our Purpose
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-4xl font-bold text-[#0F172A] mt-2">
              Our Mission & Approach
            </h2>

            {/* Mission Statement */}
            <p className="text-lg leading-[1.7] text-[#475569] max-w-[820px] mx-auto mt-6">
              Our mission is to help students make informed decisions about studying in the UK through clear guidance, realistic expectations, and eligibility-based support.
            </p>
          </div>

          {/* Approach Content - Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {approachItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">
                <h3 className="text-base font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#475569]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
